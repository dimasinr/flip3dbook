// Posttest 10 Soal Pilihan Ganda (FR-08)
// Untuk mengevaluasi peningkatan pemahaman siswa

export const POSTTEST_QUESTIONS = [
  {
    id: 1,
    question: "Manakah dari ciri berikut yang membedakan tindakan bullying dari perselisihan biasa?",
    options: [
      { key: 'A', text: 'Terjadi sekali saja secara spontan tanpa niat buruk' },
      { key: 'B', text: 'Ada ketimpangan kuasa, niat sengaja menyakiti, dan berulang kali' },
      { key: 'C', text: 'Kedua belah pihak saling bercanda dan tertawa gembira' },
      { key: 'D', text: 'Terjadi karena salah paham dan langsung selesai hari itu' },
    ],
    correctAnswer: 'B',
    explanation: "Tiga elemen utama bullying adalah: adanya niat sengaja menyakiti, dilakukan secara berulang (repetitif), dan terdapat ketimpangan kuasa (power imbalance)."
  },
  {
    id: 2,
    question: "Rian sengaja menyembunyikan tas sekolah milik Dika dan membuang bukunya ke tong sampah. Bentuk bullying yang dilakukan Rian adalah...",
    options: [
      { key: 'A', text: 'Bullying Verbal' },
      { key: 'B', text: 'Bullying Fisik (Perusakan Barang)' },
      { key: 'C', text: 'Bullying Cyber' },
      { key: 'D', text: 'Bullying Rasial' },
    ],
    correctAnswer: 'B',
    explanation: "Bullying fisik tidak hanya memukul tubuh, tetapi juga merusak, menyembunyikan, atau merampas barang milik korban secara paksa."
  },
  {
    id: 3,
    question: "Siti membuat grup obrolan rahasia untuk menyebarkan fitnah bahwa temannya mencuri uang kas, agar semua orang menjauhinya. Ini adalah contoh...",
    options: [
      { key: 'A', text: 'Bullying Sosial & Cyberbullying' },
      { key: 'B', text: 'Kritik membangun' },
      { key: 'C', text: 'Kebebasan berekspresi' },
      { key: 'D', text: 'Bercanda santai' },
    ],
    correctAnswer: 'A',
    explanation: "Menyebarkan rumor palsu untuk mengucilkan teman lewat media digital menggabungkan dampak bullying sosial dan media cyberbullying."
  },
  {
    id: 4,
    question: "Dampak psikologis jangka panjang yang paling rentan dialami oleh korban bullying adalah...",
    options: [
      { key: 'A', text: 'Menjadi semakin populer dan percaya diri di kelas' },
      { key: 'B', text: 'Mengalami depresi, kecemasan berlebih, dan penurunan prestasi belajar' },
      { key: 'C', text: 'Memiliki banyak pengikut di media sosial' },
      { key: 'D', text: 'Mendapatkan nilai rapor yang melonjak drastis' },
    ],
    correctAnswer: 'B',
    explanation: "Korban perundungan sering mengalami trauma emosional, rasa tidak aman, cemas, depresi, enggan masuk sekolah, hingga penurunan prestasi akademis."
  },
  {
    id: 5,
    question: "Seseorang yang menyaksikan kejadian bullying tetapi memilih menjadi 'Upstander' (saksi pembela) akan bertindak...",
    options: [
      { key: 'A', text: 'Merekam video kejadian lalu mengunggahnya ke medsos agar viral' },
      { key: 'B', text: 'Tertawa bersama pelaku agar dianggap keren' },
      { key: 'C', text: 'Mendampingi korban, berani menegur dengan tenang, dan melapor ke guru' },
      { key: 'D', text: 'Pura-pura tidak melihat dan langsung pergi meninggalkan korban' },
    ],
    correctAnswer: 'C',
    explanation: "Upstander adalah saksi yang berani bertindak positif: merangkul korban, tidak memvalidasi pelaku, dan mencari bantuan pihak berwenang seperti guru."
  },
  {
    id: 6,
    question: "Faktor lingkungan sekolah yang dapat meningkatkan potensi terjadinya perundungan adalah...",
    options: [
      { key: 'A', text: 'Pengawasan guru yang ketat di sudut-sudut rawan sekolah' },
      { key: 'B', text: 'Aturan anti-bullying yang tegas dan sosialisasi rutin' },
      { key: 'C', text: 'Pembiaran terhadap ejekan kecil dengan anggapan cuma bercanda' },
      { key: 'D', text: 'Budaya apresiasi dan saling menghargai antar siswa' },
    ],
    correctAnswer: 'C',
    explanation: "Pembiaran atau normalisasi 'ah itu cuma guyonan' membuat pelaku merasa tindakannya wajar sehingga eskalasi kekerasan meningkat."
  },
  {
    id: 7,
    question: "Ketika kamu menerima pesan ejekan atau ancaman melalui WhatsApp/Instagram, tindakan cyber-safety yang paling tepat adalah...",
    options: [
      { key: 'A', text: 'Membalas dengan kata-kata kasar yang lebih pedas' },
      { key: 'B', text: 'Tangkapi layar (screenshot) sebagai bukti, jangan dibalas, lalu blokir dan lapor' },
      { key: 'C', text: 'Menghapus aplikasi ponsel dan mengurung diri di kamar' },
      { key: 'D', text: 'Menuruti semua tuntutan pelaku agar mereka berhenti' },
    ],
    correctAnswer: 'B',
    explanation: "Langkah penanganan cyberbullying: Simpan bukti (screenshot), jangan terpancing membalas, blokir akun pelaku, dan laporkan kepada orang tua/guru."
  },
  {
    id: 8,
    question: "Mengapa pelaku bullying sering kali membutuhkan konseling dan pendampingan, bukan hanya sekadar hukuman fisik?",
    options: [
      { key: 'A', text: 'Karena hukuman fisik dilarang undang-undang semata' },
      { key: 'B', text: 'Karena perilaku pelaku sering kali berakar dari trauma, masalah keluarga, atau kebutuhan validasi' },
      { key: 'C', text: 'Agar pelaku diberi hadiah dan dipuji oleh sekolah' },
      { key: 'D', text: 'Karena pelaku tidak bersalah sama sekali' },
    ],
    correctAnswer: 'B',
    explanation: "Bimbingan konseling membantu membongkar akar masalah emosional pelaku, menumbuhkan empati, dan merestrukturisasi perilaku menjadi positif."
  },
  {
    id: 9,
    question: "Salah satu slogan utama dalam program pencegahan bullying di MTs SA Riyadul Bayan adalah...",
    options: [
      { key: 'A', text: 'Biar Kalah yang Penting Populer' },
      { key: 'B', text: 'Stop Bullying, Start Caring: Kenali • Cegah • Peduli' },
      { key: 'C', text: 'Kuat Menang, Lemah Tunduk' },
      { key: 'D', text: 'Jangan Ikut Campur Urusan Orang' },
    ],
    correctAnswer: 'B',
    explanation: "Slogan edukatif modul adalah 'Stop Bullying, Start Caring: Kenali, Cegah, Peduli'."
  },
  {
    id: 10,
    question: "Komitmen nyata yang dapat kamu lakukan setiap hari di kelas untuk mencegah bullying adalah...",
    options: [
      { key: 'A', text: 'Membuat geng eksklusif yang hanya menerima teman kaya' },
      { key: 'B', text: 'Mengajak teman yang menyendiri untuk bergabung dan saling menghargai perbedaan' },
      { key: 'C', text: 'Memberikan julukan lucu berdasarkan nama orang tua' },
      { key: 'D', text: 'Menertawakan teman yang salah menjawab pertanyaan guru di depan kelas' },
    ],
    correctAnswer: 'B',
    explanation: "Menciptakan iklim kelas inklusif dengan merangkul teman yang menyendiri dan menghargai keragaman adalah aksi nyata peduli sesama."
  }
];

