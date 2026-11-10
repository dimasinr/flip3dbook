import React, { useState, useRef, useEffect } from 'react';
import { playPageFlipSound, playClickSound } from '../sound';
import { ChevronLeft, ChevronRight, BookOpen, Sparkles } from 'lucide-react';

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

  useEffect(() => {
    setMobilePageSide('left');
  }, [spreadIndex]);

  const turnNext = () => {
    if (spreadIndex >= totalSpreads - 1 || isFlipping) return;
    playPageFlipSound();
    setFlipDir('next');
    setIsFlipping(true);

    setTimeout(() => {
      onSpreadChange(spreadIndex + 1);
      setIsFlipping(false);
    }, 680);
  };

  const turnPrev = () => {
    if (spreadIndex <= 0 || isFlipping) return;
    playPageFlipSound();
    setFlipDir('prev');
    setIsFlipping(true);

    setTimeout(() => {
      onSpreadChange(spreadIndex - 1);
      setIsFlipping(false);
    }, 680);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        turnNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        turnPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [spreadIndex, isFlipping, totalSpreads]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isFlipping) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 35) {
      if (dx < 0) {
        if (window.innerWidth < 768 && mobilePageSide === 'left') {
          playClickSound();
          setMobilePageSide('right');
        } else {
          turnNext();
        }
      } else {
        if (window.innerWidth < 768 && mobilePageSide === 'right') {
          playClickSound();
          setMobilePageSide('left');
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
      if (dx < 0) turnNext();
      else turnPrev();
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 select-none book-stage overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Mobile Page Toggle (Narrow screens only) */}
      <div className="md:hidden flex items-center gap-1.5 bg-slate-900/95 backdrop-blur-md text-white px-3 py-1.5 rounded-full mb-2.5 border border-slate-700 shadow-xl text-xs font-black z-30">
        <button
          onClick={() => { playClickSound(); setMobilePageSide('left'); }}
          className={`px-3 py-1 rounded-full transition-all ${
            mobilePageSide === 'left' ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'text-slate-400'
          }`}
        >
          Halaman {spreadIndex * 2 + 1}
        </button>
        <span className="text-slate-600">•</span>
        <button
          onClick={() => { playClickSound(); setMobilePageSide('right'); }}
          className={`px-3 py-1 rounded-full transition-all ${
            mobilePageSide === 'right' ? 'bg-sky-400 text-slate-950 shadow-md font-black' : 'text-slate-400'
          }`}
        >
          Halaman {spreadIndex * 2 + 2}
        </button>
      </div>

      {/* 3D Open Book Container */}
      <div className="relative w-full max-w-6xl h-full max-h-[820px] book-3d flex items-stretch justify-center">
        
        {/* Soft Book Cover Base Plate & Leather Shadow */}
        <div className="absolute -inset-3.5 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border-2 border-slate-700/50 -z-20 transform -translate-y-1" />
        
        {/* Golden Silk Bookmark Ribbon */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-rose-600 via-rose-500 to-amber-400 z-30 drop-shadow-lg rounded-b-md flex items-end justify-center pb-1">
          <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-amber-400" />
        </div>

        {/* ======================================================== */}
        {/* LEFT PAGE (Open Spread Left) */}
        {/* ======================================================== */}
        <div
          className={`relative flex-1 bg-[#FFFDF9] rounded-l-[32px] border-y-[3px] border-l-[3px] border-r border-slate-800/80 cartoon-paper-smooth page-arch-left flex flex-col overflow-hidden z-10 transition-all ${
            mobilePageSide === 'right' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {/* Subtle Page Thickness Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-amber-300/30 via-amber-200/20 to-transparent pointer-events-none z-20" />
          
          {/* Natural Soft Spine Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-16 spine-crease-left pointer-events-none z-20" />

          {/* Left Page Top Header */}
          <div className="px-6 pt-3.5 pb-1 flex items-center justify-between text-xs font-black text-slate-400 border-b border-amber-200/50">
            <span className="flex items-center gap-1.5 text-blue-950 font-black text-[11px] tracking-wide">
              <BookOpen size={14} className="text-amber-500" />
              <span>STOP BULLYING, START CARING</span>
            </span>
            <span className="bg-amber-100 text-amber-900 px-3 py-0.5 rounded-full text-[10px] font-black border border-amber-300/80 shadow-xs">
              HALAMAN {spreadIndex * 2 + 1}
            </span>
          </div>

          {/* Left Content Area */}
          <div className="flex-1 p-4 sm:p-6 md:p-7 overflow-y-auto cartoon-scroll relative z-10">
            {leftContent}
          </div>

          {/* Left Dog-Ear / Prev Button */}
          {spreadIndex > 0 && (
            <button
              onClick={turnPrev}
              disabled={isFlipping}
              className="absolute bottom-3 left-3 z-30 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-md border-2 border-slate-900 transition flex items-center gap-1 hover:scale-105 active:scale-95"
              title="Balik Halaman Sebelumnya"
            >
              <ChevronLeft size={16} />
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>
          )}
        </div>

        {/* Center Spine Stitch Column */}
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
          className={`relative flex-1 bg-[#FFFDF9] rounded-r-[32px] border-y-[3px] border-r-[3px] border-l border-slate-800/80 cartoon-paper-smooth page-arch-right flex flex-col overflow-hidden z-10 transition-all ${
            mobilePageSide === 'left' ? 'hidden md:flex' : 'flex'
          }`}
        >
          {/* Natural Soft Spine Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-16 spine-crease-right pointer-events-none z-20" />
          
          {/* Subtle Page Thickness Gradients */}
          <div className="absolute right-0 top-0 bottom-0 w-3.5 bg-gradient-to-l from-amber-300/30 via-amber-200/20 to-transparent pointer-events-none z-20" />

          {/* Right Page Top Header */}
          <div className="px-6 pt-3.5 pb-1 flex items-center justify-between text-xs font-black text-slate-400 border-b border-amber-200/50">
            <span className="bg-sky-100 text-sky-900 px-3 py-0.5 rounded-full text-[10px] font-black border border-sky-300/80 shadow-xs">
              HALAMAN {spreadIndex * 2 + 2}
            </span>
            <span className="text-[11px] text-slate-600 font-extrabold">
              MTs SA Riyadul Bayan
            </span>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-4 sm:p-6 md:p-7 overflow-y-auto cartoon-scroll relative z-10">
            {rightContent}
          </div>

          {/* Right Dog-Ear / Next Button */}
          {spreadIndex < totalSpreads - 1 && (
            <button
              onClick={turnNext}
              disabled={isFlipping}
              className="absolute bottom-3 right-3 z-30 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs shadow-md border-2 border-slate-900 transition flex items-center gap-1 hover:scale-105 active:scale-95"
              title="Buka Halaman Berikutnya"
            >
              <span className="hidden sm:inline">Selanjutnya</span>
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* ======================================================== */}
        {/* 3D ANIMATED FLIPPING SHEET (Silky Smooth Arc Transition) */}
        {/* ======================================================== */}
        {isFlipping && (
          <div
            className={`flipping-page-container ${
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
