"use client";

import React from "react";
import { motion } from "framer-motion";

export function WelcomeSection() {
  return (
    <section className="relative w-full -mt-12 sm:-mt-16 lg:-mt-20 z-10 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-[1280px] mx-auto bg-[#e7fbf9] rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] px-6 py-8 sm:px-12 sm:py-12 lg:px-20 lg:py-16 flex flex-col gap-4 sm:gap-6 items-center text-center"
      >
        <h1 className="font-serif font-medium text-[#1493E8] text-[24px] sm:text-[36px] lg:text-[48px] leading-tight" style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}>
          Welcome to Kid Explorer Camp
        </h1>
        <p className="font-mono font-normal text-black text-sm sm:text-base lg:text-[20px] leading-relaxed max-w-[981px]">
          A place where children build machines, race ideas, explore science, move with purpose, and discover what they're capable of.
          <br /><br />
          This is Kid Explorer Camps — a summer built for action.
        </p>
      </motion.div>
    </section>
  );
}
