"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion, AnimatePresence } from "framer-motion";

export default function VisionArchitectPage() {
  const program = getProgramById("vision-architect");
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
      <section className="relative">
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
              alt={program.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-[120px]">
            <h1 className="font-serif font-semibold text-white text-[48px] sm:text-[56px] lg:text-[64px] mb-6 leading-tight">
              {program.title}
            </h1>
            <p className="font-mono font-normal text-white text-[16px] sm:text-[20px] max-w-[758px] mb-8">
              {program.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white h-[48px] px-6 rounded-[14px] flex items-center justify-center hover:shadow-lg transition-all"
              >
                <span className="font-mono font-medium text-[#0FD3C6] text-[16px]">
                  Enroll Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-[#f7fbff] py-8 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-[32px] sm:gap-[60px]">
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Program</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px]">Orbit III – Leaders</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Age</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px]">{program.ages}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Level</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px]">Advanced</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Aquatics</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px]">Yes</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Focus</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px] text-center">Entrepreneurship, Leadership</p>
          </div>
        </div>
      </section>

      {/* Two Column Overview */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mono font-bold text-[#0FD3C6] text-[28px] sm:text-[36px] mb-6">
                Dream It. Build It. Own It.
              </h2>
              <div className="font-mono font-normal text-black text-[16px] leading-relaxed space-y-4">
                <p>
                  {program.subtitle}
                </p>
                <p>
                  {program.description}
                </p>
                <p>
                  Every camper becomes a visionary, ready to lead and innovate in their own right.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-[20px] overflow-hidden shadow-lg">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Campers Will Do - Matching Figma 237:2215 */}
      <section className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-mono font-bold text-[#01325D] text-[36px] text-center mb-12 whitespace-nowrap leading-normal">
            WHAT CAMPERS WILL DO
          </h2>
          
          <div className="flex flex-wrap justify-center gap-[24px]">
            {[
              {
                title: "Pitch Challenges",
                description: "Developing and presenting innovative ideas",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80"
              },
              {
                title: "Innovation Labs",
                description: "Building products and solving real problems",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
              },
              {
                title: "Leadership Projects",
                description: "Leading teams and managing initiatives",
                image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80"
              },
            ].map((activity, index) => (
              <div key={index} className="bg-[rgba(15,211,198,0.1)] rounded-[20px] px-[20px] py-[36px] w-[406px] h-[483px] flex flex-col items-center gap-[17px]">
                <div className="flex flex-col gap-[24px] w-full">
                  <div className="bg-white h-[261px] w-full rounded-[20px] relative overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-mono font-bold text-[#01325D] text-[28px] text-center leading-normal">
                    {activity.title}
                  </h3>
                </div>
                <p className="font-mono font-normal text-[#01325D] text-[16px] text-center leading-normal w-[284px]">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bordered Dropdown Sections - Matching Figma 237:2232 */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[120px]">
          <div className="w-full">
            <AccordionSection
              title="A Day of Vision"
              isOpen={openSections.has("schedule")}
              onToggle={() => toggleSection("schedule")}
              isFirst={true}
            >
              <div className="font-mono font-medium text-[#01325D] text-[16px] leading-[24px] whitespace-pre-line">
                {`9:00 — Vision Circle
9:15 — Math & Reading
9:45 — Innovation Workshop
11:00 — Pitch Lab
12:00 — Lunch
12:30 — Swimming & Sports
1:30 — Leadership Challenge
2:30 — Founder Showcase
3:00 — Dismissal`}
              </div>
            </AccordionSection>

            <AccordionSection
              title="Skills"
              isOpen={openSections.has("skills")}
              onToggle={() => toggleSection("skills")}
            >
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[24px] space-y-4 whitespace-pre-line">
                <p className="mb-0">
                  <span className="leading-[24px]">Entrepreneurial Thinking</span>
                  <br />
                  <span className="font-normal leading-[24px]">Turning ideas into action</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[24px]">Leadership & Management</span>
                  <br />
                  <span className="font-normal leading-[24px]">Leading teams and projects</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[24px]">Creative Problem Solving</span>
                  <br />
                  <span className="font-normal leading-[24px]">Innovation through design thinking</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[24px]">Presentation & Pitch Skills</span>
                  <br />
                  <span className="font-normal leading-[24px]">Communicating vision effectively</span>
                </p>
                <p>
                  <span className="leading-[24px]">Collaboration & Networking</span>
                  <br />
                  <span className="font-normal leading-[24px]">Building partnerships and teams</span>
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="Discipline Plan"
              isOpen={openSections.has("discipline")}
              onToggle={() => toggleSection("discipline")}
            >
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[24px] whitespace-pre-line">
                <p className="mb-0">
                  <span className="leading-[24px]">Intellectual Discipline</span>
                  <br />
                  <span className="font-normal leading-[24px]">Daily learning builds confidence</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[24px]">Physical Discipline</span>
                  <br />
                  <span className="font-normal leading-[24px]">Swimming and sports support growth</span>
                </p>
                <p>
                  <span className="leading-[24px]">Leadership Discipline</span>
                  <br />
                  <span className="font-normal leading-[24px]">Managing projects and leading with integrity</span>
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="Beyond The Camp"
              isOpen={openSections.has("beyond")}
              onToggle={() => toggleSection("beyond")}
            >
              <div className="font-mono font-normal text-[#01325D] text-[16px] leading-[24px] w-[845px]">
                <p className="leading-[24px] whitespace-pre-wrap">
                  {`Vision Architect prepares students for:

• Entrepreneurship Ventures
• Student Leadership Roles
• Business & Innovation Programs
• Young Founder Opportunities

Students leave ready to lead, innovate, and build their vision with confidence.`}
                </p>
              </div>
            </AccordionSection>

            <AccordionSection
              title="FAQ"
              isOpen={openSections.has("faq")}
              onToggle={() => toggleSection("faq")}
              isLast={true}
            >
              <div className="font-mono font-bold text-[#01325D] text-[16px] leading-[24px] whitespace-pre-line">
                <p className="mb-0">
                  <span className="leading-[24px]">Do campers need business experience?</span>
                  <br />
                  <span className="font-normal leading-[24px]">-No. We teach everything from idea to execution.</span>
                </p>
                <p className="leading-[24px]">&nbsp;</p>
                <p className="mb-0">
                  <span className="leading-[24px]">Will campers create real projects?</span>
                  <br />
                  <span className="font-normal leading-[24px]">-Yes. Real pitches, prototypes, and presentations.</span>
                </p>
                <p className="leading-[24px]">&nbsp;</p>
                <p>
                  <span className="leading-[24px]">Is there still physical activity?</span>
                  <br />
                  <span className="font-normal leading-[24px]">-Yes. Swimming and sports are integrated daily.</span>
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
