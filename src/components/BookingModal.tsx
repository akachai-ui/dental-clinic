'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Phone, MapPin, Sparkles, AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, DOCTORS_DATA, CLINIC_INFO } from '@/data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'th' | 'en';
  preSelectedServiceId?: string | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  lang,
  preSelectedServiceId
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>(SERVICES_DATA[0].id);
  const [selectedBranch, setSelectedBranch] = useState<string>(CLINIC_INFO.branches[0].nameTh);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:00');
  
  // Patient Details
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientLine, setPatientLine] = useState('');
  const [patientNotes, setPatientNotes] = useState('');

  // Confirmation Code
  const [bookingCode, setBookingCode] = useState('');

  useEffect(() => {
    if (preSelectedServiceId) {
      setSelectedService(preSelectedServiceId);
    }
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, [preSelectedServiceId, isOpen]);

  if (!isOpen) return null;

  const timeSlots = ['10:30', '11:00', '11:30', '13:30', '14:00', '15:00', '16:30', '17:30', '18:30'];

  const handleFinishBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBookingCode(`SM-${randomNum}`);
    setStep(4);
  };

  const currentServiceObj = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];
  const currentDoctorObj = DOCTORS_DATA.find((d) => d.id === selectedDoctor);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden relative my-8">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-700 to-brand-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-brand-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-brand-300" />
            <span>Interactive Online Booking System</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black">
            {lang === 'th' ? 'จองคิวนัดหมายปรึกษาทันตแพทย์' : 'Schedule Dental Appointment'}
          </h3>

          {/* Stepper Progress Bar */}
          <div className="flex items-center justify-between mt-5 pt-3 border-t border-brand-500/50 text-xs font-bold">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-white' : 'text-brand-300'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-white text-brand-700' : 'bg-brand-800'}`}>1</span>
              <span>{lang === 'th' ? 'บริการ & สาขา' : 'Service'}</span>
            </div>
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-white' : 'text-brand-300'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-white text-brand-700' : 'bg-brand-800'}`}>2</span>
              <span>{lang === 'th' ? 'เลือกแพทย์ & วันเวลา' : 'Date & Doctor'}</span>
            </div>
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-white' : 'text-brand-300'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-white text-brand-700' : 'bg-brand-800'}`}>3</span>
              <span>{lang === 'th' ? 'ข้อมูลคนไข้' : 'Patient Info'}</span>
            </div>
            <div className={`flex items-center gap-1.5 ${step === 4 ? 'text-white' : 'text-brand-300'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 4 ? 'bg-white text-brand-700' : 'bg-brand-800'}`}>4</span>
              <span>{lang === 'th' ? 'ใบนัดหมาย' : 'Confirmation'}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Select Service & Branch */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. {lang === 'th' ? 'เลือกสาขาที่สะดวกเข้ารับบริการ' : 'Select Branch'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {CLINIC_INFO.branches.map((b) => (
                    <button
                      key={b.nameTh}
                      type="button"
                      onClick={() => setSelectedBranch(b.nameTh)}
                      className={`p-3 rounded-2xl border text-left text-xs font-semibold transition-all ${
                        selectedBranch === b.nameTh
                          ? 'border-brand-600 bg-brand-50/70 text-brand-900 ring-2 ring-brand-500/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-600 mb-1" />
                      <div>{lang === 'th' ? b.nameTh : b.nameEn}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. {lang === 'th' ? 'เลือกบริการ / หัตถการที่ต้องการ' : 'Select Treatment'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-1">
                  {SERVICES_DATA.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-start justify-between gap-2 ${
                        selectedService === srv.id
                          ? 'border-brand-600 bg-brand-50/70 ring-2 ring-brand-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {lang === 'th' ? srv.titleTh : srv.titleEn}
                        </div>
                        <div className="text-[11px] text-brand-600 font-semibold mt-0.5">
                          ฿{srv.priceStart.toLocaleString()} {lang === 'th' ? srv.unitTh : srv.unitEn}
                        </div>
                      </div>
                      {selectedService === srv.id && (
                        <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-2xl shadow-md transition-all text-sm"
                >
                  <span>{lang === 'th' ? 'ถัดไป: เลือกวันเวลา' : 'Next: Select Date & Time'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Doctor & Date/Time */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. {lang === 'th' ? 'เลือกทันตแพทย์ผู้รักษา' : 'Select Specialist'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedDoctor('any')}
                    className={`p-3 rounded-2xl border text-left text-xs font-semibold transition-all ${
                      selectedDoctor === 'any'
                        ? 'border-brand-600 bg-brand-50/70 text-brand-900 ring-2 ring-brand-500/20'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="font-bold">✨ {lang === 'th' ? 'แพทย์เวรเฉพาะทาง (คิวเร็วที่สุด)' : 'Any Available Specialist'}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{lang === 'th' ? 'ระบบจัดสรรแพทย์ที่ว่างตรงเวลา' : 'Auto-match earliest slot'}</div>
                  </button>

                  {DOCTORS_DATA.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setSelectedDoctor(doc.id)}
                      className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                        selectedDoctor === doc.id
                          ? 'border-brand-600 bg-brand-50/70 text-brand-900 ring-2 ring-brand-500/20'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="font-bold text-slate-900">{lang === 'th' ? doc.nameTh : doc.nameEn}</div>
                      <div className="text-[10px] text-brand-600">{lang === 'th' ? doc.specialtyTh : doc.specialtyEn}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    2. {lang === 'th' ? 'เลือกวันที่สะดวก' : 'Select Date'}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    3. {lang === 'th' ? 'เลือกรอบเวลา' : 'Time Slot'}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 text-center rounded-xl text-xs font-bold transition-all ${
                          selectedTime === slot
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                      >
                        {slot} น.
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{lang === 'th' ? 'ย้อนกลับ' : 'Back'}</span>
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-2xl shadow-md transition-all text-sm"
                >
                  <span>{lang === 'th' ? 'ถัดไป: กรอกข้อมูลคนไข้' : 'Next: Patient Info'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information Form */}
          {step === 3 && (
            <form onSubmit={handleFinishBooking} className="space-y-4 animate-fade-in">
              <div className="bg-brand-50/60 p-3.5 rounded-2xl border border-brand-100 flex items-start gap-3 text-xs text-brand-900">
                <AlertCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>{lang === 'th' ? 'สรุปนัดหมาย:' : 'Appointment Summary:'}</strong>{' '}
                  {lang === 'th' ? currentServiceObj.titleTh : currentServiceObj.titleEn} @ {selectedBranch} ในวันที่ {selectedDate} เวลา {selectedTime} น.
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'th' ? 'ชื่อ-นามสกุล คนไข้ *' : 'Patient Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'th' ? 'เช่น คุณสมศรี สุขสมบูรณ์' : 'e.g. John Doe'}
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'th' ? 'เบอร์โทรศัพท์ติดต่อ *' : 'Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08X-XXX-XXXX"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'th' ? 'LINE ID (เพื่อรับใบนัด)' : 'LINE ID (For Reminder)'}
                  </label>
                  <input
                    type="text"
                    placeholder="@lineid หรือ เบอร์"
                    value={patientLine}
                    onChange={(e) => setPatientLine(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'th' ? 'อาการเบื้องต้น / ข้อกังวล (ถ้ามี)' : 'Symptoms or Special Request'}
                </label>
                <textarea
                  rows={2}
                  placeholder={lang === 'th' ? 'เช่น เสียวฟันกรามล่างขวา, สนใจจัดฟันใส ฯลฯ' : 'Any dental concerns...'}
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{lang === 'th' ? 'ย้อนกลับ' : 'Back'}</span>
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'th' ? 'ยืนยันการนัดหมาย' : 'Confirm Appointment'}</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success Confirmation Slip */}
          {step === 4 && (
            <div className="text-center space-y-6 animate-fade-in py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-black text-slate-900">
                  {lang === 'th' ? 'บันทึกการนัดหมายเรียบร้อยแล้ว!' : 'Appointment Confirmed!'}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'th'
                    ? 'เจ้าหน้าที่คลินิกจะติดต่อกลับเพื่อยืนยันคิวล่วงหน้า 1 วัน'
                    : 'Our team will contact you for a gentle reminder prior to your visit.'}
                </p>
              </div>

              {/* Digital Slip Card */}
              <div className="bg-slate-50 rounded-3xl p-5 border-2 border-dashed border-slate-200 text-left space-y-3 relative">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Appointment Ref.</div>
                    <div className="text-lg font-black text-brand-600 font-mono">{bookingCode}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Status</div>
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Confirmed
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px] block">คนไข้ / Patient:</span>
                    <strong className="text-slate-800">{patientName || 'คุณคนไข้ (ตัวอย่าง)'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">เบอร์โทร / Phone:</span>
                    <strong className="text-slate-800">{patientPhone || '08X-XXX-XXXX'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">หัตถการ / Service:</span>
                    <strong className="text-slate-800">{lang === 'th' ? currentServiceObj.titleTh : currentServiceObj.titleEn}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">วัน-เวลานัด / Slot:</span>
                    <strong className="text-brand-600">{selectedDate} @ {selectedTime} น.</strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-400 text-[11px] block">สาขา / Location:</span>
                    <strong className="text-slate-800">{selectedBranch}</strong>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={onClose}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-8 rounded-2xl text-xs transition-all shadow"
                >
                  {lang === 'th' ? 'เสร็จสิ้น (ปิดหน้าต่าง)' : 'Close'}
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
