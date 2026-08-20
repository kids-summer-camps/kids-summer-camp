"use client";

import React from "react";
import { AcademicCapIcon, BoltIcon, CpuChipIcon, RocketLaunchIcon, SunIcon, CloudIcon, SparklesIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsNumberBand, ClubsGlassFeature, ClubsProgramCarousel, ClubsCTA } from "@/components/clubs";

const carouselPrograms = [
  {
    id: "afterschool",
    name: "Afterschool",
    tag: "Tier 0+",
    desc: "The flagship year-round journey. Build through the school year, apply it in the summer, advance every year.",
    href: "/afterschool",
    accent: "#0FD3C6",
    icon: AcademicCapIcon,
  },
  {
    id: "launch-sequence",
    name: "Launch Sequence",
    tag: "Pre-K - 2",
    desc: "A year-round model starting with Pre-K, full of discovery, movement, and momentum.",
    href: "/programs/launch-sequence",
    accent: "#1493E8",
    icon: BoltIcon,
  },
  {
    id: "innogenius",
    name: "InnoGenius",
    tag: "3rd - 5th",
    desc: "For bold, curious minds. Tech, innovation, and creativity fused into every single day.",
    href: "/programs/innogenius",
    accent: "#0FD3C6",
    icon: CpuChipIcon,
  },
  {
    id: "nextgen-legends",
    name: "NextGen Legends",
    tag: "6th - 8th",
    desc: "For future icons ready to turn bold ideas into real-world impact.",
    href: "/programs/nextgen-legends",
    accent: "#1493E8",
    icon: RocketLaunchIcon,
  },
  {
    id: "summer-camps",
    name: "Summer Camps",
    tag: "Apply the Year",
    desc: "Nine tracks across STEM, sports, entrepreneurship, and leadership.",
    href: "/summer-camps",
    accent: "#0FD3C6",
    icon: SunIcon,
  },
  {
    id: "winter-camps",
    name: "Winter Camps",
    tag: "2-3 Weeks",
    desc: "Keep the journey moving through the winter break.",
    href: "/winter-camps",
    accent: "#1493E8",
    icon: CloudIcon,
  },
  {
    id: "spring-camps",
    name: "Spring Camps",
    tag: "1 Week",
    desc: "A burst of hands-on STEM, movement, and creativity.",
    href: "/spring-camps",
    accent: "#0FD3C6",
    icon: SparklesIcon,
  },
  {
    id: "college-readiness",
    name: "College Readiness",
    tag: "Mission: Future",
    desc: "Grades 8-12. Academic mastery, leadership, and real-world readiness.",
    href: "/college-readiness",
    accent: "#1493E8",
    icon: BookOpenIcon,
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Program Tracks"
        title="Where Elevation"
        highlight="Begins"
        description="Every Kid Explorer Clubs program is built to ignite momentum. From STEM to storytelling, sports to entrepreneurship, students move beyond the basics and into mastery."
        ctas={[
          { label: "Enroll Now", href: "/enroll" },
          { label: "Explore Camps", href: "/summer-camps", variant: "outline" },
        ]}
      />

      <ClubsNumberBand
        stats={[
          { value: "8", label: "Programs" },
          { value: "Pre-K - 8", label: "Full Range" },
          { value: "5", label: "Core Labs" },
          { value: "Year-Round", label: "One Journey" },
        ]}
      />

      <ClubsProgramCarousel
        eyebrow="Launch Sequences"
        title="Choose Your Launch"
        description="One seamless system, all year. Each program is a chapter of the same journey, and the child never leaves the Club."
        programs={carouselPrograms}
      />

      <ClubsGlassFeature
        eyebrow="The Full Arc"
        title="The Child Never Leaves the Club"
        description="Prelude to Tier 0+, summer to college readiness. Every program is a chapter of the same continuous journey. Growth compounds because the arc never breaks."
        ctaLabel="See the Journey"
        ctaHref="/afterschool"
      />

      <ClubsCTA
        title="Find the Right Fit"
        description="Every child has a lane. Let us help you find the mission that matches their curiosity and energy."
        primaryLabel="Sign Up Now"
        primaryHref="/enroll"
        secondaryLabel="Explore Summer Camps"
        secondaryHref="/summer-camps"
      />
    </div>
  );
}
