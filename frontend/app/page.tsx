
'use client'

import AboutSection from '@/app/Components/AboutSection';
import ContactForm from '@/app/Components/ContactForm';
import HeroSection from '@/app/Components/Herosection';
import PortfolioSection from '@/app/Components/PortfolioSection';

import ServicesSection from '@/app/Components/ServicesSection';
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';
import SplashCursor from '@/components/SplashCursor';



export default function Home() {
  const router = useRouter();


  return (


    <div className='-gradient-to-bl from-gray-900 to-gray-800 text-white min-h-screen p-4 '>

      <SplashCursor />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactForm />

      <section>

      </section>
    </div>


  );
}
