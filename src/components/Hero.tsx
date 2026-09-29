'use client';

import React from 'react';
import { Calendar, MessageCircle, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Star, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between bg-[#0b1329] text-white overflow-hidden"
    >
      {/* 1. Cinematic Full-Bleed Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_smile_clinic.jpg"
          alt="Smile Clinic Confident Smile & Modern Dental Suite"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center lg:object-[center_35%] opacity-90"
        />
        {/* Subtle Luxury Gradient Overlays - Clean & Translucent */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329]/95 via-[#0b1329]/60 to-transparent lg:w-3/5" />
      </div>

      {/* 2. Main Content Container (Positioned gracefully for visual focus) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-start py-12 sm:py-20">
        <div className="max-w-2xl text-left space-y-6">
          
          {/* Brand & Quality Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0b1329]/90 border border-brand-400/50 text-brand-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xl animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>SMILE CLINIC • DIGITAL DENTAL ARTISTRY</span>
          </div>

          {/* Punchy Visual-First Headline with Balanced Thai Line Spacing */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-normal text-white drop-shadow-2xl">
            <div className="leading-[1.15]">
              ออกแบบรอยยิ้มในฝัน
            </div>
            <div className="text-brand-300 font-extrabold leading-[1.15] mt-1 sm:mt-2">
              ให้คุณยิ้มอย่างมั่นใจ
            </div>
          </h1>

          {/* Minimalist 1-Line Tagline */}
          <p className="text-sm sm:text-lg text-slate-200 font-medium leading-relaxed drop-shadow max-w-xl">
            ทันตกรรมดิจิทัล 3D สแกนฟันแม่นยำ • จัดฟันใส • วีเนียร์ • รากเทียม โดยทันตแพทย์เฉพาะทาง
          </p>

          {/* Key Feature Chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-bold text-slate-100 pt-1">
            <span className="flex items-center gap-1.5 bg-[#0b1329]/90 px-3.5 py-2 rounded-xl border border-white/20 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-brand-400" />
              <span>สแกนฟัน 3D ฟรี</span>
            </span>
            <span className="flex items-center gap-1.5 bg-[#0b1329]/90 px-3.5 py-2 rounded-xl border border-white/20 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-brand-400" />
              <span>ผ่อน 0% นาน 10 เดือน</span>
            </span>
            <span className="flex items-center gap-1.5 bg-[#0b1329]/90 px-3.5 py-2 rounded-xl border border-white/20 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ปลอดเชื้อ CSSD 100%</span>
            </span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] hover:from-[#d4a759] hover:to-[#b8862d] text-slate-950 font-black px-8 py-3.5 rounded-2xl shadow-xl shadow-amber-500/25 active:scale-95 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
              <span>จองคิวนัดหมายออนไลน์</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <a
              href="https://line.me"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg border border-emerald-400/30 active:scale-95 transition-all text-sm sm:text-base whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>ปรึกษาหมอฟรี (LINE)</span>
            </a>
          </div>

          {/* Floating Trust Rating Badge */}
          <div className="pt-2 flex items-center gap-3">
            <div className="flex items-center gap-1 bg-[#0b1329]/90 px-3 py-1.5 rounded-xl border border-white/15">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-white ml-1 font-mono">4.9 / 5.0</span>
              <span className="text-[10px] text-slate-400 ml-1">(1,280+ รีวิว Google)</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-[#0b1329]/90 px-3 py-1.5 rounded-xl border border-white/15 text-xs text-brand-300 font-bold">
              <Award className="w-3.5 h-3.5 text-brand-400" />
              <span>15,000+ เคสรอยยิ้ม</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Minimal Information Bar */}
      <div className="relative z-10 w-full bg-[#070d1d] border-t border-slate-800/80 py-2.5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <span>📍 Smile Clinic ชั้น 3 อาคารสไมล์ทาวเวอร์ (BTS พร้อมพงษ์ ทางออก 2)</span>
          <span className="text-brand-400 font-semibold">เปิดบริการทุกวัน: 10:00 - 20:00 น.</span>
        </div>
      </div>
    </section>
  );
}
