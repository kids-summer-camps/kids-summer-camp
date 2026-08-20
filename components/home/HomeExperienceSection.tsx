"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PaperAirplaneIcon, TrophyIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const experiences = [
  {
    icon: PaperAirplaneIcon,
    title: "Field Trips That Launch",
    desc: "iFLY indoor skydiving, the Museum of Science and Industry, the Adler Planetarium, and more. Full-sensory launch missions into science, art, and imagination.",
    href: "/field-trips",
    cta: "See the Trips",
  },
  {
    icon: TrophyIcon,
    title: "The Showcase",
    desc: "The culmination of the year. Every mission takes the stage as students demonstrate what they have built, mastered, and become.",
    href: "/summer-camps",
    cta: "Explore Summer",
  },
  {
    icon: ShieldCheckIcon,
    title: "Noncompetitive Sports",
    desc: "Structured instruction with no tryouts and no elimination. Kids build confidence, character, and skill in real professional environments.",
    href: "/core-labs",
    cta: "Explore Labs",
  },
];

export function HomeExperienceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#01325D] py-16 sm:py-20 lg:py-28">
      {/* Solid decorative shapes (no gradient) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-16 top-10 h-40 w-40 rounded-full border-2 border-dashed border-[#1493E8]/30" />
        <div className="absolute -right-10 bottom-16 h-24 w-24 rounded-2xl rotate-12 bg-[#1493E8]/20" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
        <FadeIn direction="up">
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
              More Than a Program
            </span>
            <h2 className="font-serif text-[30px] font-medium leading-tight text-white sm:text-[40px] lg:text-[48px]">
              This Is an Experience
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] font-mono text-base leading-relaxed text-white/75 sm:text-lg">
              From real field trips to a culminating showcase, every moment is
              designed to inspire confidence and curiosity.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((e) => (
            <StaggerItem key={e.title}>
              <Link href={e.href} className="group block h-full">
                <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0FD3C6]/40 hover:bg-white/10">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#0FD3C6]">
                    <e.icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-serif text-[24px] font-medium text-white">{e.title}</h3>
                  <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-white/75">{e.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold text-[#0FD3C6] transition-transform group-hover:translate-x-1">
                    {e.cta}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
