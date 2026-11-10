import React from 'react';
import {
  Shield,
  AlertTriangle,
  Users,
  CheckCircle2,
  HelpCircle,
  Smartphone,
  MessageSquareWarning,
  UserX,
  HeartHandshake,
  PhoneCall,
  School,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { playClickSound } from '../sound';

// -------------------------------------------------------------
// Pendahuluan & Tujuan
// -------------------------------------------------------------
export function IntroPage({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-1 rounded-full">
          Pendahuluan
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          Mengapa Kita Harus Peduli Pencegahan Bullying?
        </h2>
      </div>

      <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <p>
          Sekolah adalah rumah kedua bagi setiap siswa untuk menimba ilmu, mengembangkan potensi, dan menjalin persahabatan yang bermakna. Namun, fenomena perundungan atau <i>bullying</i> kerap membayangi lingkungan sekolah.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
            <span className="font-black text-blue-900 text-xs flex items-center gap-1.5">
              <School size={16} /> Visi Madrasah Ramah Anak
            </span>
            <p className="text-xs text-blue-950">
              Mewujudkan lingkungan belajar MTs SA Riyadul Bayan yang aman, inklusif, dan bebas dari diskriminasi maupun kekerasan.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
            <span className="font-black text-amber-900 text-xs flex items-center gap-1.5">
              <HeartHandshake size={16} /> Kekuatan Solidaritas
            </span>
            <p className="text-xs text-amber-950">
              Satu suara pembelaan dari teman sebaya dapat mengubah hidup seorang korban perundungan selamanya.
            </p>
          </div>
        </div>

        <h3 className="font-black text-sm text-slate-900 pt-1">Tujuan Pembelajaran Modul Ini:</h3>
        <ul className="space-y-2 text-xs">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Mampu mengenali definisi dan 3 karakteristik khas perilaku perundungan.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Mengidentifikasi empat bentuk bullying melalui visualisasi karakter 3D.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Memahami faktor pemicu dan dampak psikologis jangka panjang.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Mentransformasikan peran dari saksi pasif menjadi <b>Upstander (Saksi Pembela)</b>.</span>
          </li>
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Lanjut ke Pretest</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bab 1: Mengenal Bullying
// -------------------------------------------------------------
export function MateriBab1({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-1 rounded-full">
          Bab 1 • Konsep Dasar
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          Mengenal Apa Itu Bullying
        </h2>
      </div>

      <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="p-4 rounded-xl bg-blue-900 text-white shadow-md">
          <p className="text-xs font-medium leading-relaxed">
            <b>Bullying (Perundungan)</b> adalah tindakan agresif yang disengaja oleh seseorang atau kelompok terhadap orang lain yang lebih lemah, dilakukan secara berulang-ulang, dan menimbulkan rasa sakit fisik, emosional, atau psikologis.
          </p>
        </div>

        <h3 className="font-black text-sm text-slate-900 pt-2">
          3 Elemen Kunci yang Membedakan Bullying dari Candaan:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-black text-xs flex items-center justify-center">
              1
            </span>
            <h4 className="font-bold text-xs text-slate-900">Niat Sengaja (Intentional)</h4>
            <p className="text-[11px] text-slate-600">
              Pelaku secara sadar bermaksud menyakiti, merendahkan, atau mempermalukan korban.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center">
              2
            </span>
            <h4 className="font-bold text-xs text-slate-900">Berulang Kali (Repetitive)</h4>
            <p className="text-[11px] text-slate-600">
              Tindakan tidak terjadi sekali secara kebetulan, melainkan terus menerus meneror korban.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center">
              3
            </span>
            <h4 className="font-bold text-xs text-slate-900">Ketimpangan Kuasa (Power Imbalance)</h4>
            <p className="text-[11px] text-slate-600">
              Ada perbedaan kekuatan fisik, status sosial, jumlah anggota kelompok, atau popularitas.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-xs text-amber-900">
          <b>Ingat Rumus Sederhana:</b> Jika hanya satu pihak yang tertawa sementara pihak lain menangis atau merasa tersiksa, itu <b>BUKAN</b> bercanda, melainkan <b>PERUNDUNGAN</b>.
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Lanjut ke Bentuk Bullying</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bab 2: Bentuk-Bentuk Bullying
// -------------------------------------------------------------
export function MateriBab2({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-1 rounded-full">
          Bab 2 • Klasifikasi Kasus
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          4 Bentuk Utama Perundungan di Sekolah
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 flex-1">
        {/* Fisik */}
        <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
              <UserX size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">1. Bullying Fisik</h4>
              <span className="text-[10px] text-rose-600 font-semibold">Tampak kasat mata</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Melibatkan kontak fisik kekerasan: memukul, menendang, mendorong, menjegal, merusak atau merampas barang pribadi milik teman.
          </p>
        </div>

        {/* Verbal */}
        <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
              <MessageSquareWarning size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">2. Bullying Verbal</h4>
              <span className="text-[10px] text-amber-600 font-semibold">Paling sering terjadi</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Menghina kekurangan fisik (body shaming), memberi julukan buruk, mencemooh nama orang tua, mengancam, dan memaki dengan kata-kata kasar.
          </p>
        </div>

        {/* Sosial */}
        <div className="p-4 rounded-xl bg-white border border-purple-200 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
              <Users size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">3. Bullying Sosial / Relasional</h4>
              <span className="text-[10px] text-purple-600 font-semibold">Merusak hubungan pergaulan</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mengucilkan teman dari pergaulan, menyebarkan gosip/fitnah palsu, mendiamkan secara kolektif, dan mempermalukan di depan umum.
          </p>
        </div>

        {/* Cyberbullying */}
        <div className="p-4 rounded-xl bg-white border border-cyan-200 shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <Smartphone size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">4. Cyberbullying (Siber)</h4>
              <span className="text-[10px] text-cyan-700 font-semibold">Dunia maya & medsos</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Meneror via WhatsApp/Instagram/TikTok, mengunggah foto aib teman tanpa izin, membuat akun palsu penghina, dan doxxing informasi pribadi.
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Buka Simulasi Karakter 3D</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bab 3: Faktor Penyebab Bullying
// -------------------------------------------------------------
export function MateriBab3({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-1 rounded-full">
          Bab 3 • Akar Permasalahan
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          Mengapa Seseorang Menjadi Pelaku Bullying?
        </h2>
      </div>

      <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <p>
          Perilaku perundungan tidak muncul begitu saja secara tiba-tiba. Bullying dipicu oleh kombinasi faktor internal dan lingkungan:
        </p>

        <div className="space-y-2.5">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <span className="text-xl">👤</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Individu & Psikologis</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Rasa rendah diri yang ditutupi dengan dominasi, kesulitan mengelola amarah, minimnya empati, atau pernah menjadi korban kekerasan sebelumnya.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <span className="text-xl">🏡</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Keluarga</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Kurangnya perhatian dan kehangatan orang tua, pola asuh yang keras atau permisif, serta menyaksikan pertengkaran dalam rumah tangga.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <span className="text-xl">👥</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Teman Sebaya (Peer Group)</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Keinginan untuk diakui dalam geng pergaulan, takut dikucilkan jika tidak ikut menindas, dan meniru perilaku agresif teman sekelompok.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
            <span className="text-xl">📱</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Media & Game</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Paparan konten kekerasan, bahasa kasar di media sosial, dan tren konten "prank" yang merugikan martabat orang lain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Lanjut ke Dampak Bullying</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bab 4: Dampak Nyata Bullying
// -------------------------------------------------------------
export function MateriBab4({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-rose-800 uppercase bg-rose-100 px-2.5 py-1 rounded-full">
          Bab 4 • Konsekuensi
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          Dampak Nyata Bullying Bagi Semua Pihak
        </h2>
      </div>

      <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
          <h4 className="font-bold text-xs text-rose-900 flex items-center gap-1.5">
            <AlertTriangle size={16} /> Bagi Korban (Victim)
          </h4>
          <p className="text-xs text-rose-950">
            Trauma psikologis mendalam, cemas berlebih, depresi, menurunnya prestasi akademis, sering absen/takut berangkat ke sekolah, hingga keputusasaan.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
          <h4 className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
            <AlertTriangle size={16} /> Bagi Pelaku (Bully)
          </h4>
          <p className="text-xs text-amber-950">
            Menjadi kebiasaan antisosial, rentan terjerat masalah hukum di masa depan, dijauhi teman yang tulus, dan kegagalan membangun hubungan empati.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
          <h4 className="font-bold text-xs text-purple-900 flex items-center gap-1.5">
            <AlertTriangle size={16} /> Bagi Saksi (Bystander)
          </h4>
          <p className="text-xs text-purple-950">
            Mengalami rasa bersalah kronis karena tidak berani menolong, merasa lingkungan sekolah tidak aman, dan mengalami penurunan kepekaan moral.
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Lanjut ke Peran Siswa</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bab 5: Siapa Saja yang Terlibat?
// -------------------------------------------------------------
export function MateriBab5({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-1 rounded-full">
          Bab 5 • Peran Sosial
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          Siapa Saja yang Terlibat dalam Bullying?
        </h2>
      </div>

      <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-black text-rose-700">1. Pelaku (The Bully)</span>
            <p className="text-[11px] text-slate-600">
              Pihak yang menginisiasi agresi untuk memperlihatkan kekuatan dan dominasi sosial.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-black text-blue-700">2. Korban (The Victim)</span>
            <p className="text-[11px] text-slate-600">
              Pihak sasaran yang berada dalam posisi rentan atau tidak berdaya melawan sendirian.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-300 space-y-1">
            <span className="text-xs font-black text-slate-700">3. Saksi Pasif (Bystander)</span>
            <p className="text-[11px] text-slate-600">
              Hanya menonton, diam, atau tertawa. Diamnya saksi pasif memperkuat keberanian pelaku!
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border-2 border-emerald-400 space-y-1 shadow-sm">
            <span className="text-xs font-black text-emerald-800 flex items-center gap-1">
              <Shield size={14} /> 4. Saksi Pembela (Upstander)
            </span>
            <p className="text-[11px] text-emerald-950 font-medium">
              Pahlawan sekolah! Berani menegur secara cerdas, merangkul korban, dan melaporkan ke guru.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white shadow-md space-y-1">
          <h4 className="font-black text-xs text-amber-300">Jadilah UPSTANDER di MTs SA Riyadul Bayan:</h4>
          <p className="text-xs text-emerald-100 leading-relaxed">
            Data membuktikan bahwa <b>57% tindakan perundungan berhenti dalam waktu kurang dari 10 detik</b> ketika seorang saksi sebaya berani bersuara untuk membelanya!
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Mainkan Mini Game 3: Pilih Tindakan</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bab 6: Cara Mencegah Bullying
// -------------------------------------------------------------
export function MateriBab6({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-emerald-800 uppercase bg-emerald-100 px-2.5 py-1 rounded-full">
          Bab 6 • Aksi Preventif
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          Cara Efektif Mencegah Bullying di Sekolah
        </h2>
      </div>

      <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-black text-emerald-700">🌟 Budaya 5S di Madrasah</span>
            <p className="text-xs text-slate-600">
              Senyum, Sapa, Salam, Sopan, dan Santun kepada seluruh warga madrasah tanpa terkecuali.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-black text-emerald-700">🤝 Menolak Geng Eksklusif</span>
            <p className="text-xs text-slate-600">
              Membangun pertemanan terbuka dan merangkul teman yang cenderung pemalu atau pendiam.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-black text-emerald-700">📜 Norma Kesepakatan Kelas</span>
            <p className="text-xs text-slate-600">
              Menyepakati bersama aturan anti-ejekan dan anti-kekerasan bersama wali kelas.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-xs font-black text-emerald-700">📱 Etika Berdigital (Netiquette)</span>
            <p className="text-xs text-slate-600">
              Saring sebelum sharing, tidak berkomentar jahat, dan menjaga privasi teman di media sosial.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-950 font-medium">
          💡 <b>Kebaikan itu Menular:</b> Tindakan kecil seperti menyapa teman di koridor atau mengajak makan bersama di kantin dapat memulihkan semangat seseorang yang sedang terpuruk.
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Lanjut ke Alur Penanganan</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bab 7: Ayo Bertindak: Cara Menangani Bullying
// -------------------------------------------------------------
export function MateriBab7({ onNext }) {
  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      <div className="pb-3 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-1 rounded-full">
          Bab 7 • Alur Lapor
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          Ayo Bertindak: Alur Penanganan & Pengaduan
        </h2>
      </div>

      <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h4 className="font-bold text-xs text-blue-900 flex items-center gap-1.5">
            <PhoneCall size={16} /> Saluran Pengaduan Resmi MTs SA Riyadul Bayan:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li><b>1. Guru Bimbingan Konseling (BK):</b> Ruang Konseling Ramah Siswa.</li>
            <li><b>2. Wali Kelas & Guru Piket:</b> Melapor langsung saat jam istirahat.</li>
            <li><b>3. Kotak Aspirasi & Curhat Siswa:</b> Tersedia di depan ruang perpustakaan.</li>
            <li><b>4. Orang Tua / Pendamping Rumah:</b> Menceritakan keluh kesah secara terbuka.</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
          <h4 className="font-bold text-xs text-blue-950">Langkah Tanggap Jika Kamu Menjadi Sasaran:</h4>
          <ol className="list-decimal list-inside space-y-1 text-xs text-blue-900 font-medium">
            <li>Tetap tenang dan tatap mata pelaku dengan percaya diri: katakan <b>"Hentikan!"</b>.</li>
            <li>Segera menjauh ke tempat keramaian atau dekati bapak/ibu guru.</li>
            <li>Simpan bukti tangkapan layar jika terjadi di media sosial.</li>
            <li>Ceritakan kepada guru yang kamu percaya tanpa rasa takut.</li>
          </ol>
        </div>

        <div className="p-3 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-xs text-amber-950 font-bold">
          Ingat: Kamu tidak sendirian, dan kamu berhak merasa aman di madrasah!
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2"
        >
          <span>Masuk ke Ruang Refleksi Diri</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

