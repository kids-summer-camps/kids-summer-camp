"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

export function DemoDaySection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <FadeIn direction="left" delay={0}>
            <div className="w-full aspect-720/520 overflow-hidden rounded-[16px] bg-linear-to-br from-[#f0f7ff] to-[#e7fbf9] flex items-center justify-center">
              <p className="font-mono font-medium text-[#01325D]/40 text-[24px] sm:text-[30px] lg:text-[36px] leading-normal text-center px-4">
                Demo Day Photos
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-9 max-w-[492px]">
              <h2 className="font-mono font-bold text-[#01325D] text-[28px] sm:text-[32px] lg:text-[36px] leading-tight">
                Demo Day
              </h2>
              <p className="font-mono font-normal text-[#36393D] text-base sm:text-[17px] lg:text-[18px] leading-relaxed">
                Students present inventions, race machines, and pitch ideas in front of families and judges.
                <br /><br />
                This is where confidence shows.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/programs"
                  className="bg-[#1493E8] rounded-[10px] px-8 sm:px-10 lg:px-11 py-4 sm:py-5 lg:py-6 inline-flex items-center justify-center cursor-pointer"
                >
                  <span className="font-mono font-medium text-white text-lg sm:text-xl lg:text-[24px]">
                    See the Experience
                  </span>
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
