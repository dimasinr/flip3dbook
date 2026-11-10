import React, { useState } from 'react';
import { DETECTIVE_ITEMS, CATEGORIES } from '../../data/gamesData';
import { playSuccessSound, playErrorSound, playClickSound, playFanfareSound } from '../../sound';
import { Shield, Sparkles, CheckCircle, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BullyingDetective({ onScoreUpdate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [feedback, setFeedback] = useState(null); // { isCorrect: boolean, text: string }
  const [isFinished, setIsFinished] = useState(false);
  const [history, setHistory] = useState([]);

  const currentItem = DETECTIVE_ITEMS[currentIndex];

  const handleSelectCategory = (categoryId) => {
    if (feedback || isFinished) return;
    playClickSound();

    const isCorrect = categoryId === currentItem.correctCategory;

    if (isCorrect) {
      playSuccessSound();
      const points = 100 + combo * 25;
      const newScore = score + points;
      const newCombo = combo + 1;
      setScore(newScore);
      setCombo(newCombo);
      setFeedback({
        isCorrect: true,
        message: `Tepat sekali! +${points} Poin (Combo ${newCombo}x)`,
        explanation: currentItem.explanation,
      });

      if (newCombo >= 3) {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      }

      if (onScoreUpdate) onScoreUpdate(newScore);
    } else {
      playErrorSound();
      setCombo(0);
      setFeedback({
        isCorrect: false,
        message: 'Kurang tepat! Coba pelajari alasannya:',
        explanation: currentItem.explanation,
      });
    }

    setHistory((prev) => [...prev, { item: currentItem, isCorrect, chosenCategory: categoryId }]);
  };

  const handleNext = () => {
    playClickSound();
    setFeedback(null);
    if (currentIndex + 1 < DETECTIVE_ITEMS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      playFanfareSound();
      confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
    }
  };

  const handleRestart = () => {
    playClickSound();
    setCurrentIndex(0);
    setScore(0);
    setCombo(0);
    setFeedback(null);
    setIsFinished(false);
    setHistory([]);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-indigo-950 via-slate-900 to-navy-900 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-indigo-800/40 select-none overflow-y-auto cartoon-scroll">
      {/* Game Header */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-indigo-800/50">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-sky-400 uppercase bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-800/50">
            Mini Game 1 • Interaktif
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-black text-white mt-1">🕵️ Detektif Jenis Bullying</h3>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {combo > 1 && (
            <div className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-black animate-pulse flex items-center gap-1">
              <Sparkles size={12} />
              <span>{combo}x</span>
            </div>
          )}
          <div className="bg-slate-800/90 border border-slate-700 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl text-right">
            <span className="text-[9px] text-slate-400 block uppercase font-bold">Skor</span>
            <span className="text-sm sm:text-base font-black text-amber-400">{score}</span>
          </div>
        </div>
      </div>

      {!isFinished ? (
        <div className="flex-1 flex flex-col justify-between pt-2.5 sm:pt-4">
          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-1.5 sm:h-2 mb-3 overflow-hidden border border-slate-700">
            <div
              className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / DETECTIVE_ITEMS.length) * 100}%` }}
            />
          </div>

          {/* Case Card */}
          <div className="bg-slate-800/80 border-2 border-indigo-500/30 rounded-2xl p-3.5 sm:p-5 shadow-2xl relative">
            <div className="flex items-center justify-between text-[10px] sm:text-xs text-indigo-300 font-bold mb-1.5">
              <span>KASUS #{currentIndex + 1} / {DETECTIVE_ITEMS.length}</span>
              <span className="bg-indigo-900/60 px-2 py-0.5 rounded-full text-[10px]">
                {currentItem.hint}
              </span>
            </div>

            <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100 leading-snug my-2 sm:my-3">
              "{currentItem.text}"
            </p>

            <div className="text-[10px] sm:text-xs text-slate-400 italic">
              Pilihlah klasifikasi jenis perundungan yang paling tepat:
            </div>
          </div>

          {/* Category Choice Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 my-3">
            {CATEGORIES.map((cat) => {
              const isSelected = feedback && currentItem.correctCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  disabled={!!feedback}
                  className={`p-2.5 sm:p-3 rounded-xl font-bold text-xs sm:text-sm text-left transition-all duration-200 border-2 flex items-center justify-between ${
                    feedback
                      ? isSelected
                        ? 'bg-emerald-600 border-emerald-400 text-white scale-[1.01] shadow-lg'
                        : 'bg-slate-800/50 border-slate-700/50 opacity-40 text-slate-400'
                      : 'bg-slate-800/80 hover:bg-slate-750 border-slate-700 hover:border-sky-400 text-white active:scale-[0.99]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                    <span>{cat.name}</span>
                  </div>
                  {feedback && isSelected && <CheckCircle size={16} className="text-white shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Feedback & Next Button */}
          {feedback && (
            <div
              className={`p-4 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 animate-fadeIn ${
                feedback.isCorrect
                  ? 'bg-emerald-950/80 border-emerald-600 text-emerald-200'
                  : 'bg-rose-950/80 border-rose-600 text-rose-200'
              }`}
            >
              <div className="space-y-1">
                <div className="font-black text-sm flex items-center gap-1.5">
                  {feedback.isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
                  <span>{feedback.message}</span>
                </div>
                <p className="text-xs opacity-90 leading-relaxed">{feedback.explanation}</p>
              </div>

              <button
                onClick={handleNext}
                className="w-full md:w-auto px-5 py-2.5 bg-white text-slate-900 font-black rounded-xl hover:bg-sky-100 transition shadow-md flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>{currentIndex + 1 < DETECTIVE_ITEMS.length ? 'Kasus Selanjutnya' : 'Lihat Hasil Akhir'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Final Result Screen */
        <div className="flex-1 flex flex-col items-center justify-center text-center py-6 space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center shadow-2xl text-slate-900">
            <Award size={44} />
          </div>

          <div className="space-y-1">
            <h4 className="text-2xl font-black text-white">Misi Detektif Selesai!</h4>
            <p className="text-sm text-slate-300">
              Kamu berhasil menganalisis seluruh kasus dengan skor total:
            </p>
            <div className="text-4xl font-black text-amber-400 pt-2">{score} POIN</div>
          </div>

          <p className="text-xs text-slate-400 max-w-md bg-slate-800/60 p-3 rounded-xl border border-slate-700">
            {score >= 800
              ? 'Luar biasa! Mata elangmu sangat tajam dalam membedakan perundungan fisik, verbal, sosial, dan siber.'
              : 'Kerja bagus! Lanjutkan membaca materi untuk semakin peka mengenali tanda-tanda bullying di sekolah.'}
          </p>

          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold rounded-xl shadow-lg transition flex items-center gap-2"
          >
            <RotateCcw size={18} />
            <span>Mainkan Lagi Misi Ini</span>
          </button>
        </div>
      )}
    </div>
  );
}

