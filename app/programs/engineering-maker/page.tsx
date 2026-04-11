"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export default function EngineeringMakerPage() {
  const program = getProgramById("engineering-maker");
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
          src="/images/programs/mechanica-hero.png"
          alt="Mechanica™ Engineering Camp"
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Snapshot Bar */}
      <section className="bg-[#1493E8] py-6 sm:py-8">
        <div className="max-w-[1344px] mx-auto px-6 flex flex-wrap justify-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Lab</p>
            <p className="font-mono font-bold text-white text-[18px]">Mechanica™</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Orbit</p>
            <p className="font-mono font-bold text-white text-[18px]">Orbit IV</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Ages</p>
            <p className="font-mono font-bold text-white text-[18px]">9–14</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Camp Hours</p>
            <p className="font-mono font-bold text-white text-[18px]">9 AM – 6 PM</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">Aquatics</p>
            <p className="font-mono font-bold text-white text-[18px]">Swimming</p>
          </div>
          <div className="hidden sm:block w-px h-[60px] bg-white/30 self-center" />
          <div className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
            <p className="font-mono font-medium text-white text-[14px]">CoreIQ</p>
            <p className="font-mono font-bold text-white text-[18px]">Problem-solving</p>
          </div>
        </div>
      </section>

      {/* Sidebar + Content Layout */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[80px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Sidebar */}
            <div className="w-full lg:w-[294px] shrink-0">
              <div className="flex flex-col gap-[26px] lg:sticky lg:top-24">
                <Link
                  href="/enroll"
                  className="bg-[#b0ff40] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center hover:brightness-110 transition-all"
                >
                  <span className="font-mono font-bold text-[#0FD3C6] text-[20px]">
                    ENROLL TODAY:
                  </span>
                </Link>

                <Link
                  href="/programs"
                  className="border border-[#0FD3C6] h-[48px] w-[239px] rounded-[12px] flex items-center justify-center hover:bg-[#0FD3C6]/5 transition-all"
                >
                  <span className="font-mono font-bold text-[#0FD3C6] text-[16px]">
                    View Camp Schedule
                  </span>
                </Link>

                <div>
                  <p className="font-mono font-bold text-[#0FD3C6] text-[20px] leading-[21px] mb-4">
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
                  <p className="font-mono font-bold text-[#0FD3C6] text-[20px] leading-[21px] mb-4">
                    AGES
                  </p>
                  <p className="font-mono font-medium text-black text-[20px] leading-[21px]">
                    Rising Grades:
                  </p>
                  <p className="font-mono font-normal text-black text-[16px] leading-[21px]">
                    4–8
                  </p>
                </div>

                <div className="w-full h-px bg-[#d9d9d9]" />

                <div>
                  <p className="font-mono font-bold text-[#0FD3C6] text-[20px] leading-[21px] mb-4">
                    TRANSPORTATION
                  </p>
                  <p className="font-mono font-normal text-black text-[20px] leading-[21px]">
                    City wide and Suburban Bus Stops
                  </p>
                </div>

                <div className="w-full h-px bg-[#d9d9d9]" />
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0">
              {/* Divider */}
              <div className="w-full h-px bg-[#d9d9d9] mb-8" />

              {/* Title */}
              <h2 className="font-serif font-bold text-[#01325D] text-[36px] sm:text-[40px] uppercase leading-tight mb-6">
                Mechanica™
              </h2>

              {/* Description */}
              <p className="font-mono font-normal text-black text-[16px] leading-relaxed mb-10">
                This is where innovation meets velocity. Young engineers design powerful machines, test their limits, and compete with purpose. Every build is intentional, every race is earned, and confidence is forged at full speed.
              </p>

              {/* Video */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] mb-10 overflow-hidden rounded-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={program.videoSrc} type="video/mp4" />
                </video>
              </div>

              {/* Philosophy Link */}
              <p className="font-mono font-bold text-black text-[16px] mb-2">
                <span>Learn about the Kid Explorer Camp Philosophy </span>
                <Link href="/philosophy" className="text-[#0FD3C6] hover:underline">
                  (CLICK HERE)
                </Link>
              </p>

              {/* WHY WE'RE DIFFERENT */}
              <div className="mt-12 mb-12">
                <p className="font-mono font-bold text-black text-[16px] mb-4">
                  Limitless By Nature —Kid Explorer Camp 2026
                </p>

                <h3 className="font-serif font-bold text-[#01325D] text-[28px] sm:text-[32px] uppercase leading-tight mb-8">
                  WHY WE&apos;RE DIFFERENT
                </h3>

                <div className="font-mono font-normal text-black text-[18px] leading-relaxed space-y-6">
                  <p>
                    At Engineering Lab™, students step into the world of real automotive design and racing.
                  </p>
                  <p>
                    Campers engineer race car bodies, explore aerodynamics, and test performance on the track. Through hands-on building and team collaboration, students learn how design decisions impact speed, stability, and performance.
                  </p>
                  <p>
                    Each day combines engineering labs, physical activity, and competitive challenges to create an exciting and structured experience.
                  </p>
                </div>
              </div>

              {/* SWIM & WATER PLAY */}
              <div className="mb-12">
                <h3 className="font-serif font-bold text-[#01325D] text-[28px] sm:text-[32px] uppercase leading-tight mb-8">
                  SWIM & WATER PLAY
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

      {/* Accordion Sections */}
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
                    Engineering Thinking{" "}
                    <span className="font-normal">— understanding how things work, systems, structures, and mechanical design</span>
                  </li>
                  <li className="ms-[24px]">
                    Hands-On Building{" "}
                    <span className="font-normal">— constructing models, machines, and functional prototypes using real tools and materials</span>
                  </li>
                  <li className="ms-[24px]">
                    Physics in Action{" "}
                    <span className="font-normal">— force, motion, energy, balance, and stability applied through builds</span>
                  </li>
                  <li className="ms-[24px]">
                    Problem-Solving & Troubleshooting{" "}
                    <span className="font-normal">— testing, identifying issues, and improving designs through iteration</span>
                  </li>
                  <li className="ms-[24px]">
                    Design & Structural Logic{" "}
                    <span className="font-normal">— planning, blueprint reading, measurement, and precision</span>
                  </li>
                  <li className="ms-[24px]">
                    Maker Skills{" "}
                    <span className="font-normal">— tools, materials, assembly, and safe lab practices</span>
                  </li>
                  <li className="ms-[24px]">
                    Critical Thinking{" "}
                    <span className="font-normal">— analyzing outcomes, refining builds, and optimizing performance</span>
                  </li>
                  <li className="ms-[24px]">
                    Collaboration & Execution{" "}
                    <span className="font-normal">— working in teams, assigning roles, and completing projects</span>
                  </li>
                  <li className="ms-[24px]">
                    Spatial Awareness{" "}
                    <span className="font-normal">— understanding dimensions, movement, and real-world application of design</span>
                  </li>
                </ul>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Simulation"
              isOpen={openSections.has("simulation")}
              onToggle={() => toggleSection("simulation")}
            >
              <div className="font-mono text-[#01325D] whitespace-pre-wrap">
                <p className="font-bold text-[18px] leading-[24px] mb-1">
                  Precision & Execution
                </p>
                <p className="font-normal text-[16px] leading-[24px] mb-6">
                  Students learn to measure carefully, build intentionally, and follow through on designs, understanding that quality comes from focus, accuracy, and iteration.
                </p>
                <p className="font-bold text-[18px] leading-[24px] mb-1">
                  Outcome
                </p>
                <p className="font-normal text-[16px] leading-[24px]">
                  Students develop the ability to design, build, and understand real-world systems, gaining confidence in engineering concepts and hands-on creation. They leave with practical skills, stronger problem-solving abilities, and the mindset to build and improve anything they encounter.
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Continuum"
              isOpen={openSections.has("continuum")}
              onToggle={() => toggleSection("continuum")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] max-w-[842px] whitespace-pre-wrap">
                <p className="mb-6">
                  Mechanica™ extends into a year-round engineering pathway within Launchpad™, where students continue to build advanced projects, deepen technical skills, and explore complex systems and design challenges. What begins as hands-on building evolves into engineering fluency and real-world capability.
                </p>
                <p>
                  <Link href="/enroll" className="font-mono font-medium text-[#0FD3C6] underline">
                    Join Now
                  </Link>
                  {"  "}
                  <Link href="/programs" className="font-mono font-medium text-[#0FD3C6] underline">
                    Learn More!
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
              <div className="font-mono text-[#01325D] whitespace-pre-wrap space-y-6">
                <div>
                  <p className="font-bold text-[16px] leading-relaxed">
                    What is Mechanica™ Summer Camp?
                  </p>
                  <p className="font-normal text-[12px] leading-relaxed">
                    Mechanica™ is a hands-on engineering and building experience where students explore how things work by designing, constructing, and testing real projects.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-relaxed">
                    What kinds of projects will students build?
                  </p>
                  <p className="font-normal text-[12px] leading-relaxed">
                    Students may create structures, simple machines, mechanical systems, vehicles, or functional prototypes, all designed to apply engineering and physics concepts.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-relaxed">
                    Is this too advanced for younger students (K–2)?
                  </p>
                  <p className="font-normal text-[12px] leading-relaxed">
                    No. Projects are age-differentiated, with younger students focusing on basic building and exploration, while older students engage in more complex design and problem-solving.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-relaxed">
                    What makes Mechanica™ valuable for my child?
                  </p>
                  <p className="font-normal text-[12px] leading-relaxed">
                    Students develop engineering thinking, problem-solving skills, precision, and confidence, giving them a strong foundation for future STEM learning and real-world application.
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
