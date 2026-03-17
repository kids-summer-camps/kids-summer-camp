"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

export function RecommendedMissionSection() {
  return (
    <section className="w-full bg-[#f7fbff] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn direction="up" delay={0}>
          <h2 className="font-mono font-bold text-[24px] sm:text-[30px] lg:text-[36px] text-black text-center mb-8 sm:mb-10 leading-normal">
            Recommended Mission
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.1}>
          <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-lg p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-24 items-center max-w-[900px] mx-auto">
            <div className="flex flex-col gap-4 sm:gap-5 flex-1">
              <p className="font-mono font-medium text-black text-xs sm:text-sm tracking-[0.28px]">
                Best Match
              </p>
              <h3 className="font-mono font-bold text-[#1493E8] text-[20px] sm:text-[24px] lg:text-[28px]">
                Robot Arena
              </h3>
              <p className="font-mono font-normal text-black text-sm lg:text-[14px]">
                Perfect for explorers who enjoy building, engineering challenges, and strategy.
              </p>
              <p className="font-mono font-medium text-black text-sm lg:text-[14px] underline">
                Also Explore
              </p>
              <p className="font-mono font-bold text-black text-sm lg:text-[15px]">
                Blueprint<br />
                STEM Odyssey
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full sm:w-[220px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/programs"
                  className="bg-[#1493E8] rounded-[10px] px-6 py-2.5 h-11 flex items-center justify-center cursor-pointer w-full"
                >
                  <span className="font-mono font-medium text-white text-[15px] whitespace-nowrap">
                    Explore This Camp
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="border border-[#CBD5E1] rounded-[10px] px-6 py-2.5 h-11 flex items-center justify-center cursor-pointer w-full"
                >
                  <span className="font-mono font-medium text-[#01325D] text-[15px] whitespace-nowrap">
                    Launch Their Summer
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
