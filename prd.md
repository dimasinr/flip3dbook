# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## E-MODUL EDUKASI PENCEGAHAN BULLYING
### STOP BULLYING, START CARING
**Kenali • Cegah • Peduli**

**Versi:** 1.0  
**Platform:** Web Application  
**Target Pengguna:** Siswa MTsN SA Riyadul Bayan (YAPIRA)  
**Jenis Produk:** Interactive 3D Flipbook Educational Web Application

---

# 1. PRODUCT OVERVIEW

## 1.1 Latar Belakang

Bullying atau perundungan merupakan salah satu permasalahan yang dapat terjadi di lingkungan sekolah. Perilaku bullying dapat memberikan dampak negatif terhadap kondisi psikologis, emosional, fisik, sosial, dan akademik siswa.

Penyampaian edukasi mengenai pencegahan bullying membutuhkan media pembelajaran yang menarik, interaktif, dan mudah dipahami oleh siswa.

Oleh karena itu, dikembangkan sebuah e-modul edukasi berbasis web dengan konsep 3D PageFlip dan Mini Games berjudul "Stop Bullying, Start Caring".

Aplikasi ini menggabungkan pengalaman membaca buku digital dengan animasi karakter 3D yang memperagakan situasi bullying serta permainan edukatif untuk meningkatkan pemahaman siswa.

## 1.2 Product Vision

Membangun media pembelajaran digital yang interaktif, menarik, dan edukatif untuk membantu siswa mengenali, memahami, mencegah, dan menangani perilaku bullying melalui pengalaman belajar berbasis buku 3D, animasi karakter, dan mini games.

## 1.3 Product Objectives

1. Memberikan pemahaman kepada siswa mengenai pengertian dan karakteristik bullying.
2. Membantu siswa mengenali berbagai bentuk bullying melalui simulasi karakter 3D.
3. Memberikan pemahaman mengenai faktor penyebab dan dampak bullying.
4. Mengajarkan siswa mengenai peran pelaku, korban, dan saksi.
5. Meningkatkan kesadaran siswa mengenai tindakan pencegahan dan penanganan bullying.
6. Meningkatkan keterlibatan siswa melalui mini games interaktif.
7. Mengukur perubahan pemahaman siswa melalui pretest dan posttest.

---

# 2. TARGET USERS

## 2.1 Primary Users

**Siswa MTsN SA Riyadul Bayan (YAPIRA)**

Karakteristik pengguna:
- Berada pada usia remaja.
- Memiliki kemampuan menggunakan smartphone, laptop, atau komputer.
- Membutuhkan media pembelajaran yang menarik dan mudah dipahami.
- Menyukai pengalaman belajar visual dan interaktif.

## 2.2 Secondary Users

**Guru dan Pendamping**

Kebutuhan:
- Menggunakan e-modul sebagai media edukasi.
- Mendampingi siswa dalam memahami materi bullying.
- Menggunakan hasil pretest dan posttest sebagai bahan evaluasi pembelajaran.

---

# 3. PRODUCT SCOPE

## 3.1 In Scope

Fitur yang menjadi bagian dari pengembangan aplikasi:

1. Interactive 3D Book Cover.
2. Opening Book Animation.
3. Kata Pengantar.
4. Daftar Isi Interaktif.
5. 3D PageFlip Navigation.
6. Materi Edukasi Bullying.
7. 3D Character Animation.
8. Interactive Mini Games.
9. Pretest.
10. Posttest.
11. Refleksi Diri.
12. Learning Progress dan Score.
13. Navigation Back to Home.
14. Responsive Web Design.

## 3.2 Out of Scope

Fitur yang belum menjadi prioritas pada versi pertama:

- Sistem login dan registrasi pengguna.
- Dashboard administrasi guru.
- Penyimpanan data siswa berbasis server.
- Multiplayer games.
- Chat antar pengguna.
- Sistem pelaporan bullying secara langsung ke pihak sekolah.

---

# 4. INFORMATION ARCHITECTURE

Struktur utama aplikasi:

1. Cover / Landing Page
2. Kata Pengantar
3. Daftar Isi
4. Pendahuluan
5. Pretest
6. Mengenal Bullying
7. Bentuk-Bentuk Bullying
8. Faktor Penyebab Bullying
9. Dampak Bullying
10. Siapa Saja yang Terlibat?
11. Cara Mencegah Bullying
12. Ayo Bertindak: Cara Menangani Bullying
13. Rangkuman dan Refleksi Diri
14. Posttest dan Evaluasi
15. Penutup

Struktur materi mengikuti dokumen sumber e-modul "Stop Bullying, Start Caring".

---

# 5. USER FLOW

## 5.1 Main User Flow

Pengalaman pengguna dimulai dari halaman cover buku 3D.

Alur penggunaan:

1. Siswa membuka aplikasi melalui browser.
2. Sistem menampilkan cover buku 3D.
3. Siswa menekan tombol "Mulai Membaca".
4. Buku terbuka dengan animasi 3D.
5. Sistem menampilkan Kata Pengantar.
6. Siswa berpindah ke halaman Daftar Isi.
7. Siswa memilih judul materi.
8. Sistem menampilkan penjelasan materi.
9. Sistem menampilkan animasi karakter 3D sesuai materi.
10. Siswa melanjutkan dengan swipe atau tombol Next Page.
11. Sistem menampilkan mini games interaktif.
12. Siswa menyelesaikan permainan.
13. Sistem menampilkan feedback dan skor.
14. Siswa melanjutkan materi berikutnya.
15. Siswa mengerjakan posttest.
16. Sistem menampilkan hasil evaluasi.
17. Siswa dapat kembali ke cover atau daftar isi.

## 5.2 Navigation Flow

Setiap halaman harus menyediakan navigasi yang mudah digunakan.

- Home: kembali ke cover awal.
- Daftar Isi: kembali ke menu materi.
- Previous: kembali ke halaman sebelumnya.
- Next: melanjutkan ke halaman berikutnya.
- Replay: mengulang animasi karakter.
- Play/Pause: mengontrol animasi.
- Back to Materi: kembali ke menu daftar materi.

---

# 6. FUNCTIONAL REQUIREMENTS

## FR-01: Landing Page / Cover Buku 3D

**Deskripsi:**

Sistem menampilkan halaman pembuka berupa cover buku digital.

**Requirements:**
- Menampilkan judul STOP BULLYING, START CARING.
- Menampilkan subtitle Kenali • Cegah • Peduli.
- Menampilkan ilustrasi karakter 3D.
- Memiliki tombol Mulai Membaca.
- Memiliki animasi buku ketika dibuka.

**Acceptance Criteria:**
- Pengguna dapat melihat cover sebelum masuk ke materi.
- Tombol Mulai Membaca dapat membuka buku.
- Animasi pembukaan berjalan dengan baik.

## FR-02: Interactive Table of Contents

**Deskripsi:**

Sistem menyediakan daftar isi yang dapat digunakan untuk memilih materi.

**Requirements:**
- Menampilkan seluruh judul materi.
- Setiap judul dapat diklik.
- Klik judul akan membuka materi yang dipilih.
- Menampilkan indikator materi aktif.

**Acceptance Criteria:**
- Semua judul materi dapat diakses.
- Pengguna tidak harus membuka halaman secara berurutan untuk memilih materi.

## FR-03: 3D PageFlip Navigation

**Deskripsi:**

Sistem menyediakan pengalaman membaca buku digital dengan efek membalik halaman.

**Requirements:**
- Mendukung swipe kanan dan kiri.
- Mendukung tombol Previous dan Next.
- Memiliki animasi page flip.
- Menampilkan nomor halaman.
- Menyediakan tombol kembali ke cover.
- Menyediakan tombol kembali ke daftar isi.

**Acceptance Criteria:**
- Halaman dapat dibalik dengan lancar.
- Navigasi tidak menyebabkan halaman kosong atau kehilangan konten.
- Tombol navigasi bekerja pada desktop dan smartphone.

## FR-04: Educational Learning Content

**Deskripsi:**

Sistem menampilkan materi edukasi berdasarkan PDF yang telah disediakan.

**Materi meliputi:**

- Pendahuluan.
- Mengenal Bullying.
- Bentuk-Bentuk Bullying.
- Faktor Penyebab Bullying.
- Dampak Bullying.
- Siapa Saja yang Terlibat?
- Cara Mencegah Bullying.
- Cara Menangani Bullying.
- Rangkuman dan Refleksi Diri.
- Posttest dan Evaluasi.

**Requirements:**
- Materi ditampilkan dengan bahasa yang mudah dipahami.
- Menggunakan heading dan paragraf yang terstruktur.
- Memiliki ilustrasi atau simulasi pendukung.
- Konten dapat dibaca dengan nyaman.

## FR-05: 3D Character Animation

**Deskripsi:**

Sistem menampilkan karakter manusia 3D yang dapat memperagakan berbagai situasi bullying.

**Karakter utama:**

1. Pelaku (Bully).
2. Korban (Victim).
3. Saksi (Bystander).
4. Guru/Pendamping.

**Jenis animasi:**

| Jenis | Simulasi |
|---|---|
| Bullying fisik | Mendorong atau menghalangi jalan teman |
| Bullying verbal | Mengejek dan memberikan julukan buruk |
| Bullying sosial | Mengucilkan teman dari kelompok |
| Cyberbullying | Memperlihatkan pesan hinaan melalui smartphone |
| Pencegahan | Saksi membantu korban |
| Penanganan | Siswa melapor kepada guru |

**Animation Controls:**
- Play Animation.
- Pause Animation.
- Replay Animation.
- Switch Scene.

**Acceptance Criteria:**
- Karakter memiliki bentuk tubuh manusia 3D.
- Karakter dapat melakukan gerakan sesuai adegan.
- Setiap adegan memiliki penjelasan edukatif.
- Animasi tidak menampilkan kekerasan grafis.
- Karakter dan kostum konsisten pada seluruh materi.

## FR-06: Interactive Mini Games

**Deskripsi:**

Sistem menyediakan permainan interaktif setelah siswa mempelajari materi tertentu.

**Jenis permainan:**

**A. Tebak Jenis Bullying**

Siswa melihat ilustrasi atau animasi, kemudian memilih jenis bullying yang sesuai.

Contoh:
- Memukul teman → Bullying fisik.
- Mengejek teman → Bullying verbal.
- Mengucilkan teman → Bullying sosial.
- Menghina melalui media sosial → Cyberbullying.

**B. Pilih Tindakan yang Tepat**

Siswa diberikan sebuah situasi dan harus menentukan tindakan yang benar.

Contoh:
"Jika kamu melihat teman sedang diejek oleh kelompok lain, apa yang harus kamu lakukan?"

Pilihan:
- Ikut tertawa.
- Merekam kejadian.
- Mendampingi korban dan melapor kepada guru.
- Membiarkan kejadian.

**C. True or False**

Siswa menentukan apakah pernyataan mengenai bullying benar atau salah.

**D. Studi Kasus Interaktif**

Siswa diberikan sebuah kasus dan diminta menentukan tindakan yang tepat sebagai saksi, korban, atau pelaku.

**Game Requirements:**
- Menampilkan instruksi permainan.
- Menyediakan pilihan jawaban interaktif.
- Memberikan feedback benar atau salah.
- Menghitung skor.
- Menampilkan hasil permainan.
- Menyediakan tombol bermain kembali.

## FR-07: Pretest

**Deskripsi:**

Digunakan untuk mengukur pemahaman awal siswa sebelum mempelajari materi.

**Requirements:**
- Menggunakan 10 pertanyaan Ya/Tidak.
- Setiap pertanyaan memiliki jawaban benar.
- Sistem menghitung skor.
- Hasil disimpan selama sesi pembelajaran.

## FR-08: Posttest

**Deskripsi:**

Digunakan untuk mengevaluasi pemahaman siswa setelah mempelajari seluruh materi.

**Requirements:**
- Menggunakan 10 soal pilihan ganda.
- Setiap soal memiliki empat pilihan jawaban.
- Sistem menghitung skor otomatis.
- Sistem menampilkan feedback.
- Hasil dapat dibandingkan dengan pretest.

## FR-09: Reflection Page

**Deskripsi:**

Sistem menyediakan halaman refleksi diri.

Pertanyaan refleksi:
- Apakah saya pernah bercanda dengan teman sampai membuatnya tidak nyaman?
- Apa yang akan saya lakukan jika melihat teman diejek atau dikucilkan?
- Bagaimana cara saya menunjukkan rasa hormat kepada teman yang berbeda?
- Siapa orang dewasa yang dapat saya hubungi jika mengalami atau melihat bullying?
- Apa satu tindakan nyata yang akan saya lakukan untuk membuat kelas lebih aman?

## FR-10: Learning Progress and Score

**Deskripsi:**

Sistem menampilkan perkembangan pembelajaran siswa.

**Requirements:**
- Menampilkan skor pretest.
- Menampilkan skor posttest.
- Menampilkan skor mini games.
- Menampilkan ringkasan hasil pembelajaran.
- Memberikan feedback berdasarkan hasil evaluasi.

## FR-11: Responsive Web Application

**Deskripsi:**

Aplikasi harus dapat digunakan melalui berbagai perangkat.

**Requirements:**
- Mendukung desktop.
- Mendukung laptop.
- Mendukung tablet.
- Mendukung smartphone.
- Tampilan menyesuaikan ukuran layar.

---

# 7. UI/UX REQUIREMENTS

## 7.1 Visual Design

Konsep visual yang digunakan:

**Theme:** Modern Educational 3D.

**Color Palette:**
- Navy Blue: warna utama.
- Sky Blue: warna pendukung.
- White/Cream: latar halaman buku.
- Soft Green: elemen positif dan kepedulian.
- Warm Yellow: tombol interaksi dan highlight.

## 7.2 Typography

Menggunakan font yang:
- Mudah dibaca.
- Ramah untuk remaja.
- Memiliki hierarki heading yang jelas.

Rekomendasi: Nunito.

## 7.3 Interaction Design

Interaksi utama:
- Klik untuk memilih materi.
- Swipe untuk membalik halaman.
- Klik Play untuk memulai animasi.
- Klik pilihan jawaban untuk bermain.
- Klik tombol navigasi untuk berpindah halaman.

## 7.4 User Experience

Aplikasi harus:
- Mudah dipahami pengguna baru.
- Tidak memiliki navigasi yang membingungkan.
- Memiliki feedback setiap interaksi.
- Menyediakan akses kembali ke daftar isi.
- Tidak mengharuskan pengguna melakukan registrasi pada versi pertama.

---

# 8. TECHNICAL REQUIREMENTS

| Komponen | Teknologi |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| 3D Book | StPageFlip |
| 3D Rendering | Three.js |
| 3D Character Model | GLB / GLTF |
| Character Animation | Animation Mixer |
| Mini Games | JavaScript |
| Progress Storage | Local Storage |
| Deployment | Web Hosting |

## 8.1 3D Character Assets

Model karakter disarankan menggunakan format GLB/GLTF agar dapat digunakan langsung pada web.

Setiap karakter harus memiliki:
- Model tubuh 3D.
- Model kepala dan wajah.
- Seragam sekolah.
- Ekspresi wajah.
- Rigging/skeleton.
- Animation clips.

## 8.2 Performance

Aplikasi harus:
- Memuat halaman secara efisien.
- Mengoptimalkan ukuran model 3D.
- Menghindari animasi yang membebani perangkat.
- Memiliki fallback ketika WebGL tidak tersedia.
- Tetap dapat digunakan pada perangkat dengan spesifikasi menengah.

---

# 9. NON-FUNCTIONAL REQUIREMENTS

| ID | Requirement | Keterangan |
|---|---|---|
| NFR-01 | Usability | Mudah digunakan siswa |
| NFR-02 | Performance | Navigasi dan animasi responsif |
| NFR-03 | Compatibility | Mendukung browser modern |
| NFR-04 | Responsive | Mendukung berbagai ukuran layar |
| NFR-05 | Accessibility | Teks mudah dibaca dan tombol mudah dikenali |
| NFR-06 | Reliability | Navigasi dan permainan berjalan konsisten |
| NFR-07 | Privacy | Tidak mengumpulkan data pribadi tanpa kebutuhan |
| NFR-08 | Educational Safety | Simulasi tidak menormalisasi kekerasan |

---

# 10. CONTENT REQUIREMENTS

Seluruh konten edukasi harus mengikuti sumber utama:

**MATERI EMODUL 1.pdf — Stop Bullying, Start Caring.**

Ketentuan:
- Tidak mengubah makna materi.
- Menggunakan bahasa yang sesuai untuk siswa MTs.
- Contoh kasus disesuaikan dengan lingkungan sekolah.
- Materi animasi harus sesuai dengan topik yang dibahas.
- Jawaban pretest dan posttest mengikuti kunci jawaban sumber.
- Konten permainan harus memiliki jawaban dan feedback yang tepat.

---

# 11. SUCCESS METRICS

Keberhasilan aplikasi akan dievaluasi berdasarkan:

1. Seluruh materi dapat diakses.
2. Seluruh tombol navigasi berfungsi.
3. Animasi karakter dapat dimainkan.
4. Mini games dapat diselesaikan.
5. Pretest dan posttest dapat menghasilkan skor.
6. Aplikasi dapat digunakan melalui smartphone dan laptop.
7. Siswa dapat memahami materi melalui kombinasi teks, visual, dan interaksi.

Indikator pembelajaran utama adalah adanya peningkatan hasil posttest dibandingkan pretest.

---

# 12. DEVELOPMENT ROADMAP

## Phase 1 — Core Prototype
- Pembuatan cover buku.
- Implementasi page flip.
- Pembuatan daftar isi.
- Integrasi materi PDF.
- Implementasi navigasi.

## Phase 2 — 3D Character Development
- Pembuatan karakter 3D.
- Rigging karakter.
- Pembuatan animasi bullying.
- Pembuatan animasi respons positif.
- Integrasi karakter ke halaman materi.

## Phase 3 — Mini Games Development
- Game tebak jenis bullying.
- Game pilihan tindakan.
- True or False.
- Studi kasus interaktif.
- Sistem skor.

## Phase 4 — Assessment and Progress
- Integrasi pretest.
- Integrasi posttest.
- Perhitungan skor.
- Perbandingan hasil.
- Penyimpanan progres.

## Phase 5 — Testing and Deployment
- Pengujian fungsional.
- Pengujian tampilan mobile.
- Pengujian performa 3D.
- Pengujian pengalaman pengguna.
- Deployment aplikasi web.

---

# 13. ACCEPTANCE CRITERIA — FINAL PRODUCT

Produk dinyatakan memenuhi kebutuhan utama apabila:

- [ ] Cover buku 3D dapat dibuka.
- [ ] Kata pengantar ditampilkan.
- [ ] Daftar isi dapat diklik.
- [ ] Semua materi PDF tersedia.
- [ ] Halaman dapat dibalik dengan efek page flip.
- [ ] Karakter 3D manusia dapat bergerak.
- [ ] Simulasi empat jenis bullying tersedia.
- [ ] Terdapat animasi tindakan pencegahan bullying.
- [ ] Mini games dapat dimainkan.
- [ ] Pretest berfungsi.
- [ ] Posttest berfungsi.
- [ ] Skor dapat dihitung.
- [ ] Refleksi diri tersedia.
- [ ] Tombol Back to Home berfungsi.
- [ ] Tombol Back to Materi berfungsi.
- [ ] Aplikasi responsif pada laptop dan smartphone.

---

# 14. PRODUCT DELIVERABLES

Hasil akhir pengembangan yang diharapkan:

1. Web application e-modul edukasi pencegahan bullying.
2. Interactive 3D flipbook.
3. Model karakter 3D siswa dan guru.
4. Animasi simulasi bullying.
5. Animasi tindakan pencegahan.
6. Interactive mini games.
7. Sistem pretest dan posttest.
8. Sistem penilaian dan progres belajar.
9. Source code aplikasi.
10. Dokumentasi penggunaan aplikasi.

---

# 15. PRODUCT SUMMARY

**STOP BULLYING, START CARING** merupakan aplikasi e-modul edukasi berbasis web yang menggabungkan teknologi 3D PageFlip, animasi karakter 3D, dan mini games interaktif.

Aplikasi ini dirancang untuk memberikan pengalaman belajar yang lebih menarik dibandingkan membaca modul digital biasa.

Melalui simulasi karakter 3D, siswa dapat melihat gambaran situasi bullying. Melalui mini games, siswa dapat menentukan tindakan yang tepat. Melalui pretest dan posttest, pemahaman siswa dapat dievaluasi.

**Tagline:**

"Kenali Perilakunya, Cegah Perundungannya, Mulai dari Kepedulian Kita."

**End of Document — PRD Version 1.0**