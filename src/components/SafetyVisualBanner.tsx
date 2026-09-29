'use client';

import React, { useState } from 'react';
import { ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SafetyVisualBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const safetyImages = [
    {
      url: '/images/modern_clean_dental_room.jpg',
      title: 'HOSPITAL-GRADE DIGITAL DENTAL SUITE',
      subtitle: 'ห้องตรวจทันตกรรมปลอดเชื้อมาตรฐานสากล พร้อมเก้าอี้ Ergonomic และระบบสแกนดิจิทัล 3D',
    },
    {
      url: '/images/sterile_instruments_tray.jpg',
      title: '100% STERILE SEALED INSTRUMENT POUCHES',
      subtitle: 'เครื่องมือทันตกรรมทุกชิ้นบรรจุในซองซีลปลอดเชื้อ ผ่านการอบ Autoclave แบบ 1:1 รายบุคคล',
    },
    {
      url: '/images/cssd_sterilization_lab.jpg',
      title: 'CENTRAL STERILE SUPPLY DEPARTMENT (CSSD)',
      subtitle: 'ห้องแล็บฆ่าเชื้อมาตรฐานโรงพยาบาล ควบคุมคุณภาพความสะอาดระดับสูงสุด',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % safetyImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + safetyImages.length) % safetyImages.length);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0b1329] overflow-hidden select-none">
      
      {/* Full-Screen Background Images with Fade Transition */}
      {safetyImages.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={item.url}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Subtle Top & Bottom Gradient Shadows for Seamless Blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-transparent to-[#0b1329]/60" />
        </div>
      ))}

      {/* Floating Minimalist Luxury Pill Tag at the Center-Bottom */}
      <div className="relative z-20 text-center px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 bg-[#0b1329]/95 border border-brand-500/40 text-brand-300 px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xl animate-fade-in">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>100% HOSPITAL-GRADE STERILITY & CLINICAL SAFETY STANDARD</span>
        </div>
      </div>

      {/* Slider Controls: Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0b1329]/90 hover:bg-[#0b1329] text-white border border-slate-700/80 flex items-center justify-center transition-transform hover:scale-110 shadow-2xl"
        title="Previous Image"
      >
        <ChevronLeft className="w-6 h-6 text-brand-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#0b1329]/90 hover:bg-[#0b1329] text-white border border-slate-700/80 flex items-center justify-center transition-transform hover:scale-110 shadow-2xl"
        title="Next Image"
      >
        <ChevronRight className="w-6 h-6 text-brand-300" />
      </button>

      {/* Slider Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-[#0b1329]/80 px-4 py-2 rounded-full border border-white/10">
        {safetyImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? 'w-8 bg-brand-400'
                : 'w-2 bg-white/50 hover:bg-white'
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
