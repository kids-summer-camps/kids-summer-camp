"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const programs = [
  {
    name: "Summer Camps",
    tag: "Apply the Year",
    href: "/summer-camps",
    desc: "Nine tracks across STEM, sports, entrepreneurship, and leadership. The culmination of everything built during the school year.",
    accent: "#0FD3C6",
    meta: "Ages 3-14 · 9 Tracks",
  },
  {
    name: "Winter Camps",
    tag: "2-3 Weeks",
    href: "/winter-camps",
    desc: "Keep the journey moving during the winter break with focused STEM, sports, and creative missions.",
    accent: "#1493E8",
    meta: "Break Window",
  },
  {
    name: "Spring Camps",
    tag: "1 Week",
    href: "/spring-camps",
    desc: "A burst of hands-on STEM, movement, and creativity in each spring break window.",
    accent: "#0FD3C6",
    meta: "Break Window",
  },
  {
    name: "College Readiness",
    tag: "Mission: Future",
    href: "/college-readiness",
    desc: "Grades 8-12. Academic mastery, leadership, and real-world readiness for the next stage.",
    accent: "#1493E8",
    meta: "Grades 8-12",
  },
];

export function HomeProgramsSection() {
  return (
    <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <FadeIn direction="up">
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
              Our Programs
            </span>
            <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[48px]">
              One Club. Every Mission.
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] font-mono text-base leading-relaxed text-gray-600 sm:text-lg">
              Every program is a chapter of the same journey. Start anywhere, and the
              child never leaves the Club.
            </p>
          </div>
        </FadeIn>

        {/* Featured: Afterschool (Tier 0+) */}
        <FadeIn direction="up" delay={0.05}>
          <Link href="/afterschool" className="group block">
            <div className="relative overflow-hidden rounded-[36px] bg-[#01325D] p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border-2 border-dashed border-[#1493E8]/40" aria-hidden />
              <div className="pointer-events-none absolute -bottom-16 right-1/4 h-24 w-24 rotate-12 rounded-2xl bg-[#0FD3C6]/25" aria-hidden />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-[560px]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#0FD3C6]/40 bg-[#0FD3C6]/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#0FD3C6]">
                    Tier 0+ · Flagship
                  </span>
                  <h3 className="mt-5 font-serif text-[30px] font-medium leading-tight text-white sm:text-[40px]">
                    Afterschool
                  </h3>
                  <p className="mt-2 font-mono text-sm font-bold uppercase tracking-[0.14em] text-[#0FD3C6]">
                    The Mission Starts Here
                  </p>
                  <p className="mt-4 font-mono text-base leading-relaxed text-white/80 sm:text-lg">
                    A year-round learning journey from Pre-K through 8th grade. Build
                    through the school year, apply it in the summer, and advance to the
                    next level, every year.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {["Pre-K to 8th", "Core Labs", "All Year", "One Journey"].map((item) => (
                      <li key={item} className="flex items-center gap-2 font-mono text-sm text-white/90">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#0FD3C6" strokeWidth={3} className="h-4 w-4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0">
                  <motion.span
                    whileHover={{ x: 6 }}
                    className="inline-flex items-center gap-3 rounded-[14px] bg-[#1493E8] px-8 py-4 font-mono text-base font-medium text-white shadow-lg shadow-[#1493E8]/30 transition hover:bg-[#1180d0]"
                  >
                    Explore Afterschool
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.span>
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>

        {/* Other programs */}
        <StaggerContainer staggerDelay={0.08} className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <StaggerItem key={p.name}>
              <Link href={p.href} className="group block h-full">
                <div className="flex h-full flex-col items-center rounded-[28px] border border-[#1493E8]/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span
                    className="inline-flex rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em]"
                    style={{ backgroundColor: `${p.accent}15`, color: p.accent }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-serif text-[24px] font-medium text-[#01325D]">{p.name}</h3>
                  <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-gray-600">{p.desc}</p>
                  <span className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#01325D]/50">
                    {p.meta}
                  </span>
                  <span
                    className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-bold transition-transform group-hover:translate-x-1"
                    style={{ color: p.accent }}
                  >
                    Explore
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
