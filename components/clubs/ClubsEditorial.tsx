"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

interface ClubsEditorialProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  body: string;
  visual?: ReactNode;
  reversed?: boolean;
  dark?: boolean;
}

// Default visual: a composed panel of solid shapes (no gradients)
function EditorialVisual() {
  return (
    <div className="relative flex h-full min-h-[260px] w-full items-center justify-center">
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#0FD3C6]/50" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0FD3C6]/40" aria-hidden />
      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-[#0FD3C6] shadow-2xl">
        <svg viewBox="0 0 24 24" fill="none" stroke="#01325D" strokeWidth={1.8} className="h-12 w-12" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="absolute -right-2 top-6 z-20 h-14 w-14 rotate-12 rounded-2xl bg-[#1493E8] shadow-xl" />
    </div>
  );
}

export function ClubsEditorial({
  eyebrow,
  title,
  highlight,
  body,
  visual,
  reversed = false,
  dark = false,
}: ClubsEditorialProps) {
  return (
    <section className={`w-full py-16 sm:py-20 lg:py-24 ${dark ? "bg-[#01325D]" : "bg-white"}`}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction={reversed ? "right" : "up"} className={reversed ? "lg:order-2" : ""}>
          <div>
            <span className={`inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-[#0FD3C6]" : "text-[#1493E8]"}`}>
              {eyebrow}
            </span>
            <h2
              className={`mt-4 font-serif text-[32px] font-medium leading-[1.1] sm:text-[44px] lg:text-[52px] ${dark ? "text-white" : "text-[#01325D]"}`}
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {title}{" "}
              {highlight && <span className="text-[#0FD3C6]">{highlight}</span>}
            </h2>
            <div className={`mt-6 h-1 w-16 rounded-full ${dark ? "bg-[#0FD3C6]" : "bg-[#1493E8]"}`} />
            <p className={`mt-6 max-w-[520px] font-mono text-base leading-relaxed sm:text-lg ${dark ? "text-white/80" : "text-gray-600"}`}>
              {body}
            </p>
          </div>
        </FadeIn>

        <FadeIn direction={reversed ? "up" : "left"} className={reversed ? "lg:order-1" : ""}>
          {visual ?? <EditorialVisual />}
        </FadeIn>
      </div>
    </section>
  );
}
