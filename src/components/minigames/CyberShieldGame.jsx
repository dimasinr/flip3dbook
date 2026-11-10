import React, { useState, useEffect, useRef } from 'react';
import { CYBER_MESSAGES } from '../../data/gamesData';
import { playSuccessSound, playErrorSound, playClickSound, playFanfareSound } from '../../sound';
import { Shield, Heart, Zap, Sparkles, RotateCcw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CyberShieldGame({ onScoreUpdate }) {
  const [gameState, setGameState] = useState('ready'); // ready, playing, finished
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hp, setHp] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [activeMessage, setActiveMessage] = useState(null);
  const [actionFeedback, setActionFeedback] = useState(null);

  const startNextMessage = (idx) => {
    if (idx >= CYBER_MESSAGES.length) {
      setGameState('finished');
      playFanfareSound();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      return;
    }
    setActiveMessage(CYBER_MESSAGES[idx]);
    setActionFeedback(null);
  };

  const startGame = () => {
    playClickSound();
    setHp(3);
    setScore(0);
    setStreak(0);
    setCurrentIndex(0);
    setGameState('playing');
    startNextMessage(0);
  };

  const handleAction = (playerChoseShield) => {
    if (!activeMessage || actionFeedback) return;
    playClickSound();

    const isToxic = activeMessage.toxic;
    const isCorrect = (playerChoseShield && isToxic) || (!playerChoseShield && !isToxic);

    if (isCorrect) {
      playSuccessSound();
      const points = 120 + streak * 30;
      const newScore = score + points;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);

      setActionFeedback({
        status: 'success',
        title: playerChoseShield ? '🛡️ Ujaran Jahat Tertangkis!' : '💖 Pesan Baik Diterima!',
        desc: playerChoseShield
          ? `Diubah jadi pesan positif: "${activeMessage.kindReplacement}" (+${points} Poin)`
          : 'Pesan kebaikan memperkuat persahabatan!',
      });

      if (onScoreUpdate) onScoreUpdate(newScore);
    } else {
      playErrorSound();
      const newHp = hp - 1;
      setHp(newHp);
      setStreak(0);

      setActionFeedback({
        status: 'error',
        title: playerChoseShield ? '❌ Salah Tangkis!' : '💔 Cyber Bullying Lolos!',
        desc: playerChoseShield
          ? 'Itu adalah pesan yang baik dan tidak perlu ditangkis!'
          : `Kata-kata kasar melukai korban! Seharusnya gunakan Perisai Siber.`,
      });

      if (newHp <= 0) {
        setTimeout(() => {
          setGameState('finished');
        }, 1200);
        return;
      }
    }

    setTimeout(() => {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      startNextMessage(nextIdx);
    }, 1600);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-sky-800/40 select-none overflow-y-auto cartoon-scroll">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-sky-800/50">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-cyan-400 uppercase bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/50">
            Mini Game 2 • Action Refleks
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-black text-white mt-1">🛡️ Cyber Shield Defender</h3>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* HP Hearts */}
          <div className="flex items-center gap-1 bg-slate-900/80 px-2 sm:px-3 py-1 rounded-xl border border-slate-700">
            {[1, 2, 3].map((heart) => (
              <Heart
                key={heart}
                size={15}
                className={heart <= hp ? 'text-rose-500 fill-rose-500' : 'text-slate-600'}
              />
            ))}
          </div>

          {/* Score */}
          <div className="bg-slate-900/80 border border-slate-700 px-2.5 sm:px-3.5 py-1 rounded-xl text-right">
            <span className="text-[9px] text-slate-400 block uppercase font-bold">Skor</span>
            <span className="text-sm sm:text-base font-black text-cyan-400">{score}</span>
          </div>
        </div>
      </div>

      {gameState === 'ready' && (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-3 sm:p-6 space-y-3 sm:space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 animate-pulse">
            <Shield size={36} className="sm:w-11 sm:h-11" />
          </div>

          <div className="space-y-1.5 max-w-md">
            <h4 className="text-lg sm:text-2xl font-black text-white">Lindungi Temanmu di Medsos!</h4>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
              Pesan digital akan muncul di layar ponsel. Gunakan <b className="text-rose-400">PERISAI SIBER</b> jika pesan berisi ujaran kebencian, atau tekan <b className="text-emerald-400">TERIMA PESAN</b> jika pesan kebaikan.
            </p>
          </div>

          <button
            onClick={startGame}
            className="px-6 py-2.5 sm:px-8 sm:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-base rounded-xl shadow-xl transition active:scale-95"
          >
            Mulai Misi Penyelamatan
          </button>
        </div>
      )}

      {gameState === 'playing' && activeMessage && (
        <div className="flex-1 flex flex-col justify-between py-2 sm:py-4">
          {/* Progress */}
          <div className="text-[10px] sm:text-xs text-slate-400 flex justify-between font-bold mb-1.5">
            <span>Pesan #{currentIndex + 1} / {CYBER_MESSAGES.length}</span>
            {streak > 1 && <span className="text-amber-400">🔥 {streak}x Tangkisan!</span>}
          </div>

          {/* Incoming Message Smartphone Notification Mockup */}
          <div className="bg-slate-900/90 border-2 border-cyan-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative my-auto max-w-lg mx-auto w-full">
            <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-slate-800 text-[10px] sm:text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Notifikasi Media Sosial
              </span>
              <span>Baru saja</span>
            </div>

            <div className="py-4 sm:py-6 text-center">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 block mb-1">Pengirim: Anonim_Madrasah</span>
              <p className="text-base sm:text-xl md:text-2xl font-black text-white tracking-wide leading-snug">
                "{activeMessage.text}"
              </p>
            </div>

            {actionFeedback ? (
              <div
                className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-center transition-all ${
                  actionFeedback.status === 'success'
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-500 text-rose-200'
                }`}
              >
                <div className="font-black text-xs sm:text-sm">{actionFeedback.title}</div>
                <div className="text-[10px] sm:text-xs opacity-90 mt-0.5">{actionFeedback.desc}</div>
              </div>
            ) : (
              <div className="text-[10px] sm:text-xs text-center text-slate-400">
                Apakah ini pesan beracun (cyberbullying) atau pesan persahabatan?
              </div>
            )}
          </div>

          {/* Action Choice Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-3">
            <button
              onClick={() => handleAction(true)}
              disabled={!!actionFeedback}
              className="py-2.5 sm:py-4 px-3 sm:px-4 bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-rose-400/50 flex sm:flex-col items-center justify-center gap-1 active:scale-98 transition disabled:opacity-50"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base">
                <Shield size={18} />
                <span>AKTIFKAN PERISAI</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-rose-200 font-normal hidden sm:inline">Tangkis Ujaran Kebencian</span>
            </button>

            <button
              onClick={() => handleAction(false)}
              disabled={!!actionFeedback}
              className="py-2.5 sm:py-4 px-3 sm:px-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-emerald-400/50 flex sm:flex-col items-center justify-center gap-1 active:scale-98 transition disabled:opacity-50"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base">
                <Heart size={18} />
                <span>TERIMA PESAN</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-emerald-200 font-normal hidden sm:inline">Pesan Kebaikan & Dukungan</span>
            </button>
          </div>
        </div>
      )}

      {gameState === 'finished' && (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-200 text-slate-900 flex items-center justify-center shadow-2xl">
            <Shield size={44} />
          </div>

          <div className="space-y-1">
            <h4 className="text-2xl font-black text-white">
              {hp > 0 ? 'Selamat! Cyber Safe Berhasil!' : 'Misi Terhenti! HP Habis'}
            </h4>
            <p className="text-sm text-slate-300">Total Skor Perlindungan:</p>
            <div className="text-4xl font-black text-cyan-400">{score} POIN</div>
          </div>

          <p className="text-xs text-slate-400 max-w-md bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            {hp > 0
              ? 'Refleks digitalmu mengagumkan! Kamu sudah siap melindungi diri dan teman dari toxic cyberbullying di internet.'
              : 'Jangan berkecil hati. Selalu waspada membedakan kritik sehat dengan ujaran perundungan.'}
          </p>

          <button
            onClick={startGame}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold rounded-xl shadow-lg transition flex items-center gap-2"
          >
            <RotateCcw size={18} />
            <span>Coba Lagi Dari Awal</span>
          </button>
        </div>
      )}
    </div>
  );
}

