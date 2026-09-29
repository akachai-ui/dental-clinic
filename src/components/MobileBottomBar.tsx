'use client';

import React from 'react';
import { Phone, Calendar, MessageCircle, MapPin } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export default function MobileBottomBar({ onOpenBooking }: MobileBottomBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 pb-safe bg-[#0b1329]/95 backdrop-blur-xl border-t border-slate-800/90 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* 1. Direct Call Button */}
        <a
          href="tel:021234567"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700/80 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-brand-400 mb-0.5" />
          <span className="text-[10px] font-bold">โทรด่วน</span>
        </a>

        {/* 2. LINE Official Button */}
        <a
          href="https://line.me"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/90 text-emerald-300 border border-emerald-600/40 active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-bold">แชท LINE</span>
        </a>

        {/* 3. Primary Booking CTA Button (Larger & Golden) */}
        <button
          onClick={onOpenBooking}
          className="flex-[2] flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] text-slate-950 font-black shadow-lg shadow-amber-500/20 active:scale-95 transition-all text-xs"
        >
          <Calendar className="w-4 h-4 text-slate-950 flex-shrink-0" />
          <span className="whitespace-nowrap">จองคิวนัดหมาย</span>
        </button>

      </div>
    </div>
  );
}
