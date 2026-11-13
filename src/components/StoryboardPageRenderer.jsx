import React from 'react';
import Model3DCharacter from './Model3DCharacter';
import {
  QuizMultipleChoice,
  QuizMatching,
  QuizCategorize,
  QuizTrueFalseFive,
  PledgeCeremony,
} from './StoryboardQuizComponents';
import { CHARACTERS_INFO } from '../data/storyboardData';
import {
  BookOpen,
  Layers,
  AlertTriangle,
  Shield,
  PhoneCall,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
  School,
  Award,
} from 'lucide-react';
import { playClickSound } from '../sound';

// Icon Map
const ICON_MAP = {
  BookOpen: <BookOpen className="text-blue-600" size={24} />,
  Layers: <Layers className="text-amber-600" size={24} />,
  AlertTriangle: <AlertTriangle className="text-rose-600" size={24} />,
  Shield: <Shield className="text-emerald-600" size={24} />,
  PhoneCall: <PhoneCall className="text-cyan-600" size={24} />,
  HeartHandshake: <HeartHandshake className="text-purple-600" size={24} />,
};

// -------------------------------------------------------------
// Cover Left: Title & 4 Characters in 3D
// -------------------------------------------------------------
export function StoryboardCoverLeft({ onStart }) {
  return (
    <div className="flex flex-col h-full justify-between select-none space-y-2">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 border-b border-amber-200/60 pb-2">
        <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs border-2 border-slate-900 shadow-sm flex items-center gap-1.5">
          <Sparkles size={13} />
          <span>E-MODUL INTERAKTIF 3D</span>
        </span>
        <span className="text-[11px] font-bold text-slate-500">MTs SA Riyadul Bayan</span>
      </div>

      {/* Comic Title */}
      <div className="text-center space-y-1">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          STOP <span className="text-rose-600 underline decoration-wavy decoration-amber-400">BULLYING</span>,<br />
          START <span className="text-blue-600">CARING!</span>
        </h1>
        <p className="text-[11px] sm:text-xs text-slate-600 font-bold max-w-sm mx-auto">
          "Kenali Perilakunya, Cegah Perundungannya, Mulai dari Kepedulian Kita di Madrasah."
        </p>
      </div>

      {/* 4 Characters in 3D: Dito, Bima, Sari, Ibu Nur */}
      <div className="flex-1 my-1">
        <Model3DCharacter
          characters={['dito', 'bima', 'sari', 'nur']}
          characterState={{ all: 'idle_smile' }}
          cameraDistance={7.5}
          heightClass="h-full min-h-[220px]"
          interactiveOrbit={true}
        />
      </div>

      {/* Character Names Ribbon */}
      <div className="grid grid-cols-4 gap-1 text-center text-[10px] font-black">
        <span className="bg-amber-100 text-amber-900 py-0.5 rounded-lg border border-amber-300">Dito</span>
        <span className="bg-blue-100 text-blue-900 py-0.5 rounded-lg border border-blue-300">Bima</span>
        <span className="bg-emerald-100 text-emerald-900 py-0.5 rounded-lg border border-emerald-300">Sari</span>
        <span className="bg-purple-100 text-purple-900 py-0.5 rounded-lg border border-purple-300">Ibu Nur</span>
      </div>

      {/* Start Button */}
      <button
        onClick={() => { playClickSound(); onStart(); }}
        className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl border-3 border-slate-900 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] hover:translate-y-0.5 transition flex items-center justify-center gap-2 active:scale-98"
      >
        <BookOpen size={16} />
        <span>BUKA E-MODUL (MULAI BACA HALAMAN 1)</span>
      </button>
    </div>
  );
}

// -------------------------------------------------------------
// Cover Right: Menu 6 Sub-Bab & Jump Navigation
// -------------------------------------------------------------
export function StoryboardCoverRight({ onSelectPage }) {
  const SUB_BABS = [
    { num: '01', title: 'Mengenal Bullying', page: 1, desc: 'Definisi, Candaan vs Bullying, 6 Karakteristik, Kuis Usia', color: 'border-blue-400 bg-blue-50/70', badge: 'Hal 1 - 5' },
    { num: '02', title: 'Bentuk & Contoh Bullying', page: 6, desc: 'Fisik, Verbal, Relasional, Cyberbullying, Kuis Mencocokkan', color: 'border-amber-400 bg-amber-50/70', badge: 'Hal 6 - 10' },
    { num: '03', title: 'Pelaku, Korban & Dampak', page: 11, desc: 'Dito Menangis, Luka Fisik & Mental, Kuis Faktor Internal/Eksternal', color: 'border-rose-400 bg-rose-50/70', badge: 'Hal 11 - 15' },
    { num: '04', title: 'Upaya Pencegahan Bullying', page: 16, desc: 'Peran Siswa, Ruang UKS & Madrasah Inklusif, Kuis Pencegahan', color: 'border-emerald-400 bg-emerald-50/70', badge: 'Hal 16 - 20' },
    { num: '05', title: 'Menghadapi & Melaporkan', page: 21, desc: 'Dito Berani, Simpan Bukti Chat, Alur Lapor UKS/BK, Kuis Kasus Toilet', color: 'border-cyan-400 bg-cyan-50/70', badge: 'Hal 21 - 25' },
    { num: '06', title: 'Evaluasi & Komitmen Ikrar', page: 26, desc: 'Refleksi Diri, 5 Soal Benar/Salah, Ikrar Duta Anti-Bullying', color: 'border-purple-400 bg-purple-50/70', badge: 'Hal 26 - 30' },
  ];

  return (
    <div className="flex flex-col h-full justify-between select-none">
      <div className="pb-2 border-b-2 border-slate-800 flex items-center justify-between">
        <div>
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-300">
            Daftar Isi Lengkap
          </span>
          <h2 className="text-base sm:text-xl font-black text-slate-900 mt-0.5">
            📑 Peta 30 Halaman E-Modul
          </h2>
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">Pilih Sub-Bab</span>
      </div>

      {/* Sub-Bab Cards Grid */}
      <div className="grid grid-cols-1 gap-2 my-2 overflow-y-auto cartoon-scroll flex-1 pr-1">
        {SUB_BABS.map((sb) => (
          <button
            key={sb.num}
            onClick={() => { playClickSound(); onSelectPage(sb.page); }}
            className={`w-full text-left p-2.5 rounded-xl border-2 border-slate-800 transition flex items-center justify-between gap-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:translate-x-1 active:translate-y-0.5 ${sb.color}`}
          >
            <div className="overflow-hidden">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[9px] font-black bg-slate-900 text-white px-1.5 py-0.5 rounded-md">
                  BAB {sb.num}
                </span>
                <span className="text-xs font-black text-slate-900 truncate">
                  {sb.title}
                </span>
              </div>
              <p className="text-[10px] text-slate-600 font-semibold line-clamp-1">
                {sb.desc}
              </p>
            </div>

            <span className="text-[9px] font-black bg-white/90 text-slate-800 border border-slate-300 px-2 py-1 rounded-md shrink-0">
              {sb.badge}
            </span>
          </button>
        ))}
      </div>

      <div className="text-[10px] sm:text-[11px] text-center font-bold text-slate-600 bg-amber-200/50 p-2 rounded-xl border-2 border-amber-300">
        💡 Kamu bisa langsung memilih bab di atas, atau geser (swipe) halaman buku!
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// General Storyboard Page Renderer for Pages 1 to 30
// -------------------------------------------------------------
export default function StoryboardPageRenderer({ pageData, onNextPage }) {
  if (!pageData) return null;

  const {
    pageNumber,
    subBab,
    subBabTitle,
    type,
    title,
    subtitle,
    description,
    characters = [],
    characterState = {},
    dialogues = [],
    dialogue = null,
    summary,
    bulletPoints = [],
    takeaway,
    icon,
  } = pageData;

  return (
    <div className="flex flex-col h-full bg-[#FAF8F5] text-slate-800 rounded-2xl p-3 sm:p-5 md:p-6 shadow-sm border border-slate-200 overflow-y-auto cartoon-scroll select-none justify-between space-y-3">
      {/* Page Header */}
      <div className="pb-2 border-b border-slate-200 flex items-center justify-between gap-2">
        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
          {subBab}: {subBabTitle}
        </span>
        <span className="text-[10px] font-bold text-slate-400">
          HALAMAN {pageNumber} DARI 30
        </span>
      </div>

      {/* ----------------------------------------------------------- */}
      {/* 1. Sub-Bab Cover Page (Hal 1, 6, 11, 16, 21, 26) */}
      {/* ----------------------------------------------------------- */}
      {type === 'subbab_cover' && (
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-3 my-auto py-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-amber-300 via-sky-200 to-yellow-300 border-3 border-slate-900 p-2 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] animate-bounce duration-1000">
            {ICON_MAP[icon] || <BookOpen size={32} className="text-slate-900" />}
          </div>

          <div className="space-y-1">
            <span className="text-xs font-black uppercase text-blue-700 tracking-wider">
              {subBab}
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {title.replace(/^SUB-BAB \d+: /, '')}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-700 max-w-sm mx-auto">
              {subtitle}
            </p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto bg-amber-50 p-3 rounded-xl border border-amber-300 font-medium">
            {description}
          </p>

          <button
            onClick={() => { playClickSound(); onNextPage(); }}
            className="px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-black text-xs rounded-xl shadow flex items-center gap-1.5 transition active:scale-95 mt-2"
          >
            <span>Mulai Masuk Bab Ini</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 2. Character Center Showcase (Hal 2, 7, 22) */}
      {/* ----------------------------------------------------------- */}
      {type === 'character_center' && (
        <div className="flex-1 flex flex-col justify-between space-y-3">
          <div className="text-center space-y-0.5">
            <h2 className="text-base sm:text-xl font-black text-slate-900">{title}</h2>
            <p className="text-xs font-bold text-slate-500">{subtitle}</p>
          </div>

          <div className="flex-1 min-h-[220px]">
            <Model3DCharacter
              characters={characters}
              characterState={characterState}
              cameraDistance={5.2}
              heightClass="h-full min-h-[220px]"
            />
          </div>

          {summary && (
            <div className="p-3 bg-white rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 text-center leading-relaxed shadow-sm">
              💡 {summary}
            </div>
          )}
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 3. Dialogue Two Characters (Hal 3, 8, 13, 18, 23, 28) */}
      {/* ----------------------------------------------------------- */}
      {type === 'dialogue_two' && (
        <div className="flex-1 flex flex-col justify-between space-y-2">
          <div>
            <h2 className="text-sm sm:text-base md:text-lg font-black text-slate-900 leading-snug">{title}</h2>
          </div>

          {/* 3D Scene with 2 Characters & Speech Bubbles */}
          <div className="flex-1 min-h-[240px]">
            <Model3DCharacter
              characters={characters}
              characterState={characterState}
              dialogues={dialogues}
              cameraDistance={6.2}
              heightClass="h-full min-h-[240px]"
            />
          </div>

          {takeaway && (
            <div className="p-2.5 sm:p-3 bg-blue-50/80 rounded-xl border border-blue-200 text-[11px] sm:text-xs text-blue-950 font-bold leading-relaxed">
              ⭐ <b>Pelajaran Penting:</b> {takeaway}
            </div>
          )}
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 4. Explanation Single Character (Hal 4, 9, 14, 19, 24) */}
      {/* ----------------------------------------------------------- */}
      {type === 'explanation_single' && (
        <div className="flex-1 flex flex-col justify-between space-y-2">
          <div>
            <h2 className="text-sm sm:text-base md:text-lg font-black text-slate-900 leading-snug">{title}</h2>
          </div>

          <div className="min-h-[190px] sm:min-h-[220px]">
            <Model3DCharacter
              characters={characters}
              characterState={characterState}
              dialogues={dialogue ? [dialogue] : []}
              cameraDistance={5.2}
              heightClass="h-full min-h-[190px] sm:min-h-[220px]"
            />
          </div>

          {bulletPoints.length > 0 && (
            <div className="p-3 bg-white rounded-xl border border-slate-300 shadow-sm space-y-1">
              <span className="text-[10px] font-black uppercase text-slate-400 block tracking-wider">
                Poin Edukasi Penting:
              </span>
              <ul className="space-y-1 text-xs text-slate-800 font-semibold leading-relaxed">
                {bulletPoints.map((bp, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 5. Character Two Standing (Hal 12, 17) */}
      {/* ----------------------------------------------------------- */}
      {type === 'character_two_standing' && (
        <div className="flex-1 flex flex-col justify-between space-y-3">
          <div className="text-center space-y-0.5">
            <h2 className="text-base sm:text-xl font-black text-slate-900">{title}</h2>
            <p className="text-xs font-bold text-slate-500">{subtitle}</p>
          </div>

          <div className="flex-1 min-h-[220px]">
            <Model3DCharacter
              characters={characters}
              characterState={characterState}
              cameraDistance={6.0}
              heightClass="h-full min-h-[220px]"
            />
          </div>

          {summary && (
            <div className="p-3 bg-white rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 text-center leading-relaxed shadow-sm">
              💡 {summary}
            </div>
          )}
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 6. Character All Cheering (Hal 27) */}
      {/* ----------------------------------------------------------- */}
      {type === 'character_all_cheering' && (
        <div className="flex-1 flex flex-col justify-between space-y-3">
          <div className="text-center space-y-0.5">
            <h2 className="text-base sm:text-xl font-black text-slate-900">{title}</h2>
            <p className="text-xs font-bold text-slate-500">{subtitle}</p>
          </div>

          <div className="flex-1 min-h-[240px]">
            <Model3DCharacter
              characters={['dito', 'bima', 'sari', 'nur']}
              characterState={{ all: 'cheering_happy' }}
              cameraDistance={7.5}
              heightClass="h-full min-h-[240px]"
            />
          </div>

          {summary && (
            <div className="p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl border border-purple-300 text-xs sm:text-sm font-bold text-purple-950 text-center leading-relaxed shadow-sm">
              🎉 {summary}
            </div>
          )}
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 7. Quiz Multiple Choice (Hal 5, 20) */}
      {/* ----------------------------------------------------------- */}
      {type === 'quiz_multiple_choice' && (
        <div className="flex-1 flex flex-col justify-center my-auto">
          <QuizMultipleChoice
            title={pageData.title}
            question={pageData.question}
            options={pageData.options}
            correctAnswer={pageData.correctAnswer}
            explanation={pageData.explanation}
          />
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 8. Quiz Matching (Hal 10) */}
      {/* ----------------------------------------------------------- */}
      {type === 'quiz_matching' && (
        <div className="flex-1 flex flex-col justify-center my-auto">
          <QuizMatching
            title={pageData.title}
            instruction={pageData.instruction}
            pairs={pageData.pairs}
            categories={pageData.categories}
          />
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 9. Quiz Categorize (Hal 15: Internal vs Eksternal) */}
      {/* ----------------------------------------------------------- */}
      {type === 'quiz_categorize' && (
        <div className="flex-1 flex flex-col justify-center my-auto">
          <QuizCategorize
            title={pageData.title}
            instruction={pageData.instruction}
            items={pageData.items}
          />
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 10. Quiz Case Study (Hal 25) */}
      {/* ----------------------------------------------------------- */}
      {type === 'quiz_case_study' && (
        <div className="flex-1 flex flex-col justify-center my-auto">
          <QuizMultipleChoice
            title={pageData.title}
            scenario={pageData.scenario}
            question={pageData.question}
            options={pageData.options}
            correctAnswer={pageData.correctAnswer}
            explanation={pageData.explanation}
          />
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 11. Quiz True/False Five Questions (Hal 29) */}
      {/* ----------------------------------------------------------- */}
      {type === 'quiz_true_false_five' && (
        <div className="flex-1 flex flex-col space-y-2">
          <div className="min-h-[160px] sm:min-h-[180px]">
            <Model3DCharacter
              characters={['nur']}
              characterState={{ nur: 'idle_smile' }}
              dialogues={[{ speaker: 'nur', text: pageData.bubblePrompt }]}
              cameraDistance={4.8}
              heightClass="h-full min-h-[160px] sm:min-h-[180px]"
            />
          </div>

          <div className="flex-1">
            <QuizTrueFalseFive
              title={pageData.title}
              questions={pageData.questions}
            />
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------- */}
      {/* 12. Pledge Ceremony (Hal 30) */}
      {/* ----------------------------------------------------------- */}
      {type === 'pledge_ceremony' && (
        <div className="flex-1 flex flex-col justify-center my-auto">
          <PledgeCeremony
            title={pageData.title}
            subtitle={pageData.subtitle}
            pledges={pageData.pledges}
            buttonText={pageData.pledgeButtonText}
          />
        </div>
      )}
    </div>
  );
}

