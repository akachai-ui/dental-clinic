'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SafetyVisualBanner from '@/components/SafetyVisualBanner';
import PricingSection from '@/components/PricingSection';
import PromotionsSection from '@/components/PromotionsSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import ContactFooter from '@/components/ContactFooter';
import MobileBottomBar from '@/components/MobileBottomBar';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Dynamic Nav Links as we build each section
  const navLinks = [
    { href: '#home', label: 'หน้าแรก' },
    { href: '#services', label: 'บริการของเรา' },
    { href: '#pricing', label: 'ราคาค่าบริการ' },
    { href: '#promotions', label: 'โปรโมชันพิเศษ' },
    { href: '#reviews', label: 'รีวิว Google Maps' },
    { href: '#contact', label: 'ที่ตั้ง & ติดต่อเรา' },
  ];

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setSelectedServiceId(null);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col pb-16 md:pb-0">
      {/* 1. Mobile-Optimized Navbar */}
      <Navbar
        navLinks={navLinks}
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* 2. Section 1: Hero & Grand Brand Showcase (Full Screen) */}
      <Hero
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* 3. Section 2: Services & Treatments (บริการของเรา) */}
      <Services
        onSelectServiceForBooking={handleOpenBookingWithService}
      />

      {/* 4. Full-Screen Visual Banner: 100% Clinical Safety & Sterility (ภาพความปลอดภัยเต็มจอ) */}
      <SafetyVisualBanner />

      {/* 5. Section 3: Transparent Pricing & 0% Installment (ราคาค่าบริการ) */}
      <PricingSection
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* 6. Section 4: Monthly Exclusive Promotions (โปรโมชันพิเศษ) */}
      <PromotionsSection
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* 7. Section 5: Google Maps Reviews (รีวิวจาก Google Maps) */}
      <GoogleReviewsSection />

      {/* 8. Footer: Location, Transit, Contact Form & Branches (ที่ตั้งคลินิก & ฟุตเตอร์) */}
      <ContactFooter
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* 📱 Mobile Floating Sticky Bottom Bar (ปรากฏเฉพาะบนมือถือ 1-Tap Call, LINE, Book) */}
      <MobileBottomBar
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        lang="th"
        preSelectedServiceId={selectedServiceId}
      />
    </main>
  );
}
