"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export default function TheBlueprintPage() {
  const program = getProgramById("the-blueprint");
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
          src="/images/programs/ideaforge-hero.png"
          alt={program.title}
          width={1440}
          height={600}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* Snapshot Bar */}
      <section className="bg-[#1493E8] py-6 sm:py-8">
        <div className="max-w-[1344px] mx-auto px-6 flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { label: "Lab", value: "IdeaForge™" },
            { label: "Orbit Level", value: "Orbit IV" },
            { label: "Ages", value: "9–14" },
            { label: "Camp Hours", value: "9 AM – 6 PM" },
            { label: "Aquatics", value: "Swimming" },
            { label: "CoreIQ", value: "Presenting ideas" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-[6px] px-[10px] py-[10px]">
              <p className="font-mono font-medium text-white text-[14px]">{item.label}</p>
              <p className="font-mono font-bold text-white text-[18px]">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar + Content Layout */}
      <section className="relative">
        {/* Desktop Sidebar */}
        <div className="absolute left-6 sm:left-12 lg:left-[89px] top-0 z-30 w-[239px] hidden md:block">
          <div className="flex flex-col gap-[26px] pt-10">
            <Link href="/enroll" className="bg-[#b0ff40] h-[48px] w-full rounded-[12px] flex items-center justify-center hover:brightness-110 transition-all">
              <span className="font-mono font-bold text-[#1493E8] text-[20px]">ENROLL TODAY:</span>
            </Link>

            <Link href="/schedule" className="border border-[#1493E8] h-[48px] w-full rounded-[12px] flex items-center justify-center hover:bg-[#1493E8]/5 transition-all">
              <span className="font-mono font-bold text-[#1493E8] text-[16px]">View Camp Schedule</span>
            </Link>

            <div>
              <p className="font-mono font-bold text-[#1493E8] text-[20px] leading-[21px] mb-2">SESSIONS</p>
              <p className="font-mono font-normal text-black text-[16px] leading-[24px]">(I)9am – 3pm (II)3pm - 6pm</p>
              <p className="font-mono font-normal text-black text-[16px] leading-[24px]">(III)12pm - 6pm</p>
            </div>

            <div className="w-full h-px bg-[#d9d9d9]" />

            <div>
              <p className="font-mono font-bold text-[#1493E8] text-[20px] leading-[21px] mb-2">AGES</p>
              <p className="font-mono font-normal text-black text-[16px]">
                <span className="font-medium">Rising Grades:</span> Grades 4–8
              </p>
            </div>

            <div className="w-full h-px bg-[#d9d9d9]" />

            <div>
              <p className="font-mono font-bold text-[#1493E8] text-[20px] leading-[21px] mb-2">TRANSPORTATION</p>
              <p className="font-mono font-normal text-black text-[16px] leading-[21px]">City wide and Suburban Bus Stops</p>
            </div>

            <div className="w-full h-px bg-[#d9d9d9]" />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="md:hidden bg-white py-6 px-6">
          <div className="flex flex-col gap-4">
            <Link href="/enroll" className="bg-[#b0ff40] h-[48px] w-full rounded-[12px] flex items-center justify-center">
              <span className="font-mono font-bold text-[#1493E8] text-[18px]">ENROLL TODAY:</span>
            </Link>
            <Link href="/schedule" className="border border-[#1493E8] h-[48px] w-full rounded-[12px] flex items-center justify-center">
              <span className="font-mono font-bold text-[#1493E8] text-[16px]">View Camp Schedule</span>
            </Link>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <p className="font-mono font-bold text-[#1493E8] text-[16px]">SESSIONS</p>
                <p className="font-mono font-normal text-black text-[14px]">(I)9am – 3pm</p>
                <p className="font-mono font-normal text-black text-[14px]">(II)3pm - 6pm</p>
                <p className="font-mono font-normal text-black text-[14px]">(III)12pm - 6pm</p>
              </div>
              <div>
                <p className="font-mono font-bold text-[#1493E8] text-[16px]">AGES</p>
                <p className="font-mono font-normal text-black text-[14px]">Rising Grades 4–8</p>
              </div>
            </div>
            <div className="border-t border-[#d9d9d9] pt-3">
              <p className="font-mono font-bold text-[#1493E8] text-[16px]">TRANSPORTATION</p>
              <p className="font-mono font-normal text-black text-[14px]">City wide and Suburban Bus Stops</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%] py-12 sm:py-16 lg:py-20">
          <div className="ml-0 lg:ml-[320px]">
            {/* Overview */}
            <div id="overview" className="mb-16">
              <div className="w-full h-px bg-[#d9d9d9] mb-8" />

              <h2
                className="font-serif font-bold text-[#01325D] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-8"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                IDEAFORGE™
              </h2>

              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8 max-w-[929px]">
                At IdeaForge™, science, exploration, and imagination take center stage. Campers dive into hands-on experiments, creative investigations, and mind-expanding adventures, all while building teamwork, problem-solving, and a love for discovery.
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
                  <source src="/videos/Idealforge.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Philosophy Link */}
              <p className="font-mono font-bold text-black text-sm sm:text-base mb-4">
                <span className="font-normal">Learn about the Kid Explorer Camp Philosophy </span>
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

              <div className="font-mono font-normal text-black text-sm sm:text-base lg:text-[18px] leading-relaxed space-y-6 max-w-[897px]">
                <p>
                  At Kid Explorer IdeaForge™, students explore how ideas become real products and businesses.
                </p>
                <p>
                  Campers identify problems, invent solutions, design prototypes, and build brands while learning the foundations of entrepreneurship.
                </p>
                <p>
                  Students work in teams to develop their own startup concept and prepare to present it during Demo Day&apos;s Venture Pitch Competition.
                </p>
                <p>
                  Each day blends innovation labs, swimming, and academic discipline to build confident and capable young leaders.
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

              <div className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed space-y-6 max-w-[897px]">
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
              <ul className="font-mono text-[#01325D] text-[16px] leading-[26px] list-disc space-y-2 pl-6">
                <li>
                  <span className="font-bold">Opportunity Recognition</span>
                  <span className="font-normal"> — identifying real-world problems and designing solutions with purpose</span>
                </li>
                <li>
                  <span className="font-bold">Product Development</span>
                  <span className="font-normal"> — ideation, prototyping, testing, and iteration using Maker Lab tools and systems</span>
                </li>
                <li>
                  <span className="font-bold">Business Foundations</span>
                  <span className="font-normal"> — cost, pricing, margins, value creation, and introduction to revenue models</span>
                </li>
                <li>
                  <span className="font-bold">Strategic Thinking</span>
                  <span className="font-normal"> — planning, decision-making, and refining ideas based on feedback and results</span>
                </li>
                <li>
                  <span className="font-bold">Communication &amp; Pitching</span>
                  <span className="font-normal"> — structured presentations, storytelling, persuasion, and investor-style pitches</span>
                </li>
                <li>
                  <span className="font-bold">Collaboration &amp; Leadership</span>
                  <span className="font-normal"> — team roles, project ownership, accountability, and execution</span>
                </li>
                <li>
                  <span className="font-bold">Design &amp; Innovation</span>
                  <span className="font-normal"> — functionality, user experience, and product improvement</span>
                </li>
                <li>
                  <span className="font-bold">Resilience &amp; Iteration</span>
                  <span className="font-normal"> — testing, failing forward, refining, and improving outcomes</span>
                </li>
              </ul>
            </AccordionSection>

            <AccordionSection
              title="The Simulation & Storyline"
              isOpen={openSections.has("simulation")}
              onToggle={() => toggleSection("simulation")}
            >
              <div className="font-mono text-[#01325D] text-[16px] leading-[24px] max-w-[759px] space-y-6">
                <div>
                  <p className="font-bold text-[18px] mb-2">Execution &amp; Ownership</p>
                  <p className="font-normal">
                    Students learn to take an idea from concept to completion, manage their time, refine their work, and stand behind what they build—developing discipline that translates into both academics and real-world success.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[18px] mb-2">Outcome</p>
                  <p className="font-normal">
                    Students move beyond ideas into real creation and execution—developing products, refining concepts, and presenting them with clarity and confidence. By the end of the program, students demonstrate independent thinking, business awareness, and the ability to bring an idea to life.
                  </p>
                </div>
              </div>
            </AccordionSection>

            <AccordionSection
              title="The Continuum"
              isOpen={openSections.has("continuum")}
              onToggle={() => toggleSection("continuum")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] max-w-[842px] space-y-4">
                <p>
                  IdeaForge™ becomes a year-round innovation track within Launchpad™, where students continue to develop products, deepen business understanding, and engage in advanced Maker Lab builds and pitch opportunities. Skills compound, ideas evolve, and students grow into capable creators and thinkers.
                </p>
                <p>
                  <Link href="/enroll" className="font-medium text-[#0FD3C6] underline hover:brightness-110">
                    Join Now
                  </Link>
                  {"  "}
                  <Link href="/programs" className="font-medium text-[#0FD3C6] underline hover:brightness-110">
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
              <div className="font-mono text-[#01325D] leading-normal max-w-[870px] space-y-4">
                <div>
                  <p className="font-bold text-[16px] mb-1">What is IdeaForge™ Summer Camp?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    IdeaForge™ is a hands-on entrepreneurship and product development experience where students design, build, and refine real products while learning how businesses are created.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] mb-1">What kinds of projects will students work on?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    Students may create functional prototypes such as engineered accessories, protective sports gear concepts, tech-enabled products, or redesigned everyday items—built with purpose and tested for improvement.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-[16px] mb-1">Will students present their ideas?</p>
                  <p className="font-normal text-[12px] sm:text-[14px]">
                    Yes. Students develop and deliver structured pitches, learning how to communicate their ideas clearly and confidently in a Demo Day-style experience.
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
