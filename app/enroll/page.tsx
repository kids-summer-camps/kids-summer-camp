"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AcademicCapIcon, SunIcon, CloudIcon, SparklesIcon, BookOpenIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsSectionHeader, ClubsNumberBand, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { PORTAL_SIGNUP_URL } from "@/lib/site";

const programs = [
  {
    icon: AcademicCapIcon,
    name: "Afterschool",
    tag: "Tier 0+ · The Mission Starts Here",
    href: "/afterschool",
    desc: "A year-round learning journey. Build through the school year, apply it in the summer, advance every year.",
  },
  {
    icon: SunIcon,
    name: "Summer Camps",
    tag: "Where Learning Comes Alive",
    href: "/summer-camps",
    desc: "Nine tracks across STEM, sports, entrepreneurship, and leadership.",
  },
  {
    icon: CloudIcon,
    name: "Winter Camps",
    tag: "Stay Active During the Break",
    href: "/winter-camps",
    desc: "Keep the journey moving through the winter break.",
  },
  {
    icon: SparklesIcon,
    name: "Spring Camps",
    tag: "A Week of Exploration",
    href: "/spring-camps",
    desc: "A burst of hands-on STEM, movement, and creativity.",
  },
  {
    icon: BookOpenIcon,
    name: "College Readiness",
    tag: "Mission: Future · Grades 8-12",
    href: "/college-readiness",
    desc: "Academic mastery, leadership, and real-world readiness.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose Your Program",
    desc: "Pick the mission that fits your child's age and interests. Every program is a chapter of the same journey.",
  },
  {
    n: "02",
    title: "Create Your Account",
    desc: "Sign up to create your family account. One account follows your child across every program and every year.",
  },
  {
    n: "03",
    title: "Enroll in the Portal",
    desc: "Complete registration, select schedules, and manage everything from the Kid Explorer Clubs portal.",
  },
];

export default function EnrollPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Enrollment"
        title="Start Your"
        highlight="Journey"
        description="One account follows your child across every program and every year. Choose a program, create your family account, and enroll through the portal."
        ctas={[
          { label: "Sign Up Now", href: PORTAL_SIGNUP_URL },
          { label: "Explore Programs", href: "/programs", variant: "outline" },
        ]}
      />

      <ClubsNumberBand
        stats={[
          { value: "1", label: "Family Account" },
          { value: "5", label: "Programs" },
          { value: "Pre-K - 8", label: "Grades Served" },
          { value: "All Year", label: "One Journey" },
        ]}
      />

      {/* Steps */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <ClubsSectionHeader
            eyebrow="How It Works"
            title="Three Steps to Launch"
            description="Enrollment is simple, and it all starts with one account that grows with your family."
          />

          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3" staggerDelay={0.1}>
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="group relative flex h-full flex-col rounded-[28px] border border-[#1493E8]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-9">
                  <span className="font-serif text-[52px] font-medium leading-none text-[#0FD3C6]/30 transition-colors group-hover:text-[#0FD3C6]">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-serif text-[24px] font-medium text-[#01325D]">{s.title}</h3>
                  <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Program selection */}
      <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <ClubsSectionHeader
            eyebrow="Choose Your Mission"
            title="Which Program Is Right?"
            description="Every program is a chapter of the same journey. The child never leaves the Club, they simply move to the next mission."
          />

          <StaggerContainer className="flex flex-col gap-5" staggerDelay={0.07}>
            {programs.map((p) => (
              <StaggerItem key={p.name}>
                <Link href={p.href} className="group block">
                  <div className="flex flex-col gap-5 rounded-[26px] border border-[#1493E8]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                    <div className="flex items-center gap-5 sm:w-[260px] sm:shrink-0">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] transition-colors duration-300 group-hover:bg-[#01325D] group-hover:text-[#0FD3C6]">
                        <p.icon className="h-7 w-7" />
                      </span>
                      <div>
                        <h3 className="font-serif text-[22px] font-medium text-[#01325D]">{p.name}</h3>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#1493E8]">
                          {p.tag}
                        </p>
                      </div>
                    </div>
                    <p className="flex-1 font-mono text-sm leading-relaxed text-gray-600">{p.desc}</p>
                    <span className="inline-flex items-center gap-2 font-mono text-sm font-bold text-[#1493E8] transition-transform group-hover:translate-x-1">
                      View
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Sign up CTA */}
          <FadeIn direction="up" delay={0.15}>
            <div className="mt-12 flex flex-col items-center gap-6 rounded-[32px] bg-[#01325D] p-8 text-center sm:p-12">
              <h3 className="font-serif text-[26px] font-medium text-white sm:text-[34px]">
                Ready to create your account?
              </h3>
              <p className="max-w-[520px] font-mono text-sm leading-relaxed text-white/75 sm:text-base">
                Sign up to start your family account. From there, the portal guides
                you through enrollment, schedules, and everything else.
              </p>
              <motion.a
                href={PORTAL_SIGNUP_URL}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[14px] bg-[#0FD3C6] px-10 font-mono text-base font-bold text-[#01325D] shadow-xl transition hover:bg-[#0cc0b4]"
              >
                Sign Up
                <ArrowRightIcon className="h-5 w-5" />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      <ClubsCTA
        title="Questions Before Enrolling?"
        description="Browse programs to find the right fit, or reach out to our team."
        primaryLabel="Sign Up Now"
        primaryHref={PORTAL_SIGNUP_URL}
        secondaryLabel="Browse Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
