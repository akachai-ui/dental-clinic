'use client';

import React from 'react';
import { X, Calendar, Clock, User, CheckCircle2, AlertCircle, Sparkles, Filter, ChevronRight, BarChart3, Users, Stethoscope } from 'lucide-react';
import { MOCK_ADMIN_SCHEDULE } from '@/data/clinicData';

interface AdminPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'th' | 'en';
}

export default function AdminPreviewModal({ isOpen, onClose, lang }: AdminPreviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-700 overflow-hidden relative my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-indigo-950 p-6 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white">Dental Clinic Admin & Doctor Portal (Mockup)</h3>
                <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">
                  Pitch Feature
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                ตัวอย่างหน้าจอจำลองสำหรับผู้บริหารคลินิกและเคาน์เตอร์ต้อนรับในการจัดการคิวนัดหมาย
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">นัดหมายวันนี้ (Today)</div>
              <div className="text-2xl font-black text-white mt-1">18 เคส</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">+4 เคสจากสัปดาห์ก่อน</div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">คนไข้ใหม่ (New Patients)</div>
              <div className="text-2xl font-black text-indigo-400 mt-1">6 ราย</div>
              <div className="text-[10px] text-slate-400 mt-0.5">ผ่านระบบจองออนไลน์</div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">แพทย์ลงตรวจ (Doctors on Duty)</div>
              <div className="text-2xl font-black text-amber-400 mt-1">4 ท่าน</div>
              <div className="text-[10px] text-slate-400 mt-0.5">3 ห้องตรวจ VIP + 1 OR</div>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <div className="text-[11px] text-slate-400 font-semibold uppercase">ยอดรวมประเมิน (Estimated Rev.)</div>
              <div className="text-2xl font-black text-emerald-400 mt-1">฿284,500</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">92% ของเป้าหมายประจำวัน</div>
            </div>
          </div>

          {/* Table Header & Search */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-slate-200">ตารางคิวนัดหมายประจำวันนี้ (Real-Time Queue Schedule)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">กรองสาขา:</span>
              <span className="bg-slate-700 text-white px-2.5 py-1 rounded-lg font-medium border border-slate-600">
                สาขาพร้อมพงษ์ (Main)
              </span>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 uppercase font-semibold">
                  <th className="pb-3 px-3">เวลานัดหมาย</th>
                  <th className="pb-3 px-3">ชื่อคนไข้</th>
                  <th className="pb-3 px-3">หัตถการ / การรักษา</th>
                  <th className="pb-3 px-3">ทันตแพทย์</th>
                  <th className="pb-3 px-3">ห้องตรวจ</th>
                  <th className="pb-3 px-3 text-right">สถานะคิว</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {MOCK_ADMIN_SCHEDULE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-mono font-bold text-indigo-300">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{row.time}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 font-bold text-white">{row.patient}</td>
                    <td className="py-3 px-3 text-slate-300">{row.service}</td>
                    <td className="py-3 px-3 text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Stethoscope className="w-3 h-3 text-brand-400" />
                        <span>{row.doctor}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-slate-400">{row.room}</td>
                    <td className="py-3 px-3 text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          row.status === 'Completed'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : row.status === 'In Progress'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                            : row.status === 'Confirmed'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sales Pitch Callout Footer */}
          <div className="bg-indigo-950/50 border border-indigo-500/40 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-indigo-200">
              <strong className="text-white block mb-0.5">💡 จุดขายสำหรับพรีเซนต์ลูกค้าคลินิก:</strong>
              ทีมงานของเราสามารถเชื่อมต่อระบบหน้าเว็บเข้ากับระบบจัดการคลินิก (HIS / Dental ERP / LINE OA Automation) เพื่อแจ้งเตือนคนไข้ผ่าน LINE อัตโนมัติได้
            </div>
            <button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2 rounded-xl text-xs flex-shrink-0 transition-all shadow"
            >
              เข้าใจแล้ว (ปิดหน้าต่าง)
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
