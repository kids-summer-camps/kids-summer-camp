"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

interface ClubsGlassFeatureProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  children?: ReactNode;
}

export function ClubsGlassFeature({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  children,
}: ClubsGlassFeatureProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#01325D] py-16 sm:py-20 lg:py-24">
      {/* Solid decorative shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full border-2 border-dashed border-[#1493E8]/30" />
        <div className="absolute -right-16 bottom-10 h-40 w-40 rotate-12 rounded-2xl bg-[#0FD3C6]/20" />
        <div className="absolute right-[20%] top-10 h-24 w-24 rounded-full border border-[#1493E8]/30" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 sm:px-8">
        <FadeIn direction="up">
          <div className="rounded-[32px] border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:rounded-[40px] sm:p-12 lg:p-16">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#0FD3C6]">
              {eyebrow}
            </span>
            <h2
              className="mt-5 max-w-[680px] font-serif text-[32px] font-medium leading-[1.12] text-white sm:text-[44px] lg:text-[52px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {title}
            </h2>
            <p className="mt-6 max-w-[640px] font-mono text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>

            {children && <div className="mt-8">{children}</div>}

            {ctaLabel && ctaHref && (
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-10 w-full sm:w-auto">
                <Link
                  href={ctaHref}
                  className="inline-flex h-12 w-full min-h-[48px] items-center justify-center gap-2 rounded-[12px] bg-[#0FD3C6] px-8 font-mono text-base font-semibold text-[#01325D] transition hover:bg-[#0cc0b4] sm:min-w-[200px] sm:w-auto"
                >
                  {ctaLabel}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
