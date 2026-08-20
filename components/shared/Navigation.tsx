"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const programDropdown = [
  { label: "Afterschool", href: "/afterschool", sub: "Tier 0+ · The Mission Starts Here" },
  { label: "Summer Camps", href: "/summer-camps", sub: "Where learning comes alive" },
  { label: "Winter Camps", href: "/winter-camps", sub: "Stay active during the break" },
  { label: "Spring Camps", href: "/spring-camps", sub: "A week of exploration" },
  { label: "College Readiness", href: "/college-readiness", sub: "Mission: Future · Grades 8–12" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Core Labs", href: "/core-labs" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      {/* Responsive padding: percentage-based on 2xl+ screens */}
      <nav className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Same as footer but smaller */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <div className="w-[120px] h-[45px] sm:w-[160px] sm:h-[60px] md:w-[190px] md:h-[71px] relative">
                <Image
                  src="/images/logo.png"
                  alt="Kid Explorer Clubs"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Programs Dropdown */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                className="font-sans font-medium text-[#01325D] text-base hover:text-[#1493E8] transition-colors relative group flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={programsOpen}
                onClick={() => setProgramsOpen((o) => !o)}
              >
                Programs
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1493E8] transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {programsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute left-0 top-full pt-4"
                  >
                    <div className="w-[340px] bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                      {programDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setProgramsOpen(false)}
                          className="block px-4 py-3 rounded-xl hover:bg-[#1493E8]/5 transition-colors group"
                        >
                          <span className="block font-sans font-semibold text-[#01325D] text-sm group-hover:text-[#1493E8] transition-colors">
                            {item.label}
                          </span>
                          <span className="block font-mono text-[11px] text-[#666] mt-0.5">
                            {item.sub}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="font-sans font-medium text-[#01325D] text-base hover:text-[#1493E8] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1493E8] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/enroll"
                className="font-sans font-bold text-white text-sm bg-[#0FD3C6] px-5 py-2.5 rounded-lg hover:bg-[#0DC4B8] hover:shadow-lg transition-all duration-300"
              >
                Enroll Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#01325D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <motion.div
                className="py-4 flex flex-col gap-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="font-sans font-medium text-[#01325D] text-base hover:text-[#1493E8] transition-colors py-2 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <p className="font-sans font-bold text-[#01325D] text-sm uppercase tracking-wide mb-1">
                    Programs
                  </p>
                  {programDropdown.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="font-sans font-medium text-[#01325D] text-base hover:text-[#1493E8] transition-colors py-2 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/enroll"
                    className="font-sans font-bold text-white text-sm bg-[#0FD3C6] px-5 py-3 rounded-lg hover:bg-[#0DC4B8] transition-colors text-center mt-2 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Enroll Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
