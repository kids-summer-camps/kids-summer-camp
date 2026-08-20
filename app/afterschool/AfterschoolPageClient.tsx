"use client";

import React from "react";
import { AcademicCapIcon, RocketLaunchIcon, TrophyIcon, CurrencyDollarIcon, CpuChipIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsNumberBand, ClubsGlassFeature, ClubsProgramCarousel, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { PORTAL_SIGNUP_URL } from "@/lib/site";

const tracks = [
  {
    icon: AcademicCapIcon,
    name: "Mission Core",
    tag: "Academic",
    desc: "Reading, writing, grammar, and math. The required academic foundation.",
  },
  {
    icon: RocketLaunchIcon,
    name: "STEM",
    tag: "Innovation",
    desc: "Build bridges, break codes, and launch rockets with hands-on innovation.",
  },
  {
    icon: TrophyIcon,
    name: "Sports",
    tag: "Movement",
    desc: "Structured, noncompetitive instruction that builds leaders, not just athletes.",
  },
  {
    icon: CurrencyDollarIcon,
    name: "Entrepreneurship",
    tag: "Business",
    desc: "Dream it, design it, budget it, sell it. Young minds think like owners.",
  },
  {
    icon: CpuChipIcon,
    name: "E-Gaming",
    tag: "Digital",
    desc: "Play hard, learn harder. Game design, coding, and esports with a mission.",
  },
  {
    icon: PaintBrushIcon,
    name: "Creative Arts",
    tag: "Creativity",
    desc: "Express, create, and perform. Identity built through creation.",
  },
];

const cycle = [
  { name: "Build", window: "Aug to May", desc: "Reading, writing, math, STEM, sports, and leadership sharpen through the school year." },
  { name: "Apply", window: "Jun to Aug", desc: "Classroom knowledge meets the real world through challenges, expeditions, and competitions." },
  { name: "Advance", window: "Every Fall", desc: "Return stronger, more confident, and ready for the next level. The cycle repeats higher each year." },
];

const seasonalPrograms = [
  {
    id: "summer",
    name: "Summer Camps",
    tag: "Apply the Year",
    desc: "Nine tracks across STEM, sports, entrepreneurship, and leadership.",
    href: "/summer-camps",
    accent: "#0FD3C6",
    icon: RocketLaunchIcon,
  },
  {
    id: "winter",
    name: "Winter Camps",
    tag: "2-3 Weeks",
    desc: "Keep the journey moving through the winter break.",
    href: "/winter-camps",
    accent: "#1493E8",
    icon: TrophyIcon,
  },
  {
    id: "spring",
    name: "Spring Camps",
    tag: "1 Week",
    desc: "A burst of hands-on STEM, movement, and creativity.",
    href: "/spring-camps",
    accent: "#0FD3C6",
    icon: PaintBrushIcon,
  },
  {
    id: "college",
    name: "College Readiness",
    tag: "Mission: Future",
    desc: "Grades 8-12. Academic mastery, leadership, and real-world readiness.",
    href: "/college-readiness",
    accent: "#1493E8",
    icon: AcademicCapIcon,
  },
];

export function AfterschoolPageClient() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Tier 0+ · Afterschool"
        title="The Mission"
        highlight="Starts Here."
        description="A year-round learning journey for Pre-K through 8th grade. Build through the school year, apply it in the summer, and advance to the next level every single year."
        ctas={[
          { label: "Sign Up Now", href: PORTAL_SIGNUP_URL },
          { label: "Explore the Tracks", href: "/enroll", variant: "outline" },
        ]}
      />

      <ClubsNumberBand
        stats={[
          { value: "6", label: "Mission Tracks" },
          { value: "Pre-K - 8", label: "Grades Served" },
          { value: "Year-Round", label: "One Journey" },
          { value: "3", label: "Cycle Stages" },
        ]}
      />

      {/* Mission Tracks showcase */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-12 text-center sm:mb-16">
              <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
                Mission Tracks
              </span>
              <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[48px]">
                Choose Your Lane
              </h2>
              <p className="mx-auto mt-4 max-w-[640px] font-mono text-base leading-relaxed text-gray-600 sm:text-lg">
                Every explorer chooses a lane. Six tracks, one continuous journey.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {tracks.map((t) => (
              <StaggerItem key={t.name}>
                <div className="group flex h-full flex-col rounded-[28px] border border-[#1493E8]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] transition-colors duration-300 group-hover:bg-[#01325D] group-hover:text-[#0FD3C6]">
                      <t.icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-[#0FD3C6]/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#01325D]">
                      {t.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-[24px] font-medium text-[#01325D]">{t.name}</h3>
                  <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-gray-600">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* The yearly cycle */}
      <ClubsGlassFeature
        eyebrow="The Yearly Cycle"
        title="Build. Apply. Advance."
        description="Summer is not an interruption, it is the culmination. The child never leaves Kid Explorer Clubs, they simply move to the next mission."
        ctaLabel="Sign Up Now"
        ctaHref={PORTAL_SIGNUP_URL}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {cycle.map((c) => (
            <div key={c.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-serif text-[22px] font-medium text-[#0FD3C6]">{c.name}</p>
              <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">{c.window}</p>
              <p className="mt-2 font-mono text-sm leading-relaxed text-white/75">{c.desc}</p>
            </div>
          ))}
        </div>
      </ClubsGlassFeature>

      {/* Seasonal programs carousel */}
      <ClubsProgramCarousel
        eyebrow="One Journey, All Year"
        title="The Mission Continues"
        description="After-school builds, and every seasonal program applies it. The journey never pauses."
        programs={seasonalPrograms}
      />

      <ClubsCTA
        title="Begin the Mission"
        description="Give your explorer a year-round journey that builds, applies, and advances."
        primaryLabel="Sign Up Now"
        primaryHref={PORTAL_SIGNUP_URL}
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
