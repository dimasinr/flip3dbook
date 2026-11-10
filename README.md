# E-Modul Interaktif: Stop Bullying, Start Caring
### MTs SA Riyadul Bayan (YAPIRA)
**Kenali • Cegah • Peduli**

Aplikasi Web E-Modul Edukasi Pencegahan Bullying berbasis **Interactive 3D Flipbook**, **Simulasi Karakter 3D (Three.js)**, dan **Interactive Mini Games**.

---

## 🌟 Fitur Utama Sesuai PRD

1. **3D Flipbook Navigation (FR-01, FR-03):**
   - Efek membalik halaman 3D interaktif yang menyerupai buku fisik asli.
   - Mendukung gesture **swipe (touchscreen & mouse drag)**, tombol navigasi Previous/Next, sudut lipatan halaman (*page curl dog-ear*), dan tombol pintasan keyboard (Arrow Left/Right).
   - Efek suara realistis (*paper rustle / page whoosh*) via Web Audio API tanpa latensi.

2. **Cover & Menu Daftar Isi Interaktif (FR-01, FR-02):**
   - Halaman Cover 3D modern dengan tombol **"Mulai Membaca"**, lencana anti-bullying animasi, dan identitas madrasah.
   - **Daftar Isi Interaktif** yang dapat dibuka kapan saja melalui bilah navigasi atas untuk berpindah langsung (*instant jump*) ke bab mana pun.

3. **Simulasi Animasi Karakter 3D (Three.js) (FR-05):**
   - Model manusia 3D lengkap (Pelaku, Korban, Saksi/Upstander dengan seragam madrasah & hijab, Guru BK formal).
   - 6 Adegan simulasi interaktif:
     1. **Bullying Fisik:** Mendorong & mengintimidasi teman hingga terhuyung.
     2. **Bullying Verbal:** Mengejek, menunjuk, dan menertawakan julukan buruk.
     3. **Bullying Sosial:** Mengucilkan teman dari kelompok, membelakangi dan berbisik.
     4. **Cyberbullying:** Mengetik pesan teror digital di ponsel dengan efek layar peringatan.
     5. **Aksi Pencegahan (Upstander):** Saksi berani maju ke depan menghadang pelaku dan merangkul bahu korban.
     6. **Alur Penanganan:** Korban dan saksi melapor resmi kepada Guru BK yang mendengarkan dengan empati.
   - Kontrol pemutaran: **Play, Pause, Replay, Pengaturan Kecepatan (0.5x, 1x, 1.5x), dan Orbit Kamera 360°**.

4. **4 Mini Games Edukatif Interaktif (Bukan Sekadar Kuis!) (FR-06):**
   - **Game 1: Detektif Bullying:** Klasifikasi cepat kasus-kasus sekolah ke dalam 4 kategori (Fisik, Verbal, Sosial, Cyber) dengan sistem combo multiplier & sound effect.
   - **Game 2: Cyber Shield Defender:** Game aksi refleks menangkis pesan perundungan siber yang masuk di media sosial ponsel dan mengubahnya menjadi kata-kata positif.
   - **Game 3: Dilema Upstander (Choose Your Own Path):** Simulasi skenario cerita berantai dengan meteran Keberanian, Empati, dan Keamanan yang menentukan konsekuensi akhir.
   - **Game 4: Mitos vs Fakta:** Pematah mitos perundungan dengan feedback penjelasan komprehensif.

5. **Sistem Evaluasi & Sertifikat Duta (FR-07, FR-08, FR-09, FR-10):**
   - **Pretest (10 Pertanyaan Ya/Tidak)** untuk mengukur pengetahuan dasar sebelum membaca materi.
   - **Posttest (10 Soal Pilihan Ganda)** dengan pembahasan lengkap dan perbandingan otomatis peningkatan nilai (*Score Delta*).
   - **Ruang Refleksi Diri & Ikrar Pelajar** dengan penyimpanan lokal (localStorage).
   - **Sertifikat Kelulusan Resmi Duta Anti-Bullying YAPIRA** yang dapat langsung dicetak atau disimpan ke PDF.

---

## 🚀 Cara Menjalankan Aplikasi

```bash
# Jalankan mode pengembangan
npm run dev

# Jalankan build produksi
npm run build

# Pratinjau build produksi
npm run preview
```
Buka browser pada alamat yang ditampilkan (contoh: `http://localhost:3000`).

