import type { Metadata } from 'next';
import { Prompt, Kanit } from 'next/font/google';
import './globals.css';

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-prompt',
});

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-kanit',
});

export const metadata: Metadata = {
  title: 'Smile Clinic | คลินิกทันตกรรมดิจิทัลระดับพรีเมียม',
  description: 'คลินิกทันตกรรมระดับพรีเมียม ให้บริการจัดฟันใส Invisalign วีเนียร์ รากเทียมดิจิทัล พร้อมระบบจองคิวนัดหมายออนไลน์และผ่อน 0%',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" data-theme="navy-gold" className={`${prompt.variable} ${kanit.variable}`}>
      <body className="font-sans antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
