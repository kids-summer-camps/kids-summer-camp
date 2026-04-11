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
        <p className="font-mono font-normal text-black text-sm sm:text-base lg:text-[20px] leading-relaxed max-w-[981px]">
          A place where children build machines, race ideas, explore science, move with purpose, and discover what they're capable of.
          <br /><br />
          This is Kid Explorer Camps — a summer built for action.
        </p>
        <div className="flex w-full max-w-[520px] flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mt-2 sm:mt-1">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <a
              href="#mission-control"
              className="inline-flex h-12 w-full min-h-[48px] items-center justify-center rounded-[12px] border-2 border-[#1493E8] bg-transparent px-8 font-mono text-base font-medium text-[#1493E8] transition hover:bg-[#1493E8]/10 sm:min-w-[180px]"
            >
              Learn more
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/enroll"
              className="inline-flex h-12 w-full min-h-[48px] items-center justify-center rounded-[12px] bg-[#0fd3c6] px-8 font-mono text-base font-medium text-white shadow-sm transition hover:bg-[#0cc0b4] sm:min-w-[180px]"
            >
              Enroll
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
