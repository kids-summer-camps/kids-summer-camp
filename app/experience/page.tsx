"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

const sections = [
  {
    title: "Be Ready",
    bg: "bg-white",
    content: [
      "Before anything else—build the foundation.",
      "",
      "Focus.",
      "Curiosity.",
      "Discipline.",
      "",
      "This is where it starts. Not with results.",
      "",
      "With who they're becoming.",
    ],
  },
  {
    title: "Do the work",
    bg: "bg-[#faffff]",
    content: [
      "Ideas don't matter if nothing gets built",
      "",
      "So we build.",
      "Robots",
      "Games",
      "Race cars",
      "Companies",
      "",
      "Skills that actually transfer.",
      "No spectators. Everyone moves.",
    ],
  },
  {
    title: "Play Energy = Creativity",
    bg: "bg-white",
    content: [
      "Movement isn't optional.",
      "",
      "It's part of the system.",
      "Swimming.",
      "Sports.",
      "Competition.",
      "Recovery.",
      "",
      "Energy stays high. Confidence follows.",
    ],
  },
];

const bottomSections = [
  {
    title: "What Happens Here",
    content: [
      "They get sharper.",
      "Stronger.",
      "More focused.",
      "",
      "They start finishing things.",
      "",
      "They start believing they can.",
    ],
  },
  {
    title: "How to Choose",
    subtitle: "(breathe there are no mistakes)",
    content: [
      "Watch your child.",
      "",
      "What do they talk about without being asked?",
      "What do they lean into?",
      "",
      "That's the signal.",
      "",
      "Build from there.",
    ],
  },
  {
    title: "Where It Leads",
    content: [
      "Every program ends with something real:",
      "",
      "A race.",
      "A pitch.",
      "A build.",
      "A win.",
      "",
      "Not just effort. Outcome!!!",
    ],
  },
];

function ContentSection({
  title,
  subtitle,
  content,
  delay = 0,
}: {
  title: string;
  subtitle?: string;
  content: string[];
  delay?: number;
}) {
  return (
    <FadeIn direction="up" delay={delay}>
      <div className="flex flex-col gap-[18px]">
        <h2
          className="font-serif font-bold text-[#1493E8] text-2xl sm:text-3xl lg:text-[36px] tracking-[0.72px]"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
        >
          {title}{" "}
          {subtitle && (
            <span
              className="font-serif font-medium text-black text-lg sm:text-xl lg:text-[24px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {subtitle}
            </span>
          )}
        </h2>
        <div className="flex gap-4 items-stretch">
          <div className="w-[3px] bg-[#1493E8] shrink-0 rounded-full" />
          <div className="font-mono font-medium text-black text-base sm:text-lg lg:text-[20px] leading-[24px]">
            {content.map((line, i) =>
              line === "" ? (
                <p key={i} className="h-6" />
              ) : (
                <p key={i} className="leading-[24px]">
                  {line}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/experience-hero.png"
          className="w-full h-auto"
          controlsList="nodownload"
        >
          <source src="/videos/experience-hero.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Content Sections: Be Ready, Do the work, Play Energy */}
      {sections.map((section, index) => (
        <section key={section.title} className={`${section.bg} py-12 sm:py-16`}>
          <div className="max-w-[792px] mx-auto px-6 sm:px-8 lg:px-12">
            <ContentSection
              title={section.title}
              content={section.content}
              delay={0.1 * index}
            />
          </div>
        </section>
      ))}

      {/* The Balance */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1212px] mx-auto px-6">
          <FadeIn direction="up" delay={0}>
            <div className="bg-[#1493E8] rounded-[40px] px-8 sm:px-16 lg:px-[80px] py-16 sm:py-20 text-center">
              <h2
                className="font-serif font-bold text-white text-2xl sm:text-3xl lg:text-[36px] tracking-[0.72px] mb-6"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                THE BALANCE
              </h2>
              <div className="font-mono font-normal text-white text-sm sm:text-base leading-[26px] max-w-[526px] mx-auto">
                <p>Too much structure—burnout.</p>
                <p>Too much play—no progress.</p>
                <p className="h-6" />
                <p>We run both. Every day.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom Sections: What Happens Here, How to Choose, Where It Leads */}
      {bottomSections.map((section, index) => (
        <section key={section.title} className="py-8 sm:py-12">
          <div className="max-w-[792px] mx-auto px-6 sm:px-8 lg:px-12">
            <ContentSection
              title={section.title}
              subtitle={section.subtitle}
              content={section.content}
              delay={0.1 * index}
            />
          </div>
        </section>
      ))}

      {/* Closing Text */}
      <section className="py-8 sm:py-12">
        <div className="max-w-[792px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up" delay={0}>
            <div className="font-mono text-lg sm:text-[20px] leading-[24px]">
              <p className="font-medium text-[#1493E8]">Be grounded. Do real work. Play with purpose.</p>
              <p className="h-6" />
              <p className="font-normal text-black">Repeat it enough…</p>
              <p className="h-6" />
              <p className="font-normal text-black">They won&apos;t just participate. They&apos;ll stand out.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 pt-8 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1360px] mx-auto bg-[#01325D] rounded-tl-[48px] rounded-tr-[48px] sm:rounded-tl-[60px] sm:rounded-tr-[60px] lg:rounded-tl-[72px] lg:rounded-tr-[72px] px-6 py-16 sm:px-12 sm:py-20 lg:px-28 lg:py-24"
        >
          <div className="max-w-[1128px] mx-auto flex flex-col gap-6 items-center text-center">
            <h2
              className="font-serif font-medium text-white text-[28px] sm:text-[36px] lg:text-[48px] leading-tight tracking-[4.8px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Be &bull; Do &bull; Play!!!
            </h2>
            <p className="font-mono font-medium text-white text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Give them a summer that actually moves them forward
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/enroll"
                className="bg-[#0FD3C6] h-[54px] w-full sm:w-[320px] lg:w-[386px] rounded-[12px] px-6 flex items-center justify-center"
              >
                <span className="font-mono font-medium text-white text-base whitespace-nowrap">
                  Launch Their Summer
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
