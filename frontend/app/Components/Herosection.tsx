"use client"
import { FaInstagram, FaGithub, FaLinkedin, FaDiscord, FaDownload } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'
import RotatingText from "@/components/RotatingText";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="flex flex-col md:flex-row items-center justify-around min-h-screen py-20 gap-12 px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/50 to-gray-900/50 -z-10"></div>

      {/* Left Content */}
      <div className="space-y-4 max-w-2xl animate-fade-in">
        <div className="space-y-4">
          <h5 className="text-gray-300 text-lg font-medium tracking-wide animate-slide-up">
            Hi, I'm
          </h5>
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#f77c0a] via-[#eb4949] to-[#f97316] bg-clip-text text-transparent animate-slide-up animation-delay-200">
            Gaurav Kumar
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up animation-delay-400">
I am a <RotatingText
              texts={["Developer", "Designer", "Creator", "Tech Enthusiast", "Problem Solver"]}

              mainClassName="px-2 sm:px-2 md:px-3  overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg text-orange-500"
              // staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.029}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />




            {/* <span className="text-orange-500">Web Developer</span> | 
            <span className="text-gray-300"> Tech Enthusiast</span> | 
            <span className="text-gray-300"> UI/UX Designer</span> */}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed animate-slide-up animation-delay-600">
            Passionate about creating beautiful, functional, and user-centric digital experiences.
            Transforming ideas into reality through code and creativity.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl animate-slide-up animation-delay-800">
          <a
            className="hover:scale-125 hover:text-orange-500 transition-all duration-300 p-2 rounded-full hover:bg-gray-800/50"
            href="https://github.com/Gauravlodhi530"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 hover:text-orange-500 transition-all duration-300 p-2 rounded-full hover:bg-gray-800/50"
            href="https://www.linkedin.com/in/gaurav-lodhi9090/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-125 hover:text-orange-500 transition-all duration-300 p-2 rounded-full hover:bg-gray-800/50"
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            className="hover:scale-125 hover:text-orange-500 transition-all duration-300 p-2 rounded-full hover:bg-gray-800/50"
            href="https://www.instagram.com/_alone__boy__530/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-1000">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#db2777] via-[#ef4444] to-[#f97316] font-bold px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
          >
            Hire Me
          </Link>

          <Link
            href="/Gaurav_Kumar_Resume.pdf"
            className="flex items-center justify-center gap-3 text-white px-8 py-4 border-2 border-gray-600 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:border-orange-500"
            download
          >
            <FaDownload />
            Download Resume
          </Link>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-6 mt-8 animate-slide-up animation-delay-1200">
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
            <strong className="text-orange-500 text-2xl block">5+</strong>
            <p className="text-gray-400 text-sm">
              Projects Completed (Web & AI-Based)</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
            <strong className="text-orange-500 text-2xl block">5+</strong>
            <p className="text-gray-400 text-sm">
              Hackathons & Internships Participated</p>
          </div>
          <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
            <strong className="text-orange-500 text-2xl block">4+</strong>
            <p className="text-gray-400 text-sm">Tech Events & Hackathons Organized</p>
          </div>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="relative animate-fade-in animation-delay-400">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

          {/* Profile image */}
          <Image
            src="/profile_photo.jpg"
            alt="Gaurav Kumar - Web Developer"
            width={384}
            height={384}
            priority
            className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-gray-700 hover:border-orange-500 transition-all duration-300 shadow-2xl"
          />

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
            Available
          </div>
        </div>
      </div>
    </section>
  );
}