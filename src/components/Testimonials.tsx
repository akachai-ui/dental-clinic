'use client';

import React from 'react';
import { Star, MessageSquare, CheckCircle, Sparkles, Quote } from 'lucide-react';
import { REVIEWS_DATA } from '@/data/clinicData';

interface TestimonialsProps {
  lang: 'th' | 'en';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{lang === 'th' ? 'เสียงตอบรับจากคนไข้จริง' : 'Real Patient Stories'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'th' ? 'ความประทับใจจากผู้รับบริการกว่า 15,000+ เคส' : 'Trusted by Over 15,000 Happy Smiles'}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'th'
              ? 'รอยยิ้มและความมั่นใจที่เปลี่ยนไป คือความภาคภูมิใจและมาตรฐานการดูแลสูงสุดของเรา'
              : 'Read verified testimonials from patients who transformed their smiles with us.'}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/80 rounded-3xl p-7 border border-slate-100 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 group-hover:text-brand-200 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">{rev.rating}.0</span>
                </div>

                {/* Treatment Tag */}
                <span className="inline-block bg-brand-100/70 text-brand-800 text-[11px] font-bold px-3 py-1 rounded-full mb-3">
                  หัตถการ: {rev.service}
                </span>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 mt-5 border-t border-slate-200/70 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-brand-300 shadow-sm"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{rev.date} (Verified Patient)</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
