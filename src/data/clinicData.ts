export interface Service {
  id: string;
  category: 'ortho' | 'cosmetic' | 'surgery' | 'general';
  titleTh: string;
  titleEn: string;
  descriptionTh: string;
  descriptionEn: string;
  priceStart: number;
  unitTh: string;
  unitEn: string;
  badge?: string;
  highlight: string[];
  popular?: boolean;
  image: string;
}

export interface Doctor {
  id: string;
  nameTh: string;
  nameEn: string;
  titleTh: string;
  titleEn: string;
  specialtyTh: string;
  specialtyEn: string;
  education: string[];
  experienceYears: number;
  availableDays: string[];
  image: string;
}

export interface BeforeAfterCase {
  id: string;
  titleTh: string;
  titleEn: string;
  category: string;
  treatmentTh: string;
  treatmentEn: string;
  durationTh: string;
  durationEn: string;
  doctorName: string;
  beforeImage: string;
  afterImage: string;
  descriptionTh: string;
  descriptionEn: string;
}

export interface Promotion {
  id: string;
  titleTh: string;
  titleEn: string;
  discount: string;
  periodTh: string;
  periodEn: string;
  priceSpecial: number;
  priceRegular: number;
  image: string;
  features: string[];
}

export interface Review {
  id: string;
  author: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export const CLINIC_INFO = {
  nameTh: "เดอะ สไมล์ แกลเลอรี เดนทัล คลินิก",
  nameEn: "The Smile Gallery Dental Clinic",
  taglineTh: "ออกแบบรอยยิ้มอย่างมั่นใจ ด้วยทันตกรรมดิจิทัลระดับสากล",
  taglineEn: "Crafting Confident Smiles with Advanced Digital Dentistry",
  phone: "02-123-4567",
  hotline: "089-999-8888",
  lineOA: "@thesmilegallery",
  email: "contact@thesmilegallery.demo",
  hoursTh: "เปิดบริการทุกวัน 10:00 - 20:00 น.",
  hoursEn: "Open Daily 10:00 AM - 8:00 PM",
  addressTh: "999/8 อาคารสไมล์ทาวเวอร์ ชั้น 3 ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110 (BTS พร้อมพงษ์ ทางออก 2)",
  addressEn: "999/8 Smile Tower 3rd Fl., Sukhumvit Rd, Khlong Toei Nuea, Watthana, Bangkok 10110 (BTS Phrom Phong Exit 2)",
  branches: [
    { nameTh: "สาขาพร้อมพงษ์ (สำนักงานใหญ่)", nameEn: "Phrom Phong (Main)", phone: "02-123-4567" },
    { nameTh: "สาขาสยามสแควร์", nameEn: "Siam Square Branch", phone: "02-234-5678" },
    { nameTh: "สาขาเซ็นทรัล ลาดพร้าว", nameEn: "Central Ladprao Branch", phone: "02-345-6789" },
  ],
  stats: [
    { number: "15,000+", labelTh: "เคสที่ให้ความไว้วางใจ", labelEn: "Happy Smiles Transformed" },
    { number: "18+", labelTh: "ทันตแพทย์เฉพาะทาง", labelEn: "Specialist Dentists" },
    { number: "12", labelTh: "ปีแห่งความเป็นเลิศ", labelEn: "Years of Excellence" },
    { number: "99.4%", labelTh: "ความพึงพอใจของคนไข้", labelEn: "Patient Satisfaction" },
  ]
};

export const SERVICES_DATA: Service[] = [
  {
    id: "invisalign",
    category: "ortho",
    titleTh: "จัดฟันใส Invisalign & Damon",
    titleEn: "Invisalign & Damon Orthodontics",
    descriptionTh: "เทคโนโลยีสแกนฟัน 3D iTero วางแผนการเคลื่อนฟันล่วงหน้า จัดฟันไร้เหล็ก ไม่เจ็บ และแทบมองไม่เห็น",
    descriptionEn: "Advanced 3D iTero digital smile design with virtually invisible, comfortable clear aligners.",
    priceStart: 49000,
    unitTh: "เริ่มต้น (แบ่งชำระ 0%)",
    unitEn: "Starts from (0% Installment)",
    badge: "Most Popular",
    popular: true,
    highlight: ["สแกนฟัน 3D ฟรี", "เห็นผลลัพธ์ล่วงหน้าก่อนทำ", "ผ่อน 0% นาน 10 เดือน"],
    image: "/images/service_invisalign.jpg"
  },
  {
    id: "veneer",
    category: "cosmetic",
    titleTh: "วีเนียร์เซรามิกพรีเมียม (Ceramic Veneers)",
    titleEn: "Premium Ceramic Veneers",
    descriptionTh: "เปลี่ยนรูปฟัน สีฟัน และปิดช่องว่างอย่างธรรมชาติ ด้วยเซรามิกคุณภาพสูง บางเฉียบและทนทาน",
    descriptionEn: "Custom-crafted ultra-thin porcelain veneers to correct tooth shape, gaps, and severe discoloration.",
    priceStart: 9500,
    unitTh: "ซี่ละ (รับประกัน 5 ปี)",
    unitEn: "per tooth (5-Yr Warranty)",
    badge: "Celebrity Choice",
    popular: true,
    highlight: ["ออกแบบรอยยิ้มเฉพาะบุคคล DSD", "เฉดสีขาวเป็นธรรมชาติ", "ไม่ติดคราบชา กาแฟ"],
    image: "/images/service_veneers.jpg"
  },
  {
    id: "implant",
    category: "surgery",
    titleTh: "รากฟันเทียมดิจิทัล (Digital Dental Implant)",
    titleEn: "Digital Dental Implants",
    descriptionTh: "ทดแทนฟันแท้ที่สูญเสียด้วยรากเทียมไทเทเนียมมาตรฐานสากล นำทางด้วยระบบ 3D Surgical Guide แม่นยำ ไร้กังวล",
    descriptionEn: "Computer-guided titanium implants designed to look, feel, and function just like natural teeth.",
    priceStart: 29000,
    unitTh: "เริ่มต้นต่อซี่",
    unitEn: "per tooth start",
    highlight: ["ผ่าตัดแผลเล็ก ฟื้นตัวไว", "วัสดุนำเข้าจากสวิตเซอร์แลนด์/เยอรมนี", "ดูแลโดยศัลยแพทย์ช่องปาก"],
    image: "/images/service_implant.jpg"
  },
  {
    id: "whitening",
    category: "cosmetic",
    titleTh: "ฟอกสีฟัน Zoom! & Cool Light",
    titleEn: "Zoom! & Cool Light Whitening",
    descriptionTh: "ฟันขาวสว่างขึ้น 4-8 ระดับในเวลาเพียง 45 นาที ปลอดภัย ไม่ทำลายผิวเคลือบฟัน พร้อมเจลลดการเสียวฟัน",
    descriptionEn: "Brighten your smile 4-8 shades in just 45 minutes with clinically proven Zoom! light technology.",
    priceStart: 4500,
    unitTh: "คอร์ส",
    unitEn: "course",
    badge: "Hot Deal",
    highlight: ["เห็นผลทันทีหลังทำ", "เทคโนโลยีแสงเย็น Zoom! USA", "ฟรี! ขูดหินปูนและขัดฟัน"],
    image: "/images/service_whitening.jpg"
  },
  {
    id: "general",
    category: "general",
    titleTh: "ตรวจฟัน ขูดหินปูน & Airflow ขัดคราบชา/กาแฟ",
    titleEn: "Dental Scaling & Airflow Polish",
    descriptionTh: "ขจัดหินปูนและคราบฝังแน่นด้วยระบบสเปรย์ละอองน้ำและผงขัดชนิดพิเศษ นุ่มนวล ไม่เจ็บ ไม่เสียวฟัน",
    descriptionEn: "Deep gentle cleaning and stain removal with state-of-the-art Swiss Airflow prophylaxis.",
    priceStart: 1200,
    unitTh: "ครั้ง",
    unitEn: "session",
    highlight: ["ใช้สิทธิ์ประกันสังคมไม่ต้องสำรองจ่าย", "ขจัดคราบฝังลึกได้หมดจด", "ตรวจสุขภาพฟันและเอกซเรย์ฟรี"],
    image: "/images/service_scaling.jpg"
  },
  {
    id: "root-canal",
    category: "surgery",
    titleTh: "รักษารากฟันด้วยกล้องไมโครสโคป (Endodontics)",
    titleEn: "Microscopic Root Canal Therapy",
    descriptionTh: "รักษาฟันที่ติดเชื้อให้คงอยู่ได้โดยไม่ต้องถอน ด้วยเทคโนโลยีกล้อง Microscope กำลังขยายสูง เพิ่มความแม่นยำสูงสุด",
    descriptionEn: "Save your natural tooth with high-precision surgical dental operating microscope.",
    priceStart: 6000,
    unitTh: "ซี่",
    unitEn: "tooth",
    highlight: ["รักษาโดยทันตแพทย์เฉพาะทางรักษารากฟัน", "เทคนิคระงับความเจ็บปวดขั้นสูง", "รักษาหายได้ใน 1-2 ครั้ง"],
    image: "/images/service_rootcanal.jpg"
  }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-ekkachai",
    nameTh: "ทพ. ดร. เอกชัย นันทวัฒนากุล",
    nameEn: "Dr. Ekkachai Nanthawatnakul, D.D.S., Ph.D.",
    titleTh: "ทันตแพทย์เฉพาะทางจัดฟัน & Smile Design Specialist",
    titleEn: "Orthodontist & Digital Smile Designer",
    specialtyTh: "จัดฟันใส Invisalign Diamond Provider, วีเนียร์ดิจิทัล",
    specialtyEn: "Invisalign Diamond Provider, Digital Aesthetic Dentistry",
    education: [
      "ทันตแพทยศาสตรบัณฑิต (เกียรตินิยมอันดับ 1) จุฬาลงกรณ์มหาวิทยาลัย",
      "ปริญญาเอก สาขาทันตกรรมจัดฟัน มหาวิทยาลัยโตเกียว ประเทศญี่ปุ่น",
      "Certified Invisalign Diamond Apex Provider"
    ],
    experienceYears: 16,
    availableDays: ["จันทร์", "พุธ", "ศุกร์", "เสาร์"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dr-warisa",
    nameTh: "ทพญ. วริศรา กิตติโสภณ",
    nameEn: "Dr. Warisa Kittisophon, D.D.S., M.Sc.",
    titleTh: "ทันตแพทย์เฉพาะทางทันตกรรมเพื่อความสวยงาม & รากเทียม",
    titleEn: "Cosmetic Dentist & Implantologist",
    specialtyTh: "เซรามิกวีเนียร์, ฟอกสีฟัน, รากฟันเทียมระบบ 3D Guide",
    specialtyEn: "Porcelain Veneers, Full Mouth Rehabilitation, 3D Implants",
    education: [
      "ทันตแพทยศาสตรบัณฑิต มหาวิทยาลัยมหิดล",
      "Master of Science in Aesthetic Dentistry, Frankfurt University (เยอรมนี)",
      "Diplomate, International Congress of Oral Implantologists (ICOI)"
    ],
    experienceYears: 12,
    availableDays: ["อังคาร", "พฤหัสบดี", "เสาร์", "อาทิตย์"],
    image: "https://images.unsplash.com/photo-1594824813599-4702951f2e1a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dr-thanat",
    nameTh: "ทพ. ธนัตถ์ ปรีชาเวช",
    nameEn: "Dr. Thanat Preechawetch, D.D.S.",
    titleTh: "ทันตแพทย์เฉพาะทางศัลยศาสตร์ช่องปากและแม็กซิลโลเฟเชียล",
    titleEn: "Oral & Maxillofacial Surgeon",
    specialtyTh: "ผ่าฟันคุดยากไร้บวม, ปลูกกระดูก, ศัลยกรรมเหงือกตกแต่ง",
    specialtyEn: "Painless Wisdom Tooth Extraction, Bone Grafting, Gum Aesthetics",
    education: [
      "ทันตแพทยศาสตรบัณฑิต มหาวิทยาลัยเชียงใหม่",
      "วุฒิบัตรแสดงความรู้ความชำนาญสาขาศัลยศาสตร์ช่องปาก ทันตแพทยสภา",
      "Fellowship in Oral Surgery, Bern University Hospital (สวิตเซอร์แลนด์)"
    ],
    experienceYears: 14,
    availableDays: ["จันทร์", "พฤหัสบดี", "อาทิตย์"],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    titleTh: "เคสจัดฟันใส Invisalign & แต่งรูปฟัน",
    titleEn: "Invisalign & Tooth Contouring Case",
    category: "จัดฟันใส (Orthodontics)",
    treatmentTh: "จัดฟันใส Invisalign Comprehensive + ปรับแนวฟันสบ",
    treatmentEn: "Invisalign Comprehensive + Bite Correction",
    durationTh: "ระยะเวลา 11 เดือน",
    durationEn: "11 Months Duration",
    doctorName: "ทพ. ดร. เอกชัย นันทวัฒนากุล",
    beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
    descriptionTh: "คนไข้มีปัญหาฟันซ้อนเกและฟันยื่น ทำให้สูญเสียความมั่นใจ หลังรักษา 11 เดือน ฟันเรียงสวยสมบูรณ์แบบโดยไม่ต้องถอนฟัน",
    descriptionEn: "Patient had crowded teeth and overbite. Successfully aligned in 11 months with non-extraction Invisalign protocol."
  },
  {
    id: "case-2",
    titleTh: "เคสวีเนียร์เซรามิก 8 ซี่บน ปรับ Smile Line",
    titleEn: "8 Upper Ceramic Veneers Smile Makeover",
    category: "ทันตกรรมความงาม (Aesthetic)",
    treatmentTh: "Ceramic E-max Veneers 8 ซี่บน ออกแบบด้วย Digital Smile Design",
    treatmentEn: "8 E-max Ceramic Veneers with DSD Workflow",
    durationTh: "ระยะเวลา 2 สัปดาห์ (3 ครั้ง)",
    durationEn: "2 Weeks (3 Visits)",
    doctorName: "ทพญ. วริศรา กิตติโสภณ",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80",
    descriptionTh: "แก้ไขปัญหาฟันตกกระ มีรอยบิ่น และสีฟันคล้ำไม่สม่ำเสมอ ออกแบบทรงฟันตามรูปหน้า ขาวสว่างแบบเป็นธรรมชาติ",
    descriptionEn: "Corrected fluorosis, micro-chips, and discoloration with natural translucent shade matching patient facial proportions."
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "คุณแพรวพรรณ พ. (ผู้บริหาร / นักแสดง)",
    service: "จัดฟันใส Invisalign & ฟอกสีฟัน",
    rating: 5,
    comment: "ประทับใจมากค่ะ คุณหมอเอกชัยอธิบายละเอียดมาก วางแผน 3D ให้เห็นผลลัพธ์ก่อนเริ่มทำจริง คลินิกสะอาดระดับพรีเมียม เจ้าหน้าที่บริการดีมากเหมือนโรงแรม 5 ดาว",
    date: "12 ก.ย. 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-2",
    author: "คุณธนาธิป ส. (เจ้าของธุรกิจ)",
    service: "รากฟันเทียมดิจิทัล",
    rating: 5,
    comment: "เดิมกลัวการทำรากฟันเทียมมาก แต่ที่นี่ใช้เทคโนโลยี 3D Guide ผ่าตัดเสร็จเร็วกว่าที่คิด ไม่เจ็บและแทบไม่มีอาการบวมเลย วันรุ่งขึ้นไปทำงานได้ตามปกติ คุ้มค่ามากครับ",
    date: "28 ส.ค. 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-3",
    author: "คุณชนิกานต์ ว. (พนักงานการบิน)",
    service: "เซรามิกวีเนียร์ 6 ซี่",
    rating: 5,
    comment: "ทำวีเนียร์กับคุณหมอวริศราแล้วยิ้มมั่นใจขึ้นเยอะมากค่ะ เพื่อนๆ ทักว่ายิ้มสวยเป็นธรรมชาติ ไม่ดูหลอกตา ที่สำคัญระบบจองคิวและการดูแลหลังทำดีมากๆ ค่ะ",
    date: "15 ส.ค. 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

export const CLINIC_GALLERY = [
  {
    title: "ห้องตรวจทันตกรรม Private VIP Suite",
    desc: "เก้าอี้ทันตกรรมระบบ Ergonomic มาตรฐานยุโรป พร้อมจอแสดงผลภาพ 3D",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "เครื่องสแกนฟัน 3D iTero Element 5D",
    desc: "สแกนภาพช่องปากความละเอียดสูงแบบดิจิทัล ไร้การพิมพ์ปากด้วยปูนแบบเดิม",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "ห้องปลอดเชื้อมาตรฐานโรงพยาบาล (CSSD)",
    desc: "ระบบฆ่าเชื้อเครื่องมือทันตกรรมระดับ Class-B Autoclave ทุกชิ้น 100%",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Lounge รับรองระดับ Exclusive",
    desc: "โซนพักคอยบรรยากาศผ่อนคลาย พร้อมบริการเครื่องดื่มและของว่างพรีเมียม",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  }
];

export const MOCK_ADMIN_SCHEDULE = [
  { time: "10:00 - 11:00", patient: "คุณศิริพร ภ.", service: "Invisalign Check & Aligners Delivery", doctor: "ทพ. ดร. เอกชัย", status: "Completed", room: "VIP 1" },
  { time: "11:30 - 12:30", patient: "คุณณัฐพล ม.", service: "Ceramic Veneers Preparation (4 Units)", doctor: "ทพญ. วริศรา", status: "In Progress", room: "VIP 2" },
  { time: "13:30 - 14:15", patient: "คุณกมลวรรณ ท.", service: "Zoom! Whitening & Polish", doctor: "ทพญ. วริศรา", status: "Confirmed", room: "VIP 2" },
  { time: "14:30 - 15:30", patient: "คุณกิตติศักดิ์ อ.", service: "Digital Implant 3D Guided Surgery", doctor: "ทพ. ธนัตถ์", status: "Confirmed", room: "Surgery Room" },
  { time: "16:00 - 16:45", patient: "คุณพิมพิศา ช.", service: "3D iTero Scan & Smile Simulation", doctor: "ทพ. ดร. เอกชัย", status: "Pending", room: "VIP 1" }
];
