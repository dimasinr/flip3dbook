import React, { useState } from 'react';
import { SCENARIO_STORY } from '../../data/gamesData';
import { playSuccessSound, playErrorSound, playClickSound, playFanfareSound } from '../../sound';
import { Compass, Shield, Heart, Award, RotateCcw, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ActionChoiceSimulator({ onComplete }) {
  const [currentScene, setCurrentScene] = useState(SCENARIO_STORY.initialScene);
  const [meters, setMeters] = useState({ courage: 50, empathy: 50, safety: 50 });
  const [history, setHistory] = useState([]);

  const handleSelectOption = (option) => {
    playClickSound();

    // Update meters
    const newCourage = Math.max(0, Math.min(100, meters.courage + (option.meterImpact.courage || 0)));
    const newEmpathy = Math.max(0, Math.min(100, meters.empathy + (option.meterImpact.empathy || 0)));
    const newSafety = Math.max(0, Math.min(100, meters.safety + (option.meterImpact.safety || 0)));
    setMeters({ courage: newCourage, empathy: newEmpathy, safety: newSafety });

    const next = SCENARIO_STORY.scenes[option.nextScene];
    if (next) {
      setCurrentScene(next);
      setHistory((prev) => [...prev, { optionText: option.text, nextSceneId: option.nextScene }]);

      if (next.isVictory) {
        playFanfareSound();
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        if (onComplete) onComplete(newCourage + newEmpathy + newSafety);
      } else if (next.retryAvailable) {
        playErrorSound();
      }
    }
  };

  const handleReset = () => {
    playClickSound();
    setCurrentScene(SCENARIO_STORY.initialScene);
    setMeters({ courage: 50, empathy: 50, safety: 50 });
    setHistory([]);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white rounded-2xl p-3.5 sm:p-5 shadow-xl border border-emerald-800/40 select-none overflow-y-auto cartoon-scroll">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-emerald-800/50">
        <div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-emerald-400 uppercase bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/50">
            Mini Game 3 • Skenario Nyata
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-black text-white mt-1">🧭 Dilema Upstander: Koridor</h3>
        </div>

        <button
          onClick={handleReset}
          className="p-1.5 sm:p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition"
          title="Ulangi Skenario"
        >
          <RotateCcw size={15} />
        </button>
      </div>

      {/* Upstander Status Meters */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 my-2.5 sm:my-3 bg-slate-900/80 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-800">
        <div>
          <div className="flex justify-between text-[10px] sm:text-[11px] font-bold text-amber-300 mb-0.5">
            <span>Berani</span>
            <span>{meters.courage}%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-400 h-full transition-all duration-300"
              style={{ width: `${meters.courage}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] sm:text-[11px] font-bold text-rose-300 mb-0.5">
            <span>Empati</span>
            <span>{meters.empathy}%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
            <div
              className="bg-rose-400 h-full transition-all duration-300"
              style={{ width: `${meters.empathy}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] sm:text-[11px] font-bold text-emerald-300 mb-0.5">
            <span>Aman</span>
            <span>{meters.safety}%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 sm:h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-400 h-full transition-all duration-300"
              style={{ width: `${meters.safety}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Scene Body */}
      <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
        {/* Narrative Box */}
        <div className="bg-slate-800/90 border-2 border-emerald-500/30 rounded-2xl p-3.5 sm:p-5 shadow-2xl space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
            <Compass size={15} />
            <span>{currentScene.speaker || "Situasi Lapangan"}</span>
          </div>

          <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100 leading-relaxed">
            {currentScene.dialogue}
          </p>

          {currentScene.moral && (
            <div className="bg-rose-950/70 border border-rose-600/70 p-2.5 rounded-xl text-xs text-rose-200 flex items-start gap-2">
              <AlertTriangle size={16} className="shrink-0 text-rose-400 mt-0.5" />
              <span>{currentScene.moral}</span>
            </div>
          )}

          {currentScene.isVictory && (
            <div className="bg-emerald-950/80 border border-emerald-500 p-3 sm:p-4 rounded-xl text-center space-y-1.5">
              <div className="text-xl sm:text-2xl font-black text-amber-400">{currentScene.badge}</div>
              <p className="text-[11px] sm:text-xs text-emerald-200">
                Kamu membuktikan bahwa satu tindakan berani yang cerdas dapat mengubah nasib korban dan mencegah kekerasan berkelanjutan di madrasah!
              </p>
            </div>
          )}
        </div>

        {/* Options or Action Buttons */}
        {currentScene.options && (
          <div className="space-y-2">
            <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
              Tentukan Langkahmu:
            </div>
            {currentScene.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt)}
                className="w-full text-left p-2.5 sm:p-3.5 bg-slate-800/90 hover:bg-emerald-900/60 border-2 border-slate-700 hover:border-emerald-400 rounded-xl transition font-bold text-xs sm:text-sm text-white flex items-center justify-between gap-2.5 group active:scale-[0.99]"
              >
                <span>{opt.text}</span>
                <ArrowRight size={15} className="text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
              </button>
            ))}
          </div>
        )}

        {/* Retry Button if ended badly */}
        {currentScene.retryAvailable && (
          <button
            onClick={handleReset}
            className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 font-black rounded-xl shadow-lg transition flex items-center justify-center gap-2 hover:brightness-110"
          >
            <RotateCcw size={18} />
            <span>Pilih Keputusan yang Lebih Bijak</span>
          </button>
        )}

        {/* Play Again if won */}
        {currentScene.isVictory && (
          <button
            onClick={handleReset}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black rounded-xl shadow-lg transition flex items-center justify-center gap-2 hover:brightness-110"
          >
            <RotateCcw size={18} />
            <span>Eksplorasi Cabang Cerita Lain</span>
          </button>
        )}
      </div>
    </div>
  );
}

