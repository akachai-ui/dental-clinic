'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, CreditCard, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingCalculatorProps {
  lang: 'th' | 'en';
  onOpenBooking: () => void;
}

export default function PricingCalculator({ lang, onOpenBooking }: PricingCalculatorProps) {
  const [selectedPlan, setSelectedPlan] = useState<'invisalign' | 'veneer' | 'implant'>('invisalign');
  const [months, setMonths] = useState<number>(10);
  const [units, setUnits] = useState<number>(6); // For veneers

  const plans = {
    invisalign: {
      nameTh: 'จัดฟันใส Invisalign Comprehensive',
      nameEn: 'Invisalign Comprehensive',
      price: 89000,
      badge: '0% ดอกเบี้ย',
      descTh: 'รวมสแกนฟัน 3D, รีเทนเนอร์ 1 คู่, และการปรับฟันจนจบเคส',
      descEn: 'Includes 3D scan, 1 pair retainers, full refinement'
    },
    veneer: {
      nameTh: 'เซรามิกวีเนียร์ E-max (ต่อชุด)',
      nameEn: 'E-max Ceramic Veneers Set',
      unitPrice: 9500,
      badge: 'รับประกัน 5 ปี',
      descTh: 'ออกแบบ Smile Design เฉพาะบุคคล พร้อมทดลองใส่ Mockup ฟรี',
      descEn: 'Custom smile design with complimentary mock-up trial'
    },
    implant: {
      nameTh: 'รากฟันเทียมดิจิทัล Straumann (สวิตเซอร์แลนด์)',
      nameEn: 'Straumann Digital Implant (Swiss)',
      price: 45000,
      badge: 'แผลเล็ก ฟื้นตัวไว',
      descTh: 'รวมครอบฟัน Zirconia แท้ และระบบนำผ่าตัด 3D Guide',
      descEn: 'Includes custom Zirconia crown and 3D surgical guide'
    }
  };

  const calculateTotal = () => {
    if (selectedPlan === 'veneer') {
      return plans.veneer.unitPrice * units;
    }
    return plans[selectedPlan].price;
  };

  const totalPrice = calculateTotal();
  const monthlyPayment = Math.round(totalPrice / months);

  return (
    <section id="calculator" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-700/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Info & Selector */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 border border-brand-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold">
                <Calculator className="w-4 h-4 text-brand-400" />
                <span>{lang === 'th' ? 'โปรแกรมคำนวณผ่อนชำระ 0%' : '0% Installment Simulator'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                {lang === 'th' ? (
                  <>
                    ยิ้มสวยมั่นใจได้ทันที <br />
                    <span className="text-brand-400">ผ่อนสบายๆ 0% นานสูงสุด 10 เดือน</span>
                  </>
                ) : (
                  <>
                    Achieve Your Dream Smile <br />
                    <span className="text-brand-400">With 0% Flexible Monthly Payments</span>
                  </>
                )}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {lang === 'th'
                  ? 'คลินิกเรามีพาร์ตเนอร์บัตรเครดิตชั้นนำทุกธนาคาร (KBank, SCB, KTC, BBL, Krungsri, Citi) ให้คุณเริ่มต้นดูแลรอยยิ้มได้โดยไม่ต้องจ่ายก้อนเดียว'
                  : 'Partnered with top credit card issuers to offer transparent, zero-interest payment plans.'}
              </p>

              {/* Service Selection Radio Pills */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  {lang === 'th' ? '1. เลือกหัตถการที่สนใจ:' : '1. Choose Treatment:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('invisalign')}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                      selectedPlan === 'invisalign'
                        ? 'border-brand-400 bg-brand-500/20 text-white ring-1 ring-brand-400'
                        : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    จัดฟันใส Invisalign
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan('veneer')}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                      selectedPlan === 'veneer'
                        ? 'border-brand-400 bg-brand-500/20 text-white ring-1 ring-brand-400'
                        : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    เซรามิกวีเนียร์
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan('implant')}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                      selectedPlan === 'implant'
                        ? 'border-brand-400 bg-brand-500/20 text-white ring-1 ring-brand-400'
                        : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    รากฟันเทียม
                  </button>
                </div>
              </div>

              {/* Veneer units counter (if veneer selected) */}
              {selectedPlan === 'veneer' && (
                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-semibold">จำนวนซี่ที่ต้องการทำ (ซี่):</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setUnits(Math.max(1, units - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="font-bold text-base text-brand-400 w-8 text-center">{units}</span>
                    <button
                      onClick={() => setUnits(Math.min(16, units + 1))}
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
                  {lang === 'th' ? '2. เลือกระยะเวลาผ่อน 0%:' : '2. Installment Duration:'}
                </label>
                <div className="flex items-center gap-3">
                  {[3, 6, 10].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMonths(m)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        months === m
                          ? 'bg-brand-500 text-white shadow-md'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      {m} {lang === 'th' ? 'เดือน' : 'Months'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Calculation Result Card */}
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-brand-400 uppercase">Package Summary</span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {selectedPlan === 'veneer' ? `${plans.veneer.nameTh} (${units} ซี่)` : plans[selectedPlan].nameTh}
                    </h3>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-extrabold px-3 py-1 rounded-full">
                    {plans[selectedPlan].badge}
                  </span>
                </div>

                {/* Price Display */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <span>{lang === 'th' ? 'ยอดรวมทั้งสิ้น:' : 'Total Estimated Cost:'}</span>
                    <span className="text-base font-bold text-slate-200 line-through opacity-60">
                      ฿{(totalPrice * 1.15).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                    <span>{lang === 'th' ? 'ราคาพิเศษในโปรโมชัน:' : 'Special Demo Price:'}</span>
                    <span className="text-xl font-bold text-white">฿{totalPrice.toLocaleString()}</span>
                  </div>

                  {/* Monthly Highlight Box */}
                  <div className="bg-brand-950/80 border border-brand-500/40 rounded-2xl p-5 text-center my-4">
                    <span className="text-xs text-brand-300 font-semibold block mb-1">
                      {lang === 'th' ? `ผ่อน 0% เพียงเดือนละ (${months} เดือน)` : `Monthly 0% Payment (${months} Mo)`}
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-brand-400">
                      ฿{monthlyPayment.toLocaleString()}
                      <span className="text-xs text-slate-300 font-normal ml-1.5">
                        {lang === 'th' ? '/ เดือน' : '/ mo'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bank Card Logos Mockup */}
                <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400 mb-6 bg-slate-900/60 p-3 rounded-xl">
                  <CreditCard className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>รองรับบัตรเครดิตทุกธนาคารชั้นนำ ผ่อน 0% ไม่มีค่าธรรมเนียมแอบแฝง</span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full bg-gradient-to-r from-brand-500 to-teal-400 hover:from-brand-600 hover:to-teal-500 text-slate-950 font-black py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm transform hover:scale-[1.02]"
                >
                  <span>{lang === 'th' ? 'จองรับสิทธิ์โปรโมชันนี้ทันที' : 'Claim This Special Rate'}</span>
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
