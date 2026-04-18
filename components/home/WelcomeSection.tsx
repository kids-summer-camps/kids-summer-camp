"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WELCOME_HEADLINE = "Welcome to Kid Explorer Camp";

function useTypingLoop(
  text: string,
  opts?: { typeMs?: number; deleteMs?: number; pauseEndMs?: number; pauseStartMs?: number }
) {
  const typeMs = opts?.typeMs ?? 75;
  const deleteMs = opts?.deleteMs ?? 45;
  const pauseEndMs = opts?.pauseEndMs ?? 2200;
  const pauseStartMs = opts?.pauseStartMs ?? 600;

  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && charCount < text.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), typeMs);
      return () => clearTimeout(t);
    }
    if (!deleting && charCount === text.length) {
      const t = setTimeout(() => setDeleting(true), pauseEndMs);
      return () => clearTimeout(t);
    }
    if (deleting && charCount > 0) {
      const t = setTimeout(() => setCharCount((c) => c - 1), deleteMs);
      return () => clearTimeout(t);
    }
    if (deleting && charCount === 0) {
      const t = setTimeout(() => setDeleting(false), pauseStartMs);
      return () => clearTimeout(t);
    }
  }, [charCount, deleting, text.length, typeMs, deleteMs, pauseEndMs, pauseStartMs]);

  return text.slice(0, charCount);
}

export function WelcomeSection() {
  const typed = useTypingLoop(WELCOME_HEADLINE);

  return (
    <section className="relative w-full -mt-12 sm:-mt-16 lg:-mt-20 z-10 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-[1280px] mx-auto bg-[#e7fbf9] rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] px-6 py-8 sm:px-12 sm:py-12 lg:px-20 lg:py-16 flex flex-col gap-4 sm:gap-6 items-center text-center"
      >
        <h1
          className="font-serif font-medium text-[#1493E8] text-[24px] sm:text-[36px] lg:text-[48px] leading-tight min-h-[1.2em] sm:min-h-[1.15em]"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          aria-label={WELCOME_HEADLINE}
        >
          <span aria-hidden="true">
            {typed}
            <span className="inline-block w-[0.08em] h-[1em] ml-0.5 align-[-0.15em] border-l-2 border-current animate-pulse" />
          </span>
        </h1>

        <div className="max-w-[981px] flex flex-col gap-4 sm:gap-5">
          <h2 className="font-mono font-bold text-black text-[16px] sm:text-[18px] lg:text-[20px]">
            A Year-Long Advantage Starts Here
          </h2>
          <p className="font-mono font-normal text-black text-sm sm:text-base lg:text-[17px] leading-relaxed">
            Kid Explorer Camp includes access to a college readiness pathway through our partnership with Zenith Prep Academy — an advanced program designed to help students build academic discipline, strategy, leadership, and long-term readiness early. The earlier students begin, the stronger the outcomes. Summer is the entry point.
          </p>

          <div className="mt-2">
            <h3 className="font-mono font-bold text-black text-[15px] sm:text-[16px] mb-2">
              What this unlocks for selected students:
            </h3>
            <ul className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed space-y-1">
              <li>• Early college-readiness exposure</li>
              <li>• Academic strategy and skill development</li>
              <li>• Long-term planning and performance habits</li>
              <li>• A stronger path into competitive high school and college preparation</li>
            </ul>
          </div>

          <p className="font-mono font-bold text-black text-sm sm:text-base mt-2">
            Limited scholarship-backed seats available.
          </p>
          <p className="font-mono font-normal text-black text-sm sm:text-base">
            Enrollment in Kid Explorer Camp is the first step toward activation.
          </p>
        </div>

        <div className="flex w-full max-w-[520px] flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mt-2 sm:mt-1">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/enroll"
              className="inline-flex h-12 w-full min-h-[48px] items-center justify-center rounded-[12px] bg-[#1493E8] px-8 font-mono text-base font-medium text-white shadow-sm transition hover:bg-[#1180d0] sm:min-w-[180px]"
            >
              Enroll Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <a
              href="#mission-control"
              className="inline-flex h-12 w-full min-h-[48px] items-center justify-center rounded-[12px] border-2 border-[#1493E8] bg-transparent px-8 font-mono text-base font-medium text-[#1493E8] transition hover:bg-[#1493E8]/10 sm:min-w-[180px]"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
