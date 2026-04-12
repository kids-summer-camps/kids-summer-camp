"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { Dreme9Section } from "@/components/experience/Dreme9Section";

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
      "A “Know Thyself” moment.",
      "",
      "Not just effort. Outcome.",
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
          className="font-serif text-2xl font-bold tracking-[0.72px] text-[#1493E8] sm:text-3xl lg:text-[36px]"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
        >
          {title}{" "}
          {subtitle && (
            <span
              className="font-serif text-lg font-medium text-black sm:text-xl lg:text-[24px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {subtitle}
            </span>
          )}
        </h2>
        <div className="flex items-stretch gap-4">
          <div className="w-[3px] shrink-0 rounded-full bg-[#1493E8]" />
          <div className="font-mono text-base font-medium leading-[24px] text-black sm:text-lg lg:text-[20px]">
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
      {/* 1 — Header: media (clipped) + copy (separate block — no overlap with video’s own typography) */}
      <section className="relative isolate w-full bg-[#01325D]">
        {/* Video only occupies this region; it does not extend under the headline */}
        <div className="relative isolate min-h-[min(44vh,400px)] w-full overflow-hidden pt-16 sm:min-h-[min(48vh,480px)] sm:pt-20 md:min-h-[min(60vh,680px)] md:pt-24 lg:min-h-[min(64vh,800px)] lg:pt-28 xl:min-h-[min(66vh,920px)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/experience-hero.png"
            className="absolute inset-0 h-full w-full object-cover object-[center_20%] sm:object-[center_42%] md:object-[center_40%]"
            controlsList="nodownload"
          >
            <source src="/videos/experience-hero.mp4" type="video/mp4" />
          </video>
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#01325D]/55 via-black/20 to-black/30"
            aria-hidden
          />
        </div>
        <div className="relative border-t border-white/10 bg-[#01325D] px-5 pb-12 pt-10 shadow-[0_-8px_32px_rgba(0,0,0,0.2)] sm:px-8 sm:pb-14 sm:pt-12 md:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-[1320px] lg:px-4">
            <FadeIn direction="none" delay={0}>
              <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center sm:mx-0 sm:max-w-[min(100%,40rem)] sm:items-start sm:text-left lg:max-w-176">
                <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#0FD3C6] sm:text-xs">
                  Experience is our Curriculum
                </p>
                <h1
                  className="mb-4 text-balance font-serif text-[2.125rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-[1.05] lg:text-[56px]"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  Launch Curiosity
                </h1>
                <p className="max-w-[34ch] text-pretty font-mono text-[0.9375rem] font-medium leading-relaxed text-white/95 sm:max-w-[min(100%,36rem)] sm:text-lg lg:text-xl">
                  Every Kid Explorer Camp Lab moves students from Spark to Grit.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="scroll-mt-20 border-b border-[#d9d9d9] bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[792px] px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up" delay={0}>
            <h2
              className="mb-6 font-serif text-2xl font-bold uppercase leading-tight text-[#1493E8] sm:text-3xl lg:text-[36px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Philosophy
            </h2>
            <p
              className="mb-4 font-serif text-xl font-bold uppercase leading-tight text-[#1493E8] sm:text-2xl"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              We&apos;re About The Wonderment
            </p>
          </FadeIn>
          <div className="space-y-4 font-mono text-sm font-normal leading-relaxed text-black sm:text-base">
            <FadeIn direction="up" delay={0.05}>
              <p>
                We don&apos;t hand out blueprints here — we hand out launchpads. At Kid Explorer Camp, we don&apos;t teach
                kids what to think; we give them the space to blow our minds. Some of them already carry the blueprint for a
                whole civilization in their back pocket.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p>
                We believe wonder is the real flex — that spark that turns curiosity into creation, and mistakes into
                momentum. Our job isn&apos;t to teach them who they are. Our job is to stay out of their way long enough for
                them to find out first.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <p>
                Wonderment isn&apos;t a mood. It&apos;s a movement. It&apos;s our secret sauce. And when that spark lights,
                we don&apos;t bottle it — we build a universe around it.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section id="founder-story" className="scroll-mt-20 bg-[#f8fcff] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[792px] px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up" delay={0}>
            <h2
              className="mb-6 font-serif text-2xl font-bold uppercase leading-tight text-[#1493E8] sm:text-3xl lg:text-[36px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              A Story
            </h2>
            <p
              className="mb-8 font-serif text-lg font-bold italic leading-snug text-[#01325D] sm:text-xl"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              &ldquo;When the world didn&apos;t build it for us, we built it ourselves.&rdquo;
            </p>
          </FadeIn>
          <div className="space-y-4 font-mono text-sm font-medium leading-relaxed text-black sm:text-base">
            <FadeIn direction="up" delay={0.05}>
              <p>
                It all began with a mom — not an executive, not a brand, just a mother who wanted more for her kids. She saw
                the gap between play and purpose, between learning and legacy. So she built Kid Explorer Camp — where
                curiosity is currency and every child gets to see themselves as the blueprint for the future.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <p>
                To build what didn&apos;t exist — for our kids, and for every kid after them. Because the mom who built this
                camp wasn&apos;t just solving a problem — she was starting a movement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <Dreme9Section />

      {/* Be / Do / Play */}
      {sections.map((section, index) => (
        <section key={section.title} className={`${section.bg} py-12 sm:py-16`}>
          <div className="mx-auto max-w-[792px] px-6 sm:px-8 lg:px-12">
            <ContentSection title={section.title} content={section.content} delay={0.1 * index} />
          </div>
        </section>
      ))}

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1212px] px-6">
          <FadeIn direction="up" delay={0}>
            <div className="rounded-[40px] bg-[#1493E8] px-8 py-16 text-center sm:px-16 sm:py-20 lg:px-[80px]">
              <h2
                className="mb-6 font-serif text-2xl font-bold tracking-[0.72px] text-white sm:text-3xl lg:text-[36px]"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                THE BALANCE
              </h2>
              <div className="mx-auto max-w-[526px] font-mono text-sm font-normal leading-[26px] text-white sm:text-base">
                <p>Too much structure—burnout.</p>
                <p>Too much play—no progress.</p>
                <p className="h-6" />
                <p>We run both. Every day.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {bottomSections.map((section, index) => (
        <section key={section.title} className="py-8 sm:py-12">
          <div className="mx-auto max-w-[792px] px-6 sm:px-8 lg:px-12">
            <ContentSection
              title={section.title}
              subtitle={section.subtitle}
              content={section.content}
              delay={0.1 * index}
            />
          </div>
        </section>
      ))}

      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-[792px] px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up" delay={0}>
            <div className="font-mono text-lg leading-[24px] sm:text-[20px]">
              <p className="font-medium text-[#1493E8]">Be grounded. Do real work. Play with purpose.</p>
              <p className="h-6" />
              <p className="font-normal text-black">Repeat it enough…</p>
              <p className="h-6" />
              <p className="font-normal text-black">They won&apos;t just participate. They&apos;ll stand out.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full px-4 pt-8 sm:px-6 sm:pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1360px] rounded-tl-[48px] rounded-tr-[48px] bg-[#01325D] px-6 py-16 sm:rounded-tl-[60px] sm:rounded-tr-[60px] sm:px-12 sm:py-20 lg:rounded-tl-[72px] lg:rounded-tr-[72px] lg:px-28 lg:py-24"
        >
          <div className="mx-auto flex max-w-[1128px] flex-col items-center gap-6 text-center">
            <h2
              className="font-serif text-[28px] font-medium leading-tight tracking-[4.8px] text-white sm:text-[36px] lg:text-[48px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Be &bull; Do &bull; Play
            </h2>
            <p className="font-mono text-base font-medium leading-relaxed text-white sm:text-lg lg:text-[20px]">
              Give them a summer that actually moves them forward
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/enroll"
                className="flex h-[54px] w-full items-center justify-center rounded-[12px] bg-[#0FD3C6] px-6 sm:w-[320px] lg:w-[386px]"
              >
                <span className="whitespace-nowrap font-mono text-base font-medium text-white">Launch Their Summer</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
