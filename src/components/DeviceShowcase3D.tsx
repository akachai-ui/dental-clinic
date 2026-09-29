import React from 'react';
import { Sparkles, Calendar, Phone, MessageCircle, Star, ShieldCheck, Check } from 'lucide-react';

export default function DeviceShowcase3D() {
  return (
    <div className="w-full bg-[#070d1e] p-6 sm:p-12 flex flex-col items-center justify-center min-h-[500px] rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 3D Device Composition Container */}
      <div className="relative w-full max-w-4xl flex items-end justify-center py-6">
        
        {/* ========================================================
            1. Apple iPad Pro Tablet (Left-Back, tilted slightly)
           ======================================================== */}
        <div className="hidden sm:block absolute left-2 lg:left-8 bottom-6 z-10 w-[240px] lg:w-[280px] rounded-[24px] p-2 bg-[#1e293b] border border-slate-700 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 group">
          <div className="w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-[#0b1329] border border-slate-800 relative">
            {/* Tablet Screen Content */}
            <div className="relative w-full h-full p-3 flex flex-col justify-between text-white">
              <img
                src="/images/service_veneers.jpg"
                alt="Tablet Veneers Case"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/40 to-transparent" />
              
              <div className="relative z-10 flex items-center justify-between text-[9px]">
                <span className="bg-[#0b1329]/80 px-2 py-0.5 rounded-full text-brand-300 font-bold border border-brand-500/40">
                  Smile Makeover
                </span>
                <span className="text-amber-400 font-bold">★ 4.9</span>
              </div>

              <div className="relative z-10 space-y-1">
                <div className="text-xs font-black text-white">เซรามิกวีเนียร์พรีเมียม</div>
                <div className="text-[9px] text-brand-400 font-mono font-bold">เริ่มต้น ฿9,500/ซี่</div>
              </div>
            </div>
          </div>
          {/* Tablet Home Bar */}
          <div className="w-20 h-1 bg-slate-600 rounded-full mx-auto mt-1.5 opacity-60" />
        </div>

        {/* ========================================================
            2. Apple iMac 24" Desktop Display (Center, Hero Device)
           ======================================================== */}
        <div className="relative z-20 w-full max-w-[620px] lg:max-w-[700px] flex flex-col items-center">
          
          {/* iMac Screen Frame */}
          <div className="w-full rounded-2xl p-2.5 bg-slate-900 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative">
            
            {/* Top Webcam Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-900" />
            </div>

            {/* Screen Inner Display (16:9) */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#0b1329] relative border border-slate-800 flex flex-col">
              
              {/* Browser Header Bar */}
              <div className="bg-[#0f172a] px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-[9px] text-slate-400 flex-shrink-0">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="bg-slate-950 px-4 py-0.5 rounded-md text-slate-300 font-mono text-[8px] flex items-center gap-1 border border-slate-800">
                  <span className="text-emerald-400">🔒</span>
                  <span>smileclinic.demo</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Live Desktop Hero View */}
              <div className="relative flex-1 overflow-hidden p-4 sm:p-6 flex flex-col justify-center">
                <img
                  src="/images/hero_smile_clinic.jpg"
                  alt="Smile Clinic Live Website"
                  className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1329]/95 via-[#0b1329]/50 to-transparent w-3/4" />

                {/* Desktop Screen Content Overlay */}
                <div className="relative z-10 max-w-[280px] sm:max-w-[320px] space-y-2 text-left">
                  <span className="inline-flex items-center gap-1 bg-[#0b1329]/80 border border-brand-400/50 text-brand-300 px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold">
                    <Sparkles className="w-2.5 h-2.5 text-brand-400" />
                    <span>SMILE CLINIC • DIGITAL DENTAL</span>
                  </span>

                  <h4 className="text-sm sm:text-lg font-black text-white leading-tight">
                    <div>ออกแบบรอยยิ้มในฝัน</div>
                    <div className="text-brand-300">ให้คุณยิ้มอย่างมั่นใจ</div>
                  </h4>

                  <div className="flex items-center gap-1.5 pt-1">
                    <button className="bg-gradient-to-r from-[#b8862d] to-[#9c6e20] text-slate-950 font-black px-3 py-1 rounded-lg text-[8px] sm:text-[9px] shadow">
                      จองคิวนัดหมาย
                    </button>
                    <span className="text-[8px] text-slate-300 font-semibold bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-700">
                      ผ่อน 0% 10 เดือน
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* iMac Aluminum Chin */}
            <div className="w-full h-6 sm:h-8 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-lg border-t border-slate-700/60 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-700 opacity-60" />
            </div>

          </div>

          {/* iMac Metallic Stand & Base */}
          <div className="w-16 sm:w-20 h-10 sm:h-14 bg-gradient-to-b from-slate-700 to-slate-800 -mt-1 shadow-md" />
          <div className="w-36 sm:w-48 h-2 sm:h-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shadow-2xl -mt-0.5" />

        </div>

        {/* ========================================================
            3. Apple iPhone 16 Pro (Right-Front, floating overlap)
           ======================================================== */}
        <div className="absolute right-0 sm:right-4 lg:right-10 bottom-2 z-30 w-[130px] sm:w-[150px] lg:w-[170px] rounded-[30px] p-2 bg-slate-900 border-2 border-slate-600 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transform rotate-3 hover:rotate-0 transition-transform duration-500">
          
          {/* iPhone Dynamic Island */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-black rounded-full z-40" />

          {/* iPhone Screen Container */}
          <div className="w-full aspect-[9/19] rounded-[24px] overflow-hidden bg-[#0b1329] relative flex flex-col justify-between p-2.5 text-white border border-slate-800">
            
            <img
              src="/images/service_invisalign.jpg"
              alt="Mobile Invisalign"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/40 to-transparent" />

            {/* Top Status */}
            <div className="relative z-10 pt-2 flex items-center justify-between text-[7px] text-slate-300">
              <span className="font-bold">9:41</span>
              <span>📶 5G</span>
            </div>

            {/* Mobile Bottom Bar & Booking Preview */}
            <div className="relative z-10 space-y-1.5 pt-12">
              <div className="text-[9px] font-extrabold text-white leading-tight">
                จัดฟันใส Invisalign
              </div>
              <div className="text-[8px] text-brand-400 font-mono font-bold">
                ฿49,000 (ผ่อน 0%)
              </div>
              <div className="w-full bg-gradient-to-r from-[#b8862d] to-[#9c6e20] text-slate-950 font-black py-1.5 rounded-lg text-[8px] text-center shadow">
                จองคิวตรวจฟัน
              </div>
            </div>

          </div>

          {/* iPhone Home Indicator */}
          <div className="w-12 h-1 bg-slate-500 rounded-full mx-auto mt-1.5 opacity-60" />
        </div>

      </div>

      {/* Bottom Features Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
        <span className="flex items-center gap-1.5 text-brand-300">
          <Check className="w-4 h-4 text-brand-400" />
          <span>iMac Desktop Full View</span>
        </span>
        <span className="text-slate-700">•</span>
        <span className="flex items-center gap-1.5 text-brand-300">
          <Check className="w-4 h-4 text-brand-400" />
          <span>iPad Tablet Experience</span>
        </span>
        <span className="text-slate-700">•</span>
        <span className="flex items-center gap-1.5 text-brand-300">
          <Check className="w-4 h-4 text-brand-400" />
          <span>iPhone Mobile-First UI</span>
        </span>
      </div>

    </div>
  );
}
