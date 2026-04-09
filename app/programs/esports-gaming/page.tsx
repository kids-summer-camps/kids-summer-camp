"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export const dynamic = "force-static";

export default function ESportsGamingPage() {
  const program = getProgramById("esports-gaming");
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["schedule"]));

  if (!program) {
    return <div>Program not found</div>;
  }

  const toggleSection = (section: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full">
        <Image
          src="/images/programs/esports-hero.png"
          alt={program.title}
          width={1440}
          height={850}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Program Snapshot Bar */}
      <section className="bg-[#01325D] py-6 sm:py-8">
        <div className="max-w-[1344px] mx-auto px-6 flex flex-wrap justify-center gap-[24px] sm:gap-[40px]">
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Lab</p>
            <p className="font-mono font-bold text-white text-[18px]">Esports Lab™</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Orbit Level</p>
            <p className="font-mono font-bold text-white text-[18px]">Orbit IV</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Ages</p>
            <p className="font-mono font-bold text-white text-[18px]">8–14</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Camp Hours</p>
            <p className="font-mono font-bold text-white text-[18px]">9 AM – 6 PM</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Aquatics</p>
            <p className="font-mono font-bold text-white text-[18px]">Swimming</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">CoreIQ</p>
            <p className="font-mono font-medium text-white text-[16px] text-center">Strategy analysis</p>
          </div>
        </div>
      </section>

      {/* Sidebar + Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Sidebar */}
            <div className="w-full lg:w-[294px] shrink-0 flex flex-col gap-[26px]">
              <Link
                href="/enroll"
                className="bg-[#b0ff40] h-[48px] w-full max-w-[239px] rounded-[12px] flex items-center justify-center hover:brightness-110 transition-all"
              >
                <span className="font-mono font-bold text-[#1493E8] text-[20px]">
                  ENROLL TODAY:
                </span>
              </Link>

              <Link
                href="/programs"
                className="border border-[#1493E8] h-[48px] w-full max-w-[239px] rounded-[12px] flex items-center justify-center hover:bg-[#1493E8]/5 transition-all"
              >
                <span className="font-mono font-bold text-[#1493E8] text-[16px]">
                  View Camp Schedule
                </span>
              </Link>

              <div className="w-full max-w-[260px]">
                <p className="font-mono font-bold text-[#1493E8] text-[20px] leading-[21px] mb-3">
                  SESSIONS
                </p>
                <p className="font-mono font-normal text-black text-[16px] leading-[24px]">
                  (I)9am – 3pm (II)3pm - 6pm
                </p>
                <p className="font-mono font-normal text-black text-[16px] leading-[24px]">
                  (III)12pm - 6pm
                </p>
              </div>

              <div className="w-full max-w-[294px] h-px bg-[#d9d9d9]" />

              <div>
                <p className="font-mono font-bold text-[#1493E8] text-[20px] leading-[21px] mb-3">
                  AGES
                </p>
                <p className="font-mono font-medium text-black text-[16px] leading-[24px]">
                  Rising Grades:
                </p>
                <p className="font-mono font-normal text-black text-[16px] leading-[24px]">
                  4-8
                </p>
              </div>

              <div className="w-full max-w-[294px] h-px bg-[#d9d9d9]" />

              <div className="w-full max-w-[277px]">
                <p className="font-mono font-bold text-[#1493E8] text-[20px] leading-[21px] mb-3">
                  TRANSPORTATION
                </p>
                <p className="font-mono font-normal text-black text-[16px] leading-[21px]">
                  City wide and Suburban Bus Stops
                </p>
              </div>

              <div className="w-full max-w-[294px] h-px bg-[#d9d9d9]" />
            </div>

            {/* Right Main Content */}
            <div className="flex-1 min-w-0">
              <div className="w-full h-px bg-[#d9d9d9] mb-8" />

              <h2
                className="font-serif font-bold text-[#01325D] text-[32px] sm:text-[40px] uppercase leading-tight mb-8"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Esports Lab™
              </h2>

              <p className="font-mono font-normal text-black text-[16px] leading-relaxed mb-8">
                Esports Lab™ is where young minds take control of the digital world—building, creating, and leading with confidence in a future powered by technology.
              </p>

              {/* Video */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] mb-8 overflow-hidden rounded-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/Esport.mp4" type="video/mp4" />
                </video>
              </div>

              <p className="font-mono font-bold text-black text-[16px] mb-4">
                <span>Learn about the Kid Explorer Camp Philosophy </span>
                <Link href="/philosophy" className="text-[#0FD3C6] hover:underline">
                  (HYPERLINK CLICKABLE TO PHILOSOPHY PAGE)
                </Link>
              </p>

              {/* WHY WE'RE DIFFERENT */}
              <div className="mt-12 mb-12">
                <p className="font-mono font-bold text-black text-[16px] mb-4">
                  Limitless By Nature —Kid Explorer Camp 2026
                </p>

                <h3
                  className="font-serif font-bold text-[#01325D] text-[24px] sm:text-[32px] uppercase leading-tight mb-8"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  WHY WE&apos;RE DIFFERENT
                </h3>

                <div className="font-mono font-normal text-black text-[16px] sm:text-[18px] leading-relaxed space-y-6">
                  <p>
                    At Kid Explorer Esports Lab™, students go beyond playing games—they learn how games are built, designed, and mastered.
                  </p>
                  <p>
                    Campers create their own game concepts, develop digital story worlds, and learn the strategies behind competitive esports.
                  </p>
                  <p>
                    Through team-based challenges and tournaments, students build communication, leadership, and critical thinking skills in a structured and balanced environment.
                  </p>
                  <p>
                    Each day combines digital labs, physical activity, and academic sessions to create a focused and engaging experience.
                  </p>
                </div>
              </div>

              {/* SWIM & WATER PLAY */}
              <div className="mb-12">
                <h3
                  className="font-serif font-bold text-[#01325D] text-[24px] sm:text-[32px] uppercase leading-tight mb-8"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  SWIM &amp; WATER PLAY
                </h3>

                <div className="font-mono font-normal text-black text-[16px] leading-relaxed space-y-6">
                  <p>
                    Some days, it&apos;s splashdowns. Other days, it&apos;s small victories that feel cosmic.
                  </p>
                  <p>
                    Every camper in Chicago, IL gets the chance to cool off and level up with daily water play and instructional swim sessions built for confidence, safety, and skill.
                  </p>
                  <p>
                    From first-time floaters to mini Olympians, our trained staff keep a 3:1 camper-to-coach ratio in the pool, ensuring every child gets the attention, feedback, and encouragement they deserve. Parents receive progress updates that celebrate every dive, every kick, every brave jump into the deep end.
                  </p>
                  <p>
                    And when it&apos;s not swim time? We turn up the fun with water play zones, splash games, and creative challenges that bring the same energy and joy all while keeping our explorers cool under the Chicago summer sun.
                  </p>
                </div>
              </div>

              {/* Notes for Parents */}
              <div className="mb-12">
                <h3 className="font-mono font-bold text-black text-[24px] mb-6">
                  Notes for Parents
                </h3>

                <ul className="list-disc pl-6 space-y-2 font-mono font-normal text-black text-[16px] leading-relaxed mb-8">
                  <li>Each age group follows a unique daily schedule built around their developmental rhythm.</li>
                  <li>Lunch times, water breaks, and bathroom breaks are structured and always supervised.</li>
                  <li>Sunscreen is applied throughout the day — because safety is part of our design.</li>
                  <li>Quiet moments are woven into our day for reflection, reset, and rest.</li>
                  <li>Our staff are trained to create a balance of high energy, high learning, and high care — the perfect trio for a transformative summer.</li>
                </ul>

                <p className="font-mono font-normal text-black text-[16px] leading-relaxed">
                  Kid Explorer Camp — Chicago, IL<br />
                  They come curious. They leave legends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bordered Dropdown Sections */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[120px]">
          <div className="w-full">
            <AccordionSection
              title="Daily Schedule Example"
              isOpen={openSections.has("schedule")}
              onToggle={() => toggleSection("schedule")}
              isFirst={true}
            >
              <div className="font-mono font-medium text-[#01325D] text-[16px] leading-[24px] whitespace-pre-line">
                {`09:00 — Explore Stations
10:00 — CoreIQ
11:00 — Snack
11:30 — Sports Training
12:00 — Lunch
12:30 — CoreIQ
1:30  — Movement
2:00  — Swimming
2:45  — Snack
3:00  — Dismissal`}
              </div>
            </AccordionSection>

            <AccordionSection
              title="Skills"
              isOpen={openSections.has("skills")}
              onToggle={() => toggleSection("skills")}
            >
              <ul className="list-disc pl-6 font-mono text-[#01325D] text-[16px] leading-[26px]">
                <li><span className="font-bold">Strategic Thinking</span> <span className="font-normal">— decision-making, game sense, situational awareness, and adaptive play</span></li>
                <li><span className="font-bold">Team Coordination</span> <span className="font-normal">— communication, defined roles, collaboration, and shared objectives</span></li>
                <li><span className="font-bold">Game Design Foundations</span> <span className="font-normal">— mechanics, level design, systems thinking, and user experience</span></li>
                <li><span className="font-bold">Story Development &amp; Narrative Writing</span> <span className="font-normal">— character creation, world-building, plot structure, dialogue, and storytelling through games</span></li>
                <li><span className="font-bold">Creative Writing Skills</span> <span className="font-normal">— scripting scenes, descriptive language, sequencing ideas, and translating imagination into written form</span></li>
                <li><span className="font-bold">Digital Literacy</span> <span className="font-normal">— responsible tech use, platform navigation, and technical fluency</span></li>
                <li><span className="font-bold">Reaction &amp; Focus</span> <span className="font-normal">— hand-eye coordination, timing, attention control, and sustained concentration</span></li>
                <li><span className="font-bold">Problem-Solving</span> <span className="font-normal">— analyzing gameplay, debugging designs, and improving performance</span></li>
                <li><span className="font-bold">Content Creation</span> <span className="font-normal">— designing games, building concepts, and expressing ideas digitally</span></li>
                <li><span className="font-bold">Sportsmanship &amp; Discipline</span> <span className="font-normal">— composure, accountability, respect, and competitive integrity</span></li>
              </ul>
            </AccordionSection>

            <AccordionSection
              title="The Discipline"
              isOpen={openSections.has("discipline")}
              onToggle={() => toggleSection("discipline")}
            >
              <div className="font-mono text-[#01325D] leading-[24px]">
                <p className="font-bold text-[18px] mb-4">Focus, Control &amp; Creative Execution</p>
                <p className="font-normal text-[16px] mb-6">
                  Students learn to manage reactions, think strategically, and bring ideas to life with intention, balancing performance, creativity, and discipline.
                </p>
                <p className="font-bold text-[18px] mb-2">Outcome</p>
                <p className="font-normal text-[16px]">
                  Students develop high-level focus, strategic thinking, and creative expression while gaining real exposure to both competitive gaming and game creation. They leave with the ability to design, write, and present original game concepts, combining technical skill with storytelling and communication.
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Continuum"
              isOpen={openSections.has("continuum")}
              onToggle={() => toggleSection("continuum")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] max-w-[842px]">
                <p className="mb-6">
                  E-Sports &amp; Game Creation™ evolves into a year-round competitive and creative pathway within Launchpad™, where students continue to compete, design games, develop narratives, and refine both technical and storytelling skills. What begins as play becomes creation, strategy, and mastery over time.
                </p>
                <p className="font-medium text-[#0FD3C6] underline">
                  <Link href="/enroll" className="text-[#0FD3C6] hover:brightness-110">
                    Join Now  Learn More!
                  </Link>
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="FAQ"
              isOpen={openSections.has("faq")}
              onToggle={() => toggleSection("faq")}
              isLast={true}
            >
              <div className="font-mono text-[#01325D] leading-normal">
                <p className="font-bold text-[16px] mb-1">What is the E-Sports &amp; Game Creation™ Summer Camp?</p>
                <p className="font-normal text-[12px] mb-4">It&apos;s a structured program combining competitive gaming, game design, and storytelling, where students learn strategy, teamwork, and how games—and the stories behind them—are created.</p>

                <p className="font-bold text-[16px] mb-1">Is this just playing video games all day?</p>
                <p className="font-normal text-[12px] mb-4">No. Students engage in guided gameplay, strategy sessions, writing and story development, and hands-on game creation, ensuring a balanced and purposeful experience.</p>

                <p className="font-bold text-[16px] mb-1">Will my child learn how to create and write their own games?</p>
                <p className="font-normal text-[12px] mb-4">Yes. Students explore game design, character development, story writing, and basic development concepts, giving them the tools to create and express original ideas.</p>

                <p className="font-bold text-[16px] mb-1">What makes this program valuable beyond gaming?</p>
                <p className="font-normal text-[12px]">Students develop focus, strategy, teamwork, and writing skills</p>
              </div>
            </AccordionSection>
          </div>
        </div>
      </section>

      {/* Call to Action - Matching Home Page CTA */}
      <section className="w-full lg:pt-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1360px] mx-auto bg-[#0FD3C6] rounded-tl-[48px] rounded-tr-[48px] sm:rounded-tl-[60px] sm:rounded-tr-[60px] lg:rounded-tl-[72px] lg:rounded-tr-[72px] px-6 py-10 sm:px-12 sm:py-16 lg:px-28 lg:py-20"
        >
          <div className="max-w-[1128px] mx-auto flex flex-col gap-4 sm:gap-5 lg:gap-6 items-center text-center">
            <h2
              className="font-serif font-medium text-white text-[28px] sm:text-[36px] lg:text-[48px] leading-tight tracking-widest"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Launch Their Summer Now!!!
            </h2>
            <p className="font-mono font-medium text-white text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Your child already has curiosity and talent. Give those sparks a place to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[33px] items-center justify-center mt-2 sm:mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/enroll"
                  className="bg-[#1493E8] h-12 w-full sm:w-[200px] lg:w-[231px] rounded-[12px] px-6 flex items-center justify-center"
                >
                  <span className="font-mono font-medium text-white text-base whitespace-nowrap">
                    Enroll Now
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/programs"
                  className="bg-white/10 border border-white h-[47px] w-full sm:w-[200px] lg:w-[232px] rounded-[10px] px-6 flex items-center justify-center"
                >
                  <span className="font-mono font-medium text-white text-base whitespace-nowrap">
                    Explore Camps
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
  isFirst = false,
  isLast = false,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className={`
        border-[#99adbe] border-[0.5px] border-solid overflow-hidden
        ${isFirst ? "rounded-t-[40px]" : "border-t-0"}
        ${isLast ? "rounded-b-[40px]" : ""}
      `}
    >
      <button
        onClick={onToggle}
        className="w-full px-[48px] py-[36px] flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-mono font-bold text-[#0FD3C6] text-[24px] leading-normal text-center whitespace-nowrap">
          {title}
        </h3>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <path
            d="M12 6L12 18M12 6L7 11M12 6L17 11"
            stroke="#01325D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-[48px] pb-[36px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
