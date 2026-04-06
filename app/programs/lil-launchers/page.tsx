"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export default function LilLaunchersPage() {
  const program = getProgramById("lil-launchers");
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
          src="/images/programs/prelude-hero.png"
          alt={program.title}
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Program Snapshot Bar */}
      <section className="bg-[#1493E8] py-6 sm:py-8">
        <div className="max-w-[1344px] mx-auto px-6 flex flex-wrap justify-center gap-[24px] sm:gap-[40px]">
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Lab</p>
            <p className="font-mono font-bold text-white text-[18px]">Prelude™</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Orbit Level</p>
            <p className="font-mono font-bold text-white text-[18px]">Orbit I</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Ages</p>
            <p className="font-mono font-bold text-white text-[18px]">3–4</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Camp Hours</p>
            <p className="font-mono font-bold text-white text-[18px]">9 AM – 6 PM</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Aquatics</p>
            <p className="font-mono font-bold text-white text-[18px]">Swim Development</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] p-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">CoreIQ</p>
            <p className="font-mono font-medium text-white text-[16px] text-center">Build foundation</p>
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
                href="/contact"
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
                  Pre-K 3 &amp; Pre-K 4
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
                Prelude™
              </h2>

              <p className="font-mono font-normal text-black text-[16px] leading-relaxed mb-8">
                The journey doesn&apos;t end at summer. Kid Explorer Club continues with after-school, academic CoreIQ™, enrichment labs, and advanced pathways throughout the school year—ensuring students build momentum, deepen skills, and stay ahead. From daily academic support to STEM, sports, and entrepreneurship labs, your child continues developing with purpose, structure, and consistency.
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
                  <source src="/videos/boy%20in%20yellow.MP4" type="video/mp4" />
                </video>
              </div>

              <p className="font-mono font-bold text-black text-[16px] mb-4">
                <span>Learn about the Kid Explorer Camp Philosophy </span>
                <Link href="/philosophy" className="text-[#0FD3C6] hover:underline">
                  (click here)
                </Link>
              </p>

              {/* WHY WE'RE DIFFERENT */}
              <div className="mt-12 mb-12">
                <p className="font-mono font-bold text-black text-[16px] mb-4">
                  Limitless By Nature — Kid Explorer Camp 2026
                </p>

                <h3
                  className="font-serif font-bold text-[#01325D] text-[24px] sm:text-[32px] uppercase leading-tight mb-8"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  WHY WE&apos;RE DIFFERENT
                </h3>

                <div className="font-mono font-normal text-black text-[16px] sm:text-[18px] leading-relaxed space-y-6">
                  <p>
                    At Prelude™, our youngest explorers discover the world through guided play, creativity, and movement.
                  </p>
                  <p>
                    Children build confidence, communication, and early problem-solving skills through hands-on activities, storytelling, and exploration.
                  </p>
                  <p>
                    Each day blends discovery labs, outdoor play, water experiences, and early academic foundations—creating a joyful environment where learning feels natural and exciting.
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
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[26px]">
                <ul className="list-disc space-y-1">
                  <li className="ms-[24px]">
                    Early Literacy Mastery —<span className="font-normal"> letter recognition, phonemic awareness, vocabulary building, storytelling, and early reading readiness</span>
                  </li>
                  <li className="ms-[24px]">
                    Numeracy Foundations — <span className="font-normal">counting, number sense, pattern recognition, sorting, sequencing, and basic problem-solving</span>
                  </li>
                  <li className="ms-[24px]">
                    Language &amp; Communication — <span className="font-normal">expressive speaking, listening comprehension, sentence formation, and confidence in communication</span>
                  </li>
                  <li className="ms-[24px]">
                    Executive Function Skills — <span className="font-normal">focus, memory, self-regulation, following directions, and multi-step thinking</span>
                  </li>
                  <li className="ms-[24px]">
                    Cognitive Development — <span className="font-normal">critical thinking, reasoning, curiosity, and pattern identification</span>
                  </li>
                  <li className="ms-[24px]">
                    Fine Motor Precision — <span className="font-normal">writing readiness, pencil grip, tracing, cutting, and hand-eye coordination</span>
                  </li>
                  <li className="ms-[24px]">
                    Social Intelligence — <span className="font-normal">collaboration, turn-taking, emotional awareness, and respectful interaction</span>
                  </li>
                  <li className="ms-[24px]">
                    Independence &amp; Confidence — <span className="font-normal">task initiation, persistence, responsibility, and self-guided learning habits</span>
                  </li>
                </ul>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Simulation"
              isOpen={openSections.has("simulation")}
              onToggle={() => toggleSection("simulation")}
            >
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[24px]">
                <p className="text-[18px] mb-4">Patience &amp; Self-Regulation</p>
                <ul className="list-disc mb-6">
                  <li className="ms-[24px] font-medium">The Power of Patience</li>
                  <li className="ms-[24px] font-medium">Learning to Wait</li>
                  <li className="ms-[24px] font-medium">Self-Control in Action</li>
                  <li className="ms-[24px] font-medium">Calm, Focus, Wait</li>
                  <li className="ms-[24px] font-medium">Growing Patience</li>
                  <li className="ms-[24px] font-medium">Ready, Set… Wait</li>
                  <li className="ms-[24px] font-medium">Self Regulation</li>
                  <li className="ms-[24px] font-medium">Pause &amp; Think</li>
                </ul>

                <p className="text-[18px] mb-2">Outcome</p>
                <p className="font-medium text-[16px] leading-[24px]">Self-Regulation</p>
                <p className="font-medium text-[16px] leading-[24px]">Impulse Control</p>
                <p className="font-medium text-[16px] leading-[24px]">Turn-Taking Discipline</p>
                <p className="font-medium text-[16px] leading-[24px]">Executive Control</p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Continuum"
              isOpen={openSections.has("continuum")}
              onToggle={() => toggleSection("continuum")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] max-w-[686px]">
                <p className="mb-6">
                  Camp is just the launch. The Continuum is Kid Explorer Club&apos;s year-round system of academic acceleration, skill development, and enrichment, delivered through after-school programs, CoreIQ™, and specialized labs—so progress never pauses and potential keeps expanding.
                </p>
                <p className="font-medium text-[#0FD3C6] underline">
                  <Link href="/contact" className="text-[#0FD3C6] hover:brightness-110">
                    Join Now — Learn More!
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
              <div className="font-mono text-[#01325D] leading-[24px] space-y-4">
                <p className="font-bold text-[16px] mb-4">Prelude™ After-School (Pre-K 3–4) — Parent FAQs</p>

                <div>
                  <p className="font-bold text-[16px]">What is Prelude™ After-School?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    Prelude™ After-School is a structured early learning extension of the school day for ages 3–4, blending COREIQ™ foundations with guided play, social development, and routine-building. It supports children in developing confidence, independence, and school readiness in a nurturing, high-quality environment.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[16px]">What will my child be learning after school?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    Children participate in COREIQ™ early learning activities, including letters, sounds, numbers, communication, and structured play, along with movement, creative exploration, and social interaction—all designed for this age group.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[16px]">Is this too much for a 3–4-year-old after a school day?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    No. The program is intentionally designed with a balanced rhythm of learning, play, and rest, ensuring children stay engaged without feeling overwhelmed.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-[16px]">How do you support young children emotionally and socially?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    We focus on patience, routine, and positive reinforcement, helping children develop self-regulation, turn-taking, and confidence in a supportive environment.
                  </p>
                </div>

                <p className="font-bold text-[16px]">
                  Parent Takeaway: A smooth day from school to after-school—safe, structured, and designed for your child to grow.
                </p>
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
                  href="/contact"
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
