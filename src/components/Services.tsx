'use client';

import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, Shield, ArrowLeftRight } from 'lucide-react';
import { SERVICES_DATA, Service } from '@/data/clinicData';

interface ServicesProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export default function Services({ onSelectServiceForBooking }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ortho' | 'cosmetic' | 'surgery' | 'general'>('all');

  const categories = [
    { id: 'all', label: 'บริการทั้งหมด' },
    { id: 'ortho', label: 'จัดฟันใส Invisalign & ดัดฟัน' },
    { id: 'cosmetic', label: 'เซรามิกวีเนียร์ & ฟอกสีฟัน' },
    { id: 'surgery', label: 'รากฟันเทียม & ศัลยกรรม' },
    { id: 'general', label: 'ตรวจฟัน ขูดหินปูน & รักษาทั่วไป' },
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#faf8f5] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0f172a] text-brand-300 border border-brand-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>OUR SPECIALIZED TREATMENTS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-normal leading-[1.35] sm:leading-[1.35]">
            <div>บริการทันตกรรมครบวงจร</div>
            <div className="mt-2.5 bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] bg-clip-text text-transparent py-1">
              ดูแลโดยทันตแพทย์เฉพาะทางทุกสาขา
            </div>
          </h2>

          <p className="mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            ผสานเทคโนโลยีทันตกรรมดิจิทัล 3D เพื่อผลลัพธ์ที่แม่นยำ ปลอดภัย และเจ็บน้อยที่สุด
            พร้อมแผนการรักษาที่ออกแบบเฉพาะบุคคล
          </p>
        </div>

        {/* Category Filter Tabs (Swipeable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-12 sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                activeTab === cat.id
                  ? 'bg-[#0f172a] text-brand-300 border border-brand-500/50 shadow-lg shadow-slate-900/10 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 text-slate-400 text-[11px] mb-3 font-semibold">
          <ArrowLeftRight className="w-3.5 h-3.5 text-brand-500" />
          <span>เลื่อนปัดซ้าย-ขวาเพื่อดูบริการ (Swipe Carousel)</span>
        </div>

        {/* Services Mobile Horizontal Touch Carousel & Desktop Grid (Visual Image-First Showcase) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`w-[84vw] sm:w-[350px] md:w-auto h-[380px] sm:h-[420px] flex-shrink-0 snap-center rounded-3xl overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between p-5 sm:p-6 ${
                service.popular ? 'ring-2 ring-brand-400/80 shadow-brand-500/20' : 'border border-slate-200/60'
              }`}
            >
              {/* Full Background Image */}
              <img
                src={service.image}
                alt={service.titleTh}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Luxury Gradient Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-60" />

              {/* Top Badges */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="bg-[#0b1329]/80 backdrop-blur-md text-slate-200 border border-slate-700/60 text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.category === 'ortho'
                    ? 'ทันตกรรมจัดฟัน'
                    : service.category === 'cosmetic'
                    ? 'ทันตกรรมเพื่อความงาม'
                    : service.category === 'surgery'
                    ? 'ศัลยศาสตร์ & รากเทียม'
                    : 'ทันตกรรมทั่วไป'}
                </span>

                {service.badge && (
                  <span className="bg-gradient-to-r from-[#b8862d] to-[#9c6e20] text-slate-950 text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full shadow-lg">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Bottom Minimal Info & Booking Action */}
              <div className="relative z-10 space-y-3.5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md group-hover:text-brand-300 transition-colors">
                    {service.titleTh}
                  </h3>
                  <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-1 drop-shadow">
                    {service.titleEn}
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[9px] text-slate-300 font-semibold uppercase tracking-wider block">
                      ราคาเริ่มต้น
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-brand-400 font-mono drop-shadow">
                      ฿{service.priceStart.toLocaleString()}
                      <span className="text-[10px] sm:text-[11px] font-normal text-slate-300 ml-1 font-sans">
                        {service.unitTh}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service.id)}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] hover:from-[#d4a759] hover:to-[#b8862d] text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs shadow-lg active:scale-95 transition-all"
                  >
                    <span>จองคิวนัด</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                ไม่แน่ใจว่าต้องรักษาแบบไหน? ปรึกษาทันตแพทย์ฟรี
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                ส่งรูปถ่ายฟันผ่าน LINE เพื่อรับคำแนะนำเบื้องต้นโดยไม่มีข้อผูกมัด
              </p>
            </div>
          </div>

          <a
            href="https://line.me"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-md text-center"
          >
            ปรึกษาหมอฟรีผ่าน LINE
          </a>
        </div>

      </div>
    </section>
  );
}
