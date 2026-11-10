// Data untuk 4 Mini Games Interaktif
// Tidak sekedar quiz biasa: permainan interaktif, skenario pilihan aksi, dan mekanik seru

// Game 1: Detektif Bullying - Klasifikasi Jenis Kasus
export const DETECTIVE_ITEMS = [
  {
    id: 'd1',
    text: "Menendang bangku teman hingga ia terjatuh saat hendak duduk.",
    correctCategory: 'fisik',
    hint: "Melibatkan kontak tubuh langsung dan benda fisik",
    explanation: "Ini adalah bullying fisik karena menimbulkan potensi luka fisik dan merusak rasa aman lingkungan belajar."
  },
  {
    id: 'd2',
    text: "Meneriakkan julukan buruk 'si cungkring bodoh' setiap kali teman lewat koridor.",
    correctCategory: 'verbal',
    hint: "Menggunakan kata-kata lisan bernada hinaan",
    explanation: "Ini adalah bullying verbal karena menyerang kondisi fisik dan kecerdasan lewat ucapan menghina."
  },
  {
    id: 'd3',
    text: "Membuat grup WA kelas lalu dengan sengaja mengeluarkan satu orang teman agar ia tidak tahu tugas kelompok.",
    correctCategory: 'sosial',
    hint: "Mengucilkan dan merusak hubungan pertemanan",
    explanation: "Ini adalah bullying sosial/relasional yang bertujuan mengisolasi dan mendiskriminasi teman dari pergaulan."
  },
  {
    id: 'd4',
    text: "Mengedit foto wajah teman menjadi meme tidak senonoh lalu menyebarkannya di TikTok.",
    correctCategory: 'cyber',
    hint: "Menggunakan perangkat digital dan internet",
    explanation: "Ini adalah cyberbullying karena menggunakan teknologi untuk merusak martabat dan reputasi korban secara luas."
  },
  {
    id: 'd5',
    text: "Memaksa teman membelikan jajan di kantin dengan ancaman akan dikunci di toilet jika menolak.",
    correctCategory: 'fisik',
    hint: "Pemerasan disertai ancaman fisik",
    explanation: "Pemerasan dan ancaman kurungan fisik termasuk kategori bullying fisik dan intimidasi."
  },
  {
    id: 'd6',
    text: "Menyebarkan kabar bohong bahwa teman mencuri uang infaq madrasah agar dijauhi teman sekelas.",
    correctCategory: 'sosial',
    hint: "Fitnah untuk merusak reputasi sosial",
    explanation: "Fitnah terencana untuk merusak reputasi pertemanan merupakan bentuk bullying sosial/relasional."
  },
  {
    id: 'd7',
    text: "Mengirimkan puluhan pesan spam berisi sumpah serapah di DM Instagram teman pada tengah malam.",
    correctCategory: 'cyber',
    hint: "Pelecehan lewat platform media sosial",
    explanation: "Pengiriman pesan teror digital adalah bentuk pelecehan siber (cyber harassment)."
  },
  {
    id: 'd8',
    text: "Meniru gaya bicara teman yang cadel atau gagap di depan kelas untuk ditertawakan bersama-sama.",
    correctCategory: 'verbal',
    hint: "Meniru kekurangan bicara untuk dijadikan bahan olok-olok",
    explanation: "Meniru kekurangan fisik atau cara bicara teman adalah pelecehan verbal yang melukai rasa percaya diri."
  }
];

export const CATEGORIES = [
  { id: 'fisik', name: 'Bullying Fisik', icon: 'UserX', color: 'from-red-500 to-rose-600', borderColor: 'border-rose-400' },
  { id: 'verbal', name: 'Bullying Verbal', icon: 'MessageSquareWarning', color: 'from-amber-500 to-orange-600', borderColor: 'border-amber-400' },
  { id: 'sosial', name: 'Bullying Sosial', icon: 'Users', color: 'from-purple-500 to-indigo-600', borderColor: 'border-purple-400' },
  { id: 'cyber', name: 'Cyberbullying', icon: 'Smartphone', color: 'from-blue-500 to-cyan-600', borderColor: 'border-cyan-400' },
];

// Game 2: Cyber Shield - Menangkis Komentar Negatif Digital
export const CYBER_MESSAGES = [
  { id: 'c1', text: "Kamu ga pantas di sekolah ini!", toxic: true, kindReplacement: "Setiap anak berhak belajar dengan nyaman!" },
  { id: 'c2', text: "Semangat ya belajarnya, kamu pasti bisa!", toxic: false, kindReplacement: null },
  { id: 'c3', text: "Hapus akun kamu, mukamu jelek banget!", toxic: true, kindReplacement: "Kita semua unik dan berharga apa adanya." },
  { id: 'c4', text: "Yuk nanti istirahat makan bareng di kantin.", toxic: false, kindReplacement: null },
  { id: 'c5', text: "Gaya lu sok pinter banget deh, jijik!", toxic: true, kindReplacement: "Apresiasi kerja keras teman adalah hal mulia." },
  { id: 'c6', text: "Jangan temenin dia, dia bau dan miskin!", toxic: true, kindReplacement: "Persahabatan sejati tidak memandang latar belakang." },
  { id: 'c7', text: "Terima kasih sudah mau bantu jelasin PR tadi ya.", toxic: false, kindReplacement: null },
  { id: 'c8', text: "Awas lu besok pulang sekolah kita hadang!", toxic: true, kindReplacement: "Kekerasan tidak menyelesaikan masalah apa pun." },
];

// Game 3: Pilih Tindakan - Simulasi Cerita Berantai Upstander
export const SCENARIO_STORY = {
  title: "Skenario Koridor Jam Istirahat",
  initialScene: {
    id: 'scene_start',
    speaker: "Narator",
    dialogue: "Saat bel istirahat berbunyi, kamu melihat Doni (siswa kelas 7) sedang dipojokkan oleh dua kakak kelas di dekat tangga belakang. Mereka merebut botol minum Doni dan mengancam akan membuangnya ke selokan sambil tertawa.",
    characterState: 'cornered',
    options: [
      {
        text: "Pura-pura tidak melihat dan bergegas pergi ke kantin.",
        meterImpact: { courage: -20, empathy: -20, safety: +10 },
        nextScene: 'scene_ignore'
      },
      {
        text: "Merekam kejadian dengan HP untuk diunggah ke status WhatsApp.",
        meterImpact: { courage: -10, empathy: -30, safety: -10 },
        nextScene: 'scene_record'
      },
      {
        text: "Mendekati dengan tenang: 'Kak, dicari Pak Guru BK di ruang piket sekarang'.",
        meterImpact: { courage: +30, empathy: +30, safety: +20 },
        nextScene: 'scene_smart_defuse'
      },
      {
        text: "Langsung menyerang kakak kelas dengan memukulnya dari belakang.",
        meterImpact: { courage: +10, empathy: +10, safety: -40 },
        nextScene: 'scene_violence'
      }
    ]
  },
  scenes: {
    scene_ignore: {
      id: 'scene_ignore',
      speaker: "Akibat Tindakanmu (Bystander Pasif)",
      dialogue: "Doni akhirnya menangis karena botol minumnya dilempar ke selokan, dan pelaku merasa semakin berkuasa karena tidak ada yang berani menegur. Doni menjadi takut untuk berangkat ke sekolah keesokan harinya.",
      moral: "Membiarkan bullying terjadi sama dengan memberi lampu hijau kepada pelaku.",
      retryAvailable: true
    },
    scene_record: {
      id: 'scene_record',
      speaker: "Akibat Tindakanmu (Cyber Bystander)",
      dialogue: "Video statusmu tersebar dan membuat Doni semakin malu dan trauma karena seisi madrasah melihatnya saat sedang ditindas. Pihak sekolah menegurmu karena menyebarkan konten perundungan tanpa izin.",
      moral: "Merekam untuk konten viral melipatgandakan trauma korban. Yang korban butuhkan adalah pertolongan, bukan eksploitasi visual.",
      retryAvailable: true
    },
    scene_violence: {
      id: 'scene_violence',
      speaker: "Akibat Tindakanmu (Kekerasan Dibalas Kekerasan)",
      dialogue: "Terjadi perkelahian massal yang berbahaya. Kamu dan Doni sama-sama terluka, dan semuanya dipanggil ke ruang Kepala Madrasah. Masalah bukannya selesai, justru semakin runyam.",
      moral: "Kekerasan tidak dapat dipadamkan dengan kekerasan baru. Gunakan kecerdasan dan prosedur perlindungan.",
      retryAvailable: true
    },
    scene_smart_defuse: {
      id: 'scene_smart_defuse',
      speaker: "Langkah Berikutnya (Smart Upstander)",
      dialogue: "Mendengar nama guru BK disebut, kakak kelas tersebut terkejut, mengembalikan botol Doni, dan bergegas pergi. Sekarang kamu berdiri bersama Doni yang terlihat gemetar ketakutan.",
      characterState: 'comforting',
      options: [
        {
          text: "Menenangkan Doni, memberinya air minum, lalu menemaninya melapor ke Wali Kelas/BK.",
          meterImpact: { courage: +20, empathy: +30, safety: +30 },
          nextScene: 'scene_success'
        },
        {
          text: "Mengejek Doni: 'Makanya jadi cowok jangan cengeng!', lalu meninggalkannya.",
          meterImpact: { courage: -20, empathy: -40, safety: 0 },
          nextScene: 'scene_victim_blame'
        }
      ]
    },
    scene_victim_blame: {
      id: 'scene_victim_blame',
      speaker: "Akibat Tindakanmu (Menyalahkan Korban)",
      dialogue: "Kamu menggagalkan niat baikmu sendiri. Doni semakin merasa tidak berharga dan terpuruk karena bahkan temannya sendiri malah menyalahkannya.",
      moral: "Jangan pernah menyalahkan korban (victim blaming). Berikan empati tulus.",
      retryAvailable: true
    },
    scene_success: {
      id: 'scene_success',
      speaker: "Hasil Akhir: Pahlawan Peduli (Upstander Sejati)!",
      dialogue: "Guru BK menyambut kalian dengan hangat, mencatat kronologi kejadian, dan memanggil pihak terkait untuk mediasi perlindungan. Doni merasa sangat bersyukur memiliki sahabat yang berani dan peduli sepertimu!",
      badge: "🛡️ Duta Keberanian & Empati YAPIRA",
      isVictory: true
    }
  }
};

// Game 4: Mitos vs Fakta
export const MYTH_FACT_CARDS = [
  {
    id: 'mf1',
    statement: "Ejekan verbal cuma candaan wajar masa remaja dan akan membuat mental korban jadi lebih kuat.",
    isFact: false,
    explanation: "MITOS! Ejekan berulang merusak rasa harga diri, memicu trauma mendalam, dan menurunkan kepercayaan diri, bukan membentuk mental sehat."
  },
  {
    id: 'mf2',
    statement: "Siswa yang membela korban bullying (Upstander) memiliki pengaruh sangat besar dalam menghentikan perundungan di sekolah.",
    isFact: true,
    explanation: "FAKTA! Penelitian menunjukkan lebih dari 57% aksi bullying berhenti dalam hitungan detik ketika saksi sebaya berani mengintervensi dengan positif."
  },
  {
    id: 'mf3',
    statement: "Bullying di media sosial tidak berbahaya karena tidak menyebabkan luka fisik secara langsung.",
    isFact: false,
    explanation: "MITOS! Cyberbullying terjadi 24 jam nonstop tanpa batas ruang, menyebabkan kecemasan parah, depresi, hingga keinginan menyakiti diri sendiri."
  },
  {
    id: 'mf4',
    statement: "Melaporkan kejadian bullying kepada guru atau pihak madrasah adalah tindakan mulia untuk menyelamatkan teman, bukan tindakan pengecut.",
    isFact: true,
    explanation: "FAKTA! Melapor demi keselamatan orang lain adalah bukti integritas dan kepedulian tingkat tinggi."
  },
  {
    id: 'mf5',
    statement: "Korban bullying biasanya memang pantas ditindas karena mereka aneh atau pendiam.",
    isFact: false,
    explanation: "MITOS! Tidak seorang pun manusia yang pantas ditindas atau direndahkan martabatnya dengan alasan apa pun. Tanggung jawab bullying 100% ada pada pelaku."
  }
];

