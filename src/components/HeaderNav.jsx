import React from 'react';
import {
  BookOpen,
  List,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Home,
  Shield,
  Award,
} from 'lucide-react';
import { playClickSound } from '../sound';

export default function HeaderNav({
  currentPage,
  totalPages,
  onGoHome,
  onOpenTOC,
  soundEnabled,
  onToggleSound,
  isFullscreen,
  onToggleFullscreen,
  onOpenSummary,
}) {
  const progressPercent = Math.round(((currentPage + 1) / totalPages) * 100);

  return (
    <header className="w-full bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between select-none z-30 shadow-md">
      {/* Brand & Home */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => { playClickSound(); onGoHome(); }}
          className="flex items-center gap-2 hover:opacity-80 transition group"
          title="Kembali ke Cover Buku"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition">
            <Shield size={18} />
          </div>
          <div className="hidden sm:block text-left">
            <span className="text-xs font-black block leading-none tracking-tight">
              STOP BULLYING
            </span>
            <span className="text-[10px] text-amber-400 font-bold block leading-none mt-0.5">
              MTs SA Riyadul Bayan
            </span>
          </div>
        </button>

        {/* Home Button */}
        <button
          onClick={() => { playClickSound(); onGoHome(); }}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          title="Cover Awal"
        >
          <Home size={16} />
        </button>

        {/* Daftar Isi Button */}
        <button
          onClick={() => { playClickSound(); onOpenTOC(); }}
          className="px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-extrabold flex items-center gap-1.5 transition shadow-sm"
        >
          <List size={16} />
          <span className="hidden md:inline">Daftar Materi</span>
        </button>
      </div>

      {/* Center Progress Bar */}
      <div className="hidden lg:flex items-center gap-3 w-64 max-w-xs">
        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
          <div
            className="bg-gradient-to-r from-sky-400 to-blue-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-[11px] font-bold text-slate-300 whitespace-nowrap">
          {progressPercent}%
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2">
        {/* Certificate / Summary Pill */}
        <button
          onClick={() => { playClickSound(); onOpenSummary(); }}
          className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition flex items-center gap-1.5"
          title="Lihat Capaian & Sertifikat"
        >
          <Award size={16} />
          <span className="hidden sm:inline">Sertifikat</span>
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => { playClickSound(); onToggleSound(); }}
          className={`p-2 rounded-xl transition ${
            soundEnabled
              ? 'bg-slate-800 hover:bg-slate-700 text-sky-400'
              : 'bg-slate-800/60 hover:bg-slate-700 text-slate-500'
          }`}
          title={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
        >
          {soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={() => { playClickSound(); onToggleFullscreen(); }}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          title={isFullscreen ? 'Keluar Layar Penuh' : 'Layar Penuh'}
        >
          {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
        </button>
      </div>
    </header>
  );
}

