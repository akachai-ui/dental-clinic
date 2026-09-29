'use client';

import React from 'react';
import { Palette, LayoutDashboard, Globe, Sparkles, CheckCircle2, ChevronDown, MonitorSmartphone } from 'lucide-react';

interface DemoPresenterBarProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  lang: 'th' | 'en';
  setLang: (lang: 'th' | 'en') => void;
  onOpenAdminModal: () => void;
  onOpenBookingModal: () => void;
}

export default function DemoPresenterBar({
  currentTheme,
  setTheme,
  lang,
  setLang,
  onOpenAdminModal,
  onOpenBookingModal
}: DemoPresenterBarProps) {
  const [isOpen, setIsOpen] = React.useState(true);

  const themes = [
    { id: 'teal', nameTh: 'Modern Teal', color: '#0d9488', bgClass: 'bg-teal-600' },
    { id: 'navy-gold', nameTh: 'Luxury Navy-Gold', color: '#1e293b', bgClass: 'bg-slate-900' },
    { id: 'rose-gold', nameTh: 'Rose Blossom', color: '#e11d48', bgClass: 'bg-rose-600' },
    { id: 'emerald-mint', nameTh: 'Clean Mint', color: '#059669', bgClass: 'bg-emerald-600' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300">
      <div className="bg-slate-900/90 backdrop-blur-md text-white rounded-2xl p-3 shadow-2xl border border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
        
        {/* Left: Presentation Badge */}
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div className="font-semibold tracking-wide text-slate-200 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Portfolio Pitch Bar</span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700 font-mono">
              Demo Controls
            </span>
          </div>
        </div>

        {/* Center: Theme Selector */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-xl border border-slate-700">
          <Palette className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[11px] text-slate-300 hidden md:inline">ธีมคลินิก:</span>
          <div className="flex items-center gap-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                title={t.nameTh}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-medium transition-all ${
                  currentTheme === t.id
                    ? 'bg-white text-slate-900 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${t.bgClass}`}></span>
                <span className="hidden lg:inline text-[11px]">{t.nameTh}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switch */}
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors border border-slate-700"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Admin Dashboard Mockup Button */}
          <button
            onClick={onOpenAdminModal}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow transition-all hover:scale-105"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>ดูระบบหลังบ้าน (Admin)</span>
          </button>

          {/* Quick Book Demo */}
          <button
            onClick={onOpenBookingModal}
            className="hidden sm:flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105 shadow"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ทดสอบจองคิว</span>
          </button>
        </div>

      </div>
    </div>
  );
}
