'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaMailBulk, FaPhone, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
  {
    href: "https://github.com/Gauravlodhi530",
    icon: <FaGithub />,
    label: "Visit my GitHub profile",
  },
  {
    href: "https://www.linkedin.com/in/gaurav-lodhi9090/",
    icon: <FaLinkedin />,
    label: "Visit my LinkedIn profile",
  },
  {
    href: "https://www.instagram.com/_alone__boy__530/",
    icon: <FaInstagram />,
    label: "Visit my Instagram profile",
  },
  {
    href: "https://x.com/_Gaurav_Lodhi_",
    icon: <FaTwitter />,
    label: "Visit my Twitter profile",
  },
  {
    href: "https://discord.com",
    icon: <FaDiscord />,
    label: "Join my Discord server",
  },
];

  return (
    <footer className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                Gaurav Kumar
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Passionate software engineer and UI/UX designer creating innovative digital experiences
                that make a difference.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank" // open in new tab
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300"
                  aria-label={link.label}
                >
                  <span className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                    {link.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                About Me
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Services
              </Link>
              <Link href="/portfolio" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <nav className="space-y-3">
              <a href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Web Development
              </a>
              <a href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                UI/UX Design
              </a>
              <a href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Mobile Development
              </a>
              <a href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                SEO Optimization
              </a>
              <a href="/services" className="block text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Digital Marketing
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMailBulk className="text-orange-400" />
                <a
                  href="mailto:Gauravlodhi530@gmail.com"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  Gauravlodhi530@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-orange-400" />
                <a
                  href="tel:+916397973513"
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  +91 6397973513
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-orange-400" />
                <span className="text-gray-400">Remote / Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>
                © {currentYear} Gaurav Kumar. All rights reserved. |
                <span className="text-orange-400"> UI/UX Designer & Web Developer</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}