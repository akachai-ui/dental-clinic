'use client';

import React from 'react';
import { Award, GraduationCap, Calendar, Clock, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { DOCTORS_DATA } from '@/data/clinicData';

interface DoctorsProps {
  lang: 'th' | 'en';
  onOpenBooking: () => void;
}

export default function Doctors({ lang, onOpenBooking }: DoctorsProps) {
  return (
    <section id="doctors" className="py-20 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'th' ? 'ทีมทันตแพทย์เฉพาะทาง' : 'Board-Certified Specialists'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'th' ? 'ดูแลคุณด้วยความเชี่ยวชาญระดับอาจารย์แพทย์' : 'Meet Our Elite Dental Specialists'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'th'
              ? 'รวมทันตแพทย์เฉพาะทางทุกสาขา จบการศึกษาจากสถาบันชั้นนำทั้งในและต่างประเทศ มีประสบการณ์ดูแลเคสกว่า 10+ ปี'
              : 'Our accomplished team combines international training, clinical mastery, and compassionate patient care.'}
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Image & Experience Badge */}
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src={doctor.image}
                  alt={doctor.nameTh}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{doctor.experienceYears}+ {lang === 'th' ? 'ปีประสบการณ์' : 'Yrs Experience'}</span>
                </div>

                {/* Name on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-lg font-black leading-tight">
                    {lang === 'th' ? doctor.nameTh : doctor.nameEn}
                  </div>
                  <div className="text-xs text-brand-300 font-semibold mt-1">
                    {lang === 'th' ? doctor.titleTh : doctor.titleEn}
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                
                {/* Specialty */}
                <div className="bg-brand-50/70 p-3.5 rounded-2xl border border-brand-100/80">
                  <div className="text-[11px] font-bold text-brand-800 uppercase tracking-wider mb-1">
                    {lang === 'th' ? 'ความเชี่ยวชาญพิเศษ' : 'Clinical Focus'}
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {lang === 'th' ? doctor.specialtyTh : doctor.specialtyEn}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-slate-500" />
                    <span>{lang === 'th' ? 'วุฒิการศึกษา & เกียรติบัตร' : 'Education & Credentials'}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {doctor.education.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Availability */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{lang === 'th' ? 'ตารางลงตรวจ:' : 'Available Days:'}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-700 mt-0.5">
                      {doctor.availableDays.join(', ')}
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="bg-brand-600 hover:bg-brand-700 text-white p-2.5 rounded-xl transition-all shadow hover:scale-105"
                    title="จองคิวกับแพทย์ท่านนี้"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
