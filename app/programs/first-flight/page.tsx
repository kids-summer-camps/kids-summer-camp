"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export default function FirstFlightPage() {
  const program = getProgramById("first-flight");
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
          src="/images/programs/launchpad-hero.png"
          alt={program.title}
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Program Snapshot Bar */}
      <section className="bg-[#1493E8]">
        <div className="max-w-[1440px] mx-auto px-6 py-6 sm:py-8 flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-[40px] text-white">
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Lab</p>
            <p className="font-mono font-bold text-[18px] uppercase">
              Launchpad<span className="text-[11.6px]">TM</span>
            </p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Orbit Level</p>
            <p className="font-mono font-bold text-[18px]">Orbit II</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Ages</p>
            <p className="font-mono font-bold text-[18px]">5–6</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Camp Hours</p>
            <p className="font-mono font-bold text-[18px]">9 AM – 6 PM</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Aquatics</p>
            <p className="font-mono font-bold text-[18px]">Swimming</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">CoreIQ</p>
            <p className="font-mono font-bold text-[18px]">Strengthen Skills</p>
          </div>
        </div>
      </section>

      {/* Sidebar + Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[83px]">
          <div className="grid grid-cols-1 lg:grid-cols-[294px_1fr] gap-10 lg:gap-16">
            {/* Sidebar */}
            <div className="flex flex-col gap-[26px]">
              <Link
                href="/enroll"
                className="bg-[#b0ff40] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center hover:brightness-110 transition-all"
              >
                <span className="font-mono font-bold text-[#1493E8] text-[20px]">
                  ENROLL TODAY:
                </span>
              </Link>

              <Link
                href="/schedule"
                className="border border-[#1493E8] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center hover:bg-[#1493E8]/5 transition-all"
              >
                <span className="font-mono font-bold text-[#1493E8] text-[16px]">
                  View Camp Schedule
                </span>
              </Link>

              <div>
                <p className="font-mono font-bold text-[#0FD3C6] text-[20px] leading-[21px] mb-2">
                  SESSIONS
                </p>
                <p className="font-mono font-normal text-black text-[16px] leading-[24px]">
                  (I)9am – 3pm (II)3pm - 6pm
                </p>
                <p className="font-mono font-normal text-black text-[16px] leading-[24px]">
                  (III)12pm - 6pm
                </p>
              </div>

              <div className="w-full h-px bg-[#d9d9d9]" />

              <div>
                <p className="font-mono font-bold text-[#0FD3C6] text-[20px] leading-[21px] mb-2">
                  AGES
                </p>
                <p className="font-mono font-medium text-black text-[20px] leading-[21px]">
                  Rising Grades:
                </p>
                <p className="font-mono font-normal text-black text-[16px] leading-[21px]">
                  K &amp; 1st
                </p>
              </div>

              <div className="w-full h-px bg-[#d9d9d9]" />

              <div>
                <p className="font-mono font-bold text-[#0FD3C6] text-[20px] leading-[21px] mb-2">
                  TRANSPORTATION
                </p>
                <p className="font-mono font-normal text-black text-[20px] leading-[21px]">
                  City wide and Suburban Bus Stops
                </p>
              </div>

              <div className="w-full h-px bg-[#d9d9d9]" />
            </div>

            {/* Main Content */}
            <div>
              <div className="w-full h-px bg-[#d9d9d9] mb-8" />

              <h2
                className="font-serif font-bold text-[#01325D] text-[36px] sm:text-[40px] uppercase leading-tight mb-6"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Launchpad<span className="font-semibold text-[25.8px]">™</span>
              </h2>

              <p className="font-mono font-normal text-black text-[16px] leading-relaxed mb-8 max-w-[929px]">
                This is the Launchpad™ for young dreamers ready to soar with curiosity. Every day is packed with creative projects, movement challenges, and discovery-driven play, building confidence and imagination along the way. Friendships form fast, creativity sparks faster, and independence grows at supersonic speed.
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
                  <source src="/videos/Launchpad.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Philosophy Link */}
              <p className="font-mono font-bold text-black text-[16px] mb-12">
                Learn about the Kid Explorer Camp Philosophy{" "}
                <Link href="/philosophy" className="text-[#0FD3C6] hover:underline">
                  (click here)
                </Link>
              </p>

              {/* WHY WE'RE DIFFERENT */}
              <div className="mb-12">
                <h3
                  className="font-serif font-bold text-[#01325D] text-[28px] sm:text-[32px] uppercase leading-tight mb-6"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  WHY WE&apos;RE DIFFERENT
                </h3>

                <p className="font-mono font-bold text-black text-[16px] leading-relaxed mb-4">
                  Limitless By Nature — Kid Explorer Camp 2026
                </p>

                <div className="font-mono font-normal text-black text-[16px] leading-relaxed space-y-4 max-w-[897px]">
                  <p>
                    At Kid Explorer Launchpad™, is where students begin discovering how ideas turn into real creations.
                  </p>
                  <p>
                    Through hands-on STEM exploration, building challenges, and collaborative activities, campers learn how to observe, experiment, and solve problems.
                  </p>
                  <p>
                    Each day blends science discovery, creative building, outdoor play, swimming, and academic sessions—helping children grow in confidence and curiosity.
                  </p>
                  <p>
                    Launchpad™ prepares students for Blueprint and future engineering-based programs.
                  </p>
                </div>
              </div>

              {/* SWIM & WATER PLAY */}
              <div className="mb-12">
                <h3
                  className="font-serif font-bold text-[#01325D] text-[28px] sm:text-[32px] uppercase leading-tight mb-6"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  SWIM &amp; WATER PLAY
                </h3>

                <div className="font-mono font-normal text-black text-[16px] leading-relaxed space-y-4 max-w-[897px]">
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
              <div className="mb-8">
                <h3 className="font-mono font-bold text-black text-[24px] mb-4">
                  Notes for Parents
                </h3>

                <ul className="list-disc pl-6 space-y-2 font-mono font-normal text-black text-[16px] leading-relaxed mb-6 max-w-[897px]">
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

      {/* Accordion Sections */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px]">
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
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[26px]">
                <ul className="list-disc space-y-1">
                  <li className="ms-[24px]">
                    Advanced Literacy{" "}
                    <span className="font-normal">— reading comprehension, writing fluency, grammar, and structured expression</span>
                  </li>
                  <li className="ms-[24px]">
                    Mathematical Fluency{" "}
                    <span className="font-normal">— number operations, problem-solving, logic, and real-world application</span>
                  </li>
                  <li className="ms-[24px]">
                    Critical Thinking{" "}
                    <span className="font-normal">— analysis, reasoning, and solution-based thinking</span>
                  </li>
                  <li className="ms-[24px]">
                    Executive Function{" "}
                    <span className="font-normal">— focus, organization, time management, and task completion</span>
                  </li>
                  <li className="ms-[24px]">
                    Communication Mastery{" "}
                    <span className="font-normal">— speaking clearly, presenting ideas, and active listening</span>
                  </li>
                  <li className="ms-[24px]">
                    Academic Confidence{" "}
                    <span className="font-normal">— independence, persistence, and ownership of learning</span>
                  </li>
                </ul>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Discipline"
              isOpen={openSections.has("discipline")}
              onToggle={() => toggleSection("discipline")}
            >
              <div className="font-mono text-[#01325D] text-[16px] leading-[24px] max-w-[759px]">
                <p className="font-bold text-[18px] mb-1">Consistency &amp; Accountability</p>
                <p className="font-normal mb-6">
                  Students learn to show up prepared, stay focused, complete tasks with intention, and take ownership of their progress—building habits that translate into academic and life success.
                </p>
                <p className="font-bold text-[18px] mb-1">Outcome</p>
                <p className="font-normal">
                  Students build measurable academic progress, stronger learning habits, and elevated confidence, consistently performing at or above grade level while developing the discipline and mindset required for long-term success.
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Continuum"
              isOpen={openSections.has("continuum")}
              onToggle={() => toggleSection("continuum")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] max-w-[686px]">
                <p className="mb-6">
                  Launchpad™ is not a reset—it&apos;s the continuation. After summer, students transition seamlessly into a structured, year-round system of academic acceleration and enrichment, ensuring progress never pauses. With CoreIQ™, labs, sports, and skill-building integrated into every week, students stay ahead, build momentum, and continue evolving with purpose.
                </p>
                <Link href="/enroll" className="font-medium text-[#0FD3C6] underline hover:brightness-110">
                  Join Now — Learn More!
                </Link>
              </div>
            </AccordionSection>

            <AccordionSection
              title="FAQ"
              isOpen={openSections.has("faq")}
              onToggle={() => toggleSection("faq")}
              isLast={true}
            >
              <div className="font-mono text-[#01325D] text-[16px] leading-relaxed max-w-[870px] space-y-5">
                <div>
                  <p className="font-bold mb-1">How is Launchpad™ different from regular after-school programs?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    Launchpad™ is not childcare—it&apos;s a structured academic and enrichment system. Every day includes CoreIQ™ academics (reading, math, writing) combined with STEM labs, entrepreneurship, and sports, ensuring your child is consistently learning, building skills, and moving ahead.
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-1">Will this help my child improve academically?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    Yes. Launchpad™ is designed for measurable academic progress. Through daily targeted instruction and guided practice, students strengthen reading comprehension, math fluency, and critical thinking, helping them perform at or above grade level.
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-1">Is Launchpad™ only for advanced students?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    No. Launchpad™ supports all learners—whether your child needs reinforcement or acceleration. Our approach builds confidence, strong foundations, and advanced skills, meeting each student where they are and helping them grow.
                  </p>
                </div>
                <div>
                  <p className="font-bold mb-1">How does this fit into my child&apos;s school schedule?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    Launchpad™ operates after school, providing a seamless extension of your child&apos;s day. It reinforces what they learn in school while introducing higher-level thinking, structure, and enrichment—without overwhelming them.
                  </p>
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
        <h3 className={`font-mono font-bold text-[24px] leading-normal text-center whitespace-nowrap ${isOpen ? "text-[#0FD3C6]" : "text-[#01325D]"}`}>
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
