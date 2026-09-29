'use client';

import React, { useState } from 'react';
import { Sparkles, Check, Calculator, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

interface PriceItem {
  name: string;
  detail: string;
  regularPrice: number;
  promoPrice: number;
  unit: string;
  badge?: string;
  installment0?: boolean;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'general' | 'ortho' | 'cosmetic' | 'surgery'>('general');

  // Installment Calculator State
  const [calcService, setCalcService] = useState<'invisalign' | 'veneer' | 'implant'>('invisalign');
  const [calcMonths, setCalcMonths] = useState<number>(10);
  const [veneerUnits, setVeneerUnits] = useState<number>(6);

  const pricePackages: Record<string, PriceItem[]> = {
    general: [
      {
        name: 'ตรวจสุขภาพช่องปาก & เอกซเรย์ดิจิทัล',
        detail: 'ตรวจละเอียดโดยทันตแพทย์ พร้อมภาพเอกซเรย์ดิจิทัลความละเอียดสูง',
        regularPrice: 800,
        promoPrice: 0,
        unit: 'ฟรี (เมื่อรับการรักษา)',
        badge: 'Free Consultation'
      },
      {
        name: 'ขูดหินปูน & ขัดฟันทำความสะอาด',
        detail: 'ขจัดคราบหินปูนและคราบอาหารอย่างนุ่มนวล ใช้สิทธิ์ประกันสังคม 900 บาท ไม่ต้องสำรองจ่าย',
        regularPrice: 1500,
        promoPrice: 1200,
        unit: 'ครั้ง',
        badge: 'ใช้สิทธิ์ ปกส. ได้'
      },
      {
        name: 'Airflow สปาฟันขจัดคราบชา/กาแฟ',
        detail: 'นวัตกรรมละอองน้ำผสมผงขัดชนิดพิเศษ ขจัดคราบฝังแน่นหมดจด ไม่ทำลายผิวเคลือบฟัน',
        regularPrice: 2500,
        promoPrice: 1800,
        unit: 'ครั้ง'
      },
      {
        name: 'อุดฟันด้วยวัสดุเรซินสีเหมือนฟันแท้',
        detail: 'บูรณะฟันผุด้วยวัสดุคอมโพสิตเรซินพรีเมียมจากญี่ปุ่น สวยงาม กลมกลืนเป็นธรรมชาติ',
        regularPrice: 1200,
        promoPrice: 900,
        unit: 'ด้าน'
      },
      {
        name: 'เคลือบฟลูออไรด์วานิชป้องกันฟันผุ',
        detail: 'เสริมความแข็งแรงของชั้นเคลือบฟันและป้องกันฟันผุอย่างมีประสิทธิภาพ',
        regularPrice: 800,
        promoPrice: 500,
        unit: 'ครั้ง'
      }
    ],
    ortho: [
      {
        name: 'จัดฟันใส Invisalign Comprehensive',
        detail: 'เคสจัดฟันใสไม่จำกัดจำนวนชิ้น สแกนฟัน 3D iTero ฟรี + รีเทนเนอร์ 1 คู่',
        regularPrice: 140000,
        promoPrice: 89000,
        unit: 'เคส',
        badge: 'ผ่อน 0% 10 เดือน',
        installment0: true
      },
      {
        name: 'จัดฟันใส Invisalign Moderate',
        detail: 'สำหรับเคสฟันซ้อนเกปานกลาง ระยะเวลารักษา 6-12 เดือน',
        regularPrice: 100000,
        promoPrice: 69000,
        unit: 'เคส',
        badge: 'ผ่อน 0% 10 เดือน',
        installment0: true
      },
      {
        name: 'จัดฟันดามอน Damon Clear (เซรามิกใส)',
        detail: 'เครื่องมือจัดฟันระบบ Self-Ligating เคลื่อนฟันนุ่มนวล เจ็บน้อย เข้าที่เร็วกว่าปกติ',
        regularPrice: 95000,
        promoPrice: 75000,
        unit: 'เคส',
        installment0: true
      },
      {
        name: 'รีเทนเนอร์ใสแบบพรีเมียม (Clear Retainer)',
        detail: 'คงสภาพฟัน ผลิตจากแล็บมาตรฐานระดับสากล แนบกระชับ ไม่ระคายเคือง',
        regularPrice: 4000,
        promoPrice: 2900,
        unit: 'คู่ (บน-ล่าง)',
        badge: 'Hot Item'
      }
    ],
    cosmetic: [
      {
        name: 'เซรามิกวีเนียร์พรีเมียม E-max (Ceramic Veneers)',
        detail: 'เปลี่ยนรอยยิ้มระดับดารา เซรามิกบางเฉียบ ทนทาน ออกแบบด้วย Digital Smile Design รับประกัน 5 ปี',
        regularPrice: 14000,
        promoPrice: 9500,
        unit: 'ซี่',
        badge: 'รับประกัน 5 ปี',
        installment0: true
      },
      {
        name: 'ฟอกสีฟันระบบ Zoom! WhiteSpeed (USA)',
        detail: 'ฟันขาวสว่างขึ้น 4-8 เฉดในเวลา 45 นาที มีความปลอดภัยสูง พร้อมเจลป้องกันการเสียวฟัน',
        regularPrice: 12000,
        promoPrice: 6900,
        unit: 'ครั้ง',
        badge: 'ยอดนิยมอันดับ 1'
      },
      {
        name: 'ฟอกสีฟันระบบ Cool Light LED',
        detail: 'เทคโนโลยีแสงเย็นกระตุ้นเจลฟอกสีฟัน ฟันขาวสว่างสดใส สบายตา ไม่ระคายเคือง',
        regularPrice: 6500,
        promoPrice: 3900,
        unit: 'ครั้ง'
      },
      {
        name: 'ศัลยกรรมตกแต่งขอบเหงือกด้วยเลเซอร์ (Gingivoplasty)',
        detail: 'แก้ไขปัญหายิ้มเห็นเหงือก (Gummy Smile) ปรับแนวฟันให้สมมาตร แผลเล็ก ไม่ต้องพักฟื้น',
        regularPrice: 6000,
        promoPrice: 4000,
        unit: 'ตำแหน่ง'
      }
    ],
    surgery: [
      {
        name: 'รากฟันเทียมดิจิทัล Straumann (สวิตเซอร์แลนด์)',
        detail: 'รากเทียมเกรดพรีเมียมอันดับ 1 ของโลก รวมครอบฟัน Zirconia แท้ + ระบบนำผ่าตัด 3D Guide',
        regularPrice: 65000,
        promoPrice: 45000,
        unit: 'ซี่',
        badge: 'ประกันตลอดชีพ',
        installment0: true
      },
      {
        name: 'รากฟันเทียม Osstem / Dentium (เกาหลี)',
        detail: 'รากเทียมมาตรฐานสากล ยึดติดกระดูกแน่น พร้อมครอบฟันเซรามิกแท้',
        regularPrice: 42000,
        promoPrice: 29000,
        unit: 'ซี่',
        badge: 'สุดคุ้ม',
        installment0: true
      },
      {
        name: 'ผ่าฟันคุดด้วยเทคนิคแผลเล็ก ไร้บวม',
        detail: 'ผ่าตัดโดยศัลยแพทย์ช่องปากและแม็กซิลโลเฟเชียล เจ็บน้อย ฟื้นตัวได้ทันที',
        regularPrice: 4500,
        promoPrice: 2500,
        unit: 'ซี่ (ขึ้นกับระดับความยาก)'
      },
      {
        name: 'รักษารากฟันด้วยกล้อง Microscope (ฟันหน้า-ฟันกรามน้อย)',
        detail: 'รักษาการติดเชื้อที่โพรงประสาทฟัน เพิ่มความแม่นยำสูง รักษาสภาพฟันแท้ได้ยาวนาน',
        regularPrice: 9000,
        promoPrice: 6500,
        unit: 'ซี่'
      }
    ]
  };

  const categories = [
    { id: 'general', label: 'ทันตกรรมทั่วไป & ขูดหินปูน' },
    { id: 'ortho', label: 'จัดฟันใส & ดัดฟัน' },
    { id: 'cosmetic', label: 'วีเนียร์ & ฟอกสีฟัน' },
    { id: 'surgery', label: 'รากฟันเทียม & ผ่าฟันคุด' },
  ];

  // Calculation for 0% Installment widget
  const calcPlans = {
    invisalign: { name: 'จัดฟันใส Invisalign Comprehensive', price: 89000 },
    veneer: { name: 'เซรามิกวีเนียร์ E-max', pricePerUnit: 9500 },
    implant: { name: 'รากฟันเทียมสวิส Straumann', price: 45000 },
  };

  const calcTotalPrice =
    calcService === 'veneer'
      ? calcPlans.veneer.pricePerUnit * veneerUnits
      : calcPlans[calcService].price;

  const calcMonthly = Math.round(calcTotalPrice / calcMonths);

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0f172a] text-brand-300 border border-brand-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>TRANSPARENT & FAIR PRICING</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-normal leading-[1.35] sm:leading-[1.35]">
            <div>อัตราค่าบริการและราคาโปรโมชัน</div>
            <div className="mt-2.5 bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] bg-clip-text text-transparent py-1">
              ราคามาตรฐาน โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
            </div>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            ทุกการรักษามีการประเมินและแจ้งค่าใช้จ่ายล่วงหน้า พร้อมตัวเลือกแบ่งชำระผ่อน 0% สบายๆ กับบัตรเครดิตชั้นนำ
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0f172a] text-brand-300 border border-brand-500/50 shadow-lg shadow-slate-900/10 scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Pricing Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-16">
          <div className="divide-y divide-slate-100">
            {pricePackages[activeCategory].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 hover:bg-[#faf8f5]/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Left: Service Details */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="bg-brand-100 text-brand-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border border-brand-200">
                        {item.badge}
                      </span>
                    )}
                    {item.installment0 && (
                      <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CreditCard className="w-3 h-3" />
                        <span>ผ่อน 0%</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
                    {item.detail}
                  </p>
                </div>

                {/* Right: Pricing & CTA */}
                <div className="flex items-center justify-between md:justify-end gap-6 flex-shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="text-left md:text-right">
                    {item.regularPrice > 0 && item.promoPrice < item.regularPrice && (
                      <span className="text-xs text-slate-400 line-through block font-mono">
                        ฿{item.regularPrice.toLocaleString()}
                      </span>
                    )}
                    <div className="text-xl sm:text-2xl font-black text-brand-600 font-mono">
                      {item.promoPrice === 0 ? (
                        <span className="text-emerald-600 font-sans text-lg">ตรวจฟรี</span>
                      ) : (
                        `฿${item.promoPrice.toLocaleString()}`
                      )}
                      <span className="text-xs text-slate-500 font-normal ml-1 font-sans">
                        / {item.unit}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="flex items-center gap-1.5 bg-[#0f172a] hover:bg-[#1e293b] text-brand-300 hover:text-white border border-brand-500/40 font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-sm hover:scale-105 whitespace-nowrap"
                  >
                    <span>นัดหมาย</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 0% Installment Simulator */}
        <div className="bg-gradient-to-br from-[#0b1329] via-[#0f172a] to-[#1e293b] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Calculator Controller */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-brand-300 border border-brand-500/40 px-4 py-1.5 rounded-full text-xs font-bold">
                <Calculator className="w-4 h-4 text-brand-400" />
                <span>0% INSTALLMENT SIMULATOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                จำลองการผ่อนชำระ 0% <br />
                <span className="text-brand-400">ยิ้มสวยได้ทันที ไม่ต้องจ่ายก้อนเดียว</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                รองรับบัตรเครดิตทุกธนาคารชั้นนำ (KBank, SCB, KTC, BBL, Krungsri, CardX, UOB) 
                ไม่มีดอกเบี้ยและไม่มีค่าธรรมเนียมแอบแฝง
              </p>

              {/* Service Selection */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  1. เลือกหัตถการที่ต้องการผ่อน:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setCalcService('invisalign')}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                      calcService === 'invisalign'
                        ? 'border-brand-400 bg-brand-500/25 text-white ring-1 ring-brand-400'
                        : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    จัดฟันใส Invisalign
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalcService('veneer')}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                      calcService === 'veneer'
                        ? 'border-brand-400 bg-brand-500/25 text-white ring-1 ring-brand-400'
                        : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    เซรามิกวีเนียร์
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalcService('implant')}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                      calcService === 'implant'
                        ? 'border-brand-400 bg-brand-500/25 text-white ring-1 ring-brand-400'
                        : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    รากฟันเทียมสวิส
                  </button>
                </div>
              </div>

              {/* Veneer units counter if veneer chosen */}
              {calcService === 'veneer' && (
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-semibold">จำนวนซี่ที่ต้องการทำ (ซี่):</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setVeneerUnits(Math.max(1, veneerUnits - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-bold text-base text-brand-400 w-8 text-center">{veneerUnits}</span>
                    <button
                      onClick={() => setVeneerUnits(Math.min(16, veneerUnits + 1))}
                      className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Installment Months Choice */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  2. เลือกระยะเวลาผ่อน 0%:
                </label>
                <div className="flex items-center gap-3">
                  {[3, 6, 10].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setCalcMonths(m)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        calcMonths === m
                          ? 'bg-gradient-to-r from-[#b8862d] to-[#9c6e20] text-white shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      {m} เดือน
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Calculation Result Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-700 shadow-2xl space-y-6">
                
                <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] text-brand-400 font-bold uppercase">Package Summary</span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      {calcService === 'veneer'
                        ? `เซรามิกวีเนียร์ E-max (${veneerUnits} ซี่)`
                        : calcPlans[calcService].name}
                    </h4>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ผ่อน 0% ดอกเบี้ย
                  </span>
                </div>

                {/* Price Display */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>ราคาโปรโมชันรวม:</span>
                    <span className="text-base font-bold text-white font-mono">฿{calcTotalPrice.toLocaleString()}</span>
                  </div>

                  {/* Monthly Highlight Box */}
                  <div className="bg-[#0b1329] border border-brand-500/40 rounded-2xl p-5 text-center my-3">
                    <span className="text-xs text-brand-300 font-semibold block mb-1">
                      ผ่อน 0% เพียงเดือนละ ({calcMonths} เดือน)
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-brand-400 font-mono">
                      ฿{calcMonthly.toLocaleString()}
                      <span className="text-xs text-slate-400 font-normal ml-1.5 font-sans">/ เดือน</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-800/60 p-3 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>รับสิทธิ์ตรวจและสแกนฟัน 3D ฟรีเมื่อจองล่วงหน้า</span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] hover:from-[#d4a759] hover:to-[#b8862d] text-slate-950 font-black py-3.5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm transform hover:scale-[1.02]"
                >
                  <span>จองรับสิทธิ์แพ็กเกจนี้</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
