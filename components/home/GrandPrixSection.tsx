"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

export function GrandPrixSection() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[727px] bg-black overflow-hidden">
      <Image
        src="/images/grand-prix.png"
        alt="Kid Explorer Grand Prix"
        fill
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-[rgba(1,50,93,0.48)]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[727px] px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1009px] flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
          <FadeIn direction="up" delay={0}>
            <h2 className="font-mono font-bold text-white text-[28px] sm:text-[36px] lg:text-[48px] leading-tight text-center">
              Kid Explorer Grand Prix
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <p className="font-mono font-normal text-white text-base sm:text-lg lg:text-[20px] leading-relaxed text-center max-w-[800px]">
              Students design, build, and race their own cars in the final Grand Prix competition.
              Parents gather at the finish line to watch.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/programs"
                className="bg-[#0FD3C6] rounded-[10px] px-8 sm:px-10 lg:px-11 py-4 sm:py-5 lg:py-6 flex items-center justify-center cursor-pointer max-w-[456px]"
              >
                <span className="font-mono font-medium text-white text-lg sm:text-xl lg:text-[24px] text-center">
                  Explore the Competition
                </span>
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
