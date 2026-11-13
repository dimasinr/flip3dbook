import React, { useState } from 'react';
import { playClickSound, playSuccessSound, playErrorSound, playFanfareSound } from '../sound';
import { CheckCircle2, XCircle, Award, RotateCcw, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Check, X } from 'lucide-react';
import confetti from 'canvas-confetti';

// -------------------------------------------------------------
// 1. Multiple Choice Quiz Component (Hal 5, Hal 20, Hal 25)
// -------------------------------------------------------------
export function QuizMultipleChoice({
  title,
  question,
  options,
  correctAnswer,
  explanation,
  scenario = null,
}) {
  const [selectedKey, setSelectedKey] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (key) => {
    if (isAnswered) return;
    playClickSound();
    setSelectedKey(key);
    setIsAnswered(true);

    if (key === correctAnswer) {
      playSuccessSound();
      confetti({ particleCount: 50, spread: 60 });
    } else {
      playErrorSound();
    }
  };

  const handleReset = () => {
    playClickSound();
    setSelectedKey(null);
    setIsAnswered(false);
  };

  return (
    <div className="bg-white rounded-2xl p-3.5 sm:p-5 border-2 border-slate-800 shadow-md space-y-3 select-none">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <span className="text-[10px] sm:text-xs font-black uppercase text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300">
          {title}
        </span>
        {isAnswered && (
          <button
            onClick={handleReset}
            className="text-[10px] sm:text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>Ulangi Soal</span>
          </button>
        )}
      </div>

      {scenario && (
        <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
          📌 <b>Studi Kasus:</b> "{scenario}"
        </div>
      )}

      <p className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
        {question}
      </p>

      <div className="space-y-2">
        {options.map((opt) => {
          const isChosen = selectedKey === opt.key;
          const isRight = isAnswered && opt.key === correctAnswer;
          const isWrongChosen = isAnswered && isChosen && !isRight;

          return (
            <button
              key={opt.key}
              onClick={() => handleSelect(opt.key)}
              disabled={isAnswered}
              className={`w-full text-left p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm font-bold transition-all border-2 flex items-center justify-between gap-2 ${
                isRight
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-md scale-[1.01]'
                  : isWrongChosen
                  ? 'bg-rose-500 text-white border-rose-600'
                  : isChosen
                  ? 'bg-blue-100 border-blue-500 text-blue-900'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black shrink-0 ${
                    isRight || isWrongChosen
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {opt.key}
                </span>
                <span className="leading-snug">{opt.text}</span>
              </div>
              {isRight && <CheckCircle2 size={16} className="text-white shrink-0" />}
              {isWrongChosen && <XCircle size={16} className="text-white shrink-0" />}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div
          className={`p-3 rounded-xl text-[11px] sm:text-xs leading-relaxed border ${
            selectedKey === correctAnswer
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : 'bg-rose-50 border-rose-300 text-rose-950'
          }`}
        >
          <b>{selectedKey === correctAnswer ? '✅ Jawabanmu Benar!' : '❌ Kurang Tepat.'}</b>{' '}
          {explanation}
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 2. Matching Quiz Component (Hal 10)
// -------------------------------------------------------------
export function QuizMatching({ title, instruction, pairs, categories }) {
  const [matches, setMatches] = useState({});
  const [selectedActionIdx, setSelectedActionIdx] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectAction = (idx) => {
    if (isSubmitted) return;
    playClickSound();
    setSelectedActionIdx(idx);
  };

  const handleSelectCategory = (cat) => {
    if (isSubmitted || selectedActionIdx === null) return;
    playClickSound();
    setMatches((prev) => ({ ...prev, [selectedActionIdx]: cat }));
    setSelectedActionIdx(null);
  };

  const handleCheck = () => {
    playClickSound();
    setIsSubmitted(true);
    let allCorrect = true;
    pairs.forEach((p, idx) => {
      if (matches[idx] !== p.category) allCorrect = false;
    });

    if (allCorrect) {
      playSuccessSound();
      confetti({ particleCount: 60, spread: 70 });
    } else {
      playErrorSound();
    }
  };

  const handleReset = () => {
    playClickSound();
    setMatches({});
    setSelectedActionIdx(null);
    setIsSubmitted(false);
  };

  const isComplete = Object.keys(matches).length === pairs.length;

  return (
    <div className="bg-white rounded-2xl p-3.5 sm:p-5 border-2 border-slate-800 shadow-md space-y-3 select-none">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <span className="text-[10px] sm:text-xs font-black uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
          {title}
        </span>
        {isSubmitted && (
          <button
            onClick={handleReset}
            className="text-[10px] sm:text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>Coba Lagi</span>
          </button>
        )}
      </div>

      <p className="text-xs text-slate-600 font-bold leading-snug">
        💡 {instruction} (Pilih tindakan di kiri, lalu sentuh jenis di kanan)
      </p>

      {/* Pairs List */}
      <div className="space-y-2">
        {pairs.map((p, idx) => {
          const chosenCategory = matches[idx];
          const isCorrect = isSubmitted && chosenCategory === p.category;
          const isSelected = selectedActionIdx === idx;

          return (
            <div
              key={idx}
              onClick={() => handleSelectAction(idx)}
              className={`p-2.5 rounded-xl border-2 cursor-pointer transition flex items-center justify-between gap-2 ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-emerald-50 border-emerald-400'
                    : 'bg-rose-50 border-rose-400'
                  : isSelected
                  ? 'bg-amber-100 border-amber-500 shadow-md ring-2 ring-amber-400'
                  : chosenCategory
                  ? 'bg-slate-50 border-slate-400'
                  : 'bg-white border-slate-200 hover:border-slate-400'
              }`}
            >
              <span className="text-xs font-bold text-slate-800 leading-snug">{p.action}</span>
              <span
                className={`px-2.5 py-1 rounded-lg text-[10px] font-black shrink-0 ${
                  chosenCategory
                    ? 'bg-slate-900 text-amber-300'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {chosenCategory || 'Pilih Jenis...'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Categories Buttons */}
      {!isSubmitted && (
        <div className="pt-2 border-t border-slate-200">
          <div className="text-[10px] font-black uppercase text-slate-400 mb-1.5">
            Pilih Klasifikasi Jenis:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                disabled={selectedActionIdx === null}
                className={`p-2 rounded-xl text-xs font-black transition border-2 ${
                  selectedActionIdx !== null
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 border-slate-900 shadow-sm active:scale-95'
                    : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Submission Button */}
      {!isSubmitted ? (
        <button
          onClick={handleCheck}
          disabled={!isComplete}
          className={`w-full py-2.5 rounded-xl text-xs font-black transition ${
            isComplete
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md active:scale-98'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isComplete ? 'Periksa Kecocokan' : `Pasangkan Semua (${Object.keys(matches).length}/${pairs.length})`}
        </button>
      ) : (
        <div className="p-2.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-800 text-center">
          Kunci Jawaban: Memukul (Fisik) • Akun Palsu (Siber) • Mengucilkan (Relasional) • Julukan Kasar (Verbal).
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 3. Categorize Quiz Component (Hal 15: Internal vs Eksternal)
// -------------------------------------------------------------
export function QuizCategorize({ title, instruction, items }) {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePick = (idx, cat) => {
    if (isSubmitted) return;
    playClickSound();
    setAnswers((prev) => ({ ...prev, [idx]: cat }));
  };

  const handleCheck = () => {
    playClickSound();
    setIsSubmitted(true);
    let allRight = true;
    items.forEach((item, idx) => {
      if (answers[idx] !== item.category) allRight = false;
    });

    if (allRight) {
      playSuccessSound();
      confetti({ particleCount: 60, spread: 70 });
    } else {
      playErrorSound();
    }
  };

  const handleReset = () => {
    playClickSound();
    setAnswers({});
    setIsSubmitted(false);
  };

  const isComplete = Object.keys(answers).length === items.length;

  return (
    <div className="bg-white rounded-2xl p-3.5 sm:p-5 border-2 border-slate-800 shadow-md space-y-3 select-none">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <span className="text-[10px] sm:text-xs font-black uppercase text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-300">
          {title}
        </span>
        {isSubmitted && (
          <button
            onClick={handleReset}
            className="text-[10px] sm:text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>Ulangi Kuis</span>
          </button>
        )}
      </div>

      <p className="text-xs text-slate-600 font-bold leading-snug">
        💡 {instruction}
      </p>

      <div className="space-y-2.5">
        {items.map((item, idx) => {
          const chosen = answers[idx];
          const isCorrect = isSubmitted && chosen === item.category;

          return (
            <div
              key={idx}
              className={`p-2.5 sm:p-3 rounded-xl border-2 transition ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-emerald-50 border-emerald-400'
                    : 'bg-rose-50 border-rose-400'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="text-xs font-bold text-slate-900 mb-2 leading-snug">
                {idx + 1}. "{item.text}"
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePick(idx, 'Internal')}
                  disabled={isSubmitted}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-black transition border ${
                    chosen === 'Internal'
                      ? 'bg-purple-600 text-white border-purple-700 shadow-sm'
                      : 'bg-white hover:bg-purple-50 text-slate-700 border-slate-300'
                  }`}
                >
                  Faktor Internal
                </button>

                <button
                  onClick={() => handlePick(idx, 'Eksternal')}
                  disabled={isSubmitted}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-black transition border ${
                    chosen === 'Eksternal'
                      ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                      : 'bg-white hover:bg-blue-50 text-slate-700 border-slate-300'
                  }`}
                >
                  Faktor Eksternal
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleCheck}
          disabled={!isComplete}
          className={`w-full py-2.5 rounded-xl text-xs font-black transition ${
            isComplete
              ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-md active:scale-98'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isComplete ? 'Periksa Jawaban' : `Pilih Semua (${Object.keys(answers).length}/${items.length})`}
        </button>
      ) : (
        <div className="p-2.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-800 text-center">
          Penyebab Internal berasal dari dalam diri pelaku (emosi, ego). Penyebab Eksternal dipicu lingkungan keluarga, teman, & media.
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 4. True/False 5 Questions Self-Evaluation (Hal 29)
// -------------------------------------------------------------
export function QuizTrueFalseFive({ title, questions, bubblePrompt }) {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qId, val) => {
    if (isSubmitted) return;
    playClickSound();
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    playClickSound();
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) correctCount += 1;
    });

    const calculated = correctCount * 20; // 5 questions -> 100 max
    setScore(calculated);
    setIsSubmitted(true);

    if (calculated >= 80) {
      playFanfareSound();
      confetti({ particleCount: 80, spread: 80 });
    } else {
      playSuccessSound();
    }
  };

  const handleReset = () => {
    playClickSound();
    setAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="bg-white rounded-2xl p-3.5 sm:p-5 border-2 border-slate-800 shadow-md space-y-3 select-none">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-300">
            {title}
          </span>
          <h3 className="text-sm sm:text-base font-black text-slate-900 mt-1">
            Uji Sikap & Pemahaman Bullying
          </h3>
        </div>

        {isSubmitted && (
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Skor Kamu</span>
            <span className="text-lg sm:text-xl font-black text-emerald-600">{score} / 100</span>
          </div>
        )}
      </div>

      <div className="space-y-2.5">
        {questions.map((q) => {
          const userVal = answers[q.id];
          const isCorrect = isSubmitted && userVal === q.answer;

          return (
            <div
              key={q.id}
              className={`p-2.5 rounded-xl border transition ${
                isSubmitted
                  ? isCorrect
                    ? 'bg-emerald-50 border-emerald-300'
                    : 'bg-rose-50 border-rose-300'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-800 leading-snug">
                  {q.id}. {q.text}
                </span>
                {isSubmitted && (
                  <span className="shrink-0 text-xs">
                    {isCorrect ? (
                      <CheckCircle2 size={16} className="text-emerald-600" />
                    ) : (
                      <XCircle size={16} className="text-rose-500" />
                    )}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelect(q.id, true)}
                  disabled={isSubmitted}
                  className={`flex-1 py-1 rounded-lg text-xs font-black transition border ${
                    userVal === true
                      ? 'bg-emerald-600 text-white border-emerald-700'
                      : 'bg-white hover:bg-emerald-50 text-slate-700 border-slate-300'
                  }`}
                >
                  BENAR
                </button>

                <button
                  onClick={() => handleSelect(q.id, false)}
                  disabled={isSubmitted}
                  className={`flex-1 py-1 rounded-lg text-xs font-black transition border ${
                    userVal === false
                      ? 'bg-rose-600 text-white border-rose-700'
                      : 'bg-white hover:bg-rose-50 text-slate-700 border-slate-300'
                  }`}
                >
                  SALAH
                </button>
              </div>

              {isSubmitted && (
                <div className="mt-2 text-[10px] text-slate-600 border-t border-slate-200 pt-1">
                  <b>Kunci: {q.answer ? 'BENAR' : 'SALAH'}</b> • {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={answeredCount < questions.length}
          className={`w-full py-2.5 rounded-xl text-xs font-black transition ${
            answeredCount === questions.length
              ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-md active:scale-98'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          Kirim Evaluasi Mandiri ({answeredCount}/{questions.length})
        </button>
      ) : (
        <button
          onClick={handleReset}
          className="w-full py-2 rounded-xl text-xs font-bold border border-slate-300 text-slate-600 hover:bg-slate-100 flex items-center justify-center gap-1.5"
        >
          <RotateCcw size={14} />
          <span>Coba Ulang Evaluasi</span>
        </button>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 5. Pledge Ceremony Component (Hal 30)
// -------------------------------------------------------------
export function PledgeCeremony({ title, subtitle, pledges, buttonText }) {
  const [hasCommitted, setHasCommitted] = useState(false);
  const [studentName, setStudentName] = useState('');

  const handleCommit = () => {
    playFanfareSound();
    setHasCommitted(true);
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl p-4 sm:p-6 border-3 border-amber-400 shadow-xl space-y-4 select-none text-slate-800">
      <div className="text-center space-y-1">
        <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-200/80 px-3 py-1 rounded-full border border-amber-400">
          🌟 Puncak Komitmen E-Modul
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-blue-950 uppercase tracking-tight pt-1">
          {title}
        </h2>
        <p className="text-xs font-bold text-slate-600">{subtitle}</p>
      </div>

      {/* Name Input */}
      {!hasCommitted ? (
        <div className="space-y-1.5">
          <label className="text-xs font-black text-slate-800 block">
            Ketik Nama Lengkapmu untuk Ikrar:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Contoh: Muhammad Bima Al-Fatih"
            className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-800 text-xs sm:text-sm font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      ) : (
        <div className="p-3 bg-white rounded-xl border-2 border-amber-400 text-center">
          <span className="text-[10px] text-slate-500 uppercase font-bold block">Duta Peduli Terdaftar:</span>
          <span className="text-lg font-black text-blue-900 font-serif">
            {studentName || 'Siswa Berintegritas MTs SA Riyadul Bayan'}
          </span>
        </div>
      )}

      {/* 4 Pledges */}
      <div className="bg-white/90 p-3 sm:p-4 rounded-xl border border-amber-300 space-y-2">
        <div className="text-[11px] font-black uppercase tracking-wider text-amber-900">
          Butir Ikrar Integritas:
        </div>
        <ul className="space-y-1.5 text-xs text-slate-800 font-semibold leading-relaxed">
          {pledges.map((p, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      {!hasCommitted ? (
        <button
          onClick={handleCommit}
          className="w-full py-3.5 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 hover:brightness-110 text-amber-300 font-black text-xs sm:text-sm rounded-xl shadow-lg border-2 border-slate-900 transition flex items-center justify-center gap-2 active:scale-98"
        >
          <Sparkles size={18} />
          <span>{buttonText}</span>
        </button>
      ) : (
        <div className="space-y-2">
          <div className="p-3 bg-emerald-100 border border-emerald-400 text-emerald-950 rounded-xl text-center text-xs font-black">
            🎉 Selamat! Kamu Resmi Menjadi Duta Anti-Bullying Madrasah!
          </div>
          <button
            onClick={() => window.print()}
            className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl border-2 border-slate-900 shadow transition flex items-center justify-center gap-1.5"
          >
            🖨️ Cetak / Simpan Sertifikat Ikrar Resmi
          </button>
        </div>
      )}
    </div>
  );
}

