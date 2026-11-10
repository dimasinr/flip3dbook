import React from 'react';
import { CHAPTERS } from '../data/modulesData';
import { playClickSound } from '../sound';
import {
  BookOpen,
  HelpCircle,
  FileText,
  Boxes,
  Gamepad2,
  Heart,
  Award,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

export default function TableOfContentsPage({ currentPage, onSelectPage }) {
  const getIcon = (category) => {
    switch (category) {
      case 'intro':
        return <BookOpen size={16} className="text-amber-500" />;
      case 'materi':
        return <FileText size={16} className="text-blue-500" />;
      case 'interactive':
        return <Boxes size={16} className="text-sky-500" />;
      case 'game':
        return <Gamepad2 size={16} className="text-purple-500" />;
      case 'reflection':
        return <Heart size={16} className="text-rose-500" />;
      case 'eval':
        return <Award size={16} className="text-emerald-500" />;
      default:
        return <BookOpen size={16} className="text-slate-400" />;
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'materi':
        return <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">Materi</span>;
      case 'interactive':
        return <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-2 py-0.5 rounded-full">3D Simulasi</span>;
      case 'game':
        return <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-2 py-0.5 rounded-full">Mini Game</span>;
      case 'reflection':
        return <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">Refleksi</span>;
      case 'eval':
        return <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Evaluasi</span>;
      default:
        return null;
    }
  };

  const handleItemClick = (pageIdx) => {
    playClickSound();
    onSelectPage(pageIdx);
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar select-none">
      {/* Header */}
      <div className="pb-3 mb-3 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-blue-700 uppercase bg-blue-100 px-2.5 py-1 rounded-full">
          Navigasi E-Modul (FR-02)
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          📑 Daftar Isi & Peta Materi
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Pilihlah judul bab, simulasi 3D, atau mini games di bawah untuk membuka halaman secara langsung.
        </p>
      </div>

      {/* Chapters Grid / List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 flex-1">
        {CHAPTERS.map((ch) => {
          const isActive = currentPage === ch.pageIndex;

          return (
            <button
              key={ch.id}
              onClick={() => handleItemClick(ch.pageIndex)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-3 group ${
                isActive
                  ? 'bg-blue-900 text-white border-blue-900 shadow-md scale-[1.01]'
                  : 'bg-white hover:bg-slate-100/80 border-slate-200/80 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100'
                  }`}
                >
                  {getIcon(ch.category)}
                </div>

                <div className="truncate">
                  <span
                    className={`text-xs font-bold block truncate ${
                      isActive ? 'text-white' : 'text-slate-900 group-hover:text-blue-900'
                    }`}
                  >
                    {ch.title}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span
                      className={`text-[10px] font-medium ${
                        isActive ? 'text-blue-200' : 'text-slate-400'
                      }`}
                    >
                      Halaman {ch.pageIndex + 1}
                    </span>
                    {!isActive && getCategoryBadge(ch.category)}
                  </div>
                </div>
              </div>

              <ChevronRight
                size={16}
                className={`shrink-0 transition-transform ${
                  isActive
                    ? 'text-yellow-400 translate-x-1'
                    : 'text-slate-400 group-hover:translate-x-1 group-hover:text-blue-900'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

