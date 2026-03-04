"use client";

import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { HeroSection } from "@/components/home/HeroSection";

const programs = [
  {
    title: "Lil' Launchers (3 – 4 years)",
    subtitle: "Welcome to Kid Explorer Camp — where the future isn't just imagined, it's built.",
    description:
      "This isn't your average day camp. It's the launchpad for your little explorer's first adventure a space where creativity flows, confidence grows, and curiosity runs wild. Our youngest campers step into a world where art collides with innovation, STEM sparks imagination, and friendships are formed with the same energy rockets meet the sky.\n\nThink: hands-on creations, splash-ready swim sessions, and early leadership skills wrapped in a summer they'll never forget. Every moment is designed to nurture independence, ignite brilliance, and make learning feel like play",
    ages: "Rising Pre-K ( 3 – 4 years)",
    hours: "9 AM – 3 PM",
    location: "Chicago",
    tagline: "This is where future visionaries take their first step. It's cool, it's bold — it's Kid Explorer Camp.",
    href: "/programs/lil-launchers",
  },
  {
    title: "FIRST FLIGHT (Day Camp — Rising K & 1st)",
    subtitle: "Welcome to Kid Explorer Camp — where small steps turn into giant leaps.",
    description:
      "This is the launchpad for young dreamers ready to soar with curiosity. Every day is packed with creative projects, movement challenges, and discovery-driven play, building confidence and imagination along the way. Friendships form fast, creativity sparks faster, and independence grows at supersonic speed.",
    ages: "Rising K – 1",
    hours: "9 AM – 3 PM",
    location: "Citywide Bus Stops, Chicago",
    tagline: "Lift off into a summer where imagination takes flight.",
    href: "#",
  },
  {
    title: "POWER PLAY (Sports Camp — Rising K–7)",
    subtitle: "Where the field is a stage and every move is a statement.",
    description:
      "Kid Explorer Camp Sports merges athletic skill with leadership, teamwork, and grit. From fast-paced games to strategic challenges, campers push limits, crush personal records, and discover the power of discipline plus fun. Energy, skill, and confidence collide in a summer where every kid becomes a game-changer.",
    ages: "Rising K – 7",
    hours: "9 AM – 3 PM",
    location: "Citywide Bus Stops, Chicago",
    tagline: "Run the field. Own the game. Lead the pack.",
    href: "/programs/power-play",
  },
  {
    title: "THE BLUEPRINT (Rising 2nd–3rd)",
    subtitle: "Big ideas, small humans, limitless potential.",
    description:
      "At The Blueprint, campers become architects of innovation. STEM labs, creative builds, and collaborative projects turn curiosity into real-world problem-solving. Every activity is a mini launch sequence for the future innovators ready to dream, design, and disrupt.",
    ages: "Rising 2nd – 3rd",
    hours: "9 AM – 3 PM",
    location: "Citywide Bus Stops, Chicago",
    tagline: "They don't just imagine the future — they design it.",
    href: "/programs/the-blueprint",
  },
  {
    title: "COSMIC CURIOSITY (1st–2nd)",
    subtitle: "First they wonder, then they build.",
    description:
      "At Cosmic Curiosity, science, exploration, and imagination take center stage. Campers dive into hands-on experiments, creative investigations, and mind-expanding adventures, all while building teamwork, problem-solving, and a love for discovery.",
    ages: "Rising 1st – 2nd",
    hours: "9 AM – 3 PM",
    location: "Citywide Bus Stops, Chicago",
    tagline: "Wonder is the superpower.",
    href: "/programs/cosmic-curiosity",
  },
  {
    title: "Vision Architect - The Plug Club (Entrepreneurship Track — Rising 4th–7th)",
    subtitle: "Where vision meets action.",
    description:
      "Campers become mini moguls and creative disruptors. Through hands-on projects, pitch challenges, and innovation labs, they learn how to turn ideas into impact. Skills in leadership, collaboration, and problem-solving make every camper a Day One in their own story.",
    ages: "Rising 4th – 7th",
    hours: "9 AM – 3 PM",
    location: "Citywide Bus Stops, Chicago",
    tagline: "Dream it. Build it. Own it.",
    href: "/programs/vision-architect",
  },
  {
    title: "THE VANGUARD (Leadership Training — Rising 8th)",
    subtitle: "Lead loud. Inspire always.",
    description:
      "Our advanced leadership track hones professionalism, responsibility, and high-impact skills. Campers practice decision-making, mentorship, and team dynamics — equipping them to guide with vision both on and off campus.",
    ages: "Rising 8th",
    hours: "9 AM – 3 PM",
    location: "Citywide Bus Stops, Chicago",
    tagline: "Step into your power. Lead the way.",
    href: "/programs/the-vanguard",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero Section */}
      <HeroSection
        videoSrc="/videos/camp-hero.mp4"
        imageSrc="/images/hero-bg.png"
        posterSrc="/images/hero-bg.png"
      />

      {/* Intro Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Blue Gradient Card */}
            <div 
              className="rounded-[40px] p-8 sm:p-10 lg:p-12 w-full lg:flex-[0.376] min-h-[292px] flex items-center"
              style={{ background: "linear-gradient(200.642deg, rgb(36, 167, 255) 16.679%, rgb(2, 107, 177) 92.778%)" }}
            >
              <p className="font-mono font-medium text-white text-[15px] leading-relaxed">
                Summertime is where, our campers build more than memories they build mindsets.{" "}
                From science to sport, from imagination to leadership, every program at Kid Explorer Camp is a blueprint for becoming.
              </p>
            </div>

            {/* White Card with Shadow */}
            <div className="rounded-[40px] p-8 sm:p-10 lg:p-12 w-full lg:flex-[0.624] min-h-[292px] flex items-center bg-white shadow-[0px_8px_13.7px_0px_rgba(0,0,0,0.1)]">
              <p className="font-mono font-medium text-black text-[15px] leading-relaxed">
                Every camper leaves with more than memories — they leave with skills, mindset, and vision. Sports, STEM, leadership labs, and creative challenges all become launchpads for life, preparing kids to dream big, execute boldly, and lead the way.{" "}
                <br /><br />
                At Kid Explorer Camps, summer isn't a pause. It's a launch sequence, and every child is a Day One, ready to explore, create, and lead the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          {programs.map((program, index) => (
            <ProgramDetail
              key={index}
              {...program}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
