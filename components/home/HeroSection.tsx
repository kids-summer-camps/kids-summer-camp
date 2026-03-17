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
    <section className="relative w-full h-[500px] sm:h-[650px] lg:h-[774px] overflow-hidden rounded-bl-[32px] rounded-br-[32px] sm:rounded-bl-[40px] sm:rounded-br-[40px] lg:rounded-bl-[48px] lg:rounded-br-[48px] max-w-[1445px] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className="w-full h-full object-cover scale-105"
            controlsList="nodownload"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={imageSrc}
            alt="Kids enjoying summer camp activities"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        )}
      </motion.div>
    </section>
  );
}
