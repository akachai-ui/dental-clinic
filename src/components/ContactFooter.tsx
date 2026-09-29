'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Navigation,
  Train,
  Bus,
  Ship,
  Bike,
  Car,
  Sparkles,
  Facebook,
  Instagram,
  Globe,
  ExternalLink
} from 'lucide-react';

interface ContactFooterProps {
  onOpenBooking: () => void;
}

export default function ContactFooter({ onOpenBooking }: ContactFooterProps) {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const clinicAddress = {
    name: 'Smile Clinic',
    subName: 'คลินิกทันตกรรมสไมล์ (สาขาหลัก พร้อมพงษ์)',
    address: '999/8 อาคารสไมล์ทาวเวอร์ ชั้น 3 ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110',
    landmark: 'BTS สถานีพร้อมพงษ์ ทางออก 2 (เดิน Skywalk เพียง 3 นาที มีที่จอดรถ VIP)',
    hours: 'เปิดบริการทุกวัน 10:00 - 20:00 น.',
    phone: '02-123-4567',
    hotline: '089-999-8888',
    line: '@smileclinic',
    facebook: 'Smile Clinic ทันตกรรมดิจิทัล',
    instagram: '@smileclinic.bangkok',
    email: 'contact@smileclinic.demo',
    mapUrl: 'https://maps.google.com/?q=BTS+Phrom+Phong+Bangkok',
  };

  const socialLinks = [
    {
      name: 'Facebook',
      handle: 'Smile Clinic ทันตกรรมดิจิทัล',
      url: 'https://facebook.com',
      icon: Facebook,
      color: 'hover:bg-blue-600 hover:border-blue-500 text-blue-400',
      badgeBg: 'bg-blue-500/10 border-blue-500/30'
    },
    {
      name: 'Instagram',
      handle: '@smileclinic.bangkok',
      url: 'https://instagram.com',
      icon: Instagram,
      color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-pink-500 text-pink-400',
      badgeBg: 'bg-pink-500/10 border-pink-500/30'
    },
    {
      name: 'LINE Official',
      handle: '@smileclinic',
      url: 'https://line.me',
      icon: MessageCircle,
      color: 'hover:bg-emerald-600 hover:border-emerald-500 text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30'
    },
    {
      name: 'Google Maps',
      handle: 'Smile Clinic (4.9 ★ 1,280+ รีวิว)',
      url: 'https://maps.google.com',
      icon: Compass,
      color: 'hover:bg-amber-600 hover:border-amber-500 text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30'
    },
  ];

  const transitIcons = [
    { icon: Train, name: 'BTS พร้อมพงษ์', detail: 'ทางออก 2 เดิน Skywalk 3 นาที', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
    { icon: Train, name: 'MRT สุขุมวิท', detail: 'เชื่อม BTS อโศก ต่อ 1 สถานี', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
    { icon: Bus, name: 'รถเมล์', detail: 'สาย 2, 25, 38, 40, 48, 508, 511', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { icon: Ship, name: 'เรือโดยสาร', detail: 'ท่าเรืออิตัลไทย / พร้อมพงษ์', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/30' },
    { icon: Bike, name: 'วินมอเตอร์ไซค์', detail: 'หน้าปากซอยสุขุมวิท 24 และ 39', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
    { icon: Car, name: 'ที่จอดรถ VIP', detail: 'รองรับกว่า 200 คัน + จุดชาร์จ EV', color: 'text-brand-400', bg: 'bg-brand-500/10 border-brand-500/30' },
  ];

  const branches = [
    { name: 'สาขาพร้อมพงษ์ (สำนักงานใหญ่)', address: 'อาคารสไมล์ทาวเวอร์ ชั้น 3 BTS พร้อมพงษ์', tel: '02-123-4567' },
    { name: 'สาขาสยามสแควร์', address: 'สยามสแควร์วัน ชั้น 4 BTS สยาม', tel: '02-234-5678' },
    { name: 'สาขาเซ็นทรัล ลาดพร้าว', address: 'เซ็นทรัลพลาซา ลาดพร้าว ชั้น 8 BTS ห้าแยกลาดพร้าว', tel: '02-345-6789' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMsg('');
    }, 2500);
  };

  return (
    <footer id="contact" className="bg-[#0b1329] text-slate-300 pt-20 pb-16 border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Subtle Luxury Glow (Desktop only) */}
      <div className="hidden md:block absolute top-0 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hidden md:block absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-brand-400/40 text-brand-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>CLINIC LOCATION, SOCIAL & CONTACT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-normal leading-[1.35] sm:leading-[1.35]">
            <div>ที่ตั้งคลินิก แผนที่ และโซเชียลมีเดีย</div>
            <div className="mt-2.5 bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] bg-clip-text text-transparent py-1">
              ติดตามและเดินทางมาได้สะดวกทุกวัน
            </div>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            ติดต่อนัดหมาย ปรึกษาเคส หรือติดตามรีวิวเคสจัดฟันใส วีเนียร์ และรากเทียมได้ทุกช่องทาง
          </p>
        </div>

        {/* 🌟 Social Media Hub Banner (Facebook, IG, LINE, Google Maps) */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <Globe className="w-4 h-4 text-brand-400" />
            <span>ช่องทางโซเชียลมีเดียอย่างเป็นทางการ (Official Channels):</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-2xl border ${social.badgeBg} ${social.color} hover:text-white bg-slate-950 transition-colors duration-300 flex items-center justify-between group shadow-md hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white">{social.name}</div>
                      <div className="text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors truncate max-w-[150px]">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* 🌟 Main Grid: Location & Transit (Left) + Interactive Map & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Main Location & Transportation Box */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            
            {/* Main Address Heading */}
            <div className="flex items-start gap-4 pb-5 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#b8862d] to-[#7a5416] text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-lg border border-amber-300/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-brand-400 uppercase tracking-wider">
                  ที่ตั้งสาขาหลัก (Main Location)
                </div>
                <div className="text-base sm:text-xl font-bold text-white leading-relaxed">
                  {clinicAddress.address}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-1.5 pt-1">
                  <Navigation className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>{clinicAddress.landmark}</span>
                </div>
              </div>
            </div>

            {/* 🚆 Transportation Methods Grid (BTS, MRT, รถเมล์, เรือ, วิน, ที่จอดรถ) */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-400" />
                <span>ช่องทางการเดินทางที่สะดวก (Access & Transport):</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {transitIcons.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl border ${item.bg} flex flex-col justify-between transition-all hover:scale-105`}
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                        <span className="text-xs font-bold text-white whitespace-nowrap">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-300 mt-1 leading-tight">
                        {item.detail}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hours & Hotline Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs">
              <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/50 flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">เวลาทำการ</span>
                  <strong className="text-white font-semibold">{clinicAddress.hours}</strong>
                </div>
              </div>

              <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/50 flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">เบอร์ติดต่อสายด่วน</span>
                  <strong className="text-white font-semibold font-mono">
                    {clinicAddress.phone} / {clinicAddress.hotline}
                  </strong>
                </div>
              </div>
            </div>

            {/* Action Buttons: Google Maps & LINE */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={clinicAddress.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#b8862d] hover:bg-[#d4a759] text-slate-950 font-black px-6 py-3 rounded-xl text-xs transition-all shadow-lg"
              >
                <Compass className="w-4 h-4 text-slate-950" />
                <span>เปิดแผนที่ Google Maps</span>
              </a>

              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>LINE: {clinicAddress.line}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-brand-300 border border-slate-700 font-bold px-6 py-3 rounded-xl text-xs transition-all"
              >
                <span>จองคิวออนไลน์</span>
              </button>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Google Map Preview & Quick Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 🗺️ Interactive Google Map Embed Card */}
            <div className="bg-slate-900/90 rounded-3xl p-4 sm:p-5 border border-slate-800 shadow-2xl space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-400" />
                  <span>Google Maps (พิกัด BTS พร้อมพงษ์)</span>
                </span>
                <a
                  href={clinicAddress.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-semibold text-brand-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>ขยายแผนที่</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe Frame (Optimized for smooth 60fps scrolling) */}
              <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-950">
                <iframe
                  title="Smile Clinic Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.727649557454!2d100.56708797587823!3d13.730302197621183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f03d5fa6cf1%3A0xb36b5ea3b118bfa6!2sPhrom%20Phong%20BTS%20Station!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Quick Consultation Form */}
            <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl space-y-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-brand-400" />
                  <span>ส่งข้อความปรึกษาทันตแพทย์</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับพร้อมประเมินเบื้องต้น
                </p>
              </div>

              {formSent ? (
                <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-2xl p-5 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="font-bold text-white text-sm">ได้รับข้อความเรียบร้อยแล้ว</div>
                  <div className="text-xs text-slate-300">เจ้าหน้าที่คลินิกจะติดต่อกลับภายใน 15-30 นาทีครับ</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="ชื่อ-นามสกุล ของคุณ"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-400"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="เบอร์โทรศัพท์ (08X-XXX-XXXX)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-400"
                  />

                  <textarea
                    rows={2}
                    required
                    placeholder="ข้อความหรือบริการที่สนใจสอบถาม"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-brand-400"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] hover:from-[#d4a759] hover:to-[#b8862d] text-slate-950 font-black py-3 rounded-xl text-xs transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>ส่งข้อความติดต่อ</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Branches Grid */}
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            สาขาทั้งหมดของ Smile Clinic:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {branches.map((b, idx) => (
              <div key={idx} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 space-y-1">
                <div className="text-sm font-bold text-white">{b.name}</div>
                <div className="text-xs text-slate-400">{b.address}</div>
                <div className="text-xs text-brand-400 font-mono font-semibold pt-1">โทร: {b.tel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 text-center sm:text-left">
          <div>
            © 2026 Smile Clinic. All Rights Reserved. (Demo Showcase)
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>✨ Crafted with Excellence for Digital Dental Transformation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
