"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export default function RoboticsMakerPage() {
  const program = getProgramById("robotics-maker");
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
          src="/images/programs/robox-hero.png"
          alt={program.title}
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Program Snapshot Bar */}
      <section className="bg-[#1493E8] h-[140px] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-[29px] flex gap-[60px] items-start leading-normal overflow-hidden p-[10px] whitespace-nowrap text-white">
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[14px] shrink-0 leading-normal">
              Lab
            </p>
            <p className="font-mono font-bold text-[18px] shrink-0 leading-normal">
              ROBOX™
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[14px] shrink-0 leading-normal">
              Orbit
            </p>
            <p className="font-mono font-bold text-[18px] shrink-0 leading-normal">
              Orbit IV
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[14px] shrink-0 leading-normal">
              Ages
            </p>
            <p className="font-mono font-bold text-[18px] shrink-0 leading-normal">
              9–14
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[14px] shrink-0 leading-normal">
              Hours
            </p>
            <p className="font-mono font-bold text-[18px] shrink-0 leading-normal">
              9 AM – 6 PM
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[14px] shrink-0 leading-normal">
              Aquatics
            </p>
            <p className="font-mono font-bold text-[18px] shrink-0 leading-normal">
              Swimming
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[14px] shrink-0 leading-normal">
              CoreIQ
            </p>
            <p className="font-mono font-bold text-[18px] shrink-0 leading-normal">
              Problem-solving
            </p>
          </div>
        </div>
      </section>

      {/* Sidebar + Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="w-full lg:w-[294px] shrink-0">
              <div className="lg:sticky lg:top-8 flex flex-col gap-[26px]">
                <Link
                  href="/enroll"
                  className="bg-[#b0ff40] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center"
                >
                  <span className="font-mono font-bold text-[#01325D] text-[20px]">
                    ENROLL TODAY:
                  </span>
                </Link>

                <Link
                  href="#schedule"
                  className="border border-[#01325D] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center"
                >
                  <span className="font-mono font-bold text-[#01325D] text-[16px]">
                    View Camp Schedule
                  </span>
                </Link>

                <div className="font-mono text-[20px]">
                  <p className="font-bold text-[#01325D] leading-[21px] mb-2">SESSIONS</p>
                  <p className="font-normal text-black leading-[24px]">(I)9am – 3pm (II)3pm - 6pm</p>
                  <p className="font-normal text-black leading-[24px]">(III)12pm - 6pm</p>
                </div>

                <div className="w-full h-px bg-[#d9d9d9]" />

                <div className="font-mono text-[20px]">
                  <p className="font-bold text-[#01325D] leading-[21px] mb-2">AGES</p>
                  <p>
                    <span className="font-medium leading-[21px]">Rising Grades: </span>
                    <span className="font-normal leading-[21px]">Grades 4–8</span>
                  </p>
                </div>

                <div className="w-full h-px bg-[#d9d9d9]" />

                <div className="font-mono text-[20px]">
                  <p className="font-bold text-[#01325D] leading-[21px] mb-2">TRANSPORTATION</p>
                  <p className="font-normal leading-[21px]">City wide and Suburban Bus Stops</p>
                </div>

                <div className="w-full h-px bg-[#d9d9d9]" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-[897px]">
              {/* Title */}
              <h2
                className="font-serif font-bold text-[#01325D] text-[40px] uppercase mb-6 leading-normal"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                ROBOX™
              </h2>

              {/* Divider */}
              <div className="w-full h-px bg-[#d9d9d9] mb-8" />

              {/* Description */}
              <p className="font-mono font-normal text-black text-[16px] leading-normal mb-8">
                This is where builders become engineers and ideas come to life. Students design, program, and battle-test robots through hands-on challenges that push creativity, precision, and problem-solving to the next level.
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
                  <source src="/videos/ROBOX.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Philosophy Link */}
              <p className="font-mono font-bold text-black text-[16px] mb-4">
                <span>Learn about the Kid Explorer Camp Philosophy </span>
                <Link href="/philosophy" className="text-[#0FD3C6] hover:underline">
                  (CLICK HERE)
                </Link>
              </p>

              {/* WHY WE'RE DIFFERENT */}
              <div className="mb-16 mt-12">
                <p className="font-mono font-bold text-black text-[16px] mb-4">
                  Limitless By Nature —Kid Explorer Camp 2026
                </p>

                <h3
                  className="font-serif font-bold text-[#01325D] text-[32px] uppercase mb-8 leading-normal"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  WHY WE&apos;RE DIFFERENT
                </h3>

                <div className="font-mono font-normal text-black text-[18px] leading-normal space-y-4">
                  <p>
                    At ROBOX™, students go beyond basic building and step into real-world engineering.
                  </p>
                  <p>
                    Campers design intelligent machines, build functional prototypes, and test their creations through dynamic challenges that demand creativity, teamwork, and critical thinking.
                  </p>
                  <p>
                    Each day blends robotics labs, outdoor movement, and focused academic sessions, ensuring students grow not just in skill—but in confidence, discipline, and innovation.
                  </p>
                </div>
              </div>

              {/* SWIM & WATER PLAY */}
              <div className="mb-16">
                <h3
                  className="font-serif font-bold text-[#01325D] text-[32px] uppercase mb-8 leading-normal"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  SWIM & WATER PLAY
                </h3>

                <div className="font-mono font-normal text-black text-[16px] leading-normal space-y-4">
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
                <h3 className="font-mono font-bold text-black text-[24px] mb-6">
                  Notes for Parents
                </h3>

                <ul className="list-disc pl-6 space-y-2 font-mono font-normal text-black text-[16px] leading-normal mb-8">
                  <li>Each age group follows a unique daily schedule built around their developmental rhythm.</li>
                  <li>Lunch times, water breaks, and bathroom breaks are structured and always supervised.</li>
                  <li>Sunscreen is applied throughout the day — because safety is part of our design.</li>
                  <li>Quiet moments are woven into our day for reflection, reset, and rest.</li>
                  <li>Our staff are trained to create a balance of high energy, high learning, and high care — the perfect trio for a transformative summer.</li>
                </ul>

                <p className="font-mono font-normal text-black text-[16px] leading-normal">
                  Kid Explorer Camp — Chicago, IL<br />
                  They come curious. They leave legends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section id="schedule" className="bg-white py-20">
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
                    Robotics Engineering{" "}
                    <span className="font-normal">— building and programming robots using sensors, motors, and control systems</span>
                  </li>
                  <li className="ms-[24px]">
                    Coding Foundations{" "}
                    <span className="font-normal">— logic, sequencing, loops, conditionals, and problem-solving through programming</span>
                  </li>
                  <li className="ms-[24px]">
                    Systems Thinking{" "}
                    <span className="font-normal">— understanding how hardware and software work together to perform tasks</span>
                  </li>
                  <li className="ms-[24px]">
                    Automation & AI Concepts{" "}
                    <span className="font-normal">— introduction to smart systems, inputs/outputs, and responsive design</span>
                  </li>
                  <li className="ms-[24px]">
                    Problem-Solving & Debugging{" "}
                    <span className="font-normal">— testing, troubleshooting errors, and optimizing performance</span>
                  </li>
                  <li className="ms-[24px]">
                    Design & Prototyping{" "}
                    <span className="font-normal">— planning, building, and refining robotic systems with purpose</span>
                  </li>
                  <li className="ms-[24px]">
                    Critical Thinking{" "}
                    <span className="font-normal">— analyzing performance, improving efficiency, and adapting solutions</span>
                  </li>
                  <li className="ms-[24px]">
                    Collaboration & Teamwork{" "}
                    <span className="font-normal">— building in teams, assigning roles, and executing projects together</span>
                  </li>
                  <li className="ms-[24px]">
                    Precision & Attention to Detail{" "}
                    <span className="font-normal">— accuracy in building, coding, and system integration</span>
                  </li>
                </ul>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Simulation"
              isOpen={openSections.has("simulation")}
              onToggle={() => toggleSection("simulation")}
            >
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[24px] whitespace-pre-wrap">
                <p className="text-[18px] mb-4">Logic & Precision</p>
                <p className="font-normal mb-4">
                  Students learn to think step-by-step, build accurately, and refine their work through testing, understanding that successful systems require clarity, patience, and exact execution.
                </p>
                <p className="text-[18px] mb-1">Outcome</p>
                <p className="font-normal">
                  Students gain the ability to design, build, and program functional robotic systems, developing both technical fluency and logical thinking. They leave with real coding experience, engineering confidence, and the ability to solve complex challenges step-by-step
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Continuum"
              isOpen={openSections.has("continuum")}
              onToggle={() => toggleSection("continuum")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] whitespace-pre-wrap">
                <p className="mb-4">
                  ROBOX™ evolves into a year-round robotics and automation pathway within Launchpad™, where students continue advancing into more complex builds, coding challenges, and competitive robotics opportunities. Skills compound into real technical capability and future-ready expertise.
                </p>
                <p>
                  <Link href="/enroll" className="font-medium text-[#0FD3C6] underline">
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
              <div className="font-mono text-[#01325D] leading-normal space-y-4">
                <div>
                  <p className="font-bold text-[16px] mb-1">What is ROBOX™ Summer Camp?</p>
                  <p className="font-normal text-[12px]">ROBOX™ is a hands-on robotics and coding experience where students build and program robots while learning how automated systems work.</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] mb-1">Does my child need prior coding or robotics experience?</p>
                  <p className="font-normal text-[12px]">No. The program is designed for all levels, from beginners learning basic coding to more advanced students building complex systems.</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] mb-1">What will my child actually build?</p>
                  <p className="font-normal text-[12px]">Students create functional robots and automated systems, such as moving devices, sensor-based builds, and problem-solving machines.</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] mb-1">What makes ROBOX™ valuable for my child?</p>
                  <p className="font-normal text-[12px]">Students develop coding fluency, engineering thinking, and problem-solving skills, preparing them for future opportunities in STEM and technology fields.</p>
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
