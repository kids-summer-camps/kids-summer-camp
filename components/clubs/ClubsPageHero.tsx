"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface ClubsPageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  ctas?: CTA[];
  visual?: ReactNode;
}

// Default geometric visual: solid shapes, no gradients.
function DefaultVisual() {
  return (
    <div className="relative flex h-full min-h-[320px] w-full items-center justify-center sm:min-h-[420px]">
      {/* Orbit rings (solid strokes) */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#1493E8]/50 sm:h-[380px] sm:w-[380px]" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0FD3C6]/60 sm:h-[280px] sm:w-[280px]" aria-hidden />

      {/* Central solid teal circle */}
      <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-[#0FD3C6] shadow-2xl sm:h-40 sm:w-40">
        <svg viewBox="0 0 24 24" fill="none" stroke="#01325D" strokeWidth={1.8} className="h-16 w-16 sm:h-20 sm:w-20" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36l-2.12 2.12M7.76 16.24l-2.12 2.12m12.72 0l-2.12-2.12M7.76 7.76L5.64 5.64M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      </div>

      {/* Solid blue rounded square (orbit object) */}
      <div className="absolute right-[8%] top-[16%] z-20 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-[#1493E8] shadow-xl sm:h-16 sm:w-16">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-7 w-7 sm:h-8 sm:w-8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-6.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      </div>

      {/* White mission card (solid) */}
      <div className="absolute bottom-[14%] left-[6%] z-20 w-40 rounded-2xl bg-white p-4 shadow-2xl sm:w-48">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0FD3C6]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#01325D]">
            Mission Active
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded-full bg-[#01325D]/10" />
          <div className="h-2 w-4/5 rounded-full bg-[#01325D]/10" />
          <div className="h-2 w-3/5 rounded-full bg-[#1493E8]/20" />
        </div>
        <div className="mt-3 flex h-6 items-center justify-center rounded-lg bg-[#01325D]">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white">
            Level Up
          </span>
        </div>
      </div>
    </div>
  );
}

export function ClubsPageHero({
  eyebrow,
  title,
  highlight,
  description,
  ctas = [],
  visual,
}: ClubsPageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#01325D]">
      {/* Solid grid texture (no gradient) */}
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
        {/* Text column */}
        <div>
          <FadeIn direction="up" delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0FD3C6]/40 bg-[#0FD3C6]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#0FD3C6]">
              {eyebrow}
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <h1
              className="mt-6 font-serif text-[38px] font-medium leading-[1.06] text-white sm:text-[52px] lg:text-[64px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {title}{" "}
              {highlight && (
                <span className="text-[#0FD3C6]">{highlight}</span>
              )}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <p className="mt-6 max-w-[520px] font-mono text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
          </FadeIn>

          {ctas.length > 0 && (
            <FadeIn direction="up" delay={0.35}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                {ctas.map((cta) => (
                  <motion.div
                    key={cta.label}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href={cta.href}
                      className={
                        cta.variant === "outline"
                          ? "inline-flex h-12 w-full min-h-[48px] items-center justify-center rounded-[12px] border-2 border-[#0FD3C6] px-8 font-mono text-base font-medium text-[#0FD3C6] transition hover:bg-[#0FD3C6]/10 sm:min-w-[180px]"
                          : "inline-flex h-12 w-full min-h-[48px] items-center justify-center rounded-[12px] bg-[#1493E8] px-8 font-mono text-base font-medium text-white transition hover:bg-[#1180d0] sm:min-w-[180px]"
                      }
                    >
                      {cta.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          )}
        </div>

        {/* Visual column */}
        <FadeIn direction="up" delay={0.2}>
          {visual ?? <DefaultVisual />}
        </FadeIn>
      </div>
    </section>
  );
}
