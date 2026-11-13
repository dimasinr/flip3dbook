import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Play, Pause, RotateCcw, Eye, Info, Sparkles, ShieldCheck, UserCheck } from 'lucide-react';
import { playClickSound } from '../sound';

export const SCENES_DATA = [
  {
    id: 'karakter',
    title: 'Model 3D Karakter Siswa (360°)',
    subtitle: 'Karakter Resmi: Siswa MTs SA Riyadul Bayan',
    description: 'Model 3D resmi siswa sekolah (school_boy.glb). Putar dan periksa detail karakter siswa secara 360° yang merepresentasikan generasi peduli anti-bullying.',
    moral: '🌟 Siswa yang berkarakter, berakhlak mulia, dan berani menolak segala bentuk perundungan di madrasah.',
    badge: 'Karakter Utama',
    badgeColor: 'bg-sky-500',
    speechBully: 'Siswa MTs SA Riyadul Bayan',
    speechVictim: 'Saya siap menjadi agen perubahan anti-bullying!',
  },
  {
    id: 'fisik',
    title: '1. Simulasi Bullying Fisik',
    subtitle: 'Mendorong & Mengintimidasi Secara Fisik',
    description: 'Pelaku mendorong korban dengan agresif hingga terhuyung ke belakang. Kontak fisik kasar tanpa persetujuan melanggar hak keamanan pribadi di sekolah.',
    moral: '⚠️ Kontak fisik agresif adalah pelanggaran serius yang wajib dilaporkan kepada Guru BK atau Wali Kelas.',
    badge: 'Bullying Fisik',
    badgeColor: 'bg-rose-500',
    speechBully: 'Sini uang jajanmu, jangan banyak alasan!',
    speechVictim: 'Tolong jangan dorong aku...',
  },
  {
    id: 'verbal',
    title: '2. Simulasi Bullying Verbal',
    subtitle: 'Mengejek, Menunjuk & Menertawakan',
    description: 'Pelaku menunjuk korban sambil tertawa mengejek julukan fisik buruk di depan teman-teman. Ejekan verbal berulang merusak mental dan harga diri.',
    moral: '⚠️ Ejekan bukan candaan jika membuat orang lain terluka, terhina, atau malu di depan umum.',
    badge: 'Bullying Verbal',
    badgeColor: 'bg-amber-500',
    speechBully: 'Hahaha, dasar anak aneh ga punya teman!',
    speechVictim: 'Kenapa kalian selalu mengejekku...',
  },
  {
    id: 'sosial',
    title: '3. Simulasi Bullying Sosial',
    subtitle: 'Mengucilkan & Berbisik Membicarakan Teman',
    description: 'Dua siswa sengaja berbalik badan, berbisik-bisik rahasia sambil tertawa, dan melarang korban bergabung dalam kelompok belajar.',
    moral: '⚠️ Pengucilan sosial sengaja membuat korban merasa terasing, kesepian, dan memicu depresi berat.',
    badge: 'Bullying Sosial',
    badgeColor: 'bg-purple-500',
    speechBully: 'Sstt, jangan ajak dia ya, kita jauhi saja!',
    speechVictim: 'Bolehkah aku ikut belajar kelompok?...',
  },
  {
    id: 'cyber',
    title: '4. Simulasi Cyberbullying',
    subtitle: 'Meneror Lewat Pesan Digital Smartphone',
    description: 'Pelaku mengetik pesan bernada hinaan di media sosial ponsel. Korban menerima pesan tersebut dan merasa cemas serta ketakutan.',
    moral: '⚠️ Jejak digital perundungan bersifat permanen dan dapat ditindak secara hukum (UU ITE).',
    badge: 'Cyberbullying',
    badgeColor: 'bg-cyan-600',
    speechBully: 'Kukirim pesan hinaan biar dia malu di medsos!',
    speechVictim: 'Ponselku penuh teror pesan kasar...',
  },
  {
    id: 'pencegahan',
    title: '5. Simulasi Pencegahan (Upstander)',
    subtitle: 'Saksi Berani Membela & Merangkul Korban',
    description: 'Saksi tidak tinggal diam! Ia maju ke depan menghadang pelaku dengan isyarat tegas "STOP!" dan merangkul bahu korban untuk memberi rasa aman.',
    moral: '🛡️ Upstander Sejati: Satu tindakan keberanianmu dapat menghentikan perundungan dalam waktu kurang dari 10 detik!',
    badge: 'Aksi Pencegahan',
    badgeColor: 'bg-emerald-600',
    speechBully: 'Ehh, ada yang berani ikut campur?!',
    speechVictim: 'Terima kasih sudah membela dan menemaniku...',
  },
  {
    id: 'penanganan',
    title: '6. Simulasi Penanganan (Lapor Guru)',
    subtitle: 'Melapor Bersama ke Guru Pembimbing/BK',
    description: 'Siswa korban dan saksi melapor resmi kepada Guru BK. Guru mendengarkan kronologi dengan empati dan siap memberikan perlindungan.',
    moral: '🌟 Melapor Bukan Mengadu: Melapor bertujuan menyelamatkan teman dan mewujudkan madrasah ramah anak.',
    badge: 'Alur Penanganan',
    badgeColor: 'bg-blue-600',
    speechBully: 'Guru BK mendengarkan pengaduan...',
    speechVictim: 'Pak Guru, kami ingin melaporkan kejadian tadi.',
  },
];

export default function Character3DViewer() {
  const mountRef = useRef(null);
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  const sceneStateRef = useRef({
    sceneIdx: 0,
    isPlaying: true,
    speed: 1,
    animTime: 0,
  });

  useEffect(() => {
    sceneStateRef.current.sceneIdx = currentSceneIdx;
    sceneStateRef.current.isPlaying = isPlaying;
    sceneStateRef.current.speed = speed;
  }, [currentSceneIdx, isPlaying, speed]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 360;

    // Three.js Scene Setup with Smooth Tone Mapping
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9);
    scene.fog = new THREE.FogExp2(0xf1f5f9, 0.035);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 80);
    camera.position.set(0, 2.5, 6.5);
    camera.lookAt(0, 1.1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Smooth Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfffbeb, 0xe2e8f0, 0.6);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    // Warm Key Light
    const dirLight = new THREE.DirectionalLight(0xfff7ed, 1.2);
    dirLight.position.set(5, 9, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 22;
    dirLight.shadow.camera.left = -5.5;
    dirLight.shadow.camera.right = 5.5;
    dirLight.shadow.camera.top = 5.5;
    dirLight.shadow.camera.bottom = -5.5;
    dirLight.shadow.bias = -0.0006;
    scene.add(dirLight);

    // Cool Rim Light for crisp character silhouette separation
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.7);
    rimLight.position.set(-6, 4, -4);
    scene.add(rimLight);

    // Soft Contact Shadow Floor
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.6,
      metalness: 0.05,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Friendly Cartoon Room Back Wall
    const wallGeo = new THREE.PlaneGeometry(16, 6.5);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.85 });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.set(0, 3.2, -3.8);
    wall.receiveShadow = true;
    scene.add(wall);

    // Whiteboard Frame with Anti-Bullying Banner
    const boardGeo = new THREE.BoxGeometry(6.4, 2.4, 0.08);
    const boardMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.1 });
    const board = new THREE.Mesh(boardGeo, boardMat);
    board.position.set(0, 3.3, -3.74);
    board.castShadow = true;
    board.receiveShadow = true;
    scene.add(board);

    const frameGeo = new THREE.BoxGeometry(6.55, 2.55, 0.05);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.5 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(0, 3.3, -3.76);
    scene.add(frame);

    // -------------------------------------------------------------
    // Helper: Create Stylized Procedural Character (for supporting roles)
    // -------------------------------------------------------------
    function createSmoothCharacter({
      shirtColor = 0x1e3a8a,
      pantsColor = 0x1e293b,
      skinColor = 0xffdfc4,
      hairColor = 0x1c1917,
      roleName = 'Siswa',
      isTeacher = false,
      hasHijab = false,
    }) {
      const charRoot = new THREE.Group();
      charRoot.name = roleName;

      const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.55, metalness: 0.02 });
      const shirtMat = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.65 });
      const pantsMat = new THREE.MeshStandardMaterial({ color: pantsColor, roughness: 0.75 });
      const shoesMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
      const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.7 });

      const pelvis = new THREE.Group();
      pelvis.position.y = 1.08;
      charRoot.add(pelvis);

      const hipsMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.24, 16), pantsMat);
      hipsMesh.castShadow = true;
      pelvis.add(hipsMesh);

      const spine = new THREE.Group();
      spine.position.y = 0.14;
      pelvis.add(spine);

      const torsoMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.32, 12, 16), shirtMat);
      torsoMesh.position.y = 0.26;
      torsoMesh.castShadow = true;
      spine.add(torsoMesh);

      if (!isTeacher) {
        const tie = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.34, 0.04), new THREE.MeshStandardMaterial({ color: 0x0284c7 }));
        tie.position.set(0, 0.26, 0.27);
        spine.add(tie);
      } else {
        const idBadge = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.02), new THREE.MeshStandardMaterial({ color: 0x10b981 }));
        idBadge.position.set(0.12, 0.26, 0.28);
        spine.add(idBadge);
      }

      const neck = new THREE.Group();
      neck.position.y = 0.52;
      spine.add(neck);

      const head = new THREE.Group();
      head.position.y = 0.2;
      neck.add(head);

      const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 24), skinMat);
      headMesh.position.y = 0.18;
      headMesh.scale.set(1, 1.08, 1);
      headMesh.castShadow = true;
      head.add(headMesh);

      if (hasHijab) {
        const hijabMesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 24, 24),
          new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.85 })
        );
        hijabMesh.position.y = 0.2;
        hijabMesh.scale.set(1.06, 1.15, 1.12);
        hijabMesh.castShadow = true;
        head.add(hijabMesh);
      } else {
        const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 20, 20), hairMat);
        hairMesh.position.set(0, 0.24, -0.02);
        hairMesh.scale.set(1.05, 1.06, 1.1);
        hairMesh.castShadow = true;
        head.add(hairMesh);
      }

      const leftShoulder = new THREE.Group();
      leftShoulder.position.set(-0.36, 0.44, 0);
      spine.add(leftShoulder);
      const leftUpperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.24, 8, 12), shirtMat);
      leftUpperArm.position.y = -0.14;
      leftUpperArm.castShadow = true;
      leftShoulder.add(leftUpperArm);

      const rightShoulder = new THREE.Group();
      rightShoulder.position.set(0.36, 0.44, 0);
      spine.add(rightShoulder);
      const rightUpperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.24, 8, 12), shirtMat);
      rightUpperArm.position.y = -0.14;
      rightUpperArm.castShadow = true;
      rightShoulder.add(rightUpperArm);

      const leftHip = new THREE.Group();
      leftHip.position.set(-0.13, -0.1, 0);
      pelvis.add(leftHip);
      const leftLeg = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.76, 8, 12), pantsMat);
      leftLeg.position.y = -0.42;
      leftLeg.castShadow = true;
      leftHip.add(leftLeg);

      const rightHip = new THREE.Group();
      rightHip.position.set(0.13, -0.1, 0);
      pelvis.add(rightHip);
      const rightLeg = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.76, 8, 12), pantsMat);
      rightLeg.position.y = -0.42;
      rightLeg.castShadow = true;
      rightHip.add(rightLeg);

      return {
        root: charRoot,
        pelvis,
        spine,
        head,
        leftShoulder,
        rightShoulder,
      };
    }

    // Bully (Pelaku) supporting character
    const bully = createSmoothCharacter({
      shirtColor: 0x991b1b,
      pantsColor: 0x1e293b,
      skinColor: 0xfbbf24,
      hairColor: 0x18181b,
      roleName: 'Pelaku',
    });
    scene.add(bully.root);

    // Bystander / Upstander (Saksi) supporting character
    const bystander = createSmoothCharacter({
      shirtColor: 0x10b981,
      pantsColor: 0x064e3b,
      skinColor: 0xfed7aa,
      hairColor: 0x1e293b,
      roleName: 'Saksi',
      hasHijab: true,
    });
    scene.add(bystander.root);

    // Teacher (Guru BK) supporting character
    const teacher = createSmoothCharacter({
      shirtColor: 0x92400e,
      pantsColor: 0x18181b,
      skinColor: 0xfde047,
      hairColor: 0x09090b,
      roleName: 'Guru BK',
      isTeacher: true,
    });
    scene.add(teacher.root);

    // Holographic Energy Shield for Upstander
    const shieldGeo = new THREE.CylinderGeometry(0.8, 0.8, 1.8, 32, 1, true);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      side: THREE.DoubleSide,
    });
    const energyShield = new THREE.Mesh(shieldGeo, shieldMat);
    energyShield.position.set(0.3, 1.0, 0.3);
    energyShield.visible = false;
    scene.add(energyShield);

    // -------------------------------------------------------------
    // Load school_boy.glb 3D Model
    // -------------------------------------------------------------
    const schoolBoyGroup = new THREE.Group();
    schoolBoyGroup.name = 'SchoolBoyRoot';
    scene.add(schoolBoyGroup);

    let isGltfReady = false;
    const loader = new GLTFLoader();
    const modelPath = (import.meta.env.BASE_URL || '/') + 'model/school_boy.glb';

    loader.load(
      modelPath,
      (gltf) => {
        const loadedModel = gltf.scene;
        loadedModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.roughness = 0.6;
              child.material.metalness = 0.1;
              if (child.material.map) {
                child.material.map.colorSpace = THREE.SRGBColorSpace;
              }
            }
          }
        });

        // The model height is 1.0 unit. Scale to 2.2 units tall with feet on floor (y=0)
        loadedModel.scale.set(2.2, 2.2, 2.2);
        loadedModel.position.set(0, 0, 0);

        schoolBoyGroup.add(loadedModel);
        isGltfReady = true;
        setIsModelLoaded(true);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const pct = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(pct);
        }
      },
      (error) => {
        console.error('Error loading school_boy.glb:', error);
        // Fallback: still show experience even if asset load fails
        setIsModelLoaded(true);
      }
    );

    // Interactive Orbit Drag
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let cameraOrbitAngle = 0;
    let cameraOrbitPitch = 0.35;

    const onMouseDown = (e) => {
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
      cameraOrbitAngle -= dx * 0.007;
      cameraOrbitPitch = Math.max(0.12, Math.min(1.1, cameraOrbitPitch + dy * 0.007));
    };
    const onMouseUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevMouseX;
      const dy = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
      cameraOrbitAngle -= dx * 0.009;
      cameraOrbitPitch = Math.max(0.12, Math.min(1.1, cameraOrbitPitch + dy * 0.009));
    };
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // Animation Loop with Cosine Smooth Easing
    let animationFrameId;
    let clock = new THREE.Clock();

    function resetSupportingCharacters() {
      [bully, bystander, teacher].forEach((ch) => {
        ch.root.position.set(0, 0, 0);
        ch.root.rotation.set(0, 0, 0);
        ch.pelvis.position.set(0, 1.08, 0);
        ch.pelvis.rotation.set(0, 0, 0);
        ch.spine.rotation.set(0, 0, 0);
        ch.head.rotation.set(0, 0, 0);
        ch.leftShoulder.rotation.set(0, 0, 0.15);
        ch.rightShoulder.rotation.set(0, 0, -0.15);
        ch.root.visible = false;
      });
      energyShield.visible = false;

      // Reset school boy model transform
      schoolBoyGroup.position.set(0, 0, 0);
      schoolBoyGroup.rotation.set(0, 0, 0);
      schoolBoyGroup.visible = true;
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const state = sceneStateRef.current;

      if (state.isPlaying) {
        state.animTime += delta * state.speed;
      }

      const t = state.animTime;
      const sceneIdx = state.sceneIdx;

      // Smooth Camera Position with Orbit
      const dist = 6.8;
      camera.position.x = Math.sin(cameraOrbitAngle) * Math.cos(cameraOrbitPitch) * dist;
      camera.position.y = Math.sin(cameraOrbitPitch) * dist + 1.15;
      camera.position.z = Math.cos(cameraOrbitAngle) * Math.cos(cameraOrbitPitch) * dist;
      camera.lookAt(0, 1.15, 0);

      resetSupportingCharacters();

      // ==========================================
      // Scene 0: 360° Showcase of school_boy.glb
      // ==========================================
      if (sceneIdx === 0) {
        schoolBoyGroup.position.set(0, Math.sin(t * 2.5) * 0.03, 0);
        schoolBoyGroup.rotation.y = t * 0.6; // Gentle continuous showcase spin
      }

      // ==========================================
      // Scene 1: Bullying Fisik (Push & Recoil)
      // ==========================================
      else if (sceneIdx === 1) {
        bully.root.visible = true;

        const cycle = t % 4.2;
        bully.root.position.set(-1.3, 0, 0);
        bully.root.rotation.y = Math.PI / 2.2;

        schoolBoyGroup.position.set(1.0, 0, 0);
        schoolBoyGroup.rotation.y = -Math.PI / 2.2;

        if (cycle < 1.6) {
          const step = Math.sin((cycle / 1.6) * (Math.PI / 2));
          bully.root.position.x = -1.6 + step * 0.6;
          bully.rightShoulder.rotation.x = step * 1.2;
          bully.leftShoulder.rotation.x = step * 1.1;
        } else if (cycle < 2.8) {
          const pushProg = (cycle - 1.6) / 1.2;
          const recoil = Math.sin(pushProg * Math.PI) * 0.65;
          schoolBoyGroup.position.x = 1.0 + recoil;
          schoolBoyGroup.rotation.z = -recoil * 0.45;
          schoolBoyGroup.rotation.x = -recoil * 0.2;

          bully.rightShoulder.rotation.x = 1.2;
          bully.leftShoulder.rotation.x = 1.1;
        } else {
          schoolBoyGroup.position.x = 1.35;
          schoolBoyGroup.rotation.x = 0.22; // Head down sad
          schoolBoyGroup.position.y = Math.sin(t * 12) * 0.015; // Shivering
        }
      }

      // ==========================================
      // Scene 2: Bullying Verbal (Mock & Cower)
      // ==========================================
      else if (sceneIdx === 2) {
        bully.root.visible = true;

        const cycle = t % 3.2;
        bully.root.position.set(-1.25, 0, 0);
        bully.root.rotation.y = Math.PI / 2.4;

        schoolBoyGroup.position.set(1.2, 0, 0);
        schoolBoyGroup.rotation.y = -Math.PI / 2.4;
        schoolBoyGroup.rotation.x = 0.25; // Drooping head
        schoolBoyGroup.position.y = Math.sin(t * 15) * 0.01; // Trembling

        bully.rightShoulder.rotation.x = 1.4 + Math.sin(cycle * 4) * 0.1;
        bully.head.rotation.y = Math.sin(cycle * 3) * 0.15;
        bully.spine.rotation.x = Math.sin(cycle * 6) * 0.08;
      }

      // ==========================================
      // Scene 3: Bullying Sosial (Ostracization)
      // ==========================================
      else if (sceneIdx === 3) {
        bully.root.visible = true;
        bystander.root.visible = true;

        bully.root.position.set(-0.7, 0, -0.3);
        bully.root.rotation.y = Math.PI / 4;

        bystander.root.position.set(0.35, 0, -0.3);
        bystander.root.rotation.y = -Math.PI / 4;

        bully.head.rotation.y = 0.35 + Math.sin(t * 2) * 0.06;
        bystander.head.rotation.y = -0.35;

        // School boy excluded standing apart
        schoolBoyGroup.position.set(1.8, 0, 0.7);
        schoolBoyGroup.rotation.y = -Math.PI / 1.9;
        schoolBoyGroup.rotation.x = 0.22;
      }

      // ==========================================
      // Scene 4: Cyberbullying (Phone Harassment)
      // ==========================================
      else if (sceneIdx === 4) {
        bully.root.visible = true;

        bully.root.position.set(-1.3, 0, 0.2);
        bully.root.rotation.y = Math.PI / 3;
        bully.rightShoulder.rotation.x = 0.85;
        bully.leftShoulder.rotation.x = 0.85;

        schoolBoyGroup.position.set(1.3, 0, 0);
        schoolBoyGroup.rotation.y = -Math.PI / 3;
        schoolBoyGroup.rotation.x = 0.28 + Math.sin(t * 2) * 0.04; // Looking down at phone
      }

      // ==========================================
      // Scene 5: Pencegahan (Upstander Shield)
      // ==========================================
      else if (sceneIdx === 5) {
        bully.root.visible = true;
        bystander.root.visible = true;
        energyShield.visible = true;

        bully.root.position.set(-1.8, 0, 0);
        bully.root.rotation.y = Math.PI / 2;
        bully.rightShoulder.rotation.x = 0.4;

        bystander.root.position.set(-0.35, 0, 0.3);
        bystander.root.rotation.y = Math.PI / 2.2;
        bystander.leftShoulder.rotation.x = 1.45; // Palm up STOP

        // Holographic shield pulse
        energyShield.position.set(0.2, 1.0, 0.2);
        energyShield.scale.setScalar(1 + Math.sin(t * 4) * 0.04);

        // School boy safe behind the shield
        schoolBoyGroup.position.set(1.35, 0, 0.2);
        schoolBoyGroup.rotation.y = -Math.PI / 2.2;
        schoolBoyGroup.rotation.x = 0; // Standing tall and relieved
      }

      // ==========================================
      // Scene 6: Penanganan (Lapor Guru BK)
      // ==========================================
      else if (sceneIdx === 6) {
        teacher.root.visible = true;
        bystander.root.visible = true;

        teacher.root.position.set(1.4, 0, 0);
        teacher.root.rotation.y = -Math.PI / 2.2;
        teacher.head.rotation.x = Math.sin(t * 1.8) * 0.06 + 0.08; // Empathetic nod

        schoolBoyGroup.position.set(-0.85, 0, 0.2);
        schoolBoyGroup.rotation.y = Math.PI / 2.4;

        bystander.root.position.set(-1.7, 0, 0.15);
        bystander.root.rotation.y = Math.PI / 2.6;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
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
  }, []);

  const curScene = SCENES_DATA[currentSceneIdx];

  const handleSelectScene = (idx) => {
    playClickSound();
    setCurrentSceneIdx(idx);
    sceneStateRef.current.animTime = 0;
  };

  const handleTogglePlay = () => {
    playClickSound();
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    playClickSound();
    sceneStateRef.current.animTime = 0;
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900/5 rounded-2xl border-2 border-slate-800 overflow-hidden shadow-inner select-none">
      {/* Scene Tabs Bar */}
      <div className="bg-slate-900 text-white p-1.5 sm:p-2 flex items-center gap-1 sm:gap-1.5 overflow-x-auto cartoon-scroll shrink-0">
        {SCENES_DATA.map((sc, idx) => (
          <button
            key={sc.id}
            onClick={() => handleSelectScene(idx)}
            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-black transition-all whitespace-nowrap flex items-center gap-1 sm:gap-1.5 border shrink-0 ${
              currentSceneIdx === idx
                ? `${sc.badgeColor} text-white border-white shadow-md scale-105`
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {idx === 0 && <UserCheck size={12} />}
            <span>{idx === 0 ? 'SISWA 3D' : sc.id.toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* 3D Canvas with High Definition Tone Mapping */}
      <div className="relative flex-1 min-h-[200px] sm:min-h-[260px] md:min-h-[290px] w-full bg-slate-100 overflow-hidden group">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Loading Spinner for school_boy.glb */}
        {!isModelLoaded && (
          <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-sm flex flex-col items-center justify-center text-white z-20 space-y-2.5">
            <div className="w-10 h-10 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
            <div className="text-center">
              <span className="text-xs font-black block">Memuat Karakter 3D (school_boy.glb)</span>
              <span className="text-[10px] text-sky-300 font-bold">{loadingProgress}% Selesai</span>
            </div>
          </div>
        )}

        {/* Orbit Hint */}
        <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 pointer-events-none shadow">
          <Eye size={11} className="text-sky-400" />
          <span>Putar 3D: geser layar</span>
        </div>

        {/* Scene Title Badge */}
        <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow border border-slate-300 flex items-center gap-1 sm:gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${curScene.badgeColor} animate-ping`} />
          <span className="text-[10px] sm:text-xs font-black text-slate-900">{curScene.badge}</span>
        </div>

        {/* Floating Dialogue Bubble Indicator */}
        <div className="absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 bg-white/95 border-2 border-slate-900 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl shadow-xl text-center max-w-[85%] sm:max-w-xs pointer-events-none animate-float-gentle">
          <span className="text-[10px] sm:text-[11px] font-black text-slate-900 block leading-tight">
            💬 "{curScene.speechBully}"
          </span>
        </div>

        {/* Playback Controls Floating Bar */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/90 backdrop-blur-md text-white px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 shadow-2xl border border-slate-700">
          <button
            onClick={handleTogglePlay}
            className="p-1 hover:bg-white/20 rounded-lg transition text-white"
            title={isPlaying ? 'Jeda Animasi' : 'Putar Animasi'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} fill="white" />}
          </button>

          <button
            onClick={handleReplay}
            className="p-1 hover:bg-white/20 rounded-lg transition text-slate-300 hover:text-white"
            title="Ulangi Animasi"
          >
            <RotateCcw size={13} />
          </button>

          <div className="h-3 w-px bg-slate-700" />

          {/* Speed */}
          <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px] font-black">
            {[0.5, 1, 1.5].map((s) => (
              <button
                key={s}
                onClick={() => { playClickSound(); setSpeed(s); }}
                className={`px-1 py-0.5 rounded transition ${
                  speed === s ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Educational Explanation Box */}
      <div className="p-2.5 sm:p-3.5 bg-white border-t-2 border-slate-800 transition-all shrink-0">
        <div className="flex items-start gap-2">
          <div className="p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-blue-100 text-blue-900 shrink-0 mt-0.5 border border-blue-300">
            <Info size={14} className="sm:w-4 sm:h-4" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <h4 className="font-black text-[11px] sm:text-xs text-slate-900 truncate">{curScene.title}</h4>
            <p className="text-[10px] sm:text-[11px] text-slate-700 leading-snug line-clamp-2 sm:line-clamp-none">{curScene.description}</p>
            <div className="pt-0.5 text-[10px] sm:text-[11px] font-bold text-rose-700">
              {curScene.moral}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
