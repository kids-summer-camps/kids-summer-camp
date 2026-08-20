"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const cycle = [
  {
    name: "Build",
    window: "Aug to May",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    desc: "Through the school year, every explorer builds: reading, writing, math, STEM, sports, leadership, and future readiness.",
    points: ["Academic mastery", "STEM & labs", "Sports & leadership"],
  },
  {
    name: "Apply",
    window: "Jun to Aug",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    desc: "Summer is the application. Kids take classroom knowledge into the real world through engineering, expeditions, and entrepreneurship.",
    points: ["Engineering challenges", "Field expeditions", "Team competitions"],
  },
  {
    name: "Advance",
    window: "Every Fall",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
      </svg>
    ),
    desc: "Return stronger, more confident, and ready for the next level. The cycle repeats higher each year, so growth compounds.",
    points: ["New level each year", "Confidence grows", "Identity deepens"],
  },
];

export function HomeJourneySection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <FadeIn direction="up">
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
              The Yearly Cycle
            </span>
            <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[48px]">
              A Journey That Never Ends
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] font-mono text-base leading-relaxed text-gray-600 sm:text-lg">
              The child never leaves Kid Explorer Clubs. They simply move to the next
              mission. This is not childcare, it is a launch system.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cycle.map((phase, i) => (
            <StaggerItem key={phase.name}>
              <div className="group relative flex h-full flex-col rounded-[32px] border border-[#1493E8]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] transition-colors duration-300 group-hover:bg-[#1493E8] group-hover:text-white">
                    {phase.icon}
                  </span>
                  <span className="font-serif text-[56px] font-medium leading-none text-[#0FD3C6]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0FD3C6]">
                  {phase.window}
                </span>
                <h3 className="mt-2 font-serif text-[28px] font-medium text-[#01325D]">{phase.name}</h3>
                <p className="mt-3 font-mono text-sm leading-relaxed text-gray-600">{phase.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-[#1493E8]/10 pt-5">
                  {phase.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 font-mono text-sm text-[#01325D]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1493E8]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
