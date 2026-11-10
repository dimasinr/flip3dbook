import React, { useState, useEffect } from 'react';
import { REFLECTION_PROMPTS } from '../data/reflectionData';
import { playSuccessSound, playClickSound } from '../sound';
import { Heart, Save, CheckCircle2, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ReflectionView({ onSavePledge }) {
  const [reflections, setReflections] = useState({});
  const [studentName, setStudentName] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('emodul_reflections');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setReflections(parsed.answers || {});
        setStudentName(parsed.name || '');
      } catch (e) {}
    }
  }, []);

  const handleChange = (id, text) => {
    setReflections((prev) => ({ ...prev, [id]: text }));
    setIsSaved(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    playClickSound();

    localStorage.setItem(
      'emodul_reflections',
      JSON.stringify({ answers: reflections, name: studentName, savedAt: new Date().toISOString() })
    );

    setIsSaved(true);
    playSuccessSound();
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.7 } });

    if (onSavePledge) {
      onSavePledge(studentName, reflections);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll">
      {/* Header */}
      <div className="pb-3 mb-3 border-b border-slate-200">
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-rose-700 uppercase bg-rose-100 px-2.5 py-0.5 rounded-full">
          Refleksi & Komitmen (FR-09)
        </span>
        <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
          <span>💖 Ruang Refleksi Diri & Ikrar</span>
        </h2>
        <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
          Perubahan madrasah yang ramah dimulai dari kesadaran diri sendiri.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-3 flex-1">
        {/* Name Input */}
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
          <label className="text-[11px] sm:text-xs font-black text-blue-900 block mb-1">
            Nama Lengkap Siswa MTs SA Riyadul Bayan:
          </label>
          <input
            type="text"
            required
            value={studentName}
            onChange={(e) => { setStudentName(e.target.value); setIsSaved(false); }}
            placeholder="Contoh: Muhammad Rifqi Pratama"
            className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-800 bg-slate-50"
          />
        </div>

        {/* 5 Reflection Prompts */}
        {REFLECTION_PROMPTS.map((prompt, idx) => (
          <div key={prompt.id} className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
            <span className="text-[10px] sm:text-xs font-black text-rose-600 block">{prompt.label}</span>
            <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{prompt.question}</p>
            <textarea
              rows={2}
              value={reflections[prompt.id] || ''}
              onChange={(e) => handleChange(prompt.id, e.target.value)}
              placeholder={prompt.placeholder}
              className="w-full p-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-400 font-medium text-slate-700 bg-slate-50/70"
            />
          </div>
        ))}

        {/* Save / Pledge Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-2.5 sm:py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center justify-center gap-2 active:scale-98"
          >
            {isSaved ? <CheckCircle2 size={16} /> : <Save size={16} />}
            <span>{isSaved ? 'Ikrar Berhasil Disimpan!' : 'Simpan Refleksi & Teguhkan Ikrar'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

