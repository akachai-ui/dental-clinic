'use client';

import React from 'react';
import { ShieldCheck, Sparkles, Cpu, CheckCircle } from 'lucide-react';
import { CLINIC_GALLERY } from '@/data/clinicData';

interface AtmosphereProps {
  lang: 'th' | 'en';
}

export default function Atmosphere({ lang }: AtmosphereProps) {
  return (
    <section id="atmosphere" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'th' ? 'บรรยากาศและนวัตกรรมเครื่องมือ' : 'Advanced Facilities & Tech'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'th' ? 'มาตรฐานระดับโรงพยาบาล สะอาด ปลอดภัย ผ่อนคลาย' : 'Hospital-Grade Infection Control & Luxury Comfort'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'th'
              ? 'สัมผัสประสบการณ์ทำฟันที่สบาย ไร้ความกังวล พร้อมระบบห้องปลอดเชื้อมาตรฐานสากล CSSD'
              : 'Relax in our tranquil private suites equipped with the latest low-radiation dental imaging.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_GALLERY.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                  Facility #{idx + 1}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>100% Sterile & Certified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
