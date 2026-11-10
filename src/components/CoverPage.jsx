import React from 'react';
import { BookOpen, Sparkles, Shield, Heart, ArrowRight } from 'lucide-react';
import { playClickSound } from '../sound';

export default function CoverPage({ onStartReading }) {
  const handleStart = () => {
    playClickSound();
    onStartReading();
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-navy-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden select-none border-4 border-amber-400/40">
      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-400" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-400" />
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-400" />

      {/* Subtle Background Glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Institution */}
      <div className="text-center relative z-10 pt-2 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-bold text-sky-300 border border-white/10 uppercase tracking-widest">
          <Shield size={13} className="text-amber-400" />
          <span>MTs SA RIYADUL BAYAN (YAPIRA)</span>
        </div>
        <p className="text-[10px] text-slate-400 tracking-wider">E-MODUL PEMBELAJARAN INTERAKTIF 3D</p>
      </div>

      {/* Center Hero Artwork & Title */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-auto relative z-10 space-y-4">
        {/* Animated 3D Emblem Avatar */}
        <div className="relative group">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-gradient-to-tr from-blue-600 via-sky-500 to-amber-400 p-1 shadow-2xl animate-float">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center p-3 text-center border border-white/20">
              <span className="text-4xl md:text-5xl block animate-pulse">🤝</span>
              <span className="text-[10px] font-black text-amber-300 mt-1 uppercase tracking-wider">
                ANTI-BULLYING
              </span>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-amber-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 -z-10" />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2 max-w-md">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-none">
            STOP <span className="text-amber-400">BULLYING</span>,<br />
            START <span className="text-sky-400">CARING</span>
          </h1>

          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="h-px w-8 bg-amber-400/60" />
            <span className="text-xs md:text-sm font-extrabold text-amber-300 tracking-widest uppercase">
              Kenali • Cegah • Peduli
            </span>
            <span className="h-px w-8 bg-amber-400/60" />
          </div>

          <p className="text-xs text-slate-300 italic pt-1 max-w-sm mx-auto">
            "Kenali Perilakunya, Cegah Perundungannya, Mulai dari Kepedulian Kita."
          </p>
        </div>
      </div>

      {/* Bottom Start Button & Badges */}
      <div className="relative z-10 pt-4 flex flex-col items-center space-y-3">
        <button
          onClick={handleStart}
          className="w-full max-w-xs py-4 px-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-105 active:scale-95 group"
        >
          <BookOpen size={20} className="text-slate-950" />
          <span>MULAI MEMBACA E-MODUL</span>
          <ArrowRight size={20} className="group-hover:translate-x-1.5 transition text-slate-950" />
        </button>

        <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold">
          <span>📖 3D Flipbook</span>
          <span>•</span>
          <span>🎭 3D Karakter</span>
          <span>•</span>
          <span>🎮 Mini Games Interaktif</span>
        </div>
      </div>
    </div>
  );
}

