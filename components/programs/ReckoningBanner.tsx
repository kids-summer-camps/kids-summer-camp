"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Program } from "@/lib/programs-data";

interface ReckoningBannerProps {
  program: Program;
}

export function ReckoningBanner({ program }: ReckoningBannerProps) {
  return (
    <section className="w-full">
      {/* "THE RECKONING™" heading */}
      <div className="bg-white py-8 sm:py-10 text-center">
        <h2
          className="font-serif font-bold text-[#01325D] text-[32px] sm:text-[40px] lg:text-[48px] uppercase"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
        >
          The Reckoning<span className="text-[20px] sm:text-[26px] align-super">™</span>
        </h2>
      </div>

      {/* Program-specific banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-[423px] overflow-hidden"
      >
        <Image
          src={program.image}
          alt={`${program.title} — ${program.reckoningName}`}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: program.reckoningOverlay }}
          aria-hidden
        />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-[1000px] flex flex-col gap-4 items-center">
            <h3
              className="font-serif font-bold text-white text-[28px] sm:text-[36px] lg:text-[40px] uppercase"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {program.reckoningName}
            </h3>
            <p className="font-mono font-medium text-[#DEF2EE] text-[18px] sm:text-[22px] lg:text-[24px] tracking-[0.48px]">
              {program.reckoningTagline}
            </p>
            <p className="font-mono font-normal text-[#CBF5F1] text-[14px] sm:text-[15px] lg:text-[16px] tracking-[0.32px] max-w-[900px] leading-relaxed">
              {program.reckoningDescription}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
