"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

const stats = [
  { value: "Pre-K - 8", label: "Grades Served" },
  { value: "5", label: "Core Labs" },
  { value: "9", label: "Summer Tracks" },
  { value: "Year-Round", label: "Journey" },
];

function HeroVisual() {
  return (
    <div className="relative flex h-full min-h-[300px] w-full items-center justify-center sm:min-h-[400px]">
      {/* Solid orbit rings */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#1493E8]/50 sm:h-[340px] sm:w-[340px]" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0FD3C6]/60 sm:h-[250px] sm:w-[250px]" aria-hidden />

      {/* Central teal rocket/star badge */}
      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#0FD3C6] shadow-2xl sm:h-36 sm:w-36">
        <svg viewBox="0 0 24 24" fill="none" stroke="#01325D" strokeWidth={1.8} className="h-14 w-14 sm:h-[72px] sm:w-[72px]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      </div>

      {/* Solid blue cube */}
      <div className="absolute right-[6%] top-[12%] z-20 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-[#1493E8] shadow-xl sm:h-16 sm:w-16">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-7 w-7 sm:h-8 sm:w-8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-6.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      </div>

      {/* Solid white progress card */}
      <div className="absolute bottom-[10%] left-[2%] z-20 w-40 rounded-2xl bg-white p-4 shadow-2xl sm:w-44">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0FD3C6]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#01325D]">
            Level Up
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded-full bg-[#01325D]/10" />
          <div className="h-2 w-3/4 rounded-full bg-[#1493E8]/25" />
        </div>
        <div className="mt-3 flex h-6 items-center justify-center rounded-lg bg-[#0FD3C6]">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#01325D]">
            Advance
          </span>
        </div>
      </div>
    </div>
  );
}

export function ClubsHomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#01325D]">
      {/* Solid grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-2 lg:gap-8 lg:pb-20 lg:pt-40">
        <div>
          <FadeIn direction="up" delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0FD3C6]/40 bg-[#0FD3C6]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#0FD3C6]">
              Kid Explorer Clubs
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <h1
              className="mt-6 font-serif text-[40px] font-medium leading-[1.05] text-white sm:text-[56px] lg:text-[72px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              The Mission{" "}
              <span className="text-[#0FD3C6]">Starts Here.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <p className="mt-6 max-w-[520px] font-mono text-base leading-relaxed text-white/80 sm:text-lg">
              A year-round launch system for young minds. Build through the school
              year, apply it in the summer, and advance to the next level, every
              single year.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.35}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  href="/afterschool"
                  className="inline-flex h-13 w-full min-h-[52px] items-center justify-center rounded-[14px] bg-[#1493E8] px-9 font-mono text-base font-medium text-white transition hover:bg-[#1180d0] sm:min-w-[200px]"
                >
                  Explore Afterschool
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  href="/programs"
                  className="inline-flex h-13 w-full min-h-[52px] items-center justify-center rounded-[14px] border-2 border-[#0FD3C6] px-9 font-mono text-base font-medium text-[#0FD3C6] transition hover:bg-[#0FD3C6]/10 sm:min-w-[200px]"
                >
                  Explore Programs
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.2}>
          <HeroVisual />
        </FadeIn>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 py-8 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} direction="up" delay={0.1 + i * 0.05}>
              <div className="flex flex-col items-center text-center">
                <span className="font-serif text-[26px] font-medium text-[#0FD3C6] sm:text-[32px]">
                  {s.value}
                </span>
                <span className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                  {s.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
