"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export default function PowerPlayPage() {
  const program = getProgramById("power-play");
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
          src="/images/programs/apex-hero.png"
          alt={program.title}
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Snapshot Bar */}
      <section className="bg-[#1493E8] w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 sm:gap-10 text-white">
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Lab</p>
            <p className="font-mono font-bold text-[18px]">Apex Athletics™</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Orbit Level</p>
            <p className="font-mono font-bold text-[18px]">Orbit IV</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-[14px]">Ages</p>
            <p className="font-mono font-bold text-[18px]">5–14</p>
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
            <p className="font-mono font-medium text-[16px]">Discipline</p>
          </div>
        </div>
      </section>

      {/* Mobile Sidebar Info */}
      <div className="md:hidden bg-white py-6 px-6">
        <Link
          href="/contact"
          className="bg-[#b0ff40] h-[48px] w-full rounded-[12px] flex items-center justify-center hover:brightness-110 transition-all mb-4"
        >
          <span className="font-mono font-bold text-[#1493E8] text-[18px]">ENROLL TODAY:</span>
        </Link>
        <Link
          href="/schedule"
          className="border border-[#1493E8] h-[48px] w-full rounded-[12px] flex items-center justify-center hover:bg-[#1493E8]/5 transition-all mb-4"
        >
          <span className="font-mono font-bold text-[#1493E8] text-[16px]">View Camp Schedule</span>
        </Link>
        <div className="space-y-4">
          <div className="border-t border-[#d9d9d9] pt-4">
            <p className="font-mono font-bold text-[#1493E8] text-[16px]">SESSIONS</p>
            <p className="font-mono font-normal text-black text-[16px]">(I)9am – 3pm (II)3pm - 6pm</p>
            <p className="font-mono font-normal text-black text-[16px]">(III)12pm - 6pm</p>
          </div>
          <div className="border-t border-[#d9d9d9] pt-4">
            <p className="font-mono font-bold text-[#1493E8] text-[16px]">AGES</p>
            <p className="font-mono font-medium text-black text-[16px]">Rising Grades:</p>
            <p className="font-mono font-normal text-black text-[16px]">Kindergarten – Grade 7</p>
          </div>
          <div className="border-t border-[#d9d9d9] pt-4">
            <p className="font-mono font-bold text-[#1493E8] text-[16px]">TRANSPORTATION</p>
            <p className="font-mono font-normal text-black text-[16px]">City wide and Suburban Bus Stops</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          <div className="ml-0 lg:ml-[320px]">
            {/* Overview */}
            <div id="overview" className="mb-16">
              <div className="w-full h-px bg-[#d9d9d9] mb-8" />

              <h2
                className="font-serif font-bold text-[#01325D] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-8"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Apex Athletics™
              </h2>

              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8 max-w-[929px]">
                This is where strength is built, grit is tested, and confidence takes shape. Every day blends structured training, team competition, and nonstop movement, pushing students to grow stronger and perform better. Momentum builds fast, resilience grows deeper, and every challenge fuels progress.
              </p>

              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[444px] mb-8 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="font-mono font-bold text-black text-sm sm:text-base mb-2">
                <span>Learn about the Kid Explorer Camp Philosophy </span>
                <Link href="/philosophy" className="text-[#0FD3C6] hover:underline">
                  (CLICK HERE)
                </Link>
              </p>
            </div>

            {/* WHY WE'RE DIFFERENT */}
            <div id="why-different" className="mb-16">
              <p className="font-mono font-bold text-black text-sm sm:text-base mb-4">
                Limitless By Nature —Kid Explorer Camp 2026
              </p>

              <h2
                className="font-serif font-bold text-[#01325D] text-2xl sm:text-3xl lg:text-[32px] uppercase leading-tight mb-8"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                WHY WE&apos;RE DIFFERENT
              </h2>

              <div className="font-mono font-normal text-black text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-[897px] space-y-6">
                <p>
                  At Apex Athletics™ Academy, students develop athletic ability through structured sports training and team challenges.
                </p>
                <p>
                  Campers build endurance, coordination, and confidence while learning teamwork, sportsmanship, and leadership.
                </p>
                <p>
                  Each day blends sports training, swimming, outdoor play, and academic sessions—supporting both physical and mental growth.
                </p>
              </div>
            </div>

            {/* SWIM & WATER PLAY */}
            <div id="swim" className="mb-16">
              <h2
                className="font-serif font-bold text-[#01325D] text-2xl sm:text-3xl lg:text-[32px] uppercase leading-tight mb-8"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                SWIM &amp; WATER PLAY
              </h2>

              <div className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed max-w-[897px] space-y-6">
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
            <div className="mb-16">
              <h3 className="font-mono font-bold text-black text-xl sm:text-2xl mb-6">
                Notes for Parents
              </h3>

              <ul className="list-disc pl-6 space-y-2 font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8 max-w-[897px]">
                <li>Each age group follows a unique daily schedule built around their developmental rhythm.</li>
                <li>Lunch times, water breaks, and bathroom breaks are structured and always supervised.</li>
                <li>Sunscreen is applied throughout the day — because safety is part of our design.</li>
                <li>Quiet moments are woven into our day for reflection, reset, and rest.</li>
                <li>Our staff are trained to create a balance of high energy, high learning, and high care — the perfect trio for a transformative summer.</li>
              </ul>

              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed">
                Kid Explorer Camp — Chicago, IL<br />
                They come curious. They leave legends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
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
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[26px] max-w-[845px]">
                <ul className="list-disc space-y-1">
                  <li className="ms-[24px]">
                    Fundamental Athletic Skills{" "}
                    <span className="font-normal">— running, agility, coordination, balance, and body control</span>
                  </li>
                  <li className="ms-[24px]">
                    Sport-Specific Development{" "}
                    <span className="font-normal">— exposure to soccer, basketball, archery, lacrosse, and more through skill-based training</span>
                  </li>
                  <li className="ms-[24px]">
                    Strength &amp; Conditioning{" "}
                    <span className="font-normal">— age-appropriate endurance, mobility, and physical confidence</span>
                  </li>
                  <li className="ms-[24px]">
                    Game Intelligence (IQ){" "}
                    <span className="font-normal">— understanding rules, positioning, strategy, and decision-making</span>
                  </li>
                  <li className="ms-[24px]">
                    Teamwork &amp; Leadership{" "}
                    <span className="font-normal">— communication, collaboration, and positive team dynamics</span>
                  </li>
                  <li className="ms-[24px]">
                    Discipline &amp; Work Ethic{" "}
                    <span className="font-normal">— effort, consistency, coachability, and resilience</span>
                  </li>
                  <li className="ms-[24px]">
                    Focus Under Pressure{" "}
                    <span className="font-normal">— composure, reaction time, and competitive awareness</span>
                  </li>
                  <li className="ms-[24px]">
                    Motor Skill Development (Younger Grades){" "}
                    <span className="font-normal">— coordination, movement patterns, and physical literacy</span>
                  </li>
                  <li className="ms-[24px]">
                    Performance Mindset (Older Grades){" "}
                    <span className="font-normal">— goal setting, accountability, and continuous improvement</span>
                  </li>
                </ul>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Discipline"
              isOpen={openSections.has("discipline")}
              onToggle={() => toggleSection("discipline")}
            >
              <div className="font-mono text-[#01325D] max-w-[759px]">
                <p className="font-bold text-[18px] leading-[24px] mb-1">Effort &amp; Resilience</p>
                <p className="font-normal text-[16px] leading-[24px] mb-6">
                  Students learn to push through challenges, stay consistent, and give their best effort, understanding that growth comes from repetition, discipline, and mindset.
                </p>
                <p className="font-bold text-[18px] leading-[24px] mb-1">Outcome</p>
                <p className="font-normal text-[16px] leading-[24px]">
                  Students build confidence, athletic ability, and discipline, developing both physical skills and mental toughness. They leave stronger, more coordinated, and equipped with the mindset and habits of high-performing athletes.
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
                  Apex Sports™ extends into a year-round athletic pathway within Launchpad™, where students continue to train, refine skills, and advance through progressive levels of development. From fundamentals to performance, growth is continuous and intentional.
                </p>
                <p className="font-medium text-[#0FD3C6] underline">
                  Join Now  Learn More!
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="FAQ"
              isOpen={openSections.has("faq")}
              onToggle={() => toggleSection("faq")}
              isLast={true}
            >
              <div className="font-mono text-[#01325D] max-w-[870px] space-y-4">
                <div>
                  <p className="font-bold text-[16px] leading-normal">What is Apex Sports™ Summer Camp?</p>
                  <p className="font-normal text-[12px] leading-normal">
                    Apex Sports™ is a structured athletic development program where students build skills across multiple sports while improving strength, coordination, and confidence.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-normal">Does my child need prior sports experience?</p>
                  <p className="font-normal text-[12px] leading-normal">
                    No. The program is designed for all levels, from beginners learning fundamentals to more experienced athletes refining their skills.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-normal">What sports are included?</p>
                  <p className="font-normal text-[12px] leading-normal">
                    Students are exposed to a variety of activities such as soccer, basketball, archery, lacrosse, and movement-based training, ensuring a well-rounded athletic experience.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-normal">What makes Apex Sports™ different from typical sports programs?</p>
                  <p className="font-normal text-[12px] leading-normal">
                    Apex Sports™ focuses on total athlete development—combining skill-building, mindset, discipline, and exposure to multiple sports, rather than focusing on just one.
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
