"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AcademicCapIcon, RocketLaunchIcon, CurrencyDollarIcon, TrophyIcon, CpuChipIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsEditorial, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const labs = [
  {
    n: "01",
    icon: AcademicCapIcon,
    name: "Mission Core",
    grades: "Pre-K - 8",
    tag: "The Required Foundation",
    desc: "Reading, writing, grammar, and math sharpened through high-touch tutoring pods and real-world problem solving, so every explorer is solid before they soar.",
    points: ["1:1 & small group pods", "Real-world problem solving", "Builds belief, not just skill"],
  },
  {
    n: "02",
    icon: RocketLaunchIcon,
    name: "STEM Core",
    grades: "Pre-K - 8",
    tag: "Innovation Engine",
    desc: "Build bridges, break codes, and launch rockets. Hands-on, curiosity-driven innovation for kids ready to make waves.",
    points: ["Design & build challenges", "Coding foundations", "Curiosity-led labs"],
  },
  {
    n: "03",
    icon: CurrencyDollarIcon,
    name: "Entrepreneurship",
    grades: "Grades 5 - 8",
    tag: "Own Your Future",
    desc: "Kids do not just talk business, they build it. From pitch decks to budget, young minds learn to think like owners and turn sparks into startups.",
    points: ["Pitch decks & budgeting", "Real problem solving", "Startup mindset"],
  },
  {
    n: "04",
    icon: TrophyIcon,
    name: "Sports Core",
    grades: "Pre-K - 8",
    tag: "Leaders, Not Just Athletes",
    desc: "We are raising leaders, not just athletes. Stamina, strategy, and self-worth through age-based drills and team play in real professional environments.",
    points: ["Noncompetitive", "Age-based drills", "Real facilities"],
  },
  {
    n: "05",
    icon: CpuChipIcon,
    name: "E-Gaming Core",
    grades: "Grades 3 - 8",
    tag: "Play Hard, Learn Harder",
    desc: "Competitive esports with a mission. Build reaction time, teamwork, and digital fluency toward tech and STEM careers, ending in the EGL Championship.",
    points: ["Game Day battles", "Digital fluency", "Tech & STEM careers"],
  },
];

export default function CoreLabsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Core Labs"
        title="Powered by Curiosity,"
        highlight="Designed for the Future"
        description="The innovation engine of Kid Explorer Clubs, where kids do not just learn, they live it. Hands-on, real tools, and moments engineered to inspire."
        ctas={[{ label: "Enroll Now", href: "/enroll" }]}
      />

      <ClubsNumberBand
        stats={[
          { value: "5", label: "Core Labs" },
          { value: "Pre-K - 8", label: "Grade Range" },
          { value: "3 - 8", label: "E-Gaming Grades" },
          { value: "100%", label: "Hands-On" },
        ]}
      />

      <ClubsEditorial
        eyebrow="The Innovation Engine"
        title="Where Kids Do Not Just Learn,"
        highlight="They Live It."
        body="Every explorer sharpens skills through real tools and real projects. From 3D-printed rockets to glow-in-the-dark chemistry, each lab is engineered to spark wonder and build mastery."
      />

      {/* Labs showcase - designed list, not generic cards */}
      <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-14 text-center">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1493E8]">
                Pick Your Lab
              </span>
              <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-[#01325D] sm:text-[42px] lg:text-[50px]">
                Build Your Legend
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.08}>
            {labs.map((lab) => (
              <StaggerItem key={lab.n}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group grid grid-cols-1 gap-6 rounded-[28px] border border-[#1493E8]/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10"
                >
                  <div className="flex items-center gap-5 lg:w-56">
                    <span className="font-serif text-[44px] font-medium leading-none text-[#0FD3C6]/40 transition-colors group-hover:text-[#0FD3C6]">
                      {lab.n}
                    </span>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8]">
                      <lab.icon className="h-7 w-7" />
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif text-[26px] font-medium text-[#01325D]">{lab.name}</h3>
                      <span className="rounded-full bg-[#01325D] px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#0FD3C6]">
                        {lab.grades}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#1493E8]">
                      {lab.tag}
                    </p>
                    <p className="mt-3 max-w-[560px] font-mono text-sm leading-relaxed text-gray-600">{lab.desc}</p>
                    <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                      {lab.points.map((p) => (
                        <li key={p} className="flex items-center gap-1.5 font-mono text-xs text-[#01325D]/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0FD3C6]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/enroll"
                    className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[#1493E8] opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Enroll
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClubsGlassFeature
        eyebrow="E-Gaming Core"
        title="Competitive Esports With a Mission"
        description="Hit the sticks in age-appropriate Game Day battles while stacking points through challenges that unlock tech, gaming, and STEM careers behind the screen. Every season ends in the EGL Championship, where top scorers flex their skills for prizes and digital dominance."
        ctaLabel="Explore E-Gaming"
        ctaHref="/summer-camps/esports-gaming"
      />

      <ClubsCTA
        title="Build Brilliance"
        description="Every child has a lane. Find the lab that matches their curiosity and start building."
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
