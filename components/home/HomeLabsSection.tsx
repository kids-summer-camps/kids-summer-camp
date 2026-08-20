"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const labs = [
  {
    name: "Mission Core",
    grades: "Pre-K - 8",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    ),
  },
  {
    name: "STEM",
    grades: "Pre-K - 8",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-6.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    ),
  },
  {
    name: "Entrepreneurship",
    grades: "5 - 8",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M5 10v11m14-11v11M9 10V8a3 3 0 016 0v2" />
    ),
  },
  {
    name: "Sports",
    grades: "Pre-K - 8",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    ),
  },
  {
    name: "E-Gaming",
    grades: "3 - 8",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875s2.25.84 2.25 1.875c0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401v0c.31 0 .555-.26.532-.57a48.04 48.04 0 00-.642-5.056 48.1 48.1 0 01-4.616-.354.64.64 0 00-.657.643v0z" />
    ),
  },
];

export function HomeLabsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <FadeIn direction="up">
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
              Core Labs
            </span>
            <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[48px]">
              Pick Your Lab, Build Your Legend
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] font-mono text-base leading-relaxed text-gray-600 sm:text-lg">
              Hands-on, high-impact labs where kids choose their lane and start
              building their legacy early.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {labs.map((lab) => (
            <StaggerItem key={lab.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col items-center rounded-[24px] border border-[#1493E8]/10 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] sm:h-14 sm:w-14">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-6 w-6 sm:h-7 sm:w-7">
                    {lab.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-serif text-[18px] font-medium text-[#01325D] sm:text-[22px]">
                  {lab.name}
                </h3>
                <span className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#1493E8]">
                  {lab.grades}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/core-labs"
              className="inline-flex items-center gap-2 font-mono text-base font-bold text-[#1493E8] transition hover:gap-3"
            >
              Explore All Core Labs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
