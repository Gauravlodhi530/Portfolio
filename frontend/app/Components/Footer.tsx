'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4">
          <h1 className="text-red-500 text-2xl font-bold mb-2">Gaurav Kumar</h1> {/* Added content to h1 */}
        </div>
        <nav className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-base">
          {/* Use Link for internal navigation */}
          <Link href="/home" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About me
          </Link>
          <Link href="/portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact me
          </Link>
        </nav>
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Visit my Facebook profile"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Visit my Twitter profile"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Visit my Instagram profile"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Visit my Behance profile"
          >
            <FaBehance className="w-5 h-5" />
          </a>
        </div>
        <div className="mb-6 text-sm">
          <p>📧 Gauravlodhi530@gmail.com</p>
          <p>📞 +91 6397973513</p>
        </div>
        <div className="border-t border-gray-700 pt-4 text-xs">
          <p>Designed by @Gaurav Kumar | UI/UX Designer &copy; {currentYear}</p> {/* Added currentYear */}
        </div>
      </div>
    </footer>
  );
}