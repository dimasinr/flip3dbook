import React, { useState, useRef, useEffect } from 'react';
import { playPageFlipSound, playClickSound } from '../sound';
import { ChevronLeft, ChevronRight, BookOpen, Home, List } from 'lucide-react';

export default function Cartoon3DBook({
  spreadIndex,
  totalSpreads,
  onSpreadChange,
  leftContent,
  rightContent,
  nextLeftContent,
  nextRightContent,
  prevLeftContent,
  prevRightContent,
}) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState('next');
  const [mobilePageSide, setMobilePageSide] = useState('left');

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isMouseDown = useRef(false);
  const mouseStartX = useRef(0);

  // Turn to Next Spread on desktop
  const turnNext = () => {
    if (spreadIndex >= totalSpreads - 1 || isFlipping) return;
    playPageFlipSound();
    setFlipDir('next');
    setIsFlipping(true);

    setTimeout(() => {
      onSpreadChange(spreadIndex + 1);
      setMobilePageSide('left');
      setIsFlipping(false);
    }, 680);
  };

  // Turn to Previous Spread on desktop
  const turnPrev = () => {
    if (spreadIndex <= 0 || isFlipping) return;
    playPageFlipSound();
    setFlipDir('prev');
    setIsFlipping(true);

    setTimeout(() => {
      onSpreadChange(spreadIndex - 1);
      setMobilePageSide('right');
      setIsFlipping(false);
    }, 680);
  };

  // Mobile Single-Page Forward Step
  const mobileNext = () => {
    if (isFlipping) return;
    if (mobilePageSide === 'left') {
      playClickSound();
      setMobilePageSide('right');
    } else {
      if (spreadIndex < totalSpreads - 1) {
        turnNext();
      }
    }
  };

  // Mobile Single-Page Backward Step
  const mobilePrev = () => {
    if (isFlipping) return;
    if (mobilePageSide === 'right') {
      playClickSound();
      setMobilePageSide('left');
    } else {
      if (spreadIndex > 0) {
        turnPrev();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (window.innerWidth < 768) {
          mobileNext();
        } else {
          turnNext();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (window.innerWidth < 768) {
          mobilePrev();
        } else {
          turnPrev();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [spreadIndex, isFlipping, totalSpreads, mobilePageSide]);

  // Touch Swipe Handlers (Responsive on mobile and tablets)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isFlipping) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Detect horizontal swipe
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
      if (dx < 0) {
        // Swiped Left -> Advance
        if (window.innerWidth < 768) {
          mobileNext();
        } else {
          turnNext();
        }
      } else {
        // Swiped Right -> Go Back
        if (window.innerWidth < 768) {
          mobilePrev();
        } else {
          turnPrev();
        }
      }
    }
  };

  const handleMouseDown = (e) => {
    if (['BUTTON', 'INPUT', 'TEXTAREA', 'A'].includes(e.target.tagName)) return;
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current || isFlipping) return;
    isMouseDown.current = false;
    const dx = e.clientX - mouseStartX.current;
    if (Math.abs(dx) > 45) {
      if (dx < 0) {
        if (window.innerWidth < 768) mobileNext();
        else turnNext();
      } else {
        if (window.innerWidth < 768) mobilePrev();
        else turnPrev();
      }
    }
  };

  // Page numbering logic:
  // Spread 0: Cover (Sampul) & Table of Contents (Daftar Isi)
  // Spread 1..15: Pages 1..30
  const isCoverSpread = spreadIndex === 0;
  const leftPageNum = isCoverSpread ? 'SAMPUL' : (spreadIndex - 1) * 2 + 1;
  const rightPageNum = isCoverSpread ? 'DAFTAR ISI' : (spreadIndex - 1) * 2 + 2;

  const currentMobilePageLabel = isCoverSpread
    ? mobilePageSide === 'left' ? 'Sampul Depan' : 'Daftar Isi'
    : `Hal ${mobilePageSide === 'left' ? leftPageNum : rightPageNum} / 30`;

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-1 sm:p-3 md:p-6 select-none book-stage overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Mobile Page Navigator Header (Visible on screens < 768px) */}
      <div className="md:hidden w-full max-w-md flex items-center justify-between px-3 py-1.5 mb-2 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl z-30">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => { playClickSound(); onSpreadChange(0); setMobilePageSide('left'); }}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400"
            title="Kembali ke Sampul"
          >
            <Home size={15} />
          </button>
          <button
            onClick={mobilePrev}
            disabled={spreadIndex === 0 && mobilePageSide === 'left'}
            className="p-1 rounded-lg bg-slate-800 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition"
            aria-label="Halaman Sebelumnya"
          >
            <ChevronLeft size={16} />
          </button>
        </div>

        <div className="flex items-center gap-1 text-xs font-black">
          <button
            onClick={() => { playClickSound(); setMobilePageSide('left'); }}
            className={`px-2 py-0.5 rounded-lg transition-all ${
              mobilePageSide === 'left'
                ? 'bg-amber-400 text-slate-950 shadow font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isCoverSpread ? 'Sampul' : `Hal ${leftPageNum}`}
          </button>
          <span className="text-slate-600 font-bold">•</span>
          <button
            onClick={() => { playClickSound(); setMobilePageSide('right'); }}
            className={`px-2 py-0.5 rounded-lg transition-all ${
              mobilePageSide === 'right'
                ? 'bg-sky-400 text-slate-950 shadow font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {isCoverSpread ? 'Menu' : `Hal ${rightPageNum}`}
          </button>
          <span className="text-[10px] text-slate-400 font-bold ml-1">
            ({currentMobilePageLabel})
          </span>
        </div>

        <button
          onClick={mobileNext}
          disabled={spreadIndex === totalSpreads - 1 && mobilePageSide === 'right'}
          className="p-1 rounded-lg bg-slate-800 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition"
          aria-label="Halaman Selanjutnya"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* 3D Open Book Container */}
      <div className="relative w-full max-w-6xl h-full max-h-[840px] book-3d flex items-stretch justify-center">
        
        {/* Soft Book Cover Base Plate & Leather Shadow */}
        <div className="absolute -inset-2 sm:-inset-3.5 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] rounded-3xl md:rounded-[40px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] border-2 border-slate-700/50 -z-20 transform -translate-y-1" />
        
        {/* Golden Silk Bookmark Ribbon (Clickable to jump to Cover & Menu) */}
        <button
          onClick={() => { playClickSound(); onSpreadChange(0); }}
          className="hidden md:flex absolute -top-3.5 left-1/2 -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-rose-600 via-rose-500 to-amber-400 z-30 drop-shadow-lg rounded-b-md items-end justify-center pb-1 hover:h-18 transition-all cursor-pointer group"
          title="Klik Pembatas Buku untuk Kembali ke Sampul & Menu"
        >
          <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-amber-400" />
        </button>

        {/* ======================================================== */}
        {/* LEFT PAGE (Open Spread Left) */}
        {/* ======================================================== */}
        <div
          className={`relative flex-1 bg-[#FFFDF9] rounded-2xl sm:rounded-3xl md:rounded-none md:rounded-l-[32px] border-2 sm:border-[3px] md:border-y-[3px] md:border-l-[3px] md:border-r border-slate-800/80 cartoon-paper-smooth md:page-arch-left flex flex-col overflow-hidden z-10 transition-all ${
            mobilePageSide === 'right' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {/* Subtle Page Thickness Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-amber-300/30 via-amber-200/20 to-transparent pointer-events-none z-20" />
          
          {/* Natural Soft Spine Shadow */}
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 spine-crease-left pointer-events-none z-20" />

          {/* Left Page Top Header */}
          <div className="px-4 sm:px-6 pt-2.5 sm:pt-3.5 pb-1 flex items-center justify-between text-xs font-black text-slate-400 border-b border-amber-200/50 shrink-0">
            <span className="flex items-center gap-1.5 text-blue-950 font-black text-[10px] sm:text-[11px] tracking-wide truncate max-w-[70%]">
              <BookOpen size={14} className="text-amber-500 shrink-0" />
              <span className="truncate">STOP BULLYING, START CARING</span>
            </span>
            <span className="bg-amber-100 text-amber-900 px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black border border-amber-300/80 shadow-xs shrink-0">
              {isCoverSpread ? 'SAMPUL DEPAN' : `HALAMAN ${leftPageNum}`}
            </span>
          </div>

          {/* Left Content Area (With bottom padding for navigation buttons) */}
          <div className="flex-1 p-3 sm:p-5 md:p-6 pb-16 md:pb-8 overflow-y-auto cartoon-scroll relative z-10">
            {leftContent}
          </div>

          {/* Mobile Bottom Navigation Controls */}
          <div className="md:hidden absolute bottom-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between pointer-events-none">
            {spreadIndex > 0 ? (
              <button
                onClick={mobilePrev}
                disabled={isFlipping}
                className="pointer-events-auto px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-[11px] shadow-lg border-2 border-slate-700 transition flex items-center gap-1 active:scale-95"
              >
                <ChevronLeft size={14} />
                <span>Hal {leftPageNum - 1}</span>
              </button>
            ) : <div />}

            <button
              onClick={mobileNext}
              disabled={isFlipping}
              className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-[11px] shadow-lg border-2 border-slate-900 transition flex items-center gap-1 active:scale-95 ml-auto"
            >
              <span>{isCoverSpread ? 'Buka Menu' : `Hal ${rightPageNum}`}</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Desktop Left Prev Button */}
          {spreadIndex > 0 && (
            <button
              onClick={turnPrev}
              disabled={isFlipping}
              className="hidden md:flex absolute bottom-3 left-3 z-30 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md border-2 border-slate-900 transition items-center gap-1 hover:scale-105 active:scale-95"
              title="Balik Halaman Sebelumnya"
            >
              <ChevronLeft size={16} />
              <span>Sebelumnya</span>
            </button>
          )}
        </div>

        {/* Center Spine Stitch Column (Desktop Only) */}
        <div className="hidden md:flex w-3.5 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 z-30 shadow-inner flex-col justify-around items-center py-6">
          <div className="w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm" />
          <div className="w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm" />
          <div className="w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm" />
          <div className="w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm" />
          <div className="w-1.5 h-3 bg-amber-400/90 rounded-full shadow-sm" />
        </div>

        {/* ======================================================== */}
        {/* RIGHT PAGE (Open Spread Right) */}
        {/* ======================================================== */}
        <div
          className={`relative flex-1 bg-[#FFFDF9] rounded-2xl sm:rounded-3xl md:rounded-none md:rounded-r-[32px] border-2 sm:border-[3px] md:border-y-[3px] md:border-r-[3px] md:border-l border-slate-800/80 cartoon-paper-smooth md:page-arch-right flex flex-col overflow-hidden z-10 transition-all ${
            mobilePageSide === 'left' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {/* Natural Soft Spine Shadow */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 spine-crease-right pointer-events-none z-20" />
          
          {/* Subtle Page Thickness Gradients */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-amber-300/30 via-amber-200/20 to-transparent pointer-events-none z-20" />

          {/* Right Page Top Header */}
          <div className="px-4 sm:px-6 pt-2.5 sm:pt-3.5 pb-1 flex items-center justify-between text-xs font-black text-slate-400 border-b border-amber-200/50 shrink-0">
            <span className="bg-sky-100 text-sky-900 px-2 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black border border-sky-300/80 shadow-xs shrink-0">
              {isCoverSpread ? 'DAFTAR ISI' : `HALAMAN ${rightPageNum}`}
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-600 font-extrabold truncate ml-2">
              MTs SA Riyadul Bayan
            </span>
          </div>

          {/* Right Content Area (With bottom padding for navigation buttons) */}
          <div className="flex-1 p-3 sm:p-5 md:p-6 pb-16 md:pb-8 overflow-y-auto cartoon-scroll relative z-10">
            {rightContent}
          </div>

          {/* Mobile Bottom Navigation Controls */}
          <div className="md:hidden absolute bottom-2.5 left-2.5 right-2.5 z-30 flex items-center justify-between pointer-events-none">
            <button
              onClick={mobilePrev}
              disabled={isFlipping}
              className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-[11px] shadow-lg border-2 border-slate-700 transition flex items-center gap-1 active:scale-95"
            >
              <ChevronLeft size={14} />
              <span>{isCoverSpread ? 'Sampul' : `Hal ${leftPageNum}`}</span>
            </button>

            {spreadIndex < totalSpreads - 1 ? (
              <button
                onClick={mobileNext}
                disabled={isFlipping}
                className="pointer-events-auto px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-[11px] shadow-lg border-2 border-slate-900 transition flex items-center gap-1 active:scale-95 ml-auto"
              >
                <span>{isCoverSpread ? 'Mulai Hal 1' : `Hal ${rightPageNum + 1}`}</span>
                <ChevronRight size={14} />
              </button>
            ) : <div />}
          </div>

          {/* Desktop Right Next Button */}
          {spreadIndex < totalSpreads - 1 && (
            <button
              onClick={turnNext}
              disabled={isFlipping}
              className="hidden md:flex absolute bottom-3 right-3 z-30 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs shadow-md border-2 border-slate-900 transition items-center gap-1 hover:scale-105 active:scale-95"
              title="Buka Halaman Berikutnya"
            >
              <span>{isCoverSpread ? 'Mulai Hal 1' : 'Selanjutnya'}</span>
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* ======================================================== */}
        {/* 3D ANIMATED FLIPPING SHEET (Desktop only for full spreads) */}
        {/* ======================================================== */}
        {isFlipping && (
          <div
            className={`hidden md:block flipping-page-container ${
              flipDir === 'next' ? 'flip-next-smooth' : 'flip-prev-smooth'
            }`}
          >
            {/* Front of flipping sheet */}
            <div className="absolute inset-0 bg-[#FFFDF9] border-[3px] border-slate-800 rounded-r-[30px] cartoon-paper-smooth p-6 overflow-hidden flipping-face-front shadow-2xl">
              <div className="w-full h-full opacity-60 pointer-events-none">
                {flipDir === 'next' ? rightContent : leftContent}
              </div>
            </div>

            {/* Back of flipping sheet */}
            <div className="absolute inset-0 bg-[#FBF7EC] border-[3px] border-slate-800 rounded-l-[30px] cartoon-paper-smooth p-6 overflow-hidden flipping-face-back shadow-2xl">
              <div className="w-full h-full opacity-60 pointer-events-none">
                {flipDir === 'next' ? nextLeftContent : prevRightContent}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
