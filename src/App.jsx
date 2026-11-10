import React, { useState } from 'react';
import Cartoon3DBook from './components/Cartoon3DBook';
import { CartoonCoverLeft, CartoonMenuRight } from './components/CartoonCoverAndMenu';
import {
  IntroPage,
  MateriBab1,
  MateriBab2,
  MateriBab3,
  MateriBab4,
  MateriBab5,
  MateriBab6,
  MateriBab7,
} from './components/MateriPages';
import Character3DViewer from './components/Character3DViewer';
import BullyingDetective from './components/minigames/BullyingDetective';
import CyberShieldGame from './components/minigames/CyberShieldGame';
import ActionChoiceSimulator from './components/minigames/ActionChoiceSimulator';
import MythVsFactGame from './components/minigames/MythVsFactGame';
import PretestView from './components/PretestView';
import PosttestView from './components/PosttestView';
import ReflectionView from './components/ReflectionView';
import ScoreSummaryView from './components/ScoreSummaryView';

export default function App() {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const TOTAL_SPREADS = 10;

  // Jump to any spread
  const goToSpread = (idx) => {
    if (idx >= 0 && idx < TOTAL_SPREADS) {
      setSpreadIndex(idx);
    }
  };

  // Define contents of each spread
  const getSpreadContents = (idx) => {
    switch (idx) {
      // SPREAD 0: Cover & Menu Daftar Materi
      case 0:
        return {
          left: <CartoonCoverLeft onStart={() => goToSpread(1)} />,
          right: <CartoonMenuRight onSelectSpread={goToSpread} />,
        };

      // SPREAD 1: Pendahuluan & Pretest
      case 1:
        return {
          left: <IntroPage onNext={() => goToSpread(2)} />,
          right: (
            <PretestView
              onComplete={() => {}}
              onNavigateToMateri={() => goToSpread(2)}
            />
          ),
        };

      // SPREAD 2: Bab 1 (Mengenal) & Bab 2 (Bentuk Bullying)
      case 2:
        return {
          left: <MateriBab1 onNext={() => goToSpread(3)} />,
          right: <MateriBab2 onNext={() => goToSpread(3)} />,
        };

      // SPREAD 3: Karakter 3D Animasi Bullying & Mini Game 1 (Detektif)
      case 3:
        return {
          left: (
            <div className="flex flex-col h-full">
              <div className="pb-2 mb-2 border-b-2 border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full border border-blue-300">
                    Animasi 3D Interaktif (FR-05)
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-0.5">
                    Simulasi 3D Karakter Bullying
                  </h3>
                </div>
              </div>
              <div className="flex-1 min-h-[320px]">
                <Character3DViewer />
              </div>
            </div>
          ),
          right: <BullyingDetective onScoreUpdate={() => {}} />,
        };

      // SPREAD 4: Bab 3 (Penyebab) & Mini Game 2 (Cyber Shield)
      case 4:
        return {
          left: <MateriBab3 onNext={() => goToSpread(5)} />,
          right: <CyberShieldGame onScoreUpdate={() => {}} />,
        };

      // SPREAD 5: Bab 4 (Dampak) & Bab 5 (Siapa yang Terlibat)
      case 5:
        return {
          left: <MateriBab4 onNext={() => goToSpread(6)} />,
          right: <MateriBab5 onNext={() => goToSpread(6)} />,
        };

      // SPREAD 6: Mini Game 3 (Dilema Upstander) & Mini Game 4 (Mitos vs Fakta)
      case 6:
        return {
          left: <ActionChoiceSimulator onComplete={() => {}} />,
          right: <MythVsFactGame onScoreUpdate={() => {}} />,
        };

      // SPREAD 7: Bab 6 (Pencegahan) & Bab 7 (Penanganan & Lapor)
      case 7:
        return {
          left: <MateriBab6 onNext={() => goToSpread(8)} />,
          right: <MateriBab7 onNext={() => goToSpread(8)} />,
        };

      // SPREAD 8: Refleksi Diri & Posttest
      case 8:
        return {
          left: <ReflectionView onSavePledge={() => {}} />,
          right: (
            <PosttestView
              onComplete={() => {}}
              onNavigateToSummary={() => goToSpread(9)}
            />
          ),
        };

      // SPREAD 9: Rangkuman & Sertifikat Duta
      case 9:
        return {
          left: (
            <ScoreSummaryView
              onRestartLearning={() => goToSpread(1)}
              onNavigateToCover={() => goToSpread(0)}
            />
          ),
          right: (
            <div className="flex flex-col h-full justify-center items-center text-center p-4 space-y-4">
              <div className="border-4 border-dashed border-amber-400 p-6 rounded-3xl bg-amber-50/70 w-full space-y-3">
                <span className="text-5xl block animate-bounce">🏆</span>
                <h3 className="text-xl font-black text-blue-950 uppercase">
                  Selamat! Kamu Telah Menyelesaikan E-Modul
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  Telah mempelajari seluruh materi, mempraktekkan simulasi 3D, dan menuntaskan 4 mini games anti-bullying MTs SA Riyadul Bayan.
                </p>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs rounded-xl shadow-lg border-2 border-slate-900"
                >
                  🖨️ Cetak / Simpan Sertifikat Resmi
                </button>
              </div>

              <button
                onClick={() => goToSpread(0)}
                className="text-xs font-black text-blue-800 underline hover:text-blue-600"
              >
                Kembali ke Halaman Sampul Depan & Menu
              </button>
            </div>
          ),
        };

      default:
        return {
          left: <CartoonCoverLeft onStart={() => goToSpread(1)} />,
          right: <CartoonMenuRight onSelectSpread={goToSpread} />,
        };
    }
  };

  const current = getSpreadContents(spreadIndex);
  const nextSpread = spreadIndex + 1 < TOTAL_SPREADS ? getSpreadContents(spreadIndex + 1) : null;
  const prevSpread = spreadIndex > 0 ? getSpreadContents(spreadIndex - 1) : null;

  return (
    <div className="w-screen h-screen cartoon-room-bg flex items-center justify-center overflow-hidden p-2 sm:p-4 select-none relative">
      {/* 
        NO TOPBAR, NO NAVBAR, NOTHING DISTRACTING!
        Only the 3D Cartoon Book lying open in the center of the screen.
      */}
      <Cartoon3DBook
        spreadIndex={spreadIndex}
        totalSpreads={TOTAL_SPREADS}
        onSpreadChange={setSpreadIndex}
        leftContent={current.left}
        rightContent={current.right}
        nextLeftContent={nextSpread?.left}
        nextRightContent={nextSpread?.right}
        prevLeftContent={prevSpread?.left}
        prevRightContent={prevSpread?.right}
      />
    </div>
  );
}
