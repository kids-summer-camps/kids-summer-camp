"use client";

import React from "react";
import { SparklesIcon, ArrowTrendingUpIcon, UsersIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const values = [
  {
    icon: SparklesIcon,
    n: "01",
    title: "Clarity",
    desc: "Gain clarity on what matters, where you are headed, and who you are in every space you move through.",
  },
  {
    icon: ArrowTrendingUpIcon,
    n: "02",
    title: "Growth",
    desc: "We move fast and think big, but ground it in awareness. Lead with choice and act with intention.",
  },
  {
    icon: UsersIcon,
    n: "03",
    title: "Impact",
    desc: "Help engineer future icons. Young minds built for the moment and wired for what is next.",
  },
];

const moves = [
  "Collaboration over competition",
  "Hustle with heart",
  "Leadership that hits different",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Join the Crew"
        title="Building Identity"
        highlight="in Motion"
        description="This is not just a role, it is a reflection point. A chance to ask who you are in this mission, and who you choose to be. Joining the crew means aligning with something bigger."
        ctas={[{ label: "Apply Now", href: "/contact" }]}
      />

      <ClubsNumberBand
        stats={[
          { value: "1", label: "Mission" },
          { value: "3", label: "Core Values" },
          { value: "Big", label: "Thinkers" },
          { value: "All", label: "Growth" },
        ]}
      />

      {/* Values - designed showcase */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-14 text-center">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1493E8]">
                Why Join Us
              </span>
              <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-[#01325D] sm:text-[42px] lg:text-[50px]">
                Move With Purpose
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-6 lg:grid-cols-3" staggerDelay={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.n}>
                <div className="group flex h-full flex-col rounded-[28px] border border-[#1493E8]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] transition-colors duration-300 group-hover:bg-[#01325D] group-hover:text-[#0FD3C6]">
                      <v.icon className="h-7 w-7" />
                    </span>
                    <span className="font-serif text-[48px] font-medium leading-none text-[#0FD3C6]/30">
                      {v.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-[26px] font-medium text-[#01325D]">{v.title}</h3>
                  <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-gray-600 sm:text-base">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClubsGlassFeature
        eyebrow="The Blueprint"
        title="How We Move"
        description="This is the blueprint for the next generation. We lead from who we are and build what matters."
      >
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {moves.map((m) => (
            <li key={m} className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0FD3C6] text-[#01325D]">
                <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="font-mono text-sm font-medium text-white/90">{m}</span>
            </li>
          ))}
        </ul>
      </ClubsGlassFeature>

      <ClubsCTA
        title="Build What Is Next"
        description="Bring your vision, your velocity, and your values. The next generation is waiting."
        primaryLabel="Apply Now"
        primaryHref="/contact"
        secondaryLabel="Meet the Club"
        secondaryHref="/about"
      />
    </div>
  );
}
