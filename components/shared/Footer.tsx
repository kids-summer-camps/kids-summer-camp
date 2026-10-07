"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const programLinks = [
  { label: "Prelude I ™", href: "/programs/prelude-i" },
  { label: "Prelude II™", href: "/programs/prelude-ii" },
  { label: "Launchpad™", href: "/programs/first-flight" },
  { label: "Idealforge™", href: "/programs/the-blueprint" },
  { label: "Robox™", href: "/programs/robotics-maker" },
  { label: "Apex Athletics™", href: "/programs/power-play" },
  { label: "Zero™", href: "/programs/cosmic-curiosity" },
  { label: "Mechanica™", href: "/programs/engineering-maker" },
  { label: "Esport™", href: "/programs/esports-gaming" },
];

const socialLinks = [
  { name: "Facebook", src: "/images/icons/footer-facebook.svg", href: "#" },
  { name: "Instagram", src: "/images/icons/footer-instagram.svg", href: "#" },
  { name: "YouTube", src: "/images/icons/footer-youtube.svg", href: "#" },
  { name: "LinkedIn", src: "/images/icons/footer-linkedin.svg", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#1493E8] w-full">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Main Footer Content - 4 Column Layout */}
        <div className="pt-14 sm:pt-20 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Tagline */}
          <FadeIn direction="up" delay={0}>
            <div className="flex flex-col items-start gap-9">
              <div className="w-[110px] h-[110px] relative">
                <Image
                  src="/images/footer-logo.svg"
                  alt="Kid Explorer Camps"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-sans font-bold text-white leading-[44px]">
                <span className="text-[32px] sm:text-[40px]">Curiosity™</span>{" "}
                <span className="text-[28px] sm:text-[36px]">Launches </span>
                <span className="text-[28px] sm:text-[36px] text-[#B4FFFA]">here</span>
              </p>
            </div>
          </FadeIn>

          {/* Column 2: Programs */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-col items-start">
              <h3 className="font-sans font-semibold text-[#B4FFFA] text-xl sm:text-2xl leading-[22px] mb-3">
                PROGRAMS
              </h3>
              <StaggerContainer staggerDelay={0.03} className="flex flex-col gap-2">
                {programLinks.map((link) => (
                  <StaggerItem key={link.label}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="text-white font-sans font-semibold text-sm sm:text-base leading-[22px] hover:text-[#B4FFFA] transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Column 3: Contact Us */}
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col items-start">
              <h3 className="font-sans font-semibold text-[#B4FFFA] text-xl sm:text-2xl leading-[22px] mb-6">
                CONTACT US
              </h3>
              <div className="flex flex-col gap-5">
                <motion.a
                  href="mailto:Customercare@kidexplorercamp.com"
                  className="flex items-center gap-1.5 text-white font-sans text-base sm:text-lg leading-5 hover:text-[#B4FFFA] transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-5 h-5 relative shrink-0">
                    <Image
                      src="/images/icons/footer-email.svg"
                      alt="Email"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Customercare@kidexplorercamp.com</span>
                </motion.a>

                <motion.a
                  href="tel:+18005532070"
                  className="flex items-center gap-1.5 text-white font-sans text-base sm:text-lg leading-5 hover:text-[#B4FFFA] transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-5 h-5 relative shrink-0">
                    <Image
                      src="/images/icons/footer-phone.svg"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>(800) 553-2070</span>
                </motion.a>

                <div className="flex items-start gap-1.5 text-white font-sans text-base sm:text-lg leading-[30px]">
                  <div className="w-5 h-5 relative shrink-0 mt-1.5">
                    <Image
                      src="/images/icons/footer-mark.svg"
                      alt="Location"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p>875 N Michigan Ave Fl 31</p>
                    <p>Chicago, IL 60611</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Column 4: Newsletter & Social */}
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col items-start gap-7">
              <div>
                <h3 className="font-sans font-bold text-white text-xl sm:text-2xl leading-[22px] mb-1">
                  Be the first to know!
                </h3>
                <p className="font-sans font-normal text-white text-sm sm:text-base leading-[22px]">
                  Join Our insider list and never miss a thing
                </p>
              </div>
              <motion.a
                href="#"
                className="inline-flex items-center justify-center border-2 border-white text-white font-sans font-bold text-sm sm:text-base leading-[22px] px-6 py-2.5 rounded-[10px] hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                JOIN NOW
              </motion.a>
              <StaggerContainer staggerDelay={0.05} className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <StaggerItem key={social.name}>
                    <motion.div
                      whileHover={{ scale: 1.2, y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={social.href}
                        aria-label={social.name}
                        className="w-[30px] h-[30px] relative block"
                      >
                        <Image
                          src={social.src}
                          alt={social.name}
                          fill
                          className="object-contain"
                        />
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>

        {/* Copyright Bar */}
        <FadeIn direction="up" delay={0.4}>
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white border-t border-white/10">
            <p className="font-sans font-semibold text-[10px] sm:text-xs leading-[30px]">
              © 2026 Kid Explorer Club Corporation, 875 N Michigan Ave Fl 31, Chicago, IL. 60611
            </p>
            <p className="font-sans text-[10px] sm:text-xs leading-[30px] text-right">
              All Rights Reserved |{" "}
              <Link href="#" className="text-[#0FD3C6] underline hover:no-underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
