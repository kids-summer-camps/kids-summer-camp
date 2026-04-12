"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Experience", href: "/experience" },
  { label: "Contact us", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", src: "/images/icons/facebook.svg", href: "#" },
  { name: "Twitter", src: "/images/icons/twitter.svg", href: "#" },
  { name: "Instagram", src: "/images/icons/instagram.svg", href: "#" },
  { name: "LinkedIn", src: "/images/icons/linkedin.svg", href: "#" },
  { name: "YouTube", src: "/images/icons/youtube.svg", href: "#" },
];

// Payment methods organized in 2 rows of 5
const paymentRow1 = [
  { name: "Amex", src: "/images/payments/amex.svg", bg: "#1F72CD" },
  { name: "ApplePay", src: "/images/payments/apple-pay.svg", bg: "#FFFFFF" },
  { name: "DinersClub", src: "/images/payments/diners-club.svg", bg: "#FFFFFF" },
  { name: "Discover", src: "/images/payments/discover.svg", bg: "#FFFFFF" },
  { name: "GooglePay", src: "/images/payments/google-pay.svg", bg: "#FFFFFF" },
];

const paymentRow2 = [
  { name: "Mastercard", src: "/images/payments/mastercard.svg", bg: "#FFFFFF" },
  { name: "PayPal", src: "/images/payments/paypal.svg", bg: "#FFFFFF" },
  { name: "ShopPay", src: "/images/payments/shop-pay.svg", bg: "#5A31F4" },
  { name: "Stripe", src: "/images/payments/stripe.svg", bg: "#FFFFFF" },
  { name: "Visa", src: "/images/payments/visa.svg", bg: "#FFFFFF" },
];

function PaymentIcon({ method }: { method: typeof paymentRow1[0] }) {
  return (
    <motion.div
      key={method.name}
      className="w-[57px] h-[39px] relative rounded-[6px] border border-[#D9D9D9] overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: method.bg }}
      title={method.name}
      whileHover={{ scale: 1.1, y: -3 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Image
        src={method.src}
        alt={method.name}
        fill
        className="object-contain p-1"
      />
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1493E8] w-full">
      {/* Responsive padding: percentage-based on 2xl+ screens */}
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
        {/* Main Footer Content - 3 Column Layout on desktop, stacked on mobile with 2-col grid for links */}
        <div className="pt-12 sm:pt-16 lg:pt-20 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

          {/* Column 1: Logo & Social */}
          <FadeIn direction="up" delay={0}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <motion.div
                className="w-[219px] h-[82px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/newsletter.png"
                  alt="Kid Explorer Clubs"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <StaggerContainer staggerDelay={0.05} className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <StaggerItem key={social.name}>
                    <motion.div
                      whileHover={{ scale: 1.2, y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={social.href}
                        aria-label={social.name}
                        className="w-5 h-5 relative block"
                      >
                        <Image
                          src={social.src}
                          alt={social.name}
                          fill
                          className="object-contain filter brightness-0 invert"
                        />
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Quick Links & Contact Info - 2 col grid on mobile (>350px), separate columns on desktop */}
          <div className="grid grid-cols-1 min-[350px]:grid-cols-2 md:contents gap-8">
            {/* Column 2: Quick Links */}
            <FadeIn direction="up" delay={0.1}>
              <div className="text-left md:text-left">
                <div className="relative mb-6 md:mb-8 inline-block">
                  <h3 className="text-white font-sans font-bold text-[18px] md:text-[20px] leading-[22px]">
                    Quick links
                  </h3>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-[100px] h-[2px] bg-[#0FD3C6] rounded-[1px]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </div>
                <StaggerContainer staggerDelay={0.05} className="flex flex-col gap-2.5 md:gap-4">
                  {quickLinks.map((link) => (
                    <StaggerItem key={link.label}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={link.href}
                          className="text-white font-sans font-normal text-[14px] min-[350px]:text-[15px] md:text-[18px] leading-[20px] hover:text-[#0FD3C6] transition-colors inline-block"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>

            {/* Column 3: Contact Info */}
            <FadeIn direction="up" delay={0.2}>
              <div className="text-left md:text-left">
                <h3 className="text-white font-sans font-bold text-[18px] md:text-[20px] leading-[22px] mb-6 md:mb-8">
                  Contact us
                </h3>
                <StaggerContainer staggerDelay={0.1} className="flex flex-col gap-4 md:gap-5">
                  <StaggerItem>
                    <motion.a
                      href="mailto:hello@kidexplorerclubs.com"
                      className="flex items-center justify-start gap-2 md:gap-3 text-white font-sans font-normal text-[14px] min-[350px]:text-[15px] md:text-[18px] leading-[20px] hover:text-[#0FD3C6] transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-5 h-5 relative shrink-0">
                        <Image
                          src="/images/icons/email.svg"
                          alt="Email"
                          fill
                          className="object-contain filter brightness-0 invert"
                        />
                      </div>
                      <span className="break-all">hello@kidexplorerclubs.com</span>
                    </motion.a>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.a
                      href="tel:+13127673882"
                      className="flex items-center justify-start gap-2 md:gap-3 text-white font-sans font-normal text-[14px] min-[350px]:text-[15px] md:text-[18px] leading-[20px] hover:text-[#0FD3C6] transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-5 h-5 relative shrink-0">
                        <Image
                          src="/images/icons/phone.svg"
                          alt="Phone"
                          fill
                          className="object-contain filter brightness-0 invert"
                        />
                      </div>
                      <span>(312) 767 - 3882</span>
                    </motion.a>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start justify-start gap-2 md:gap-3 text-white font-sans font-normal text-[14px] min-[350px]:text-[15px] md:text-[18px] leading-[24px] md:leading-[30px]">
                      <div className="w-5 h-5 relative shrink-0 mt-1 md:mt-1.5">
                        <Image
                          src="/images/icons/mark.svg"
                          alt="Location"
                          fill
                          className="object-contain filter brightness-0 invert"
                        />
                      </div>
                      <div>
                        <p>875 N Michigan Avenue</p>
                        <p>Floor 31</p>
                        <p>Chicago, IL 60611</p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Payment Methods - 2 rows of 5, left aligned */}
        <FadeIn direction="up" delay={0.3}>
          <div className="py-8 flex flex-col gap-2">
            {/* Row 1 */}
            <div className="flex justify-start gap-2">
              {paymentRow1.map((method) => (
                <PaymentIcon key={method.name} method={method} />
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex justify-start gap-2">
              {paymentRow2.map((method) => (
                <PaymentIcon key={method.name} method={method} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Horizontal Divider Line */}
        <FadeIn direction="none" delay={0.4}>
          <div className="w-full h-0 relative">
            <div className="absolute inset-0 border-t border-white/30" />
          </div>
        </FadeIn>

        {/* Copyright Bar */}
        <FadeIn direction="up" delay={0.5}>
          <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white font-sans font-normal text-[18px] leading-[30px]">
            <p>Copyright © Kid Explorer Clubs</p>
            <div className="flex items-center gap-2 flex-wrap justify-center text-[18px]">
              <span>All Rights Reserved |</span>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" className="text-[#0FD3C6] underline hover:no-underline">
                  Terms and Conditions
                </Link>
              </motion.div>
              <span>|</span>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" className="text-[#0FD3C6] underline hover:no-underline">
                  Privacy Policy
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
