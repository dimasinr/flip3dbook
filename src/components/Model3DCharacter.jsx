import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CHARACTERS_INFO } from '../data/storyboardData';
import {
  Sparkles,
  Volume2,
  Eye,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Play,
  Pause,
  MessageSquare,
  Layers,
} from 'lucide-react';
import { playClickSound } from '../sound';

// Global cache for loaded GLTF models to avoid redundant downloads
const MODEL_CACHE = new Map();
const LOADING_PROMISES = new Map();

function loadGLTFModel(charKey) {
  const info = CHARACTERS_INFO[charKey];
  if (!info) return Promise.reject(new Error('Unknown character: ' + charKey));

  if (MODEL_CACHE.has(charKey)) {
    return Promise.resolve(MODEL_CACHE.get(charKey));
  }

  if (LOADING_PROMISES.has(charKey)) {
    return LOADING_PROMISES.get(charKey);
  }

  const loader = new GLTFLoader();
  const path = (import.meta.env.BASE_URL || '/') + info.modelFile.replace(/^\//, '');

  const promise = new Promise((resolve, reject) => {
    loader.load(
      path,
      (gltf) => {
        const scene = gltf.scene;
        scene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.roughness = 0.58;
              child.material.metalness = 0.08;
              if (child.material.map) {
                child.material.map.colorSpace = THREE.SRGBColorSpace;
              }
            }
          }
        });

        // Compute bounds and center
        const box = new THREE.Box3().setFromObject(scene);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Center X and Z, set bottom Y to 0
        scene.position.x = -center.x;
        scene.position.z = -center.z;
        scene.position.y = -box.min.y;

        // Wrap inside a normalized pivot group
        const pivot = new THREE.Group();
        pivot.add(scene);

        // Target height normalization
        let targetHeight = 2.1;
        if (charKey === 'nur') targetHeight = 2.25;
        if (charKey === 'dito') targetHeight = 1.95;
        if (charKey === 'sari') targetHeight = 2.05;
        if (charKey === 'bima') targetHeight = 2.15;

        const scale = targetHeight / Math.max(0.01, size.y);
        pivot.scale.setScalar(scale);

        MODEL_CACHE.set(charKey, pivot);
        LOADING_PROMISES.delete(charKey);
        resolve(pivot);
      },
      undefined,
      (err) => {
        console.error('Failed to load character model:', charKey, err);
        LOADING_PROMISES.delete(charKey);
        reject(err);
      }
    );
  });

  LOADING_PROMISES.set(charKey, promise);
  return promise;
}

// Helper: Split long speech into natural, compact comic bubbles
function splitIntoComicBubbles(text, maxChars = 68) {
  if (!text) return [];

  // Split by full stop, exclamation mark, question mark, or colon
  const rawSentences = text
    .split(/(?<=[.!?:\n])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const bubbles = [];
  for (const s of rawSentences) {
    if (s.length <= maxChars) {
      bubbles.push(s);
    } else {
      // Split by comma if sentence is long
      const parts = s.split(/,\s+/);
      let current = '';
      for (const p of parts) {
        if (!current) {
          current = p;
        } else if ((current + ', ' + p).length <= maxChars) {
          current += ', ' + p;
        } else {
          bubbles.push(
            current + (current.endsWith('.') || current.endsWith('!') || current.endsWith('?') ? '' : '...')
          );
          current = p;
        }
      }
      if (current) bubbles.push(current);
    }
  }

  return bubbles.length > 0 ? bubbles : [text];
}

export default function Model3DCharacter({
  characters = ['nur'],
  characterState = {},
  dialogues = [],
  cameraDistance = null,
  heightClass = 'min-h-[220px] sm:min-h-[260px] md:min-h-[290px]',
  interactiveOrbit = true,
}) {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const activeCharKeys = Array.isArray(characters) ? characters : [characters];

  // ========================================================
  // SEQUENTIAL COMIC BUBBLE MANAGEMENT (Ganti-gantian muncul)
  // ========================================================
  const flattenedSteps = useMemo(() => {
    if (!dialogues || dialogues.length === 0) return [];
    const list = [];
    dialogues.forEach((d, dIdx) => {
      const bubbles = splitIntoComicBubbles(d.text, 68);
      bubbles.forEach((bText, bIdx) => {
        list.push({
          stepId: `${dIdx}-${bIdx}`,
          dialogueIndex: dIdx,
          speaker: d.speaker,
          text: bText,
          bubbleIndex: bIdx,
          totalForSpeaker: bubbles.length,
          isFirstForSpeaker: bIdx === 0,
          isLastForSpeaker: bIdx === bubbles.length - 1,
          isLeft: dIdx === 0, // First speaker on Left, second on Right
        });
      });
    });
    return list;
  }, [dialogues]);

  const [stepIndex, setStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState('turn'); // 'turn' = bergantian satu per satu, 'all' = tampilkan semua
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [timerProgress, setTimerProgress] = useState(0);

  // Synchronized active speaker key for Three.js animation engine
  const activeSpeakerKeyRef = useRef(null);

  useEffect(() => {
    if (viewMode === 'all' || flattenedSteps.length === 0) {
      activeSpeakerKeyRef.current = null;
    } else {
      activeSpeakerKeyRef.current = flattenedSteps[stepIndex]?.speaker || null;
    }
  }, [stepIndex, viewMode, flattenedSteps]);

  // Reset when dialogues prop changes
  useEffect(() => {
    setStepIndex(0);
    setTimerProgress(0);
    setIsAutoPlaying(true);
  }, [dialogues]);

  // Auto-play timer for turn-by-turn mode
  useEffect(() => {
    if (viewMode !== 'turn' || !isAutoPlaying || flattenedSteps.length <= 1) {
      return;
    }

    const currentStep = flattenedSteps[stepIndex];
    if (!currentStep) return;

    // Readable pace: ~2.8s base + 42ms per character
    const durationMs = Math.min(5200, Math.max(2800, currentStep.text.length * 42));
    const intervalMs = 50;
    const increment = (intervalMs / durationMs) * 100;

    const interval = setInterval(() => {
      setTimerProgress((prev) => {
        if (prev + increment >= 100) {
          if (stepIndex < flattenedSteps.length - 1) {
            setStepIndex((idx) => idx + 1);
            playClickSound();
            return 0;
          } else {
            setIsAutoPlaying(false);
            return 100;
          }
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [stepIndex, viewMode, isAutoPlaying, flattenedSteps]);

  // Navigation handlers
  const handleNext = () => {
    playClickSound();
    if (stepIndex < flattenedSteps.length - 1) {
      setStepIndex((idx) => idx + 1);
      setTimerProgress(0);
    } else {
      setStepIndex(0);
      setTimerProgress(0);
      setIsAutoPlaying(true);
    }
  };

  const handlePrev = () => {
    playClickSound();
    if (stepIndex > 0) {
      setStepIndex((idx) => idx - 1);
      setTimerProgress(0);
      setIsAutoPlaying(true);
    }
  };

  const handleReplay = () => {
    playClickSound();
    setStepIndex(0);
    setTimerProgress(0);
    setIsAutoPlaying(true);
  };

  // ========================================================
  // THREE.JS CANVAS & PROCEDURAL ANIMATION ENGINE
  // ========================================================
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let isDisposed = false;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 260;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.035);

    const charCount = activeCharKeys.length;
    const defaultDist = charCount >= 4 ? 8.2 : charCount >= 2 ? 6.2 : 5.0;
    const dist = cameraDistance || defaultDist;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 1.5, dist);
    camera.lookAt(0, 1.05, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfffbeb, 0xe2e8f0, 0.65);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xfff7ed, 1.25);
    dirLight.position.set(4, 8, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.0006;
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.7);
    rimLight.position.set(-5, 4, -4);
    scene.add(rimLight);

    // Soft Studio Floor
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.7 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const charactersRoot = new THREE.Group();
    scene.add(charactersRoot);

    const animatedNodes = [];

    // Load & Setup Characters
    setIsLoading(true);
    setHasError(false);

    Promise.all(
      activeCharKeys.map((key, idx) =>
        loadGLTFModel(key)
          .then((pivotTemplate) => {
            if (isDisposed) return null;
            const instance = pivotTemplate.clone(true);
            const wrapper = new THREE.Group();
            wrapper.add(instance);

            // Compute Horizontal Placement
            let posX = 0;
            let rotY = 0;

            if (charCount === 1) {
              posX = 0;
              rotY = 0;
            } else if (charCount === 2) {
              posX = idx === 0 ? -1.35 : 1.35;
              rotY = idx === 0 ? 0.32 : -0.32; // face slightly toward each other
            } else if (charCount === 3) {
              posX = (idx - 1) * 1.5;
              rotY = idx === 0 ? 0.28 : idx === 2 ? -0.28 : 0;
            } else if (charCount >= 4) {
              posX = (idx - 1.5) * 1.35;
              rotY = idx < 2 ? 0.25 : -0.25;
            }

            wrapper.position.set(posX, 0, 0);
            wrapper.rotation.y = rotY;
            charactersRoot.add(wrapper);

            // Dynamic Ground Shadow Disc
            const shadowGeo = new THREE.CircleGeometry(0.55, 32);
            const shadowMat = new THREE.MeshBasicMaterial({
              color: 0x0f172a,
              transparent: true,
              opacity: 0.24,
            });
            const shadowCircle = new THREE.Mesh(shadowGeo, shadowMat);
            shadowCircle.rotation.x = -Math.PI / 2;
            shadowCircle.position.set(posX, 0.005, 0);
            scene.add(shadowCircle);

            // Colored Cartoon Stage Ring
            const ringColors = {
              bima: 0x3b82f6,
              dito: 0xf59e0b,
              sari: 0x10b981,
              nur: 0x8b5cf6,
            };
            const ringGeo = new THREE.RingGeometry(0.58, 0.65, 32);
            const ringMat = new THREE.MeshBasicMaterial({
              color: ringColors[key] || 0xfbbf24,
              side: THREE.DoubleSide,
              transparent: true,
              opacity: 0.45,
            });
            const auraRing = new THREE.Mesh(ringGeo, ringMat);
            auraRing.rotation.x = -Math.PI / 2;
            auraRing.position.set(posX, 0.008, 0);
            scene.add(auraRing);

            const state = characterState[key] || 'idle_smile';

            animatedNodes.push({
              key,
              instance,
              wrapper,
              shadowCircle,
              auraRing,
              basePosX: posX,
              baseRotY: rotY,
              state,
              staggerOffset: idx * 0.73,
            });

            return true;
          })
          .catch((err) => {
            console.error('Failed to instantiate model', key, err);
            return false;
          })
      )
    )
      .then((results) => {
        if (!isDisposed) {
          setIsLoading(false);
          if (results.every((r) => r === false)) {
            setHasError(true);
          }
        }
      })
      .catch(() => {
        if (!isDisposed) {
          setIsLoading(false);
          setHasError(true);
        }
      });

    // Orbit Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let orbitAngle = 0;
    let orbitPitch = 0.28;

    const onMouseDown = (e) => {
      if (!interactiveOrbit) return;
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      orbitAngle -= dx * 0.007;
      orbitPitch = Math.max(0.12, Math.min(0.95, orbitPitch + dy * 0.007));
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e) => {
      if (!interactiveOrbit || e.touches.length !== 1) return;
      isDragging = true;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevMouseX;
      const dy = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
      orbitAngle -= dx * 0.009;
      orbitPitch = Math.max(0.12, Math.min(0.95, orbitPitch + dy * 0.009));
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // LIVELY PROCEDURAL ANIMATION ENGINE
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Camera Orbit
      camera.position.x = Math.sin(orbitAngle) * Math.cos(orbitPitch) * dist;
      camera.position.y = Math.sin(orbitPitch) * dist + 1.05;
      camera.position.z = Math.cos(orbitAngle) * Math.cos(orbitPitch) * dist;
      camera.lookAt(0, 1.05, 0);

      const currentActiveSpeaker = activeSpeakerKeyRef.current;
      const hasActiveSpeaker = !!currentActiveSpeaker;

      // Animate each active character with lively personality motion
      animatedNodes.forEach((node) => {
        const { instance, wrapper, shadowCircle, auraRing, basePosX, baseRotY, state, staggerOffset, key } = node;
        const localT = t + staggerOffset;

        const isSpeaking = hasActiveSpeaker ? (currentActiveSpeaker === key) : true;

        // Aura breathing pulse
        if (auraRing) {
          const auraScale = isSpeaking
            ? 1 + Math.sin(localT * 4) * 0.12
            : 0.95 + Math.sin(localT * 2) * 0.04;
          auraRing.scale.set(auraScale, auraScale, 1);
          if (auraRing.material) {
            auraRing.material.opacity = isSpeaking ? 0.75 : 0.28;
          }
        }

        // ATTENTIVE LISTENER POSTURE (when another character has the active turn)
        if (hasActiveSpeaker && !isSpeaking) {
          const listenBounce = Math.abs(Math.sin(localT * 2.2)) * 0.035;
          instance.position.y = listenBounce;
          const turnTowardsPartner = basePosX < 0 ? 0.24 : -0.24;
          instance.rotation.y = baseRotY + turnTowardsPartner + Math.sin(localT * 1.5) * 0.04;
          instance.rotation.x = 0.04 + Math.sin(localT * 2.2) * 0.02; // polite subtle nodding
          instance.rotation.z = Math.sin(localT * 1.2) * 0.02;
          wrapper.position.x = basePosX;
          if (shadowCircle) {
            shadowCircle.scale.setScalar(1 - listenBounce * 0.5);
          }
          return;
        }

        // ====================================================
        // ACTIVE SPEAKER OR NORMAL EXPRESSION STATE
        // ====================================================

        // STATE: IDLE SMILE / WELCOME
        if (state === 'idle_smile' || state === 'idle_smile_friends') {
          const bounce = Math.abs(Math.sin(localT * 3.2)) * 0.06;
          instance.position.y = bounce;
          wrapper.position.x = basePosX + Math.sin(localT * 1.6) * 0.05;
          instance.rotation.y = Math.sin(localT * 1.6) * 0.12;
          instance.rotation.z = Math.sin(localT * 1.6) * 0.04;
          instance.rotation.x = Math.sin(localT * 3.2) * 0.03;
          if (shadowCircle) shadowCircle.scale.setScalar(1 - bounce * 0.8);
        }

        // STATE: TALKING CONFUSED (Bima scratching head, perplexed)
        else if (state === 'talking_confused') {
          const bob = Math.abs(Math.sin(localT * 5)) * 0.07;
          instance.position.y = bob;
          instance.rotation.z = 0.14 + Math.sin(localT * 2.5) * 0.08;
          instance.rotation.x = -0.04 + Math.sin(localT * 4) * 0.06;
          instance.rotation.y = Math.sin(localT * 2.0) * 0.15;
          wrapper.position.x = basePosX + Math.sin(localT * 2) * 0.04;
        }

        // STATE: TALKING EXPLAIN / AGREE / INSTRUCTING
        else if (
          state === 'talking_explain' ||
          state === 'talking_agree' ||
          state === 'talking_instructing' ||
          state === 'talking_confident' ||
          state === 'talking_reflective'
        ) {
          const talkBounce = Math.abs(Math.sin(localT * 6.5)) * 0.065;
          instance.position.y = talkBounce;
          instance.position.z = 0.1 + Math.sin(localT * 3.2) * 0.06;
          instance.rotation.x = -0.06 + Math.sin(localT * 6.5) * 0.09;
          instance.rotation.y = Math.sin(localT * 3.0) * 0.14;
          instance.rotation.z = Math.sin(localT * 4.5) * 0.05;
          wrapper.position.x = basePosX + Math.sin(localT * 1.8) * 0.03;
        }

        // STATE: TALKING POINTING / EXPLAINING BOARD (Ibu Nur teaching)
        else if (state === 'talking_pointing' || state === 'talking_explaining_board' || state === 'talking_serious') {
          const teachBob = Math.abs(Math.sin(localT * 4.5)) * 0.05;
          instance.position.y = teachBob;
          instance.position.z = 0.14;
          instance.rotation.y = -0.22 + Math.sin(localT * 3.5) * 0.12;
          instance.rotation.x = -0.08 + Math.sin(localT * 5) * 0.06;
          instance.rotation.z = -0.05 + Math.sin(localT * 2.5) * 0.04;
        }

        // STATE: CRYING WIPING TEARS (Dito emotional trembling)
        else if (state === 'crying_wiping_tears') {
          const tremble = Math.sin(localT * 32) * 0.025;
          instance.position.x = tremble;
          instance.position.y = -0.07 + Math.sin(localT * 14) * 0.035;
          instance.rotation.x = 0.36 + Math.sin(localT * 10) * 0.04;
          instance.rotation.z = Math.sin(localT * 8) * 0.03;
          wrapper.position.x = basePosX + Math.sin(localT * 4) * 0.02;
        }

        // STATE: TALKING ANGRY (Bima passionate/assertive)
        else if (state === 'talking_angry') {
          const stamp = Math.abs(Math.sin(localT * 8.5)) * 0.07;
          instance.position.y = stamp;
          instance.position.z = 0.16;
          instance.rotation.x = -0.24 + Math.sin(localT * 8.5) * 0.06;
          instance.rotation.y = Math.sin(localT * 4.2) * 0.12;
          wrapper.position.x = basePosX;
        }

        // STATE: BRAVE STANDING (Dito brave)
        else if (state === 'brave_standing') {
          const braveBreathe = Math.sin(localT * 2.2) * 0.03;
          instance.position.y = braveBreathe;
          instance.position.z = 0.12;
          instance.rotation.x = -0.15;
          instance.rotation.y = Math.sin(localT * 1.5) * 0.08;
          wrapper.position.x = basePosX;
        }

        // STATE: CHEERING / PLEDGE
        else if (state === 'cheering' || state === 'pledge_hand_up') {
          const hop = Math.abs(Math.sin(localT * 7.5)) * 0.12;
          instance.position.y = hop;
          instance.rotation.z = Math.sin(localT * 7.5) * 0.08;
          instance.rotation.y = Math.sin(localT * 3.5) * 0.18;
          wrapper.position.x = basePosX + Math.sin(localT * 3.5) * 0.05;
        }

        // FALLBACK: GENERAL ACTIVE TALKING
        else {
          const defBounce = Math.abs(Math.sin(localT * 5.0)) * 0.05;
          instance.position.y = defBounce;
          instance.rotation.x = Math.sin(localT * 5.0) * 0.05;
          instance.rotation.y = Math.sin(localT * 2.0) * 0.1;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 260;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [characters, cameraDistance, interactiveOrbit]);

  const currentStep = flattenedSteps[stepIndex];
  const charInfo = currentStep ? CHARACTERS_INFO[currentStep.speaker] || {
    name: currentStep.speaker,
    badgeColor: 'bg-slate-800',
  } : null;

  return (
    <div
      className={`relative w-full ${heightClass} bg-gradient-to-b from-slate-100 to-slate-200/90 rounded-2xl border-2 border-slate-800/80 overflow-hidden shadow-inner flex flex-col justify-end select-none group`}
    >
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Orbit Tip Pill (Top Left) */}
      {interactiveOrbit && !isLoading && (
        <div className="absolute top-2 left-2 bg-slate-900/85 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 pointer-events-none z-10 shadow">
          <Eye size={11} className="text-sky-400" />
          <span>Putar 3D: geser layar</span>
        </div>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm flex flex-col items-center justify-center text-white z-20 space-y-2">
          <div className="w-8 h-8 border-3 border-amber-400 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-black tracking-wide">
            Memuat Karakter 3D (Animasi Hidup)...
          </span>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute top-2 right-2 bg-rose-500/90 text-white text-[10px] px-2 py-1 rounded-lg z-10 font-bold">
          Model offline
        </div>
      )}

      {/* ======================================================== */}
      {/* TOP COMIC NAVIGATION BAR (Turn Status & Controls)        */}
      {/* ======================================================== */}
      {flattenedSteps.length > 1 && !isLoading && (
        <div className="absolute top-2 right-2 left-2 z-20 flex items-center justify-between pointer-events-none">
          {/* Left: Speaker Identity Pill */}
          <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full border border-slate-700 shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>
              {viewMode === 'turn'
                ? `Giliran: ${charInfo?.name || 'Karakter'}`
                : 'Semua Percakapan'}
            </span>
            {viewMode === 'turn' && (
              <span className="text-slate-400 text-[9px] font-bold">
                ({stepIndex + 1}/{flattenedSteps.length})
              </span>
            )}
          </div>

          {/* Right: Controls & Mode Switcher */}
          <div className="pointer-events-auto flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            {viewMode === 'turn' && (
              <>
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  disabled={stepIndex === 0}
                  title="Percakapan Sebelumnya"
                  className={`p-1 rounded-full transition ${
                    stepIndex === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-800 hover:bg-slate-100 active:scale-95'
                  }`}
                >
                  <ChevronLeft size={13} />
                </button>

                {/* Auto-Play Toggle */}
                <button
                  onClick={() => {
                    playClickSound();
                    setIsAutoPlaying(!isAutoPlaying);
                  }}
                  title={isAutoPlaying ? 'Jeda Otomatis' : 'Putar Otomatis'}
                  className="p-1 rounded-full text-slate-800 hover:bg-slate-100 active:scale-95 transition"
                >
                  {isAutoPlaying ? (
                    <Pause size={12} className="text-amber-600" />
                  ) : (
                    <Play size={12} className="text-emerald-600" />
                  )}
                </button>

                {/* Next or Replay Button */}
                {stepIndex < flattenedSteps.length - 1 ? (
                  <button
                    onClick={handleNext}
                    title="Percakapan Berikutnya"
                    className="p-1 rounded-full text-slate-800 hover:bg-slate-100 active:scale-95 transition"
                  >
                    <ChevronRight size={13} />
                  </button>
                ) : (
                  <button
                    onClick={handleReplay}
                    title="Putar Ulang Percakapan"
                    className="p-1 rounded-full text-blue-600 hover:bg-blue-50 active:scale-95 transition flex items-center gap-0.5 px-1.5"
                  >
                    <RotateCcw size={12} />
                    <span className="text-[9px] font-black">Ulang</span>
                  </button>
                )}

                <div className="h-3 w-px bg-slate-300 mx-0.5" />
              </>
            )}

            {/* Toggle Mode: Bergantian vs Semua */}
            <button
              onClick={() => {
                playClickSound();
                setViewMode(viewMode === 'turn' ? 'all' : 'turn');
              }}
              title={viewMode === 'turn' ? 'Tampilkan Semua Balon Sekaligus' : 'Mode Bergantian (Satu-per-Satu)'}
              className={`px-2 py-0.5 rounded-full text-[9px] font-black transition flex items-center gap-1 ${
                viewMode === 'turn'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-blue-100 text-blue-900 border border-blue-300'
              }`}
            >
              {viewMode === 'turn' ? (
                <>
                  <MessageSquare size={10} />
                  <span>Gantian</span>
                </>
              ) : (
                <>
                  <Layers size={10} />
                  <span>Semua</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 1. MODE BERGANTIAN (One Speaker Turn at a Time)           */}
      {/* ======================================================== */}
      {viewMode === 'turn' && currentStep && !isLoading && (
        <div className="relative z-10 p-2 sm:p-3 pointer-events-none flex flex-col w-full">
          <div
            className={`flex flex-col gap-1 max-w-[88%] sm:max-w-[78%] md:max-w-[68%] ${
              currentStep.isLeft ? 'self-start items-start' : 'self-end items-end'
            }`}
          >
            {/* Speaker Name Tag */}
            <div
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase text-white shadow-md border border-slate-900 ${charInfo?.badgeColor}`}
            >
              <span>{charInfo?.name}</span>
              <Volume2 size={11} className="opacity-80" />
            </div>

            {/* Comic Speech Bubble */}
            <div
              onClick={handleNext}
              className={`comic-bubble-pop pointer-events-auto relative p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border-3 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] text-slate-900 transition-transform duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer max-w-full ${
                currentStep.isLeft ? 'text-left' : 'text-right'
              }`}
            >
              {/* Part indicator if split */}
              {currentStep.totalForSpeaker > 1 && (
                <div
                  className={`flex items-center gap-1 mb-1 text-[9px] font-black text-slate-500 ${
                    currentStep.isLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <span className="bg-slate-100 border border-slate-300 px-1.5 py-0.5 rounded-md">
                    Bagian {currentStep.bubbleIndex + 1}/{currentStep.totalForSpeaker}
                  </span>
                  <span className="text-slate-400 font-bold">
                    {stepIndex < flattenedSteps.length - 1 ? '• Klik untuk lanjut ⏩' : '• Selesai (Klik ulang 🔄)'}
                  </span>
                </div>
              )}

              {/* Bubble Text */}
              <p className="text-xs sm:text-sm font-black leading-snug">
                "{currentStep.text}"
              </p>

              {/* Auto-play Timer Progress Line */}
              {isAutoPlaying && flattenedSteps.length > 1 && (
                <div className="w-full bg-slate-200 h-1 rounded-full mt-2 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full transition-all duration-75"
                    style={{ width: `${timerProgress}%` }}
                  />
                </div>
              )}

              {/* Comic Bubble Pointer Tail */}
              <div
                className={`absolute -bottom-2 w-3.5 h-3.5 bg-white border-r-3 border-b-3 border-slate-900 transform rotate-45 ${
                  currentStep.isLeft ? 'left-6' : 'right-6'
                }`}
              />
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. MODE LIHAT SEMUA (Tampilkan Semua Balon Sekaligus)     */}
      {/* ======================================================== */}
      {viewMode === 'all' && dialogues && dialogues.length > 0 && !isLoading && (
        <div className="relative z-10 p-2 sm:p-3 pointer-events-none flex flex-col gap-2 w-full">
          {dialogues.map((d, dIdx) => {
            const cInfo = CHARACTERS_INFO[d.speaker] || {
              name: d.speaker,
              badgeColor: 'bg-slate-800',
            };
            const isLeft = dIdx === 0;
            const bubbles = splitIntoComicBubbles(d.text, 68);

            return (
              <div
                key={dIdx}
                className={`flex flex-col gap-1.5 max-w-[85%] sm:max-w-[75%] md:max-w-[65%] ${
                  isLeft ? 'self-start items-start' : 'self-end items-end'
                }`}
              >
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase text-white shadow-md border border-slate-900 ${cInfo.badgeColor}`}
                >
                  <span>{cInfo.name}</span>
                  <Volume2 size={11} className="opacity-80" />
                </div>

                <div className={`flex flex-col gap-1.5 ${isLeft ? 'items-start' : 'items-end'}`}>
                  {bubbles.map((sentence, sIdx) => {
                    const isLastBubble = sIdx === bubbles.length - 1;
                    return (
                      <div
                        key={sIdx}
                        onClick={() => playClickSound()}
                        className={`pointer-events-auto relative p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] text-slate-900 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer max-w-full ${
                          sIdx > 0 ? (isLeft ? 'ml-2' : 'mr-2') : ''
                        }`}
                      >
                        <p className="text-[11px] sm:text-xs font-black leading-snug">
                          "{sentence}"
                        </p>
                        {isLastBubble && (
                          <div
                            className={`absolute -bottom-2 w-3 h-3 bg-white border-r-2 border-b-2 border-slate-900 transform rotate-45 ${
                              isLeft ? 'left-4' : 'right-4'
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
