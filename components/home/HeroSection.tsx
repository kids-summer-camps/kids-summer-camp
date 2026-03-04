"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    </section>
  );
}
