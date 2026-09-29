'use client';

import React from 'react';
import DeviceShowcase3D from '@/components/DeviceShowcase3D';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-[#070d1e] text-white py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      {/* Top Header */}
      <div className="w-full max-w-5xl mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>กลับสู่หน้าหลัก</span>
        </Link>

        <a
          href="/"
          target="_blank"
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-300 bg-brand-500/10 border border-brand-500/30 px-4 py-2 rounded-xl hover:bg-brand-500/20 transition-all"
        >
          <span>เปิดเว็บไซต์สด</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Main Showcase Container */}
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8 space-y-2">
          <div className="inline-block bg-brand-500/20 text-brand-300 border border-brand-500/40 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
            3D MULTI-DEVICE RESPONSIVE SHOWCASE
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            Smile Clinic • iMac, iPad & iPhone 3D Mockup
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            ภาพตัวอย่างการแสดงผลเว็บไซต์บนหน้าจอคอมพิวเตอร์ Mac, แท็บเล็ต iPad และสมาร์ทโฟน iPhone
          </p>
        </div>

        {/* 3D Device Showcase */}
        <DeviceShowcase3D />
      </div>

    </main>
  );
}
