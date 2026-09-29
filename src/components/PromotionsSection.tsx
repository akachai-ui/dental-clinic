'use client';

import React from 'react';
import { Gift, Clock, Check, ArrowRight, Flame, CreditCard, ArrowLeftRight } from 'lucide-react';

interface PromotionsSectionProps {
  onOpenBooking: () => void;
}

interface PromoCard {
  id: string;
  title: string;
  category: string;
  discount: string;
  regularPrice: number;
  promoPrice: number;
  installmentText: string;
  badge: string;
  badgeColor: string;
  image: string;
  benefits: string[];
  remainingSlots: number;
}

export default function PromotionsSection({ onOpenBooking }: PromotionsSectionProps) {
  const promos: PromoCard[] = [
    {
      id: 'invisalign-deal',
      title: 'จัดฟันใส Invisalign Comprehensive (ไม่จำกัดชิ้นงาน)',
      category: 'Invisalign Clear Aligners',
      discount: 'SAVE ฿50,000',
      regularPrice: 139000,
      promoPrice: 89000,
      installmentText: 'ผ่อน 0% เพียง ฿8,900 / ด. (10 ด.)',
      badge: 'ยอดนิยมอันดับ 1 🔥',
      badgeColor: 'from-amber-600 to-amber-500',
      image: '/images/service_invisalign.jpg',
      benefits: [
        'ฟรี! สแกนฟัน 3D iTero เห็นผลล่วงหน้า (5,000.-)',
        'ฟรี! รีเทนเนอร์ใสพรีเมียม 1 คู่ (4,000.-)',
        'ฟรี! ขูดหินปูนและขัดฟันก่อนติดเครื่องมือ',
        'ผ่อน 0% นานสูงสุด 10 เดือนกับทุกธนาคาร'
      ],
      remainingSlots: 5
    },
    {
      id: 'veneer-deal',
      title: 'เซรามิกวีเนียร์ E-max Smile Makeover (ชุด 6 ซี่ขึ้นไป)',
      category: 'Porcelain Veneers',
      discount: 'ลดทันที 35%',
      regularPrice: 14000,
      promoPrice: 8900,
      installmentText: 'พิเศษ ฿8,900 / ซี่ (ปกติ 14,000.-)',
      badge: 'Celebrity Choice 💎',
      badgeColor: 'from-indigo-600 to-blue-500',
      image: '/images/service_veneers.jpg',
      benefits: [
        'ฟรี! ออกแบบรอยยิ้ม Digital Smile Design (DSD)',
        'ฟรี! ทดลองใส่ Mock-up รอยยิ้มก่อนทำจริง',
        'รับประกันชิ้นงานเซรามิกแท้ 5 ปีเต็ม',
        'ผ่อน 0% นาน 6-10 เดือน'
      ],
      remainingSlots: 3
    },
    {
      id: 'implant-deal',
      title: 'รากฟันเทียมสวิตเซอร์แลนด์ Straumann + ครอบ Zirconia',
      category: 'Swiss Dental Implant',
      discount: 'SAVE ฿20,000',
      regularPrice: 65000,
      promoPrice: 45000,
      installmentText: 'ผ่อน 0% เพียง ฿4,500 / ด. (10 ด.)',
      badge: 'รับประกันตลอดชีพ 🛡️',
      badgeColor: 'from-emerald-600 to-teal-500',
      image: '/images/service_implant.jpg',
      benefits: [
        'ฟรี! เอกซเรย์ 3D CT Scan วางแผนผ่าตัด (4,000.-)',
        'ฟรี! วางตำแหน่งรากเทียมด้วย 3D Surgical Guide',
        'รวมครอบฟัน Zirconia แท้ เกรดพรีเมียม 100%',
        'ผ่าตัดโดยทันตแพทย์เฉพาะทางศัลยศาสตร์'
      ],
      remainingSlots: 7
    },
    {
      id: 'whitening-deal',
      title: 'ฟอกสีฟัน Zoom! WhiteSpeed USA (ขาวขึ้น 4-8 เฉด)',
      category: 'Professional Teeth Whitening',
      discount: 'ลดพิเศษ 45%',
      regularPrice: 12000,
      promoPrice: 6900,
      installmentText: 'จ่ายจบเพียง ฿6,900 (ไม่มีบวกเพิ่ม)',
      badge: 'Hot Deal ⚡',
      badgeColor: 'from-rose-600 to-pink-500',
      image: '/images/service_whitening.jpg',
      benefits: [
        'เห็นผลฟันขาวสว่างชัดเจนทันทีหลังทำ 45 นาที',
        'ฟรี! ขูดหินปูนและขัดฟัน Airflow ก่อนฟอกสีฟัน',
        'ฟรี! เคลือบเจลลดอาการเสียวฟันพรีเมียม',
        'ปลอดภัย ไม่ทำลายผิวเคลือบฟันธรรมชาติ'
      ],
      remainingSlots: 10
    }
  ];

  return (
    <section id="promotions" className="py-16 md:py-24 bg-[#faf8f5] relative overflow-hidden">
      
      {/* Subtle Background Glow (Desktop only) */}
      <div className="hidden md:block absolute top-0 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hidden md:block absolute bottom-10 left-10 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0f172a] text-brand-300 border border-brand-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm animate-fade-in">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>EXCLUSIVE MONTHLY PROMOTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-normal leading-[1.35] sm:leading-[1.35]">
            <div>โปรโมชันและแพ็กเกจพิเศษประจำเดือน</div>
            <div className="mt-2.5 bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] bg-clip-text text-transparent py-1">
              รับสิทธิ์ส่วนลดพิเศษ พร้อมผ่อน 0% นาน 10 เดือน
            </div>
          </h2>

          <p className="mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            สิทธิพิเศษเฉพาะผู้ที่จองคิวนัดหมายออนไลน์ล่วงหน้าผ่านเว็บไซต์เท่านั้น (สิทธิ์มีจำนวนจำกัดต่อเดือน)
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 text-slate-400 text-[11px] mb-3 font-semibold">
          <ArrowLeftRight className="w-3.5 h-3.5 text-amber-500" />
          <span>เลื่อนปัดซ้าย-ขวาเพื่อดูโปรโมชัน (Swipe Deals)</span>
        </div>

        {/* Promotions Mobile Horizontal Touch Carousel & Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar md:grid md:grid-cols-2 md:gap-8 md:overflow-visible">
          {promos.map((item) => (
            <div
              key={item.id}
              className="w-[86vw] sm:w-[380px] md:w-auto flex-shrink-0 snap-center bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Card Header with Image & Floating Badge */}
              <div className="relative h-48 sm:h-60 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329]/90 via-[#0b1329]/30 to-transparent" />

                {/* Top Badge: Hot status */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className={`bg-gradient-to-r ${item.badgeColor} text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full shadow-lg`}>
                    {item.badge}
                  </span>
                  <span className="bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-full shadow-md font-mono">
                    {item.discount}
                  </span>
                </div>

                {/* Remaining Slots Tag */}
                <div className="absolute top-3.5 right-3.5 bg-black/80 text-amber-300 border border-amber-400/30 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>เหลือ {item.remainingSlots} สิทธิ์</span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black leading-snug drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Content & Benefits */}
              <div className="p-5 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                
                {/* Free Gifts & Benefits List */}
                <div className="space-y-2">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Gift className="w-3.5 h-3.5 text-brand-600" />
                    <span>สิทธิพิเศษในแพ็กเกจ:</span>
                  </div>
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-700 font-medium">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-700" />
                      </div>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Price Box & Action */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  
                  {/* Price Row */}
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 line-through block font-mono">
                        ปกติ ฿{item.regularPrice.toLocaleString()}
                      </span>
                      <div className="text-xl sm:text-2xl font-black text-brand-600 font-mono">
                        ฿{item.promoPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] sm:text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200 block">
                        {item.installmentText}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={onOpenBooking}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-brand-300 hover:text-white border border-brand-500/40 font-bold py-3 sm:py-3.5 rounded-2xl shadow-md transition-all text-xs sm:text-sm active:scale-95"
                  >
                    <span>จองรับสิทธิ์โปรโมชันนี้</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Booking Assurance */}
        <div className="mt-10 md:mt-14 bg-gradient-to-r from-[#0b1329] via-[#0f172a] to-[#1e293b] text-white rounded-3xl p-5 sm:p-8 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 border border-brand-500/30">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                ผ่อนสบาย 0% ไม่มีดอกเบี้ย ร่วมกับทุกธนาคารชั้นนำ
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                KBank, SCB, KTC, BBL, Krungsri, CardX, UOB ผ่อนนานสูงสุด 10 เดือน
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] text-slate-950 font-black px-7 py-3 rounded-xl text-xs transition-all shadow-md active:scale-95 whitespace-nowrap"
          >
            เช็กสิทธิ์และจองคิวทันที
          </button>
        </div>

      </div>
    </section>
  );
}
