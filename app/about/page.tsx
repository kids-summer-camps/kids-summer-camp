"use client";

import React from "react";
import { LightBulbIcon, AcademicCapIcon, SparklesIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsEditorial, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const approach = [
  "Academic core skill-building",
  "Creative and physical expression",
  "Leadership development",
  "Identity-centered learning",
  "Real-world thinking",
];

const advantages = [
  {
    icon: RocketLaunchIcon,
    n: "01",
    title: "First and Only Pre-K to 8th Grade",
    desc: "We meet students as early as Pre-K and carry them through 8th grade, with age-appropriate leadership and enrichment that grows with them. Start early, stay steady, grow deep.",
  },
  {
    icon: AcademicCapIcon,
    n: "02",
    title: "Mission Core = Required Academic Mastery",
    desc: "No fluff, no gaps. Every child begins with a non-negotiable foundation in reading, grammar, writing, math, and test prep. Confidence comes from competence.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="About the Club"
        title="Why We"
        highlight="Move Different"
        description="Kid Explorer Clubs is a launch system for young minds. From Pre-K through 8th grade, kids build identity, sharpen skills, and explore who they are becoming."
      />

      <ClubsNumberBand
        stats={[
          { value: "Pre-K - 8", label: "Grades Served" },
          { value: "5", label: "Core Labs" },
          { value: "Year-Round", label: "One Journey" },
          { value: "1", label: "Continuous Club" },
        ]}
      />

      <ClubsEditorial
        eyebrow="Founder's Story"
        title="Built From"
        highlight="the Inside Out"
        body="Kid Explorer Clubs was born from a gap our founder saw firsthand as an educator, innovator, and parent. Too many programs were too soft, too slow, or too scattered. So the question became: what if kids could grow in identity, mastery, and mindset all in one space? What if we started earlier, Pre-K instead of grade 3, and offered something bold enough to shape the future but grounded enough to serve real families?"
        reversed
      />

      {/* Approach */}
      <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-12 text-center">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1493E8]">
                Our Approach
              </span>
              <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-[#01325D] sm:text-[42px] lg:text-[50px]">
                We Do Not Fill Time. We Ignite It.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5" staggerDelay={0.06}>
            {approach.map((item, i) => (
              <StaggerItem key={item}>
                <div className="group flex h-full flex-col items-center rounded-[24px] border border-[#1493E8]/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8]">
                    <LightBulbIcon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-mono text-sm font-medium leading-snug text-[#01325D]">{item}</p>
                  <span className="mt-3 font-serif text-[32px] font-medium leading-none text-[#0FD3C6]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Advantages */}
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {advantages.map((a, i) => (
              <FadeIn key={a.n} direction="up" delay={i * 0.1}>
                <div className="group flex h-full flex-col rounded-[28px] bg-[#01325D] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0FD3C6]/15 text-[#0FD3C6]">
                      <a.icon className="h-7 w-7" />
                    </span>
                    <span className="font-serif text-[44px] font-medium leading-none text-[#0FD3C6]/30">
                      {a.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-[24px] font-medium text-white sm:text-[28px]">
                    {a.title}
                  </h3>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-white/75 sm:text-base">
                    {a.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Vision + closing */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 text-center sm:px-8">
          <FadeIn direction="up">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1493E8]">
              Our Mission & Vision
            </span>
            <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-[#01325D] sm:text-[42px] lg:text-[48px]">
              No Blueprints. Just Breakthroughs.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0FD3C6]/15 text-[#0FD3C6]">
                  <SparklesIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-[22px] font-medium text-[#01325D]">Our Mission</h3>
                <p className="mt-2 font-mono text-sm leading-relaxed text-gray-600">
                  We are building what has never been done, for kids who will do more.
                </p>
              </div>
              <div>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8]">
                  <RocketLaunchIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-serif text-[22px] font-medium text-[#01325D]">Our Vision</h3>
                <p className="mt-2 font-mono text-sm leading-relaxed text-gray-600">
                  A future where every child knows who they are, what they stand for, and how to lead from it.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ClubsGlassFeature
        eyebrow="The Full Arc"
        title="Why Families Choose the Full Journey"
        description="When kids stay for the full arc, growth gets exponential. A consistent learning and leadership pathway, integrated mentorship, first access to specialized labs, and deeper identity work."
        ctaLabel="Explore the Journey"
        ctaHref="/programs"
      />

      <ClubsCTA
        title="Join the Club"
        description="One continuous journey, from Pre-K through 8th grade and beyond."
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
