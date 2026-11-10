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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
          Pendahuluan
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          Mengapa Kita Harus Peduli Pencegahan Bullying?
        </h2>
      </div>

      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
        <p className="text-[11px] sm:text-xs">
          Sekolah adalah rumah kedua bagi setiap siswa untuk menimba ilmu, mengembangkan potensi, dan menjalin persahabatan yang bermakna. Namun, fenomena perundungan atau <i>bullying</i> kerap membayangi lingkungan sekolah.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
            <span className="font-black text-blue-900 text-xs flex items-center gap-1.5">
              <School size={15} /> Visi Madrasah Ramah Anak
            </span>
            <p className="text-[11px] text-blue-950">
              Mewujudkan lingkungan belajar MTs SA Riyadul Bayan yang aman, inklusif, dan bebas kekerasan.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
            <span className="font-black text-amber-900 text-xs flex items-center gap-1.5">
              <HeartHandshake size={15} /> Kekuatan Solidaritas
            </span>
            <p className="text-[11px] text-amber-950">
              Satu suara pembelaan dari teman sebaya dapat mengubah hidup seorang korban perundungan.
            </p>
          </div>
        </div>

        <h3 className="font-black text-xs sm:text-sm text-slate-900 pt-1">Tujuan Pembelajaran Modul Ini:</h3>
        <ul className="space-y-1.5 text-[11px] sm:text-xs">
          <li className="flex items-start gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Mengenali definisi dan 3 karakteristik khas perilaku perundungan.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Mengidentifikasi empat bentuk bullying lewat visualisasi karakter 3D.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Memahami faktor pemicu dan dampak psikologis jangka panjang.</span>
          </li>
          <li className="flex items-start gap-1.5">
            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
            <span>Mentransformasikan peran menjadi <b>Upstander (Saksi Pembela)</b>.</span>
          </li>
        </ul>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Pretest</span>
          <ArrowRight size={14} />
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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
          Bab 1 • Konsep Dasar
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          Mengenal Apa Itu Bullying
        </h2>
      </div>

      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="p-3 sm:p-4 rounded-xl bg-blue-900 text-white shadow-md">
          <p className="text-[11px] sm:text-xs font-medium leading-relaxed">
            <b>Bullying (Perundungan)</b> adalah tindakan agresif yang disengaja oleh seseorang atau kelompok terhadap orang lain yang lebih lemah, dilakukan secara berulang-ulang, dan menimbulkan rasa sakit fisik, emosional, atau psikologis.
          </p>
        </div>

        <h3 className="font-black text-xs sm:text-sm text-slate-900 pt-1">
          3 Elemen Kunci yang Membedakan Bullying dari Candaan:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 font-black text-[11px] flex items-center justify-center">
              1
            </span>
            <h4 className="font-bold text-xs text-slate-900">Niat Sengaja (Intentional)</h4>
            <p className="text-[10px] sm:text-[11px] text-slate-600">
              Pelaku secara sadar bermaksud menyakiti atau mempermalukan korban.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-black text-[11px] flex items-center justify-center">
              2
            </span>
            <h4 className="font-bold text-xs text-slate-900">Berulang Kali (Repetitive)</h4>
            <p className="text-[10px] sm:text-[11px] text-slate-600">
              Tindakan tidak terjadi sekali kebetulan, melainkan terus berulang.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 font-black text-[11px] flex items-center justify-center">
              3
            </span>
            <h4 className="font-bold text-xs text-slate-900">Ketimpangan Kuasa</h4>
            <p className="text-[10px] sm:text-[11px] text-slate-600">
              Ada perbedaan kekuatan fisik, status sosial, jumlah anggota, atau popularitas.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-[11px] sm:text-xs text-amber-900">
          <b>Ingat Rumus:</b> Jika hanya satu pihak yang tertawa sedangkan pihak lain tersiksa, itu <b>BUKAN</b> bercanda, melainkan <b>PERUNDUNGAN</b>.
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Bentuk Bullying</span>
          <ArrowRight size={14} />
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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
          Bab 2 • Klasifikasi Kasus
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          4 Bentuk Utama Perundungan di Sekolah
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
        {/* Fisik */}
        <div className="p-3 rounded-xl bg-white border border-rose-200 shadow-sm space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <UserX size={16} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">1. Bullying Fisik</h4>
              <span className="text-[9px] text-rose-600 font-semibold">Tampak kasat mata</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Kontak fisik kekerasan: memukul, menendang, mendorong, merusak atau merampas barang milik teman.
          </p>
        </div>

        {/* Verbal */}
        <div className="p-3 rounded-xl bg-white border border-amber-200 shadow-sm space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <MessageSquareWarning size={16} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">2. Bullying Verbal</h4>
              <span className="text-[9px] text-amber-600 font-semibold">Paling sering terjadi</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Menghina fisik (body shaming), memberi julukan buruk, mencemooh nama orang tua, dan memaki kasar.
          </p>
        </div>

        {/* Sosial */}
        <div className="p-3 rounded-xl bg-white border border-purple-200 shadow-sm space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <Users size={16} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">3. Bullying Sosial</h4>
              <span className="text-[9px] text-purple-600 font-semibold">Merusak pergaulan</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Mengucilkan dari kelompok belajar, menyebarkan gosip palsu, dan mempermalukan di depan umum.
          </p>
        </div>

        {/* Cyberbullying */}
        <div className="p-3 rounded-xl bg-white border border-cyan-200 shadow-sm space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <Smartphone size={16} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900">4. Cyberbullying</h4>
              <span className="text-[9px] text-cyan-700 font-semibold">Dunia maya & medsos</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Meneror via WhatsApp/medsos, mengunggah aib teman tanpa izin, dan membuat akun palsu penghina.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Simulasi Karakter 3D</span>
          <ArrowRight size={14} />
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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
          Bab 3 • Akar Permasalahan
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          Mengapa Seseorang Menjadi Pelaku Bullying?
        </h2>
      </div>

      <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
        <p className="text-[11px] sm:text-xs">
          Bullying dipicu oleh kombinasi faktor psikologis individu dan lingkungan pergaulan:
        </p>

        <div className="space-y-2">
          <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5">
            <span className="text-lg">👤</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Individu</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Rasa rendah diri yang ditutupi dominasi, amarah tak terkontrol, minim empati.
              </p>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5">
            <span className="text-lg">🏡</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Keluarga</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Kurang perhatian orang tua, pola asuh keras, atau menyaksikan pertengkaran rumah.
              </p>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5">
            <span className="text-lg">👥</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Teman Sebaya</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Ingin diakui dalam geng dan takut dikucilkan jika tidak ikut menindas.
              </p>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5">
            <span className="text-lg">📱</span>
            <div>
              <h4 className="font-bold text-xs text-slate-900">Faktor Media & Konten</h4>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Paparan konten kekerasan, bahasa kasar medsos, dan tren "prank" yang merendahkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Dampak Bullying</span>
          <ArrowRight size={14} />
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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-rose-800 uppercase bg-rose-100 px-2.5 py-0.5 rounded-full">
          Bab 4 • Konsekuensi
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          Dampak Nyata Bullying Bagi Semua Pihak
        </h2>
      </div>

      <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1">
          <h4 className="font-bold text-xs text-rose-900 flex items-center gap-1.5">
            <AlertTriangle size={15} /> Bagi Korban (Victim)
          </h4>
          <p className="text-[11px] text-rose-950">
            Trauma psikologis, cemas berlebih, penurunan nilai pelajaran, takut ke sekolah, hingga depresi.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
          <h4 className="font-bold text-xs text-amber-900 flex items-center gap-1.5">
            <AlertTriangle size={15} /> Bagi Pelaku (Bully)
          </h4>
          <p className="text-[11px] text-amber-950">
            Menjadi kebiasaan agresif, rentan masalah hukum di masa depan, dan dijauhi teman tulus.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 space-y-1">
          <h4 className="font-bold text-xs text-purple-900 flex items-center gap-1.5">
            <AlertTriangle size={15} /> Bagi Saksi (Bystander)
          </h4>
          <p className="text-[11px] text-purple-950">
            Mengalami rasa bersalah karena tidak membela, merasa lingkungan sekolah tidak aman.
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Peran Siswa</span>
          <ArrowRight size={14} />
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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
          Bab 5 • Peran Sosial
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          Siapa Saja yang Terlibat dalam Bullying?
        </h2>
      </div>

      <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
            <span className="text-xs font-black text-rose-700">1. Pelaku (The Bully)</span>
            <p className="text-[11px] text-slate-600">
              Pihak yang menginisiasi agresi untuk memperlihatkan dominasi kekuatan.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
            <span className="text-xs font-black text-blue-700">2. Korban (The Victim)</span>
            <p className="text-[11px] text-slate-600">
              Pihak sasaran yang berada dalam posisi rentan atau tidak berdaya melawan.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-100 border border-slate-300 space-y-0.5">
            <span className="text-xs font-black text-slate-700">3. Saksi Pasif (Bystander)</span>
            <p className="text-[11px] text-slate-600">
              Hanya menonton atau tertawa. Diamnya saksi memperkuat keberanian pelaku!
            </p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border-2 border-emerald-400 space-y-0.5 shadow-sm">
            <span className="text-xs font-black text-emerald-800 flex items-center gap-1">
              <Shield size={13} /> 4. Upstander (Saksi Pembela)
            </span>
            <p className="text-[11px] text-emerald-950 font-medium">
              Pahlawan sekolah! Berani menegur cerdas, merangkul korban, dan melapor guru.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white shadow-md space-y-0.5">
          <h4 className="font-black text-xs text-amber-300">Jadilah UPSTANDER:</h4>
          <p className="text-[11px] text-emerald-100 leading-relaxed">
            Data membuktikan <b>57% perundungan berhenti dalam kurang dari 10 detik</b> ketika seorang saksi sebaya berani bersuara membelanya!
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Mini Game 3: Pilih Aksi</span>
          <ArrowRight size={14} />
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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-emerald-800 uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full">
          Bab 6 • Aksi Preventif
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          Cara Efektif Mencegah Bullying di Sekolah
        </h2>
      </div>

      <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
            <span className="text-xs font-black text-emerald-700">🌟 Budaya 5S</span>
            <p className="text-[11px] text-slate-600">
              Senyum, Sapa, Salam, Sopan, dan Santun kepada seluruh warga madrasah.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
            <span className="text-xs font-black text-emerald-700">🤝 Tolak Geng Eksklusif</span>
            <p className="text-[11px] text-slate-600">
              Pertemanan terbuka dan merangkul teman yang pemalu atau pendiam.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
            <span className="text-xs font-black text-emerald-700">📜 Kesepakatan Kelas</span>
            <p className="text-[11px] text-slate-600">
              Menyepakati bersama aturan anti-ejekan dan anti-kekerasan bersama guru.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-0.5">
            <span className="text-xs font-black text-emerald-700">📱 Etika Berdigital</span>
            <p className="text-[11px] text-slate-600">
              Saring sebelum sharing, jangan berkomentar jahat, dan hormati privasi teman.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px] sm:text-xs text-emerald-950 font-medium">
          💡 <b>Kebaikan Menular:</b> Menyapa teman di koridor atau mengajak makan bersama dapat memulihkan semangat teman yang sedih.
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Lanjut ke Alur Penanganan</span>
          <ArrowRight size={14} />
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
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none">
      <div className="pb-2.5 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-800 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
          Bab 7 • Alur Lapor
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 leading-snug">
          Ayo Bertindak: Alur Penanganan & Pengaduan
        </h2>
      </div>

      <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed flex-1">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
          <h4 className="font-bold text-xs text-blue-900 flex items-center gap-1.5">
            <PhoneCall size={15} /> Saluran Pengaduan Resmi MTs SA Riyadul Bayan:
          </h4>
          <ul className="space-y-1 text-[11px] text-slate-700">
            <li><b>1. Guru BK:</b> Ruang Konseling Ramah Siswa.</li>
            <li><b>2. Wali Kelas & Guru Piket:</b> Melapor langsung saat jam istirahat.</li>
            <li><b>3. Kotak Aspirasi & Curhat:</b> Tersedia di depan ruang perpustakaan.</li>
            <li><b>4. Orang Tua:</b> Bercerita secara terbuka kepada keluarga di rumah.</li>
          </ul>
        </div>

        <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 space-y-1">
          <h4 className="font-bold text-xs text-blue-950">Langkah Tanggap Jika Kamu Sasaran:</h4>
          <ol className="list-decimal list-inside space-y-0.5 text-[11px] text-blue-900 font-medium">
            <li>Tetap tenang, tatap mata pelaku: katakan <b>"Hentikan!"</b>.</li>
            <li>Segera mendekat ke keramaian atau datangi guru terdekat.</li>
            <li>Simpan bukti tangkapan layar jika terjadi di internet.</li>
            <li>Ceritakan kepada guru atau orang tua yang dipercaya.</li>
          </ol>
        </div>

        <div className="p-2.5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-[11px] text-amber-950 font-bold">
          Ingat: Kamu tidak sendirian, dan kamu berhak aman di madrasah!
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200 flex justify-end">
        <button
          onClick={() => { playClickSound(); onNext(); }}
          className="w-full sm:w-auto px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow flex items-center justify-center gap-2"
        >
          <span>Masuk ke Refleksi Diri</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
