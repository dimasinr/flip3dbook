import React, { useState } from 'react';
import Cartoon3DBook from './components/Cartoon3DBook';
import StoryboardPageRenderer, {
  StoryboardCoverLeft,
  StoryboardCoverRight,
} from './components/StoryboardPageRenderer';
import { STORYBOARD_PAGES } from './data/storyboardData';

export default function App() {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const TOTAL_SPREADS = 16; // Spread 0 (Cover & Menu) + 15 Spreads (Pages 1 to 30)

  // Jump to any spread
  const goToSpread = (idx) => {
    if (idx >= 0 && idx < TOTAL_SPREADS) {
      setSpreadIndex(idx);
    }
  };

  // Jump to any page number (1 to 30)
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= 30) {
      const targetSpread = Math.ceil(pageNumber / 2);
      goToSpread(targetSpread);
    } else {
      goToSpread(0);
    }
  };

  // Get spread contents based on spreadIndex
  const getSpreadContents = (idx) => {
    if (idx === 0) {
      return {
        left: <StoryboardCoverLeft onStart={() => goToSpread(1)} />,
        right: <StoryboardCoverRight onSelectPage={goToPage} />,
      };
    }

    // Spread 1..15 maps to Pages 1..30
    const leftPageNum = (idx - 1) * 2 + 1;
    const rightPageNum = (idx - 1) * 2 + 2;

    const leftData = STORYBOARD_PAGES.find((p) => p.pageNumber === leftPageNum);
    const rightData = STORYBOARD_PAGES.find((p) => p.pageNumber === rightPageNum);

    return {
      left: (
        <StoryboardPageRenderer
          pageData={leftData}
          onNextPage={() => goToSpread(idx + 1)}
        />
      ),
      right: (
        <StoryboardPageRenderer
          pageData={rightData}
          onNextPage={() => goToSpread(idx + 1)}
        />
      ),
    };
  };

  const current = getSpreadContents(spreadIndex);
  const nextSpread = spreadIndex + 1 < TOTAL_SPREADS ? getSpreadContents(spreadIndex + 1) : null;
  const prevSpread = spreadIndex > 0 ? getSpreadContents(spreadIndex - 1) : null;

  return (
    <div className="w-full min-h-[100dvh] h-[100dvh] cartoon-room-bg flex items-center justify-center overflow-hidden p-1 sm:p-2.5 md:p-4 select-none relative">
      {/* 
        NO TOPBAR, NO NAVBAR, NOTHING DISTRACTING!
        Only the 3D Interactive E-Modul Book lying open in the center of the screen.
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
