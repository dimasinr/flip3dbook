import React, { useState, useEffect } from 'react';
import { Award, TrendingUp, Sparkles, CheckCircle2, RotateCcw, ArrowRight, ShieldCheck } from 'lucide-react';
import { playClickSound, playFanfareSound } from '../sound';
import CertificateModal from './CertificateModal';
import confetti from 'canvas-confetti';

export default function ScoreSummaryView({ onRestartLearning, onNavigateToCover }) {
  const [preScore, setPreScore] = useState(0);
  const [postScore, setPostScore] = useState(0);
  const [studentName, setStudentName] = useState('Sahabat Peduli YAPIRA');
  const [showCertModal, setShowCertModal] = useState(false);

  useEffect(() => {
    const pre = localStorage.getItem('emodul_pretest_score');
    if (pre !== null) setPreScore(parseInt(pre, 10));

    const post = localStorage.getItem('emodul_posttest_score');
    if (post !== null) setPostScore(parseInt(post, 10));

    const refl = localStorage.getItem('emodul_reflections');
    if (refl) {
      try {
        const p = JSON.parse(refl);
        if (p.name) setStudentName(p.name);
      } catch (e) {}
    }
  }, []);

  const delta = postScore - preScore;
  const isPassed = postScore >= 70;

  const handleOpenCertificate = () => {
    playClickSound();
    playFanfareSound();
    setShowCertModal(true);
    confetti({ particleCount: 90, spread: 80 });
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="pb-4 mb-4 border-b border-slate-200">
        <span className="text-[11px] font-extrabold tracking-wider text-indigo-700 uppercase bg-indigo-100 px-2.5 py-1 rounded-full">
          Rangkuman Hasil Belajar (FR-10)
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
          📊 Progres & Rekapitulasi Capaian
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Berikut adalah hasil evaluasi komprehensif setelah menempuh e-modul interaktif.
        </p>
      </div>

      {/* Main Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-5">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
          <span className="text-xs font-bold text-slate-400 uppercase">Skor Pretest (Awal)</span>
          <div className="text-3xl font-black text-blue-900 mt-1">{preScore}</div>
          <span className="text-[10px] text-slate-500">Uji pengetahuan dasar</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
          <span className="text-xs font-bold text-slate-400 uppercase">Skor Posttest (Akhir)</span>
          <div className="text-3xl font-black text-emerald-600 mt-1">{postScore}</div>
          <span className="text-[10px] text-slate-500">Evaluasi pasca materi</span>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-blue-950 text-white p-4 rounded-2xl shadow-sm text-center">
          <span className="text-xs font-bold text-indigo-200 uppercase">Peningkatan Belajar</span>
          <div className="text-3xl font-black text-amber-400 mt-1">
            {delta >= 0 ? `+${delta}` : delta} Poin
          </div>
          <span className="text-[10px] text-indigo-200">
            {delta > 0 ? 'Kemajuan pemahaman terbukti!' : 'Pemahaman stabil'}
          </span>
        </div>
      </div>

      {/* Badges Earned */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-5 space-y-3">
        <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">
          Lencana & Capaian Interaktif Terbuka:
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-center space-y-1">
            <span className="text-2xl block">🕵️</span>
            <span className="text-xs font-bold text-sky-900 block">Detektif Kasus</span>
            <span className="text-[10px] text-sky-600">Selesai Mini Game 1</span>
          </div>

          <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-center space-y-1">
            <span className="text-2xl block">🛡️</span>
            <span className="text-xs font-bold text-cyan-900 block">Cyber Defender</span>
            <span className="text-[10px] text-cyan-600">Selesai Mini Game 2</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
            <span className="text-2xl block">🧭</span>
            <span className="text-xs font-bold text-emerald-900 block">Upstander Sejati</span>
            <span className="text-[10px] text-emerald-600">Selesai Mini Game 3</span>
          </div>

          <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-center space-y-1">
            <span className="text-2xl block">💡</span>
            <span className="text-xs font-bold text-purple-900 block">Pematah Mitos</span>
            <span className="text-[10px] text-purple-600">Selesai Mini Game 4</span>
          </div>
        </div>
      </div>

      {/* Certificate Claim Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 p-5 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-1.5 font-black text-sm">
            <Sparkles size={18} />
            <span>Sertifikat Kelulusan Siap Diterbitkan!</span>
          </div>
          <p className="text-xs text-slate-900 leading-relaxed">
            Atas nama <b>{studentName}</b> sebagai Duta Anti-Bullying MTs SA Riyadul Bayan (YAPIRA).
          </p>
        </div>

        <button
          onClick={handleOpenCertificate}
          className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white font-black text-xs rounded-xl shadow transition flex items-center gap-2 shrink-0 hover:scale-105"
        >
          <Award size={18} className="text-amber-400" />
          <span>Buka & Cetak Sertifikat</span>
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <button
          onClick={onRestartLearning}
          className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
        >
          <RotateCcw size={15} />
          <span>Baca Ulang Modul</span>
        </button>

        <button
          onClick={onNavigateToCover}
          className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow"
        >
          <span>Kembali ke Cover Buku</span>
          <ArrowRight size={15} />
        </button>
      </div>

      {showCertModal && (
        <CertificateModal
          studentName={studentName}
          preScore={preScore}
          postScore={postScore}
          onClose={() => setShowCertModal(false)}
        />
      )}
    </div>
  );
}

