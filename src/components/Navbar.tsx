'use client';

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Calendar,
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles,
  Tag,
  Star,
  Layers,
  HelpCircle
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
  navLinks?: Array<{ href: string; label: string }>;
}

export default function Navbar({ onOpenBooking, navLinks = [] }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Offset for sticky header
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  };

  const getMenuIcon = (href: string) => {
    switch (href) {
      case '#home':
        return <Sparkles className="w-4 h-4 text-brand-400" />;
      case '#services':
        return <Layers className="w-4 h-4 text-brand-400" />;
      case '#pricing':
        return <Tag className="w-4 h-4 text-brand-400" />;
      case '#promotions':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case '#reviews':
        return <Star className="w-4 h-4 text-amber-400" />;
      case '#contact':
        return <MapPin className="w-4 h-4 text-brand-400" />;
      default:
        return <ChevronRight className="w-4 h-4 text-brand-400" />;
    }
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        {/* 1. Top Mini Bar (Desktop only) */}
        <div className="bg-[#0b1329] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center gap-6 text-[11px] lg:text-xs">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>เปิดบริการทุกวัน: <strong>10:00 - 20:00 น.</strong></span>
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>มาตรฐานปลอดเชื้อสากล CSSD 100%</span>
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>BTS พร้อมพงษ์ ทางออก 2</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] lg:text-xs">
              <a
                href="tel:021234567"
                className="hover:text-white flex items-center gap-1.5 transition-colors text-slate-300"
              >
                <Phone className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                <span>Hotline: <strong className="text-white font-mono">02-123-4567</strong></span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-950/70 hover:bg-emerald-900/90 text-emerald-300 hover:text-emerald-200 px-2.5 py-0.5 rounded-full border border-emerald-600/40 flex items-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span>LINE: <strong>@smileclinic</strong></span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 py-2.5 sm:py-3 border-b border-slate-100'
              : 'bg-white/95 backdrop-blur-sm py-3 sm:py-4 border-b border-slate-100/60'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
            {/* Logo: Smile Clinic */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0 whitespace-nowrap"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#0b1329] p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center border border-brand-400/40 flex-shrink-0">
                <div className="w-full h-full rounded-[14px] bg-[#0f172a] flex items-center justify-center text-brand-400">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 2.38 1.05 4.52 2.72 6L7 21c.28 1.12 1.45 1.77 2.5 1.4L12 21l2.5 1.4c1.05.37 2.22-.28 2.5-1.4l.28-5C18.95 14.52 20 12.38 20 10c0-4.42-3.58-8-8-8zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight group-hover:text-brand-600 transition-colors">
                    Smile Clinic
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold tracking-wider uppercase mt-0.5">
                  PREMIUM DENTAL CLINIC
                </div>
              </div>
            </a>

            {/* Desktop Nav Links */}
            {navLinks.length > 0 && (
              <div className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs xl:text-sm font-semibold text-slate-700 whitespace-nowrap">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-brand-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Action CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap">
              {/* Direct Call Button (Desktop) */}
              <a
                href="tel:021234567"
                className="hidden sm:flex p-2.5 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-brand-50 border border-slate-200 hover:border-brand-200 transition-all flex-shrink-0"
                title="โทรติดต่อด่วน"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Book Button (Desktop) */}
              <button
                onClick={onOpenBooking}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-brand-300 hover:text-white hover:border-brand-400 border border-brand-500/40 font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-xs xl:text-sm whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>จองคิวนัดหมาย</span>
              </button>

              {/* Mobile Header Quick Contact & Hamburger Menu Button */}
              <div className="flex items-center gap-1.5 lg:hidden">
                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1.5 rounded-xl text-xs font-bold active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>LINE</span>
                </a>

                {navLinks.length > 0 && (
                  <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="p-2 text-slate-800 hover:text-brand-600 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors active:scale-95"
                    aria-label="Open Menu"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* 3. Dedicated Full-Screen Mobile Drawer Modal (z-[100]) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] flex flex-col bg-[#0b1329] text-white animate-fade-in overflow-hidden">
          {/* Drawer Header with Logo & Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-[#070d1e]/90 backdrop-blur-xl flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0b1329] border border-brand-400/50 flex items-center justify-center text-brand-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 2.38 1.05 4.52 2.72 6L7 21c.28 1.12 1.45 1.77 2.5 1.4L12 21l2.5 1.4c1.05.37 2.22-.28 2.5-1.4l.28-5C18.95 14.52 20 12.38 20 10c0-4.42-3.58-8-8-8zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block leading-none">
                  Smile Clinic
                </span>
                <span className="text-[9px] text-brand-400 font-semibold tracking-wider uppercase">
                  PREMIUM DENTAL CLINIC
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-slate-300 hover:text-white rounded-xl bg-slate-800/90 border border-slate-700/80 active:scale-95 transition-all"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Navigation Area */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">
                เมนูนำทาง / NAVIGATION
              </div>
              <div className="space-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:bg-slate-800/80 hover:border-brand-500/40 active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-800/80 flex items-center justify-center">
                        {getMenuIcon(link.href)}
                      </div>
                      <span className="font-bold text-white text-sm">
                        {link.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Clinic Info Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#070d1e] border border-brand-500/20 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-brand-300 font-bold">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>เปิดบริการทุกวัน: 10:00 - 20:00 น.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>BTS พร้อมพงษ์ ทางออก 2 (สุขุมวิท 24)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>มาตรฐานความสะอาดปลอดเชื้อ CSSD 100%</span>
              </div>
            </div>
          </div>

          {/* Drawer Footer Fixed CTAs */}
          <div className="p-5 border-t border-slate-800/80 bg-[#070d1e] space-y-2.5 flex-shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] text-slate-950 font-black py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-xl shadow-amber-500/20 active:scale-95 transition-transform"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>จองคิวนัดหมายออนไลน์</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:021234567"
                className="bg-slate-800/90 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 border border-slate-700 active:scale-95 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                <span>02-123-4567</span>
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-950/90 text-emerald-300 border border-emerald-600/50 font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>LINE Official</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
