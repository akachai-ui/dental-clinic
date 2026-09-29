'use client';

import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, CheckCircle, ThumbsUp, Sparkles, ArrowLeftRight } from 'lucide-react';

interface GoogleReviewItem {
  id: string;
  author: string;
  avatar: string;
  isLocalGuide?: boolean;
  localGuideLevel?: number;
  reviewCount: number;
  rating: number;
  timeAgo: string;
  serviceTag: string;
  comment: string;
  photos?: string[];
  ownerReply?: string;
  likes: number;
}

export default function GoogleReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const stats = {
    rating: 4.9,
    totalReviews: 1280,
    breakdown: [
      { stars: 5, percentage: 95 },
      { stars: 4, percentage: 4 },
      { stars: 3, percentage: 1 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 },
    ]
  };

  const reviews: GoogleReviewItem[] = [
    {
      id: 'g-rev-1',
      author: 'คุณแพรวพรรณ รัตนวิริยะ',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      isLocalGuide: true,
      localGuideLevel: 6,
      reviewCount: 42,
      rating: 5,
      timeAgo: '2 สัปดาห์ที่แล้ว',
      serviceTag: 'จัดฟันใส Invisalign Comprehensive',
      comment: 'ประทับใจตั้งแต่ก้าวแรกที่เข้ามาเลยค่ะ คลินิกสวยและสะอาดมากเหมือนโรงแรม 5 ดาว คุณหมอเอกชัยอธิบายขั้นตอนการจัดฟันใสละเอียดมาก ใช้เครื่องสแกนฟัน 3D จำลองรอยยิ้มให้ดูเลยว่าฟันจะเคลื่อนยังไง ตอนนี้จัดเสร็จแล้ว ยิ้มมั่นใจขึ้นเยอะมาก แนะนำเพื่อนมาทำที่นี่หลายคนแล้วค่ะ',
      photos: [
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80',
      ],
      ownerReply: 'ขอบพระคุณคุณแพรวพรรณมากๆ นะคะ ทาง Smile Clinic ยินดีและมีความสุขมากๆ ที่ได้ร่วมออกแบบรอยยิ้มที่มั่นใจให้คุณแพรวพรรณค่ะ อย่าลืมใส่รีเทนเนอร์สม่ำเสมอนะคะ ✨',
      likes: 18
    },
    {
      id: 'g-rev-2',
      author: 'K. Tanaphat Sombatwong (Local Guide)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      isLocalGuide: true,
      localGuideLevel: 7,
      reviewCount: 118,
      rating: 5,
      timeAgo: '1 เดือนที่แล้ว',
      serviceTag: 'รากฟันเทียมดิจิทัล Straumann',
      comment: 'ตอนแรกกลัวการทำรากฟันเทียมมากเพราะคิดว่าจะเจ็บ แต่ที่ Smile Clinic ใช้ระบบ 3D Surgical Guide ผ่าตัดแผลเล็กมาก คุณหมอมือเบาจนแทบไม่รู้สึกเจ็บเลยครับ วันรุ่งขึ้นไปทำงานต่อได้เลย ห้องตรวจปลอดเชื้อได้มาตรฐานสากลจริง จอดรถสะดวก BTS พร้อมพงษ์เดิน 3 นาทีถึง',
      likes: 24
    },
    {
      id: 'g-rev-3',
      author: 'คุณชนิกานต์ วงศ์สว่าง',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      isLocalGuide: false,
      reviewCount: 9,
      rating: 5,
      timeAgo: '3 สัปดาห์ที่แล้ว',
      serviceTag: 'เซรามิกวีเนียร์ 8 ซี่บน',
      comment: 'ทำวีเนียร์กับคุณหมอวริศรามาค่ะ ฟันขาวสวยเป็นธรรมชาติมาก ไม่ดูหลอกตา มีระบบ Digital Smile Design ให้ลองใส่ Mock-up ดูก่อนตัดสินใจด้วย พี่ๆ พนักงานน่ารักทุกคน คอยเตือนนัดหมายตลอด ให้ 10/10 เลยค่ะ',
      photos: [
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80'
      ],
      ownerReply: 'ขอบคุณคุณชนิกานต์มากค่ะ ทางคลินิกและคุณหมอวริศราดีใจมากที่รอยยิ้มใหม่ช่วยเพิ่มความมั่นใจในการทำงานนะคะ ยินดีต้อนรับเสมอนะคะ 💖',
      likes: 15
    },
    {
      id: 'g-rev-4',
      author: 'คุณณัฐพงษ์ เกียรติศิริ',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      isLocalGuide: true,
      localGuideLevel: 5,
      reviewCount: 29,
      rating: 5,
      timeAgo: 'เมื่อวานนี้',
      serviceTag: 'ตรวจฟัน ขูดหินปูน & Airflow',
      comment: 'มาขูดหินปูนและทำ Airflow ลบคราบกาแฟ คุณหมอมือเบาสุดๆ ไม่เสียวฟันเลย ใช้สิทธิ์ประกันสังคมได้เต็มจำนวนไม่ต้องสำรองจ่าย คลินิกตรงต่อเวลา ไม่ต้องนั่งรอนาน มีเครื่องดื่มรับรองดีมากครับ',
      likes: 8
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'ทั้งหมด (1,280+)' },
    { id: 'Invisalign', label: 'จัดฟันใส Invisalign' },
    { id: 'รากฟันเทียม', label: 'รากฟันเทียมดิจิทัล' },
    { id: 'วีเนียร์', label: 'เซรามิกวีเนียร์' },
    { id: 'ขูดหินปูน', label: 'ขูดหินปูน & ตรวจฟัน' },
  ];

  const filteredReviews = activeFilter === 'all'
    ? reviews
    : reviews.filter((r) => r.serviceTag.includes(activeFilter));

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor (Desktop only to prevent mobile GPU lag) */}
      <div className="hidden md:block absolute top-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hidden md:block absolute bottom-10 left-10 w-96 h-96 bg-brand-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0f172a] text-brand-300 border border-brand-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>VERIFIED GOOGLE MAPS REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-normal leading-[1.35] sm:leading-[1.35]">
            <div>รีวิวจากคนไข้จริงบน Google Maps</div>
            <div className="mt-2.5 bg-gradient-to-r from-[#b8862d] via-[#d4a759] to-[#9c6e20] bg-clip-text text-transparent py-1">
              คะแนนความพึงพอใจ 4.9 ดาว จากกว่า 1,280+ รีวิว
            </div>
          </h2>

          <p className="mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            สัมผัสประสบการณ์การรักษาจริงจากคนไข้ที่ไว้วางใจให้ Smile Clinic ดูแลสุขภาพช่องปากและรอยยิ้ม
          </p>
        </div>

        {/* Google Maps Overall Rating Card */}
        <div className="bg-[#faf8f5] rounded-3xl p-5 sm:p-10 border border-brand-200/70 shadow-lg mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Google Logo & Score */}
            <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 mb-1.5">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span className="text-xs sm:text-sm font-bold text-slate-700">Google Maps Rating</span>
              </div>

              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-5xl font-black text-slate-900 font-mono">
                  {stats.rating}
                </span>
                <span className="text-sm text-slate-400 font-medium">/ 5.0</span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                ))}
              </div>

              <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                จากทั้งหมด <strong>{stats.totalReviews.toLocaleString()} รีวิว</strong> บน Google
              </div>
            </div>

            {/* Rating Bars Breakdown */}
            <div className="lg:col-span-5 space-y-1.5 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-4 lg:pt-0 lg:pl-8">
              {stats.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-2.5 text-[11px] sm:text-xs">
                  <span className="w-8 text-slate-600 font-semibold flex items-center gap-0.5">
                    {item.stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-slate-400 font-mono text-[10px]">{item.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-center">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-brand-300 hover:text-white border border-brand-500/40 font-bold py-2.5 sm:py-3 px-4 rounded-xl text-xs shadow-md transition-all text-center"
              >
                <span>ดูรีวิวทั้งหมดบน Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold py-2.5 sm:py-3 px-4 rounded-xl text-xs transition-all text-center shadow-sm"
              >
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>เขียนรีวิวให้คลินิก</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Categories (Swipeable on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {filterCategories.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                activeFilter === f.id
                  ? 'bg-[#0f172a] text-brand-300 border border-brand-500/40 shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 text-slate-400 text-[11px] mb-3 font-semibold">
          <ArrowLeftRight className="w-3.5 h-3.5 text-brand-500" />
          <span>เลื่อนปัดซ้าย-ขวาเพื่ออ่านรีวิว (Swipe Reviews)</span>
        </div>

        {/* Reviews Mobile Horizontal Touch Carousel & Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="w-[86vw] sm:w-[380px] md:w-auto flex-shrink-0 snap-center bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              {/* Reviewer Header */}
              <div>
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      width={44}
                      height={44}
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-slate-200 shadow-sm flex-shrink-0"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                        {rev.author}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                        {rev.isLocalGuide && (
                          <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.2 rounded font-mono">
                            Local Guide • Level {rev.localGuideLevel}
                          </span>
                        )}
                        <span>{rev.reviewCount} รีวิว</span>
                      </div>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>

                {/* Stars & Time */}
                <div className="flex items-center gap-2 mt-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">{rev.timeAgo}</span>
                </div>

                {/* Treatment Tag */}
                <div className="mt-2">
                  <span className="inline-block bg-brand-50 text-brand-800 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-brand-200">
                    หัตถการ: {rev.serviceTag}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-4 sm:line-clamp-none">
                  "{rev.comment}"
                </p>

                {/* Attached Photos */}
                {rev.photos && rev.photos.length > 0 && (
                  <div className="flex gap-2 mt-2.5 overflow-hidden rounded-xl">
                    {rev.photos.map((p, pIdx) => (
                      <img
                        key={pIdx}
                        src={p}
                        alt="Patient review attachment"
                        loading="lazy"
                        decoding="async"
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-slate-200 hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Owner Response Box */}
              {rev.ownerReply && (
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1 text-[10px] sm:text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600" />
                    <span>การตอบกลับจาก Smile Clinic</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed">
                    {rev.ownerReply}
                  </p>
                </div>
              )}

              {/* Like / Helpful Counter */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 hover:text-slate-700 transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                  <span>เป็นประโยชน์ ({rev.likes})</span>
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Google User</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
