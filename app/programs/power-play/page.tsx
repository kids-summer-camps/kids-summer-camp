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
      <section className="relative">
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1920&q=80"
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
            <p className="font-mono font-bold text-[#01325D] text-[16px]">All Orbits – Sports Track</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Age</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px]">{program.ages}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Level</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px]">All Levels</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Aquatics</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px]">Yes</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] uppercase">Focus</p>
            <p className="font-mono font-bold text-[#01325D] text-[16px] text-center">Sports, Leadership, Grit</p>
          </div>
        </div>
      </section>

      {/* Two Column Overview */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mono font-bold text-[#0FD3C6] text-[28px] sm:text-[36px] mb-6">
                Run the Field. Own the Game. Lead the Pack.
              </h2>
              <div className="font-mono font-normal text-black text-[16px] leading-relaxed space-y-4">
                <p>
                  {program.subtitle}
                </p>
                <p>
                  {program.description}
                </p>
                <p>
                  Power Play is where athleticism meets leadership and every camper becomes a game-changer.
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
                title: "Athletic Training",
                description: "Skill building across multiple sports",
                image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400&q=80"
              },
              {
                title: "Team Challenges",
                description: "Strategic games and competitive play",
                image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80"
              },
              {
                title: "Leadership Development",
                description: "Building confidence and teamwork skills",
                image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&q=80"
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
              title="A Day on the Field"
              isOpen={openSections.has("schedule")}
              onToggle={() => toggleSection("schedule")}
              isFirst={true}
            >
              <div className="font-mono font-medium text-[#01325D] text-[16px] leading-[24px] whitespace-pre-line">
                {`9:00 — Team Circle
9:15 — Math & Reading
9:45 — Sport Skills Training
11:00 — Team Games
12:00 — Lunch
12:30 — Swimming & Water Sports
1:30 — Competition Challenges
2:30 — Victory Circle & Reflection
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
                  <span className="leading-[24px]">Athletic Excellence</span>
                  <br />
                  <span className="font-normal leading-[24px]">Building strength, speed, and skill</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[24px]">Leadership & Teamwork</span>
                  <br />
                  <span className="font-normal leading-[24px]">Leading teams and supporting others</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[24px]">Grit & Resilience</span>
                  <br />
                  <span className="font-normal leading-[24px]">Pushing through challenges</span>
                </p>
                <p className="mb-0">
                  <span className="leading-[24px]">Strategic Thinking</span>
                  <br />
                  <span className="font-normal leading-[24px]">Game planning and execution</span>
                </p>
                <p>
                  <span className="leading-[24px]">Confidence & Discipline</span>
                  <br />
                  <span className="font-normal leading-[24px]">Self-belief through athletics</span>
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
                  <span className="font-normal leading-[24px]">Sports training builds character</span>
                </p>
                <p>
                  <span className="leading-[24px]">Team Discipline</span>
                  <br />
                  <span className="font-normal leading-[24px]">Sportsmanship and collaboration</span>
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
                  {`Power Play prepares students for:

• Competitive Sports Teams
• Athletic Leadership Roles
• School Sports Excellence
• Team Captain Opportunities

Students leave ready to compete, lead, and inspire with confidence.`}
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
                  <span className="leading-[24px]">Do campers need athletic experience?</span>
                  <br />
                  <span className="font-normal leading-[24px]">-No. All skill levels are welcome and supported.</span>
                </p>
                <p className="leading-[24px]">&nbsp;</p>
                <p className="mb-0">
                  <span className="leading-[24px]">What sports are included?</span>
                  <br />
                  <span className="font-normal leading-[24px]">-Basketball, soccer, swimming, track, and team games.</span>
                </p>
                <p className="leading-[24px]">&nbsp;</p>
                <p>
                  <span className="leading-[24px]">Is academic time included?</span>
                  <br />
                  <span className="font-normal leading-[24px]">-Yes. Daily math and reading sessions keep skills sharp.</span>
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
