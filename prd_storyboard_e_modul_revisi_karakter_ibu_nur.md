# PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Project Name:** E-Modul Interaktif: Stop Bullying, Start Caring
**Platform:** Web Application
**Tech Stack (Proposed):** React.js, React Three Fiber (untuk rendering `.glb`), Framer Motion (untuk animasi UI & transisi), Tailwind CSS (untuk *styling*).

## 1. Product Overview
### 1.1 Objective
Membangun E-Modul interaktif berbasis web berjumlah 30 halaman (termasuk *cover* dan kuis) yang mengedukasi siswa sekolah mengenai pencegahan perundungan (*bullying*). Aplikasi ini menggabungkan materi teks, evaluasi mandiri, dan visual karakter 3D (berformat `.glb`) yang beranimasi untuk menjelaskan materi secara interaktif.

### 1.2 Target Audience
Siswa usia remaja (SMP usia 12–15 tahun), serta guru dan fasilitator kesehatan sekolah sebagai pendamping pembelajaran.

## 2. Fitur & Kebutuhan Utama (Core Requirements)
### 2.1 Navigasi Halaman (*Page Navigation*)
*   **Mekanisme:** Sistem navigasi sekuensial (Halaman *Cover* hingga Halaman 30).
*   **UI Controls:** Tombol "Next" dan "Previous" dengan dukungan gestur geser (*swipe*) di perangkat *mobile*.
*   **Transisi:** Efek membalik halaman (*Page Flip*) atau *sliding transition* yang halus.

### 2.2 Integrasi Objek 3D & Animasi Karakter
*   **Aset 3D:** Menggunakan 4 karakter berformat `.glb` (Bima, Dito, Sari, dan Ibu Nur) lengkap dengan *rigging* animasi.
*   **State Animasi:** Membutuhkan animasi dasar dan emosional: `idle`, `talking`, `pointing`, `crying`/`sad`, `angry`, `cheering`, dan `brave/fist-pump`.
*   **Penempatan:** Karakter ditempatkan di sisi kiri/kanan halaman, menyesuaikan *layout* teks.

### 2.3 Sistem *Bubble Chat* (Dialog Interaktif)
*   **Mekanisme:** Penjelasan materi disampaikan melalui *bubble chat* bergaya komik yang muncul dari karakter.
*   **Animasi:** Teks muncul dengan efek *typing* lambat atau *fade-in*, disinkronkan dengan durasi animasi `talking` karakter.

### 2.4 Kuis Interaktif & Fitur Spesifik
*   **Kuis:** Evaluasi di akhir setiap sub-bab (Pilihan Ganda, Mencocokkan, Studi Kasus, Benar/Salah). Memberikan *feedback* instan (Benar/Salah).
*   **Ikrar Komitmen (Hal 30):** Tombol interaktif untuk menyetujui komitmen. Saat diklik, memicu animasi *confetti* (partikel perayaan).

## 3. Rekomendasi Teknis (React Implementation)
*   **Render 3D:** Gunakan `@react-three/fiber` dan `@react-three/drei` (`<useGLTF>` untuk meload model, `<useAnimations>` untuk *trigger* klip animasi).
*   **Manajemen State:** Gunakan `Zustand` untuk melacak `currentPage` secara global agar status karakter sinkron dengan UI teks.
*   **Data Struktur:** Gunakan file JSON (`scenario.json`) untuk memetakan teks dialog, karakter yang aktif, dan status animasinya per halaman.

---

# FULL STORYBOARD & SCRIPT DIALOG (30 HALAMAN)

**Karakter Pendukung:**
1.  **Bima:** Energik, spontan, kadang pemarah jika melihat ketidakadilan.
2.  **Dito:** Pendiam, sensitif, pemalu, sering menjadi target perundungan (korban).
3.  **Sari:** Cerdas, empatik, penengah, saksi yang berani bertindak (*bystander* aktif).
4.  **Ibu Nur (Nakes):** Tenaga kesehatan sekolah (perawat/bidan/dokter) yang empatis. Memberikan edukasi terkait dampak fisik dan mental dari perundungan serta pendampingan pemulihan.

### COVER E-MODUL
*   **Visual UI:** Teks judul besar "E-MODUL: STOP BULLYING, START CARING".
*   **Animasi 3D:** Keempat karakter (Bima, Dito, Sari, Ibu Nur) berdiri berjejer menghadap depan. 
*   **Status Animasi:** Semua karakter `idle_smile`.

---

### SUB-BAB 01: MENGENAL BULLYING
**Halaman 1 (Cover Sub-Bab)**
*   **Visual UI:** Judul besar "SUB-BAB 01: Mengenal Bullying". Tidak ada karakter 3D.

**Halaman 2 (Judul Center)**
*   **Visual UI:** Teks judul di tengah "Apa itu Bullying?".
*   **Animasi 3D:** Ibu Nur di area bawah tengah.
*   **Status Animasi:** Ibu Nur `idle_smile`. Tidak ada dialog.

**Halaman 3 (Dialog 2 Karakter)**
*   **Animasi 3D:** Bima (kiri) dan Dito (kanan).
*   **Status Animasi:** Bima `talking_confused`, Dito `talking_explain`.
*   **Bubble Bima:** "Dit, perundungan atau *bullying* itu sebenarnya apa, sih? Sama nggak kayak berantem biasa?"
*   **Bubble Dito:** "Beda, Bim. *Bullying* itu kekerasan yang sengaja dilakukan berulang-ulang buat nyakitin orang lain. Biasanya yang ngelakuin ngerasa lebih kuat dan korbannya nggak berdaya."

**Halaman 4 (Penjelasan 1 Karakter)**
*   **Animasi 3D:** Ibu Nur (kanan/kiri).
*   **Status Animasi:** Ibu Nur `talking_pointing` (menunjuk materi/papan).
*   **Bubble Ibu Nur:** "Tepat sekali, Dito! Sebagai tenaga kesehatan, Ibu melihat ada 6 karakteristik utama bullying: dilakukan berulang, ada niat menyakiti, ketidakseimbangan kekuatan, korban sulit membela diri, bentuknya beragam, dan dampaknya sangat serius bagi fisik maupun mental."

**Halaman 5 (Kuis)**
*   **Visual UI:** Kuis Pilihan Ganda.
*   **Pertanyaan:** "Berdasarkan tahap perkembangan remaja, usia berapakah yang secara statistik paling banyak melakukan perilaku bullying?"
*   **Opsi:** A) 10-11 tahun, B) 12-14 tahun, C) 18-21 tahun. (Kunci: B).

---

### SUB-BAB 02: BENTUK DAN CONTOH BULLYING
**Halaman 6 (Cover Sub-Bab)**
*   **Visual UI:** Judul besar "SUB-BAB 02: Bentuk dan Contoh Bullying".

**Halaman 7 (Judul Center)**
*   **Visual UI:** Teks judul di tengah "5 Bentuk Utama Bullying".
*   **Animasi 3D:** Sari di area bawah tengah, memegang HP.
*   **Status Animasi:** Sari `idle_reading_phone`.

**Halaman 8 (Dialog 2 Karakter)**
*   **Animasi 3D:** Bima (kiri) dan Sari (kanan).
*   **Status Animasi:** Bima `talking_angry` (sedikit marah/tegas), Sari `talking_explain`.
*   **Bubble Bima:** "*Bullying* fisik itu gampang kelihatan, kayak memukul atau merusak barang. Tapi, ngasih julukan jelek ke teman itu juga dihitung *bullying* (verbal), kan?"
*   **Bubble Sari:** "Iya, Bim! Belum lagi *bullying* relasional yang tersembunyi. Contohnya, sengaja mengucilkan teman dari kelompok atau menatap sinis biar dia merasa terasingkan."

**Halaman 9 (Penjelasan 1 Karakter)**
*   **Animasi 3D:** Dito (memegang HP).
*   **Status Animasi:** Dito `sad_holding_phone`.
*   **Bubble Dito:** "Satu lagi yang paling seram saat ini: *Cyberbullying*. Pelakunya sering pakai akun palsu buat nyebar foto tanpa izin, neror, atau nulis komentar kebencian di medsos kita. Jejak digitalnya sulit hilang..."

**Halaman 10 (Kuis)**
*   **Visual UI:** Kuis Mencocokkan (Drag & Drop / Garis).
*   **Soal:** Cocokkan tindakan berikut dengan jenis bullying-nya!
    *   Memukul -> Fisik
    *   Membuat akun palsu untuk mengejek -> Siber
    *   Mengucilkan teman -> Relasional
    *   Memberi julukan kasar -> Verbal

---

### SUB-BAB 03: PELAKU, KORBAN, DAN DAMPAK BULLYING
**Halaman 11 (Cover Sub-Bab)**
*   **Visual UI:** Judul besar "SUB-BAB 03: Pelaku, Korban, dan Dampak Bullying".

**Halaman 12 (Judul Center)**
*   **Visual UI:** Teks "Siapa Saja yang Terlibat & Apa Dampaknya?".
*   **Animasi 3D:** Bima dan Dito berdiri saling membelakangi.
*   **Status Animasi:** Bima `idle_confident`, Dito `idle_sad_looking_down`.

**Halaman 13 (Dialog 2 Karakter - Emosional)**
*   **Animasi 3D:** Sari (kiri) dan Dito (kanan).
*   **Status Animasi:** Dito `crying_wiping_tears` (menangis mengusap air mata), Sari `talking_comforting` (menenangkan).
*   **Bubble Dito (sambil menangis):** "Sari, jadi korban itu berat banget... Rasanya selalu cemas, takut masuk sekolah, depresi, sampai ngerasa nggak berharga..."
*   **Bubble Sari:** "Kamu nggak sendirian, Dit! Saksi (*bystander*) pasif itu sama buruknya. Sebagai saksi aktif, aku pasti bakal temenin kamu dan berani lapor!"

**Halaman 14 (Penjelasan 1 Karakter)**
*   **Animasi 3D:** Ibu Nur.
*   **Status Animasi:** Ibu Nur `talking_serious` (wajah tegas/serius).
*   **Bubble Ibu Nur:** "Ibu sering merawat luka fisik korban, tapi luka mentalnya jauh lebih dalam. Tidak hanya menghancurkan korban dengan depresi dan trauma, dampak *bullying* bagi pelaku juga sangat fatal. Pelaku bisa kehilangan empati dan sangat berisiko terjerumus pada tindakan kriminal di masa depan."

**Halaman 15 (Kuis)**
*   **Visual UI:** Kuis Drag & Drop (Faktor Internal vs Eksternal).
*   **Soal:** Pisahkan mana yang merupakan penyebab internal dan eksternal! (Internal: Egoisme, emosi tidak stabil; Eksternal: Lingkungan keluarga keras, pengaruh media sosial).

---

### SUB-BAB 04: UPAYA PENCEGAHAN BULLYING
**Halaman 16 (Cover Sub-Bab)**
*   **Visual UI:** Judul besar "SUB-BAB 04: Upaya Pencegahan Bullying".

**Halaman 17 (Judul Center)**
*   **Visual UI:** Teks "Bagaimana Cara Mencegahnya?".
*   **Animasi 3D:** Sari merangkul/berdiri dekat Dito.
*   **Status Animasi:** Keduanya `idle_smile_friends`.

**Halaman 18 (Dialog 2 Karakter)**
*   **Animasi 3D:** Bima (kiri) dan Sari (kanan).
*   **Status Animasi:** Bima `talking_energetic`, Sari `talking_agree`.
*   **Bubble Bima:** "Pencegahan *bullying* itu tanggung jawab kita semua kan, Sar? Bukan cuma tugas guru dan tenaga kesehatan aja."
*   **Bubble Sari:** "Betul! Kita sebagai siswa harus mulai dari hal kecil: menanamkan empati, saling menghargai perbedaan, dan menciptakan suasana kelas yang inklusif (ramah untuk semua)."

**Halaman 19 (Penjelasan 1 Karakter)**
*   **Animasi 3D:** Ibu Nur.
*   **Status Animasi:** Ibu Nur `talking_explaining_board`.
*   **Bubble Ibu Nur:** "Selain kepedulian kalian, sekolah juga memiliki langkah wajib, seperti mengadakan sosialisasi rutin, membentuk tim Satgas Anti-Bullying, dan menegakkan aturan yang tegas. Kami di ruang kesehatan juga selalu siap memberikan sosialisasi dan mendampingi pemulihan korban."

**Halaman 20 (Kuis)**
*   **Visual UI:** Kuis Multiple Choice.
*   **Pertanyaan:** "Langkah pencegahan apa yang bisa dilakukan siswa di kelas?" (Jawaban yang benar: Membela teman yang dikucilkan dan melaporkan kepada guru/nakes).

---

### SUB-BAB 05: CARA MENGHADAPI DAN MELAPORKAN BULLYING
**Halaman 21 (Cover Sub-Bab)**
*   **Visual UI:** Judul besar "SUB-BAB 05: Cara Menghadapi & Melaporkan Bullying".

**Halaman 22 (Judul Center)**
*   **Visual UI:** Teks "Berani Bertindak dan Lapor!".
*   **Animasi 3D:** Dito mengepalkan tangan ke atas.
*   **Status Animasi:** Dito `idle_brave_fist_pump` (menunjukkan keberanian).

**Halaman 23 (Dialog 2 Karakter)**
*   **Animasi 3D:** Sari (kiri) dan Dito (kanan).
*   **Status Animasi:** Sari `talking_instructing`, Dito `talking_confident`.
*   **Bubble Sari:** "Dit, kalau ada yang ganggu kamu lagi, tatap matanya dan bilang 'TIDAK' dengan tegas! Habis itu, langsung lari ke tempat yang aman atau cari guru."
*   **Bubble Dito:** "Oke, Sar! Kalau mereka neror lewat chat, aku nggak akan hapus pesannya, tapi aku *screenshot* dulu sebagai bukti buat dilaporin ke guru atau Ibu Nur."

**Halaman 24 (Penjelasan 1 Karakter)**
*   **Animasi 3D:** Ibu Nur.
*   **Status Animasi:** Ibu Nur `talking_reassuring` (wajah menenangkan/tersenyum).
*   **Bubble Ibu Nur:** "Jangan pernah takut dianggap 'pengadu'. Segera laporkan ke Guru, BK, atau langsung ke ruang Ibu di UKS/Puskesmas. Kami akan mencatat laporan, mengklarifikasi secara objektif, mendampingi pemulihan mental dan fisik korban, serta membina pelakunya agar jera."

**Halaman 25 (Kuis)**
*   **Visual UI:** Studi Kasus.
*   **Pertanyaan:** "Kamu melihat Dito dikunci di dalam toilet oleh kakak kelas. Apa tindakan paling tepat sebagai saksi (*bystander*) yang aktif?" (Jawaban: Segera memanggil guru piket, satpam, atau petugas sekolah lainnya).

---

### SUB-BAB 06: EVALUASI DAN KOMITMEN STOP BULLYING
**Halaman 26 (Cover Sub-Bab)**
*   **Visual UI:** Judul besar "SUB-BAB 06: Evaluasi dan Komitmen Stop Bullying".

**Halaman 27 (Judul Center)**
*   **Visual UI:** Teks "Waktunya Refleksi Diri".
*   **Animasi 3D:** Keempat karakter melambaikan tangan / bersorak.
*   **Status Animasi:** Semua karakter `cheering_happy`.

**Halaman 28 (Dialog 2 Karakter)**
*   **Animasi 3D:** Bima (kiri) dan Dito (kanan).
*   **Status Animasi:** Bima `talking_reflective` (berpikir), Dito `talking_smile`.
*   **Bubble Bima:** "Coba kita pikir-pikir lagi, pernah nggak ya gurauan kita tanpa sadar menyakiti hati atau fisik teman?"
*   **Bubble Dito:** "Iya, Bim. Makanya penting banget buat ngebayangin gimana rasanya kalau kita yang ada di posisi korban. Harus lebih jaga lisan dan perbuatan."

**Halaman 29 (Evaluasi Mandiri)**
*   **Visual UI:** Layout terbagi, atas berisi 3D, bawah berisi form 5 pertanyaan.
*   **Animasi 3D:** Ibu Nur di bagian atas tengah.
*   **Status Animasi:** Ibu Nur `idle_smile`.
*   **Bubble Ibu Nur:** "Mari kita uji pemahaman kalian! Jawablah 5 pertanyaan Benar atau Salah di bawah ini dengan jujur untuk melihat seberapa peduli kita."
*   **Konten UI:**
    1. Bullying adalah konflik biasa yang terjadi satu kali. (Salah)
    2. Mengucilkan teman termasuk Bullying Relasional. (Benar)
    3. Remaja 12-14 tahun rentan melakukan bullying. (Benar)
    4. Saksi harus diam agar tidak jadi sasaran. (Salah)
    5. Melapor ke guru atau nakes sekolah adalah tindakan tepat. (Benar)

**Halaman 30 (Ikrar Komitmen)**
*   **Visual UI:** 
    *   Teks "IKRAR KOMITMEN SISWA".
    *   Isi janji: 
        1) Menghargai perbedaan. 
        2) Menolak segala bentuk bullying. 
        3) Menunjukkan kepedulian (Start Caring). 
        4) Berani melaporkan tindakan perundungan.
    *   Tombol interaktif besar: "SAYA BERKOMITMEN: STOP BULLYING, START CARING!".
*   **Aksi:** Saat *user* (siswa) mengklik tombol, muncul animasi partikel *confetti* di seluruh layar.
*   **Animasi Tambahan:** Jika memungkinkan, setelah tombol diklik, karakter 3D muncul di sudut layar melakukan gaya *thumbs up* (jempol) atau tepuk tangan.