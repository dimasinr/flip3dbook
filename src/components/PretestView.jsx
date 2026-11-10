import React, { useState, useEffect } from 'react';
import { PRETEST_QUESTIONS } from '../data/pretestData';
import { playSuccessSound, playErrorSound, playClickSound, playFanfareSound } from '../sound';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, BookOpen, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PretestView({ onComplete, onNavigateToMateri }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedPretest = localStorage.getItem('emodul_pretest_score');
    if (savedPretest !== null) {
      setScore(parseInt(savedPretest, 10));
    }
  }, []);

  const handleSelectAnswer = (qId, val) => {
    if (submitted) return;
    playClickSound();
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    playClickSound();
    let totalCorrect = 0;
    PRETEST_QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.answer) {
        totalCorrect += 1;
      }
    });

    const calculatedScore = totalCorrect * 10;
    setScore(calculatedScore);
    setSubmitted(true);
    localStorage.setItem('emodul_pretest_score', calculatedScore.toString());

    if (calculatedScore >= 70) {
      playSuccessSound();
      confetti({ particleCount: 60, spread: 60 });
    } else {
      playFanfareSound();
    }

    if (onComplete) onComplete(calculatedScore);
  };

  const handleReset = () => {
    playClickSound();
    setAnswers({});
    setSubmitted(false);
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll">
      {/* Header */}
      <div className="pb-3 mb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-blue-700 uppercase bg-blue-100 px-2.5 py-0.5 rounded-full">
            Evaluasi Awal (FR-07)
          </span>
          <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1">
            📝 Pretest: Uji Pemahaman Awal
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
            Jawablah 10 pertanyaan Ya/Tidak di bawah ini dengan jujur.
          </p>
        </div>

        {submitted ? (
          <div className="bg-blue-900 text-white px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-md self-start sm:self-auto">
            <div>
              <span className="text-[9px] text-blue-200 uppercase font-bold block">Skor Pretest</span>
              <span className="text-xl sm:text-2xl font-black text-yellow-300">{score} / 100</span>
            </div>
            <Award className="text-yellow-400 shrink-0" size={26} />
          </div>
        ) : (
          <div className="text-[11px] font-bold text-slate-500 bg-slate-200/70 px-2.5 py-1 rounded-xl self-start">
            Terjawab: {answeredCount} dari {PRETEST_QUESTIONS.length}
          </div>
        )}
      </div>

      {/* Question List */}
      <div className="space-y-3 flex-1">
        {PRETEST_QUESTIONS.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isCorrect = submitted && userAnswer === q.answer;

          return (
            <div
              key={q.id}
              className={`p-3 sm:p-4 rounded-xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'bg-emerald-50 border-emerald-300'
                    : 'bg-rose-50 border-rose-300'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-xs font-black text-blue-600 block">SOAL {idx + 1}</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{q.question}</p>
                </div>

                {submitted && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <CheckCircle2 className="text-emerald-600" size={18} />
                    ) : (
                      <XCircle className="text-rose-500" size={18} />
                    )}
                  </div>
                )}
              </div>

              {/* Ya / Tidak Buttons */}
              <div className="flex items-center gap-2.5 mt-2.5">
                <button
                  onClick={() => handleSelectAnswer(q.id, true)}
                  disabled={submitted}
                  className={`px-4 sm:px-5 py-1.5 rounded-xl text-xs font-black transition-all border ${
                    userAnswer === true
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  } ${submitted ? 'cursor-default' : 'active:scale-95'}`}
                >
                  YA
                </button>

                <button
                  onClick={() => handleSelectAnswer(q.id, false)}
                  disabled={submitted}
                  className={`px-4 sm:px-5 py-1.5 rounded-xl text-xs font-black transition-all border ${
                    userAnswer === false
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  } ${submitted ? 'cursor-default' : 'active:scale-95'}`}
                >
                  TIDAK
                </button>
              </div>

              {/* Explanation after submission */}
              {submitted && (
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-[11px] text-slate-600">
                  <span className="font-bold text-slate-800">
                    Kunci: {q.answer ? 'YA' : 'TIDAK'}.{' '}
                  </span>
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-5 mt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={answeredCount < PRETEST_QUESTIONS.length}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-black text-sm transition shadow-md flex items-center justify-center gap-2 ${
              answeredCount === PRETEST_QUESTIONS.length
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            <span>Kirim Jawaban Pretest ({answeredCount}/{PRETEST_QUESTIONS.length})</span>
          </button>
        ) : (
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5"
            >
              <RotateCcw size={15} />
              <span>Coba Ulang Pretest</span>
            </button>

            <button
              onClick={onNavigateToMateri}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <BookOpen size={18} />
              <span>Mulai Pelajari Materi E-Modul</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

