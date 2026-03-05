"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedHeadline } from "./AnimatedHeadline";

interface HeroSectionProps {
  videoSrc?: string;
  imageSrc?: string;
  posterSrc?: string;
}

export function HeroSection({
  videoSrc,
  imageSrc = "/images/hero-bg.png",
  posterSrc = "/images/hero-bg.png",
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[701px] overflow-hidden">
      {/* Background - Video or Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 z-0"
      >
        {videoSrc ? (
          // Video Background
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className="absolute inset-0 w-full h-full object-cover scale-[1.25] -translate-x-[0.72%] -translate-y-[0.06%]"
          >
            <source src={videoSrc} type="video/mp4" />
            {/* Fallback to image if video fails */}
            <Image
              src={imageSrc}
              alt="Kids enjoying summer camp activities"
              fill
              className="object-cover scale-[1.25] -translate-x-[0.72%] -translate-y-[0.06%]"
              style={{ objectPosition: 'center top' }}
              priority
              quality={100}
            />
          </video>
        ) : (
          // Image Background Only
          <Image
            src={imageSrc}
            alt="Kids enjoying summer camp activities"
            fill
            className="object-cover scale-[1.25] -translate-x-[0.72%] -translate-y-[0.06%]"
            style={{ objectPosition: 'center top' }}
            priority
            quality={100}
          />
        )}
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-black/30 via-black/20 to-black/40" />

      {/* Animated Headline Content */}
      <div className="absolute inset-0 z-2 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <AnimatedHeadline
            staticText="Kid Explorer Club — "
            rotatingTexts={[
              "Summer 2026",
              "Family Trips",
              "Amazing Camp",
              "Science Lab",
              "Power Play",
            ]}
            className="text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.1] tracking-tight drop-shadow-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-white/90 text-lg sm:text-xl font-light max-w-2xl mx-auto drop-shadow-md"
          >
            Unforgettable adventures await your little explorers
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
