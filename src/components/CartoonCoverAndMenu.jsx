import React from 'react';
import { playClickSound } from '../sound';
import {
  BookOpen,
  Sparkles,
  Boxes,
  Gamepad2,
  ShieldAlert,
  Compass,
  Award,
  HelpCircle,
  FileText,
  ChevronRight,
  HeartHandshake,
} from 'lucide-react';

export function CartoonCoverLeft({ onStart }) {
  return (
    <div className="flex flex-col h-full justify-between select-none">
      {/* Top Badge */}
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs border-2 border-slate-900 shadow-sm flex items-center gap-1.5">
          <Sparkles size={14} />
          <span>E-MODUL KARTUN 3D</span>
        </span>
        <span className="text-[11px] font-bold text-slate-500">MTs SA Riyadul Bayan</span>
      </div>

      {/* Center Cartoon Mascot & Big Chunky Title */}
      <div className="my-auto py-3 text-center space-y-3">
        {/* Animated 3D Cartoon Mascot Character Box */}
        <div className="relative inline-block group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-3xl bg-gradient-to-tr from-amber-300 via-yellow-200 to-sky-300 border-4 border-slate-900 p-2 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] animate-bounce duration-1000 flex items-center justify-center">
            <span className="text-5xl sm:text-6xl select-none">🤝</span>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-300 px-3 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase whitespace-nowrap border-2 border-amber-300">
            PEDULI TEMAN
          </div>
        </div>

        {/* Comic Title */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-none">
            STOP <span className="text-rose-600 underline decoration-wavy decoration-amber-400">BULLYING</span>,<br />
            START <span className="text-blue-600">CARING!</span>
          </h1>

          <div className="inline-block bg-sky-100 border-2 border-sky-400 px-3 py-1 rounded-xl text-sky-950 font-black text-xs tracking-wider uppercase mt-1">
            Kenali • Cegah • Peduli
          </div>
        </div>

        <p className="text-xs text-slate-600 font-bold max-w-xs mx-auto leading-relaxed">
          "Kenali Perilakunya, Cegah Perundungannya, Mulai dari Kepedulian Kita di Madrasah."
        </p>
      </div>

      {/* Bottom Start Quick Button */}
      <div className="pt-2">
        <button
          onClick={() => { playClickSound(); onStart(); }}
          className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm rounded-2xl border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] transition flex items-center justify-center gap-2"
        >
          <BookOpen size={18} />
          <span>MULAI BACA BUKU (SWIPE / KLIK)</span>
        </button>
      </div>
    </div>
  );
}

export function CartoonMenuRight({ onSelectSpread }) {
  const MENU_LIST = [
    {
      spread: 1,
      title: "Pendahuluan & Pretest (Uji Awal)",
      subtitle: "10 Pertanyaan Ya/Tidak pemahaman dasar",
      icon: <HelpCircle size={18} className="text-blue-600" />,
      color: "bg-blue-100 border-blue-400",
      tag: "Uji Awal",
    },
    {
      spread: 2,
      title: "Bab 1 & 2: Mengenal & Bentuk Bullying",
      subtitle: "Fisik, Verbal, Sosial, dan Cyberbullying",
      icon: <FileText size={18} className="text-amber-600" />,
      color: "bg-amber-100 border-amber-400",
      tag: "Materi Inti",
    },
    {
      spread: 3,
      title: "🎭 Simulasi 3D Karakter & Mini Game 1",
      subtitle: "Karakter 3D bergerak bullying + Detektif Kasus",
      icon: <Boxes size={18} className="text-rose-600" />,
      color: "bg-rose-100 border-rose-400",
      tag: "3D & Game",
      highlight: true,
    },
    {
      spread: 4,
      title: "Faktor Penyebab & Mini Game 2",
      subtitle: "Cyber Shield Defender (Tangkis Pesan Jahat)",
      icon: <Gamepad2 size={18} className="text-cyan-600" />,
      color: "bg-cyan-100 border-cyan-400",
      tag: "Action Game",
    },
    {
      spread: 5,
      title: "Bab 4 & 5: Dampak & Siapa yang Terlibat?",
      subtitle: "Pelaku, Korban, dan Upstander Pembela",
      icon: <HeartHandshake size={18} className="text-purple-600" />,
      color: "bg-purple-100 border-purple-400",
      tag: "Materi",
    },
    {
      spread: 6,
      title: "Mini Game 3 & 4: Upstander & Mitos",
      subtitle: "Simulasi Cerita Pilihan Aksi + Mitos vs Fakta",
      icon: <Compass size={18} className="text-emerald-600" />,
      color: "bg-emerald-100 border-emerald-400",
      tag: "2 Mini Games",
      highlight: true,
    },
    {
      spread: 7,
      title: "Bab 6 & 7: Cara Cegah & Alur Penanganan",
      subtitle: "Budaya 5S dan Alur Pengaduan Resmi Guru BK",
      icon: <ShieldAlert size={18} className="text-teal-600" />,
      color: "bg-teal-100 border-teal-400",
      tag: "Solusi",
    },
    {
      spread: 8,
      title: "Refleksi Diri & Posttest Akhir",
      subtitle: "Ikrar Komitmen Siswa + 10 Soal Evaluasi",
      icon: <Award size={18} className="text-yellow-600" />,
      color: "bg-yellow-100 border-yellow-400",
      tag: "Evaluasi",
    },
  ];

  return (
    <div className="flex flex-col h-full justify-between select-none">
      {/* Header Menu */}
      <div className="pb-2 border-b-2 border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300">
            Daftar Materi
          </span>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
            📑 Peta Menu E-Modul
          </h2>
        </div>
        <span className="text-[11px] font-bold text-slate-500">Pilih & Lompat ke Bab</span>
      </div>

      {/* Chapter Cards Grid */}
      <div className="grid grid-cols-1 gap-2 my-2 overflow-y-auto cartoon-scroll max-h-[460px] pr-1">
        {MENU_LIST.map((m) => (
          <button
            key={m.spread}
            onClick={() => { playClickSound(); onSelectSpread(m.spread); }}
            className={`w-full text-left p-2.5 rounded-xl border-2 border-slate-800 transition flex items-center justify-between gap-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ${
              m.highlight ? 'bg-amber-100 hover:bg-amber-200' : 'bg-white hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className={`w-8 h-8 rounded-lg border-2 border-slate-800 flex items-center justify-center shrink-0 ${m.color}`}>
                {m.icon}
              </div>
              <div className="truncate">
                <span className="text-xs font-black text-slate-900 block truncate">
                  {m.title}
                </span>
                <span className="text-[10px] font-bold text-slate-500 block truncate">
                  {m.subtitle}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[10px] font-black bg-slate-900 text-white px-2 py-0.5 rounded-md">
                Buka
              </span>
              <ChevronRight size={16} className="text-slate-900" />
            </div>
          </button>
        ))}
      </div>

      {/* Hint Footer */}
      <div className="text-[11px] text-center font-extrabold text-slate-600 bg-amber-200/50 p-2 rounded-xl border-2 border-amber-300">
        💡 Kamu bisa langsung memilih menu di atas, atau geser (swipe) halaman buku!
      </div>
    </div>
  );
}

