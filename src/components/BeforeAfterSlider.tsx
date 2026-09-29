'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2, User, Clock, Award } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '@/data/clinicData';

interface BeforeAfterSliderProps {
  lang: 'th' | 'en';
}

export default function BeforeAfterSlider({ lang }: BeforeAfterSliderProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const x = clientX - rect.left;
    const width = rect.width;
    const position = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(position);
  };

  return (
    <section id="before-after" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'th' ? 'ผลลัพธ์การรักษาจริง' : 'Real Patient Transformations'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'th' ? 'เปรียบเทียบผลลัพธ์ ก่อน - หลังการรักษา' : 'Interactive Before & After Smile Gallery'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'th'
              ? 'เลื่อนแถบสไลเดอร์เพื่อดูการเปลี่ยนแปลงของรอยยิ้มอย่างชัดเจนแบบ Interactive'
              : 'Drag the interactive slider to reveal the smile makeover transformations.'}
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeCaseIndex === idx
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Award className="w-4 h-4 text-brand-400" />
              <span>{lang === 'th' ? item.titleTh : item.titleEn}</span>
            </button>
          ))}
        </div>

        {/* Main Comparison Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Top: Interactive Image Slider */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-700 shadow-inner group"
              onMouseMove={(e) => isDragging && handleSliderMove(e)}
              onTouchMove={(e) => handleSliderMove(e)}
              onMouseDown={(e) => {
                setIsDragging(true);
                handleSliderMove(e);
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              {/* After Image (Background) */}
              <img
                src={currentCase.afterImage}
                alt="After Treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute bottom-4 right-4 bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {lang === 'th' ? 'หลังการรักษา (AFTER)' : 'AFTER'}
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt="Before Treatment"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {lang === 'th' ? 'ก่อนการรักษา (BEFORE)' : 'BEFORE'}
                </div>
              </div>

              {/* Slider Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-900 border-2 border-brand-500 transform group-hover:scale-110 transition-transform">
                  <ArrowLeftRight className="w-4 h-4 text-brand-600" />
                </div>
              </div>

              {/* Instruction Hint */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-slate-200 text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5 pointer-events-none">
                <ArrowLeftRight className="w-3 h-3 text-brand-400" />
                <span>{lang === 'th' ? 'แตะหรือลากเพื่อเปรียบเทียบภาพ' : 'Drag or touch to compare'}</span>
              </div>
            </div>
          </div>

          {/* Right / Bottom: Case Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-400 uppercase tracking-wider bg-brand-950/60 border border-brand-800/60 px-3 py-1 rounded-full">
                {currentCase.category}
              </span>
              <h3 className="text-2xl font-black mt-3 text-white">
                {lang === 'th' ? currentCase.titleTh : currentCase.titleEn}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                {lang === 'th' ? currentCase.descriptionTh : currentCase.descriptionEn}
              </p>
            </div>

            <div className="space-y-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  <strong>{lang === 'th' ? 'การรักษา:' : 'Procedure:'}</strong>{' '}
                  {lang === 'th' ? currentCase.treatmentTh : currentCase.treatmentEn}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  <strong>{lang === 'th' ? 'ระยะเวลา:' : 'Duration:'}</strong>{' '}
                  {lang === 'th' ? currentCase.durationTh : currentCase.durationEn}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <User className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>
                  <strong>{lang === 'th' ? 'ทันตแพทย์ผู้ดูแล:' : 'Specialist:'}</strong>{' '}
                  {currentCase.doctorName}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-600 to-teal-500 hover:from-brand-500 hover:to-teal-400 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-sm"
              >
                <span>{lang === 'th' ? 'ส่งภาพประเมินเคสแบบเดียวกันนี้ (ฟรี)' : 'Free Online Smile Assessment'}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
