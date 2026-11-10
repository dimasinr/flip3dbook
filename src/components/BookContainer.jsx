import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Sparkles, Compass } from 'lucide-react';
import { playPageFlipSound, playClickSound } from '../sound';

export default function BookContainer({
  currentPage,
  totalPages,
  onPageChange,
  children,
}) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next'); // 'next' | 'prev'
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isMouseDownRef = useRef(false);
  const mouseStartXRef = useRef(0);

  // Turn to Next Page
  const handleNextPage = () => {
    if (currentPage >= totalPages - 1 || isFlipping) return;
    playPageFlipSound();
    setFlipDirection('next');
    setIsFlipping(true);
    setTimeout(() => {
      onPageChange(currentPage + 1);
      setIsFlipping(false);
    }, 380);
  };

  // Turn to Previous Page
  const handlePrevPage = () => {
    if (currentPage <= 0 || isFlipping) return;
    playPageFlipSound();
    setFlipDirection('prev');
    setIsFlipping(true);
    setTimeout(() => {
      onPageChange(currentPage - 1);
      setIsFlipping(false);
    }, 380);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping, totalPages]);

  // Touch swipe support (Mobile & Tablet)
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isFlipping) return;
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    const diffY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Must be predominantly horizontal swipe > 45px
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX < 0) {
        handleNextPage(); // Swiped left -> next page
      } else {
        handlePrevPage(); // Swiped right -> prev page
      }
    }
  };

  // Mouse drag swipe support (Desktop)
  const handleMouseDown = (e) => {
    // Only drag on non-interactive regions
    if (['BUTTON', 'INPUT', 'TEXTAREA', 'A'].includes(e.target.tagName)) return;
    isMouseDownRef.current = true;
    mouseStartXRef.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isMouseDownRef.current || isFlipping) return;
    isMouseDownRef.current = false;
    const diffX = e.clientX - mouseStartXRef.current;
    if (Math.abs(diffX) > 55) {
      if (diffX < 0) {
        handleNextPage();
      } else {
        handlePrevPage();
      }
    }
  };

  return (
    <div
      className="relative flex-1 w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden perspective-container select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* 3D Book Shell Frame */}
      <div className="relative w-full max-w-4xl h-full max-h-[820px] flex flex-col justify-between items-center transition-all">
        
        {/* Book Outer Binder & Spine Container */}
        <div className="relative w-full flex-1 flex items-stretch rounded-3xl bg-slate-900 p-2 sm:p-3 md:p-4 shadow-book border border-slate-700/60 transition-transform duration-300">
          
          {/* Subtle Left Book Edge Thickness */}
          <div className="hidden md:block w-3 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-900 rounded-l-2xl shadow-inner" />

          {/* Book Page Spread Body */}
          <div className="relative flex-1 bg-[#FBF8F1] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Center Spine Crease Gradient */}
            <div className="absolute inset-y-0 left-0 md:left-1/2 -translate-x-1/2 w-8 pointer-events-none z-20 spine-gradient opacity-60" />

            {/* 3D Page Turn Animation Layer */}
            <div
              className={`w-full h-full flex flex-col transition-all duration-300 transform-gpu ${
                isFlipping
                  ? flipDirection === 'next'
                    ? 'opacity-80 scale-[0.985] -rotate-1 origin-left'
                    : 'opacity-80 scale-[0.985] rotate-1 origin-right'
                  : 'opacity-100 scale-100 rotate-0'
              }`}
            >
              {children}
            </div>

            {/* Interactive Corner Dog-Ear Indicators (Page Curl) */}
            {currentPage > 0 && (
              <button
                onClick={handlePrevPage}
                className="absolute bottom-2 left-2 p-2 rounded-xl bg-slate-900/10 hover:bg-slate-900/20 text-slate-600 transition flex items-center gap-1 z-20 text-xs font-bold group"
                title="Halaman Sebelumnya"
              >
                <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>
            )}

            {currentPage < totalPages - 1 && (
              <button
                onClick={handleNextPage}
                className="absolute bottom-2 right-2 p-2 rounded-xl bg-blue-900/10 hover:bg-blue-900/20 text-blue-900 transition flex items-center gap-1 z-20 text-xs font-black group"
                title="Halaman Selanjutnya"
              >
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition" />
              </button>
            )}
          </div>

          {/* Subtle Right Book Edge Thickness */}
          <div className="hidden md:block w-3 bg-gradient-to-l from-slate-950 via-slate-800 to-slate-900 rounded-r-2xl shadow-inner" />
        </div>

        {/* Bottom Floating Navigation Toolbar */}
        <div className="w-full max-w-lg mt-3 flex items-center justify-between px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/60 shadow-xl text-white z-20">
          {/* Previous Page Button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 0 || isFlipping}
            className={`p-2 rounded-xl transition flex items-center gap-1 text-xs font-bold ${
              currentPage <= 0
                ? 'opacity-30 cursor-not-allowed text-slate-500'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white'
            }`}
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {/* Page Counter & Quick Jump */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-amber-400">
              Halaman {currentPage + 1}
            </span>
            <span className="text-xs text-slate-400 font-semibold">
              / {totalPages}
            </span>
          </div>

          {/* Next Page Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1 || isFlipping}
            className={`p-2 rounded-xl transition flex items-center gap-1 text-xs font-bold ${
              currentPage >= totalPages - 1
                ? 'opacity-30 cursor-not-allowed text-slate-500'
                : 'bg-blue-700 hover:bg-blue-600 text-white shadow-md'
            }`}
          >
            <span className="hidden sm:inline">Selanjutnya</span>
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}

