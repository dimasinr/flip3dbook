import React, { useState, useEffect } from 'react';
import { POSTTEST_QUESTIONS } from '../data/posttestData';
import { playSuccessSound, playErrorSound, playClickSound, playFanfareSound } from '../sound';
import { CheckCircle2, XCircle, RotateCcw, Award, TrendingUp, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PosttestView({ onComplete, onNavigateToSummary }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [pretestScore, setPretestScore] = useState(0);

  useEffect(() => {
    const savedPre = localStorage.getItem('emodul_pretest_score');
    if (savedPre !== null) {
      setPretestScore(parseInt(savedPre, 10));
    }

    const savedPost = localStorage.getItem('emodul_posttest_score');
    if (savedPost !== null) {
      setScore(parseInt(savedPost, 10));
    }
  }, []);

  const handleSelectOption = (qId, optionKey) => {
    if (submitted) return;
    playClickSound();
    setAnswers((prev) => ({ ...prev, [qId]: optionKey }));
  };

  const handleSubmit = () => {
    playClickSound();
    let totalCorrect = 0;
    POSTTEST_QUESTIONS.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        totalCorrect += 1;
      }
    });

    const finalScore = totalCorrect * 10;
    setScore(finalScore);
    setSubmitted(true);
    localStorage.setItem('emodul_posttest_score', finalScore.toString());

    if (finalScore >= 70) {
      playFanfareSound();
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
    } else {
      playSuccessSound();
    }

    if (onComplete) onComplete(finalScore);
  };

  const handleReset = () => {
    playClickSound();
    setAnswers({});
    setSubmitted(false);
  };

  const delta = score - pretestScore;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-800 rounded-2xl p-3.5 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll">
      {/* Header */}
      <div className="pb-3 mb-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-emerald-700 uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full">
            Evaluasi Akhir (FR-08)
          </span>
          <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 mt-1">
            🎓 Posttest: Evaluasi Pemahaman
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
            Pilihlah satu jawaban yang paling tepat dari 10 soal evaluasi.
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-900 text-white px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-md self-start sm:self-auto">
            <div>
              <span className="text-[9px] text-emerald-200 uppercase font-bold block">Skor Posttest</span>
              <span className="text-xl sm:text-2xl font-black text-yellow-300">{score} / 100</span>
            </div>
            <Award className="text-yellow-400 shrink-0" size={26} />
          </div>
        ) : (
          <div className="text-[11px] font-bold text-slate-500 bg-slate-200/70 px-2.5 py-1 rounded-xl self-start">
            Terjawab: {answeredCount} dari {POSTTEST_QUESTIONS.length}
          </div>
        )}
      </div>

      {/* Comparison Analytics Alert if submitted */}
      {submitted && (
        <div className="mb-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[10px] sm:text-xs text-sky-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp size={14} />
              Perbandingan Pretest vs Posttest
            </span>
            <div className="flex items-center gap-3 pt-0.5">
              <div>
                <span className="text-[10px] text-slate-300 block">Pretest</span>
                <span className="text-base sm:text-lg font-bold text-slate-100">{pretestScore}</span>
              </div>
              <ArrowRight size={15} className="text-sky-400 mt-1" />
              <div>
                <span className="text-[10px] text-slate-300 block">Posttest</span>
                <span className="text-base sm:text-lg font-black text-yellow-300">{score}</span>
              </div>
              <div className="pl-2.5 border-l border-slate-700">
                <span className="text-[10px] text-emerald-300 block">Peningkatan</span>
                <span className="text-base sm:text-lg font-black text-emerald-400">
                  {delta >= 0 ? `+${delta}` : delta} Poin
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onNavigateToSummary}
            className="w-full sm:w-auto px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-xs transition shadow flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Klaim Sertifikat</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Question List */}
      <div className="space-y-4 flex-1">
        {POSTTEST_QUESTIONS.map((q, idx) => {
          const userAnswer = answers[q.id];
          const isCorrect = submitted && userAnswer === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-4 rounded-xl border transition-all ${
                submitted
                  ? isCorrect
                    ? 'bg-emerald-50/70 border-emerald-300'
                    : 'bg-rose-50/70 border-rose-300'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-black text-emerald-700">SOAL {idx + 1}</span>
                {submitted && (
                  <span className="text-xs font-bold">
                    {isCorrect ? (
                      <span className="text-emerald-700 font-black flex items-center gap-1">
                        <CheckCircle2 size={16} /> Benar
                      </span>
                    ) : (
                      <span className="text-rose-600 font-black flex items-center gap-1">
                        <XCircle size={16} /> Kurang Tepat
                      </span>
                    )}
                  </span>
                )}
              </div>

              <p className="text-sm font-bold text-slate-900 leading-snug mb-3">{q.question}</p>

              {/* 4 Multiple Choice Options */}
              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isChosen = userAnswer === opt.key;
                  const isRightOption = submitted && opt.key === q.correctAnswer;
                  const isWrongChosen = submitted && isChosen && !isRightOption;

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(q.id, opt.key)}
                      disabled={submitted}
                      className={`w-full text-left p-3 rounded-xl text-xs font-semibold transition border flex items-center gap-3 ${
                        isRightOption
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : isWrongChosen
                          ? 'bg-rose-600 text-white border-rose-600'
                          : isChosen
                          ? 'bg-blue-100 border-blue-500 text-blue-900 font-bold'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center font-black shrink-0 ${
                          isRightOption || isWrongChosen
                            ? 'bg-white/20 text-white'
                            : isChosen
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="flex-1 leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submission */}
              {submitted && (
                <div className="mt-3 pt-2.5 border-t border-slate-200 text-xs text-slate-600">
                  <span className="font-bold text-slate-900">
                    Kunci Jawaban ({q.correctAnswer}):{' '}
                  </span>
                  <span>{q.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Submission Action */}
      <div className="pt-5 mt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={answeredCount < POSTTEST_QUESTIONS.length}
            className={`w-full sm:w-auto px-8 py-3 rounded-xl font-black text-sm transition shadow-md flex items-center justify-center gap-2 ${
              answeredCount === POSTTEST_QUESTIONS.length
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            <span>Kirim Jawaban Posttest ({answeredCount}/{POSTTEST_QUESTIONS.length})</span>
          </button>
        ) : (
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5"
            >
              <RotateCcw size={15} />
              <span>Coba Ulang Posttest</span>
            </button>

            <button
              onClick={onNavigateToSummary}
              className="w-full sm:w-auto px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-black text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Award size={18} className="text-yellow-400" />
              <span>Buka Ringkasan Hasil & Sertifikat</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

