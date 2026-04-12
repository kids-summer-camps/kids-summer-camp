"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CosmicCuriosityPage() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["schedule"]));

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
          src="/images/programs/zero-hero.png"
          alt="ZERO™ Summer Camp"
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Snapshot Bar */}
      <section className="bg-[#1493E8]">
        <div className="max-w-[1440px] mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-[40px] text-white">
          {[
            { label: "Lab", value: "ZERO™" },
            { label: "Orbit Level", value: "Orbit III" },
            { label: "Ages", value: "7-8" },
            { label: "Camp Hours", value: "9 AM – 6 PM" },
            { label: "Aquatics", value: "Swimming" },
            { label: "CoreIQ", value: "Strengthen Skills" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-[6px] px-[10px] py-[10px] ${
                i < 5 ? "border-r border-white/30 pr-10" : ""
              }`}
            >
              <p className="font-mono font-medium text-[14px]">{item.label}</p>
              <p className="font-mono font-bold text-[18px]">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar + Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[89px]">
          <div className="grid grid-cols-1 lg:grid-cols-[294px_1fr] gap-10 lg:gap-16">
            {/* Sidebar */}
            <div className="flex flex-col gap-[26px]">
              <Link
                href="/enroll"
                className="bg-[#b0ff40] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center hover:brightness-110 transition-all"
              >
                <span className="font-mono font-bold text-[#01325D] text-[20px]">
                  ENROLL TODAY:
                </span>
              </Link>

              <Link
                href="/schedule"
                className="border border-[#01325D] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <span className="font-mono font-bold text-[#01325D] text-[16px]">
                  View Camp Schedule
                </span>
              </Link>

              <div>
                <p className="font-mono font-bold text-[#01325D] text-[20px] leading-[21px] mb-2">
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
                <p className="font-mono font-bold text-[#01325D] text-[20px] leading-[21px] mb-2">
                  AGES
                </p>
                <p className="font-mono font-medium text-black text-[20px] leading-[21px]">
                  Rising Grades:
                </p>
                <p className="font-mono font-normal text-black text-[20px] leading-[21px]">
                  TV &amp; 1-2
                </p>
              </div>

              <div className="w-full h-px bg-[#d9d9d9]" />

              <div>
                <p className="font-mono font-bold text-[#01325D] text-[20px] leading-[21px] mb-2">
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
                className="font-serif font-bold text-[#01325D] text-[40px] uppercase leading-tight mb-6"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                ZERO<span className="font-serif font-semibold text-[26px] align-super">TM</span>
              </h2>

              <p className="font-mono font-normal text-black text-[16px] leading-relaxed mb-8 max-w-[897px]">
                ZERO™ merges athletic skill with leadership, teamwork, and grit. From
                fast-paced games to strategic challenges, campers push limits, crush personal records, and
                discover the power of discipline plus fun. Energy, skill, and confidence collide in a summer
                where every kid becomes a game changer.
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
                  <source src="/videos/ZERO1.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Philosophy Link */}
              <p className="font-mono font-bold text-black text-[16px] mb-2">
                <span>Learn about the Kid Explorer Camp Philosophy </span>
                <Link href="/experience#dreme-9" className="text-[#0FD3C6] hover:underline">
                  (CLICK HERE)
                </Link>
              </p>

              {/* WHY WE'RE DIFFERENT */}
              <div className="mt-12 mb-12">
                <p className="font-mono font-bold text-black text-[16px] mb-2">
                  Limitless By Nature —Kid Explorer Camp 2026
                </p>

                <h3
                  className="font-serif font-bold text-[#01325D] text-[32px] uppercase leading-tight mb-6"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  WHY WE&apos;RE DIFFERENT
                </h3>

                <div className="font-mono font-normal text-black text-[18px] leading-relaxed max-w-[897px] space-y-4">
                  <p>
                    At Kid Explorer ZERO→EVERYTHING™, students begin learning how ideas become real inventions.
                  </p>
                  <p>
                    Campers explore STEM concepts through hands-on building, creative challenges, and collaborative problem solving.
                  </p>
                  <p>
                    Each day blends innovation labs, swimming and outdoor movement, and focused academic sessions—helping students build confidence and strong foundational thinking skills.
                  </p>
                  <p>
                    ZERO→EVERYTHING™ prepares students for advanced programs such as Robotics Engineering, Game Creation, and Maker Grand Prix
                  </p>
                </div>
              </div>

              {/* SWIM & WATER PLAY */}
              <div className="mb-12">
                <h3
                  className="font-serif font-bold text-[#01325D] text-[32px] uppercase leading-tight mb-6"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  SWIM &amp; WATER PLAY
                </h3>

                <div className="font-mono font-normal text-black text-[16px] leading-relaxed max-w-[897px] space-y-4">
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
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
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
                <ul className="list-disc">
                  <li className="ms-[24px] mb-1">
                    Reading Mastery
                    <span className="font-normal"> — fluency, comprehension, vocabulary expansion, and written responses</span>
                  </li>
                  <li className="ms-[24px] mb-1">
                    Mathematical Confidence{" "}
                    <span className="font-normal">— addition, subtraction, early multiplication concepts, problem-solving, and number reasoning</span>
                  </li>
                  <li className="ms-[24px] mb-1">
                    Analytical Thinking{" "}
                    <span className="font-normal">— logic, pattern recognition, and multi-step problem solving</span>
                  </li>
                  <li className="ms-[24px] mb-1">
                    Written Expression{" "}
                    <span className="font-normal">— sentence structure, paragraph development, and idea organization</span>
                  </li>
                  <li className="ms-[24px] mb-1">
                    Executive Function{" "}
                    <span className="font-normal">— focus, time-on-task, organization, and task completion</span>
                  </li>
                  <li className="ms-[24px] mb-1">
                    Communication &amp; Collaboration{" "}
                    <span className="font-normal">— explaining thinking, working in teams, and active listening</span>
                  </li>
                  <li className="ms-[24px]">
                    Independent Learning{" "}
                    <span className="font-normal">— ownership, persistence, and confidence in tackling challenges</span>
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
                <p className="font-bold text-[18px] leading-[24px] mb-1">Focus &amp; Follow-Through</p>
                <p className="font-normal text-[16px] leading-[24px] mb-6">
                  Students learn to stay on task, complete work with intention, and push through challenges, building the discipline required for academic growth and accountability.
                </p>
                <p className="font-bold text-[18px] leading-[24px] mb-1">Outcome</p>
                <p className="font-normal text-[16px] leading-[24px]">
                  Students build strong academic fluency, sharper thinking skills, and increased independence, positioning them to perform at or above grade level while developing the habits needed for long-term success.
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Continuum"
              isOpen={openSections.has("continuum")}
              onToggle={() => toggleSection("continuum")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] max-w-[686px]">
                <p className="mb-4">
                  ZERO™ evolves into a year-round system of growth. After summer, students transition into Launchpad™ After-School, where CoreIQ™, labs, and enrichment continue to reinforce and accelerate learning, ensuring progress never pauses.
                </p>
                <Link href="/enroll" className="font-mono font-medium text-[#0FD3C6] text-[16px] leading-[24px] underline">
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
              <div className="font-mono text-[#01325D] max-w-[870px] space-y-4">
                <div>
                  <p className="font-bold text-[16px] leading-normal mb-1">
                    What is ZERO™ Summer Camp for Grades 2–3?
                  </p>
                  <p className="font-normal text-[12px] leading-normal">
                    ZERO™ is a structured academic and enrichment summer experience designed to strengthen reading, math, and thinking skills while building confidence and independence.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-normal mb-1">
                    Will my child be learning or just staying active?
                  </p>
                  <p className="font-normal text-[12px] leading-normal">
                    Both. Students engage in daily CoreIQ™ academic sessions along with STEM labs, creative problem-solving, sports, and recreation, creating a balanced experience.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-normal mb-1">
                    Is transportation available for summer camp?
                  </p>
                  <p className="font-normal text-[12px] leading-normal">
                    Yes. Transportation options are available through licensed and insured third-party providers, including pickup from designated locations and partner schools within a 10-mile radius, where applicable.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-normal mb-1">
                    What makes ZERO™ different for this age group?
                  </p>
                  <p className="font-normal text-[12px] leading-normal">
                    ZERO™ focuses on helping students move from basic understanding to fluency, confidence, and independent thinking, giving them a strong academic and personal edge going into the next school year.
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
        ${isFirst ? "rounded-t-[24px] sm:rounded-t-[40px]" : "border-t-0"}
        ${isLast ? "rounded-b-[24px] sm:rounded-b-[40px]" : ""}
      `}
    >
      <button
        onClick={onToggle}
        className="w-full px-5 py-5 sm:px-[48px] sm:py-[36px] flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className={`font-mono font-bold text-[16px] sm:text-[24px] leading-normal ${isOpen ? "text-[#0FD3C6]" : "text-[#01325D]"}`}>
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
            <div className="px-5 pb-5 sm:px-[48px] sm:pb-[36px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
