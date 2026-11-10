import React, { useRef } from 'react';
import { Award, CheckCircle2, Download, Printer, X, Sparkles, ShieldCheck } from 'lucide-react';
import { playClickSound } from '../sound';

export default function CertificateModal({ studentName, preScore, postScore, onClose }) {
  const certRef = useRef(null);

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const nameToDisplay = studentName || 'Sahabat Peduli YAPIRA';
  const today = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative border-4 border-amber-400 my-auto text-slate-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
        >
          <X size={20} />
        </button>

        {/* Certificate Printable Canvas Body */}
        <div
          ref={certRef}
          className="border-4 border-double border-blue-900 p-6 md:p-8 rounded-2xl bg-[#FFFDF9] text-center relative overflow-hidden"
        >
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <Award size={360} className="text-blue-950" />
          </div>

          <div className="relative z-10 space-y-3">
            {/* Institution Badge */}
            <div className="flex items-center justify-center gap-2 text-xs font-black tracking-widest text-blue-900 uppercase">
              <ShieldCheck className="text-emerald-600" size={18} />
              <span>MTs SA RIYADUL BAYAN (YAPIRA)</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-tight">
              SERTIFIKAT KELULUSAN E-MODUL
            </h1>

            <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-300 text-amber-900 rounded-full text-xs font-black">
              🏆 DUTA PENCEGAHAN PERUNDUNGAN & KEPEDULIAN
            </div>

            <p className="text-xs text-slate-600 italic pt-2">
              Diberikan secara resmi sebagai pengakuan atas komitmen dan pemahaman edukasi:
            </p>

            {/* Recipient Name */}
            <div className="py-2">
              <span className="text-2xl md:text-3xl font-black text-blue-900 border-b-2 border-amber-400 pb-1 inline-block px-6 font-serif">
                {nameToDisplay}
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed max-w-lg mx-auto">
              Telah menyelesaikan seluruh rangkaian pembelajaran interaktif <b>"Stop Bullying, Start Caring"</b>, memperagakan simulasi 3D karakter, menuntaskan misi mini games, dan berkomitmen menciptakan madrasah yang aman, ramah, dan saling peduli.
            </p>

            {/* Assessment Scores Bar */}
            <div className="flex items-center justify-center gap-6 py-3 border-y border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px]">PRETEST</span>
                <span className="font-bold text-slate-700">{preScore} Pts</span>
              </div>
              <div className="h-6 w-px bg-slate-300" />
              <div>
                <span className="text-slate-500 block text-[10px]">POSTTEST</span>
                <span className="font-black text-emerald-700">{postScore} / 100</span>
              </div>
              <div className="h-6 w-px bg-slate-300" />
              <div>
                <span className="text-slate-500 block text-[10px]">STATUS</span>
                <span className="font-black text-blue-900 uppercase">KOMPETEN</span>
              </div>
            </div>

            {/* Signature & Date */}
            <div className="flex items-end justify-between pt-4 text-xs text-slate-600">
              <div className="text-left">
                <span className="block text-[10px] text-slate-500">Tanggal Terbit:</span>
                <span className="font-bold text-slate-800">{today}</span>
              </div>

              <div className="text-right">
                <span className="font-bold text-slate-800 block">Tim Pengembang E-Modul</span>
                <span className="text-[10px] text-slate-500">Edukasi Anti-Bullying YAPIRA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-end gap-3 mt-5">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition flex items-center gap-1.5 shadow"
          >
            <Printer size={16} />
            <span>Cetak / Simpan PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-xl text-xs transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

