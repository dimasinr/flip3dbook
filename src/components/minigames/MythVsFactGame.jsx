import React, { useState } from 'react';
import { MYTH_FACT_CARDS } from '../../data/gamesData';
import { playSuccessSound, playErrorSound, playClickSound, playFanfareSound } from '../../sound';
import { Check, X, Sparkles, RotateCcw, Award, ArrowRight, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MythVsFactGame({ onScoreUpdate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentCard = MYTH_FACT_CARDS[currentIndex];

  const handleAnswer = (userChoseFact) => {
    if (feedback || isFinished) return;
    playClickSound();

    const isCorrect = userChoseFact === currentCard.isFact;

    if (isCorrect) {
      playSuccessSound();
      const points = 100;
      const newScore = score + points;
      setScore(newScore);
      setFeedback({
        isCorrect: true,
        title: 'Tepat Sekali!',
        desc: currentCard.explanation,
      });
      if (onScoreUpdate) onScoreUpdate(newScore);
    } else {
      playErrorSound();
      setFeedback({
        isCorrect: false,
        title: 'Masih Keliru!',
        desc: currentCard.explanation,
      });
    }
  };

  const handleNext = () => {
    playClickSound();
    setFeedback(null);
    if (currentIndex + 1 < MYTH_FACT_CARDS.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      playFanfareSound();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleRestart = () => {
    playClickSound();
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setIsFinished(false);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-purple-800/40 select-none overflow-y-auto cartoon-scroll">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-purple-800/50">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-purple-400 uppercase bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-800/50">
            Mini Game 4 • Pematah Mitos
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-black text-white mt-1">💡 Mitos vs Fakta Bullying</h3>
        </div>

        <div className="bg-slate-900/80 border border-slate-700 px-2.5 sm:px-3.5 py-1 rounded-xl text-right">
          <span className="text-[9px] text-slate-400 block uppercase font-bold">Skor</span>
          <span className="text-sm sm:text-base font-black text-purple-400">{score}</span>
        </div>
      </div>

      {!isFinished ? (
        <div className="flex-1 flex flex-col justify-between py-2 sm:py-4">
          {/* Card Indicator */}
          <div className="flex justify-between items-center text-[10px] sm:text-xs text-purple-300 font-bold mb-1.5">
            <span>Pernyataan #{currentIndex + 1} dari {MYTH_FACT_CARDS.length}</span>
            <span>Uji Pemahaman</span>
          </div>

          {/* Statement Card */}
          <div className="bg-slate-800/90 border-2 border-purple-500/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl relative my-auto">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 mb-2 sm:mb-3">
              <HelpCircle size={18} className="sm:w-5 sm:h-5" />
            </div>

            <p className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed">
              "{currentCard.statement}"
            </p>

            {feedback && (
              <div
                className={`mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all ${
                  feedback.isCorrect
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/80 border-rose-500 text-rose-200'
                }`}
              >
                <div className="font-black text-xs sm:text-sm">{feedback.title}</div>
                <div className="text-[10px] sm:text-xs opacity-95 mt-0.5 sm:mt-1 leading-relaxed">{feedback.desc}</div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {!feedback ? (
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-3">
              <button
                onClick={() => handleAnswer(false)}
                className="py-3 sm:py-4 bg-gradient-to-r from-rose-600 to-pink-700 hover:from-rose-500 hover:to-pink-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-rose-400/50 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-98 transition text-xs sm:text-sm"
              >
                <X size={18} />
                <span>INI MITOS!</span>
              </button>

              <button
                onClick={() => handleAnswer(true)}
                className="py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black rounded-xl sm:rounded-2xl shadow-lg border border-emerald-400/50 flex items-center justify-center gap-1.5 sm:gap-2 active:scale-98 transition text-xs sm:text-sm"
              >
                <Check size={18} />
                <span>INI FAKTA!</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-3 sm:py-4 bg-white text-slate-900 font-black rounded-xl sm:rounded-2xl shadow-xl hover:bg-purple-100 transition flex items-center justify-center gap-2 mt-3 text-xs sm:text-sm"
            >
              <span>{currentIndex + 1 < MYTH_FACT_CARDS.length ? 'Pernyataan Selanjutnya' : 'Lihat Hasil Akhir'}</span>
              <ArrowRight size={16} />
            </button>
          )}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 text-slate-900 flex items-center justify-center shadow-2xl">
            <Award size={44} />
          </div>

          <div className="space-y-1">
            <h4 className="text-2xl font-black text-white">Hebat! Kamu Pematah Mitos Sejati!</h4>
            <p className="text-sm text-slate-300">Total Skor Akhir:</p>
            <div className="text-4xl font-black text-purple-400">{score} POIN</div>
          </div>

          <p className="text-xs text-slate-400 max-w-md bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            Kini kamu tidak mudah tertipu anggapan keliru yang menormalisasi perundungan di kalangan remaja.
          </p>

          <button
            onClick={handleRestart}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-extrabold rounded-xl shadow-lg transition flex items-center gap-2"
          >
            <RotateCcw size={18} />
            <span>Mainkan Lagi Mitos vs Fakta</span>
          </button>
        </div>
      )}
    </div>
  );
}

