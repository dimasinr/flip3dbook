import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, RotateCcw, Eye, Info, Sparkles, ShieldCheck } from 'lucide-react';
import { playClickSound } from '../sound';

export const SCENES_DATA = [
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
    camera.position.set(0, 3.0, 7.2);
    camera.lookAt(0, 1.25, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Smooth Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfffbeb, 0xe2e8f0, 0.5);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    // Warm Key Light
    const dirLight = new THREE.DirectionalLight(0xfff7ed, 1.1);
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
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.65);
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

    // Whiteboard Frame
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
    // Helper: Create Smooth Stylized 3D Humanoid Character
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

      // Pelvis
      const pelvis = new THREE.Group();
      pelvis.position.y = 1.08;
      charRoot.add(pelvis);

      const hipsMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.24, 16), pantsMat);
      hipsMesh.castShadow = true;
      pelvis.add(hipsMesh);

      // Spine & Torso (Curved smooth capsule-like torso)
      const spine = new THREE.Group();
      spine.position.y = 0.14;
      pelvis.add(spine);

      const torsoMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.32, 12, 16), shirtMat);
      torsoMesh.position.y = 0.26;
      torsoMesh.castShadow = true;
      spine.add(torsoMesh);

      // School Tie or Uniform Collar
      if (!isTeacher) {
        const tieGeo = new THREE.BoxGeometry(0.08, 0.34, 0.04);
        const tieMat = new THREE.MeshStandardMaterial({ color: 0x0284c7 });
        const tie = new THREE.Mesh(tieGeo, tieMat);
        tie.position.set(0, 0.26, 0.27);
        spine.add(tie);
      } else {
        const idBadge = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.16, 0.02),
          new THREE.MeshStandardMaterial({ color: 0x10b981 })
        );
        idBadge.position.set(0.12, 0.26, 0.28);
        spine.add(idBadge);
      }

      // Neck & Head
      const neck = new THREE.Group();
      neck.position.y = 0.52;
      spine.add(neck);

      const neckMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.12, 14), skinMat);
      neckMesh.position.y = 0.06;
      neck.add(neckMesh);

      const head = new THREE.Group();
      head.position.y = 0.2;
      neck.add(head);

      const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.26, 24, 24), skinMat);
      headMesh.position.y = 0.18;
      headMesh.scale.set(1, 1.08, 1);
      headMesh.castShadow = true;
      head.add(headMesh);

      // Hair or Hijab
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

      // Expressive Cartoon Eyes
      const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const eyePupilMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });

      const createEye = (x) => {
        const eyeGroup = new THREE.Group();
        eyeGroup.position.set(x, 0.18, 0.23);

        const white = new THREE.Mesh(new THREE.SphereGeometry(0.042, 12, 12), eyeWhiteMat);
        white.scale.set(1, 1.2, 0.5);
        eyeGroup.add(white);

        const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.024, 10, 10), eyePupilMat);
        pupil.position.set(0, 0, 0.022);
        pupil.scale.set(1, 1, 0.4);
        eyeGroup.add(pupil);

        return eyeGroup;
      };

      head.add(createEye(-0.09));
      head.add(createEye(0.09));

      // Shoulders & Arms (Left)
      const leftShoulder = new THREE.Group();
      leftShoulder.position.set(-0.36, 0.44, 0);
      spine.add(leftShoulder);

      const leftUpperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.24, 8, 12), shirtMat);
      leftUpperArm.position.y = -0.14;
      leftUpperArm.castShadow = true;
      leftShoulder.add(leftUpperArm);

      const leftElbow = new THREE.Group();
      leftElbow.position.y = -0.28;
      leftShoulder.add(leftElbow);

      const leftForearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.22, 8, 12), skinMat);
      leftForearm.position.y = -0.13;
      leftForearm.castShadow = true;
      leftElbow.add(leftForearm);

      // Shoulders & Arms (Right)
      const rightShoulder = new THREE.Group();
      rightShoulder.position.set(0.36, 0.44, 0);
      spine.add(rightShoulder);

      const rightUpperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.24, 8, 12), shirtMat);
      rightUpperArm.position.y = -0.14;
      rightUpperArm.castShadow = true;
      rightShoulder.add(rightUpperArm);

      const rightElbow = new THREE.Group();
      rightElbow.position.y = -0.28;
      rightShoulder.add(rightElbow);

      const rightForearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.22, 8, 12), skinMat);
      rightForearm.position.y = -0.13;
      rightForearm.castShadow = true;
      rightElbow.add(rightForearm);

      // Legs (Left)
      const leftHip = new THREE.Group();
      leftHip.position.set(-0.13, -0.1, 0);
      pelvis.add(leftHip);

      const leftThigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.38, 8, 12), pantsMat);
      leftThigh.position.y = -0.24;
      leftThigh.castShadow = true;
      leftHip.add(leftThigh);

      const leftKnee = new THREE.Group();
      leftKnee.position.y = -0.44;
      leftHip.add(leftKnee);

      const leftShin = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.38, 8, 12), pantsMat);
      leftShin.position.y = -0.22;
      leftShin.castShadow = true;
      leftKnee.add(leftShin);

      const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 0.22), shoesMat);
      leftFoot.position.set(0, -0.46, 0.05);
      leftFoot.castShadow = true;
      leftKnee.add(leftFoot);

      // Legs (Right)
      const rightHip = new THREE.Group();
      rightHip.position.set(0.13, -0.1, 0);
      pelvis.add(rightHip);

      const rightThigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.38, 8, 12), pantsMat);
      rightThigh.position.y = -0.24;
      rightThigh.castShadow = true;
      rightHip.add(rightThigh);

      const rightKnee = new THREE.Group();
      rightKnee.position.y = -0.44;
      rightHip.add(rightKnee);

      const rightShin = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.38, 8, 12), pantsMat);
      rightShin.position.y = -0.22;
      rightShin.castShadow = true;
      rightKnee.add(rightShin);

      const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 0.22), shoesMat);
      rightFoot.position.set(0, -0.46, 0.05);
      rightFoot.castShadow = true;
      rightKnee.add(rightFoot);

      return {
        root: charRoot,
        pelvis,
        spine,
        neck,
        head,
        leftShoulder,
        leftElbow,
        rightShoulder,
        rightElbow,
        leftHip,
        leftKnee,
        rightHip,
        rightKnee,
      };
    }

    // 1. Bully (Pelaku) - Dark Blue uniform
    const bully = createSmoothCharacter({
      shirtColor: 0x1e3a8a,
      pantsColor: 0x1e293b,
      skinColor: 0xfbbf24,
      hairColor: 0x18181b,
      roleName: 'Pelaku',
    });
    scene.add(bully.root);

    // 2. Victim (Korban) - Sky Blue uniform
    const victim = createSmoothCharacter({
      shirtColor: 0x0284c7,
      pantsColor: 0x334155,
      skinColor: 0xffedd5,
      hairColor: 0x475569,
      roleName: 'Korban',
    });
    scene.add(victim.root);

    // 3. Bystander (Saksi / Upstander) - Madrasah Hijab & Green Attire
    const bystander = createSmoothCharacter({
      shirtColor: 0x10b981,
      pantsColor: 0x064e3b,
      skinColor: 0xfed7aa,
      hairColor: 0x1e293b,
      roleName: 'Saksi',
      hasHijab: true,
    });
    scene.add(bystander.root);

    // 4. Teacher (Guru BK) - Warm Brown Batik Formal
    const teacher = createSmoothCharacter({
      shirtColor: 0x92400e,
      pantsColor: 0x18181b,
      skinColor: 0xfde047,
      hairColor: 0x09090b,
      roleName: 'Guru BK',
      isTeacher: true,
    });
    scene.add(teacher.root);

    // Reset characters
    function resetAll() {
      [bully, victim, bystander, teacher].forEach((ch) => {
        ch.root.position.set(0, 0, 0);
        ch.root.rotation.set(0, 0, 0);
        ch.pelvis.position.set(0, 1.08, 0);
        ch.pelvis.rotation.set(0, 0, 0);
        ch.spine.rotation.set(0, 0, 0);
        ch.head.rotation.set(0, 0, 0);
        ch.leftShoulder.rotation.set(0, 0, 0.15);
        ch.leftElbow.rotation.set(0, 0, 0);
        ch.rightShoulder.rotation.set(0, 0, -0.15);
        ch.rightElbow.rotation.set(0, 0, 0);
        ch.leftHip.rotation.set(0, 0, 0);
        ch.leftKnee.rotation.set(0, 0, 0);
        ch.rightHip.rotation.set(0, 0, 0);
        ch.rightKnee.rotation.set(0, 0, 0);
        ch.root.visible = false;
      });
    }

    // Interactive Orbit Drag
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let cameraOrbitAngle = 0;
    let cameraOrbitPitch = 0.32;

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

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const state = sceneStateRef.current;

      if (state.isPlaying) {
        state.animTime += delta * state.speed;
      }

      const t = state.animTime;
      const sceneIdx = state.sceneIdx;

      // Smooth Camera Position
      const dist = 7.2;
      camera.position.x = Math.sin(cameraOrbitAngle) * Math.cos(cameraOrbitPitch) * dist;
      camera.position.y = Math.sin(cameraOrbitPitch) * dist + 1.25;
      camera.position.z = Math.cos(cameraOrbitAngle) * Math.cos(cameraOrbitPitch) * dist;
      camera.lookAt(0, 1.25, 0);

      resetAll();

      // ==========================================
      // Scene 0: Bullying Fisik (Smooth Push & Stumble)
      // ==========================================
      if (sceneIdx === 0) {
        bully.root.visible = true;
        victim.root.visible = true;

        const cycle = t % 4.2;
        bully.root.position.set(-1.25, 0, 0);
        bully.root.rotation.y = Math.PI / 2.1;

        victim.root.position.set(1.0, 0, 0);
        victim.root.rotation.y = -Math.PI / 2.1;

        if (cycle < 1.6) {
          const step = Math.sin((cycle / 1.6) * (Math.PI / 2));
          bully.root.position.x = -1.5 + step * 0.55;
          bully.rightShoulder.rotation.x = step * 1.1;
          bully.leftShoulder.rotation.x = step * 1.0;
        } else if (cycle < 2.8) {
          const pushProg = (cycle - 1.6) / 1.2;
          const recoil = Math.sin(pushProg * Math.PI) * 0.6;
          victim.root.position.x = 1.0 + recoil;
          victim.spine.rotation.z = -recoil * 0.5;
          victim.head.rotation.z = -recoil * 0.4;
          victim.leftShoulder.rotation.z = 0.8;
          victim.rightShoulder.rotation.z = -0.8;

          bully.rightShoulder.rotation.x = 1.2;
          bully.leftShoulder.rotation.x = 1.1;
        } else {
          victim.root.position.x = 1.3;
          victim.head.rotation.x = 0.35; // Head down sad
          victim.spine.rotation.x = 0.15;

          bully.leftShoulder.rotation.x = 0.5;
          bully.rightShoulder.rotation.x = 0.5;
        }
      }

      // ==========================================
      // Scene 1: Bullying Verbal (Smooth Point & Mock)
      // ==========================================
      else if (sceneIdx === 1) {
        bully.root.visible = true;
        victim.root.visible = true;

        const cycle = t % 3.2;
        bully.root.position.set(-1.2, 0, 0);
        bully.root.rotation.y = Math.PI / 2.3;

        victim.root.position.set(1.2, 0, 0);
        victim.root.rotation.y = -Math.PI / 2.4;

        // Bully smooth laughing bounce
        bully.rightShoulder.rotation.x = 1.4 + Math.sin(cycle * 4) * 0.08;
        bully.head.rotation.y = Math.sin(cycle * 3) * 0.12;
        bully.spine.rotation.x = Math.sin(cycle * 6) * 0.08;

        // Victim shrink and cower
        victim.head.rotation.x = 0.38;
        victim.leftShoulder.rotation.z = 1.1;
        victim.rightShoulder.rotation.z = -1.1;
        victim.spine.rotation.x = 0.22;
      }

      // ==========================================
      // Scene 2: Bullying Sosial (Smooth Ostracization)
      // ==========================================
      else if (sceneIdx === 2) {
        bully.root.visible = true;
        bystander.root.visible = true;
        victim.root.visible = true;

        bully.root.position.set(-0.6, 0, -0.3);
        bully.root.rotation.y = Math.PI / 4;

        bystander.root.position.set(0.4, 0, -0.3);
        bystander.root.rotation.y = -Math.PI / 4;

        bully.head.rotation.y = 0.35 + Math.sin(t * 2) * 0.06;
        bystander.head.rotation.y = -0.35;

        victim.root.position.set(1.7, 0, 0.7);
        victim.root.rotation.y = -Math.PI / 1.9;

        const cycle = t % 4.0;
        if (cycle < 2.0) {
          victim.leftShoulder.rotation.x = 1.1;
          victim.head.rotation.x = -0.1;
        } else {
          victim.leftShoulder.rotation.x = 0.1;
          victim.head.rotation.x = 0.42;
          victim.spine.rotation.x = 0.2;
        }
      }

      // ==========================================
      // Scene 3: Cyberbullying (Smartphone Message)
      // ==========================================
      else if (sceneIdx === 3) {
        bully.root.visible = true;
        victim.root.visible = true;

        bully.root.position.set(-1.3, 0, 0.2);
        bully.root.rotation.y = Math.PI / 3;

        bully.rightShoulder.rotation.x = 0.85;
        bully.leftShoulder.rotation.x = 0.85;
        bully.rightElbow.rotation.y = -0.7;
        bully.leftElbow.rotation.y = 0.7;
        bully.head.rotation.x = 0.35;

        victim.root.position.set(1.3, 0, 0);
        victim.root.rotation.y = -Math.PI / 3;
        victim.head.rotation.x = 0.25 + Math.sin(t * 2) * 0.05;
        victim.spine.rotation.x = 0.15;
      }

      // ==========================================
      // Scene 4: Pencegahan (Upstander Courageous Stand)
      // ==========================================
      else if (sceneIdx === 4) {
        bully.root.visible = true;
        victim.root.visible = true;
        bystander.root.visible = true;

        bully.root.position.set(-1.8, 0, 0);
        bully.root.rotation.y = Math.PI / 2;
        bully.rightShoulder.rotation.x = 0.4;

        bystander.root.position.set(-0.35, 0, 0.3);
        bystander.root.rotation.y = Math.PI / 2.2;
        bystander.leftShoulder.rotation.x = 1.45; // Palm up STOP
        bystander.leftShoulder.rotation.z = 0.15;
        bystander.rightShoulder.rotation.x = 0.45;
        bystander.rightShoulder.rotation.z = -0.45;

        victim.root.position.set(1.2, 0, 0.2);
        victim.root.rotation.y = -Math.PI / 2;
        victim.head.rotation.x = 0.0;
      }

      // ==========================================
      // Scene 5: Penanganan (Lapor Guru BK)
      // ==========================================
      else if (sceneIdx === 5) {
        teacher.root.visible = true;
        victim.root.visible = true;
        bystander.root.visible = true;

        teacher.root.position.set(1.4, 0, 0);
        teacher.root.rotation.y = -Math.PI / 2.2;
        teacher.head.rotation.x = Math.sin(t * 1.8) * 0.06 + 0.08; // empathetic nod

        victim.root.position.set(-0.9, 0, 0.3);
        victim.root.rotation.y = Math.PI / 2.5;

        bystander.root.position.set(-1.7, 0, 0.2);
        bystander.root.rotation.y = Math.PI / 2.8;
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
      <div className="bg-slate-900 text-white p-2 flex items-center gap-1.5 overflow-x-auto cartoon-scroll">
        {SCENES_DATA.map((sc, idx) => (
          <button
            key={sc.id}
            onClick={() => handleSelectScene(idx)}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all whitespace-nowrap flex items-center gap-1.5 border ${
              currentSceneIdx === idx
                ? `${sc.badgeColor} text-white border-white shadow-md scale-105`
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <span>{sc.id.toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* 3D Canvas with High Definition Tone Mapping */}
      <div className="relative flex-1 min-h-[290px] w-full bg-slate-100 overflow-hidden group">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Orbit Hint */}
        <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none shadow">
          <Eye size={12} className="text-sky-400" />
          <span>Putar 3D: geser mouse / layar</span>
        </div>

        {/* Scene Title Badge */}
        <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow border border-slate-300 flex items-center gap-1.5">
          <span className={`w-2 h-2 rounded-full ${curScene.badgeColor} animate-ping`} />
          <span className="text-xs font-black text-slate-900">{curScene.badge}</span>
        </div>

        {/* Floating Dialogue Bubble Indicator */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/95 border-2 border-slate-900 px-3.5 py-1.5 rounded-2xl shadow-xl text-center max-w-xs pointer-events-none animate-float-gentle">
          <span className="text-[11px] font-black text-slate-900 block leading-tight">
            💬 "{curScene.speechBully}"
          </span>
        </div>

        {/* Playback Controls Floating Bar */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/90 backdrop-blur-md text-white px-4 py-1.5 rounded-2xl flex items-center gap-3 shadow-2xl border border-slate-700">
          <button
            onClick={handleTogglePlay}
            className="p-1.5 hover:bg-white/20 rounded-xl transition text-white"
            title={isPlaying ? 'Jeda Animasi' : 'Putar Animasi'}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} fill="white" />}
          </button>

          <button
            onClick={handleReplay}
            className="p-1.5 hover:bg-white/20 rounded-xl transition text-slate-300 hover:text-white"
            title="Ulangi Animasi"
          >
            <RotateCcw size={15} />
          </button>

          <div className="h-3 w-px bg-slate-700" />

          {/* Speed */}
          <div className="flex items-center gap-1 text-[11px] font-black">
            {[0.5, 1, 1.5].map((s) => (
              <button
                key={s}
                onClick={() => { playClickSound(); setSpeed(s); }}
                className={`px-1.5 py-0.5 rounded-md transition ${
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
      <div className="p-3.5 bg-white border-t-2 border-slate-800 transition-all">
        <div className="flex items-start gap-2">
          <div className="p-1.5 rounded-xl bg-blue-100 text-blue-900 shrink-0 mt-0.5 border border-blue-300">
            <Info size={16} />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-black text-xs text-slate-900">{curScene.title}</h4>
            <p className="text-[11px] text-slate-700 leading-snug">{curScene.description}</p>
            <div className="pt-0.5 text-[11px] font-bold text-rose-700">
              {curScene.moral}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
