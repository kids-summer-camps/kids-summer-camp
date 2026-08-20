"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

interface ClubsCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ClubsCTA({
  title = "Launch Curiosity",
  description = "Your child already has curiosity and talent. Give those sparks a place to grow.",
  primaryLabel = "Enroll Now",
  primaryHref = "/enroll",
  secondaryLabel = "Explore Programs",
  secondaryHref = "/programs",
}: ClubsCTAProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0FD3C6]">
      {/* Solid decorative shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full border-2 border-dashed border-[#01325D]/25" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full border border-[#01325D]/20" />
        <div className="absolute right-[18%] top-12 h-16 w-16 rotate-12 rounded-2xl bg-white/20" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-20 sm:px-8 sm:py-24 lg:py-28">
        <FadeIn direction="up">
          <div className="mx-auto max-w-[820px] text-center">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#01325D]/70">
              Ready When You Are
            </span>
            <h2
              className="mt-5 font-serif text-[40px] font-medium leading-[1.05] text-[#01325D] sm:text-[56px] lg:text-[64px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] font-mono text-base leading-relaxed text-[#01325D]/80 sm:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                <Link
                  href={primaryHref}
                  className="inline-flex h-14 w-full min-h-[56px] items-center justify-center gap-2 rounded-[14px] bg-[#01325D] px-10 font-mono text-base font-bold text-white shadow-xl shadow-[#01325D]/25 transition hover:bg-[#0a3d6e] sm:w-auto"
                >
                  {primaryLabel}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                <Link
                  href={secondaryHref}
                  className="inline-flex h-14 w-full min-h-[56px] items-center justify-center rounded-[14px] border-2 border-[#01325D] px-10 font-mono text-base font-bold text-[#01325D] transition hover:bg-[#01325D] hover:text-white sm:w-auto"
                >
                  {secondaryLabel}
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
