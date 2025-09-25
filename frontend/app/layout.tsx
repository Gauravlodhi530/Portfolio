// This is a Server Component
// 'use client';
import Navbar from '@/app/Components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import FooterControl from '@/app/Components/FooterControl';
import SplashCursor from '@/components/SplashCursor';

export const metadata: Metadata = {
  title: 'Portfolio | Gaurav Kumar',
  description: 'A portfolio showcasing my work and skills as a web developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-gradient-to-bl from-gray-900 to-gray-800 text-white overflow-x-hidden">
 <SplashCursor />
        <Navbar />
        <main>{children}</main>
        <FooterControl />
      </body>
    </html>
  );
}
