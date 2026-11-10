import React from 'react';
import { BookOpen, Heart, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { playClickSound } from '../sound';

export default function ForewordPage({ onNavigateToTOC }) {
  const handleClick = () => {
    playClickSound();
    onNavigateToTOC();
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-6 md:p-8 shadow-sm border border-amber-200/50 overflow-y-auto custom-scrollbar select-none">
      {/* Page Header */}
      <div className="pb-4 mb-4 border-b border-amber-200/70 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-extrabold tracking-wider text-amber-800 uppercase bg-amber-100 px-2.5 py-1 rounded-full">
            Pengantar E-Modul
          </span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
            Kata Pengantar & Visi Edukasi
          </h2>
        </div>
        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
          <Heart size={22} />
        </div>
      </div>

      {/* Content Body */}
      <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed flex-1">
        <p className="font-bold text-slate-900">
          Assalamu’alaikum Warahmatullahi Wabarakatuh,
        </p>

        <p>
          Puji syukur senantiasa kita panjatkan ke hadirat Allah SWT atas rahmat dan karunia-Nya sehingga <b>E-Modul Interaktif "Stop Bullying, Start Caring"</b> ini dapat hadir sebagai media pembelajaran modern bagi seluruh keluarga besar <b>MTs SA Riyadul Bayan (YAPIRA)</b>.
        </p>

        <p>
          Masa remaja di madrasah adalah masa keemasan untuk bertumbuh, mengukir prestasi, dan menjalin persahabatan sejati. Namun, perundungan (bullying) dapat merenggut keceriaan dan rasa aman di sekolah. Modul ini dirancang khusus dengan teknologi <b>3D PageFlip, Simulasi Karakter 3D, dan Mini Games Edukatif</b> agar siswa tidak hanya membaca, tetapi dapat merasakan langsung dinamika situasi dan memilih tindakan yang tepat.
        </p>

        <div className="bg-amber-50/80 border-l-4 border-amber-500 p-3.5 rounded-r-xl my-2 space-y-1">
          <span className="font-black text-xs text-amber-900 block">Tiga Pilar Pembelajaran:</span>
          <ul className="list-disc list-inside space-y-1 text-xs text-amber-950 font-medium">
            <li><b>Kenali:</b> Membedakan lelucon biasa dengan perundungan nyata.</li>
            <li><b>Cegah:</b> Menjadi saksi pembela (Upstander) yang berani dan bijak.</li>
            <li><b>Peduli:</b> Merangkul setiap teman tanpa membeda-bedakan latar belakang.</li>
          </ul>
        </div>

        <p>
          Semoga media pembelajaran interaktif ini membawa manfaat besar dalam mewujudkan madrasah yang bebas kekerasan, harmonis, dan penuh kasih sayang sesama pelajar.
        </p>

        <div className="pt-2 text-right">
          <p className="font-bold text-slate-900">Tim Pengembang E-Modul Edukasi</p>
          <p className="text-xs text-slate-500">MTs SA Riyadul Bayan (YAPIRA)</p>
        </div>
      </div>

      {/* Next to TOC Button */}
      <div className="pt-4 mt-2 border-t border-amber-200/70 flex justify-end">
        <button
          onClick={handleClick}
          className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs rounded-xl shadow transition flex items-center gap-2"
        >
          <span>Lanjut ke Daftar Isi</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

