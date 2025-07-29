"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact me" },
  { href: "/admin", label: "" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen((prev) => !prev);

  const linkClass = (path: string) =>
    pathname === path
      ? "text-red-400"
      : "text-gray-300 hover:text-white transition-colors";

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900 border-b border-gray-800 px-6 py-4 text-white flex justify-between items-center">
      <Link
        href="/"
        className="bg-gradient-to-r from-[#db2777] via-[#ef4444] to-[#f97316] font-bold text-xl bg-clip-text text-transparent"
      >
        Gaurav's Portfolio
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 text-sm font-bold font-manrope [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={linkClass(href)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <button
        onClick={toggleNavbar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-2xl cursor-pointer z-50"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center gap-10 text-lg z-40 text-gray-300 md:hidden font-manrope [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.8)]"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={linkClass(href)}
                  onClick={toggleNavbar}
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
