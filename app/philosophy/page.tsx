"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const dreme9Cards = [
  {
    title: "Emotional Intelligence (E.Q. Flow)",
    quote: "Power moves start with self-mastery.",
    description: "We teach kids to lead their inner world before they lead the outer one — reading the room, owning their energy, moving with intention.",
    color: "#1493E8",
  },
  {
    title: "Critical Thinking (Code Cracker)",
    quote: "The future belongs to the ones who ask the hard questions.",
    description: "Every breakthrough starts with curiosity. We train young minds to think like architects — question, decode, rebuild.",
    color: "#0FD3C6",
  },
  {
    title: "Collaboration (Squad Science)",
    quote: "No one builds empires solo.",
    description: "Innovation's a team sport. Our campers learn to vibe, build, and rise together.",
    color: "#01325D",
  },
  {
    title: "Creativity (Dream Alchemy)",
    quote: "Ideas are gold — we just teach 'em how to melt it down and shape it.",
    description: "We turn raw imagination into engineered brilliance.",
    color: "#1493E8",
  },
  {
    title: "Adaptability (Flex Mode)",
    quote: "When the world switches lanes, we glide.",
    description: "Kids learn to pivot like pros — because change isn't the enemy, it's the launchpad.",
    color: "#0FD3C6",
  },
  {
    title: "Resilience (Bounce Back DNA)",
    quote: "Pressure doesn't break diamonds. It makes 'em shine.",
    description: "We normalize failure like oxygen — it's not a setback, it's a signal.",
    color: "#01325D",
  },
  {
    title: "Entrepreneurial Mindset (Builder Energy)",
    quote: "If it doesn't exist, we make it.",
    description: "We raise creators who build the thing the world didn't know it needed.",
    color: "#1493E8",
  },
  {
    title: "Leadership (Command the Room)",
    quote: "Greatness isn't about ego. It's about ignition.",
    description: "Leadership here isn't loud — it's electric. It's presence. It's power. It's knowing when to lead and when to lift.",
    color: "#0FD3C6",
  },
  {
    title: "Embracing Failure (Feedback Fuel)",
    quote: "Failure ain't the villain. It's the cheat code.",
    description: "Every misstep is a map. We teach campers to turn 'not yet' into 'watch me.'",
    color: "#01325D",
  },
];

function DREME9Card({ card }: { card: typeof dreme9Cards[0] }) {
  return (
    <motion.div
      className="p-8 sm:p-10 min-h-[381px] flex flex-col justify-center items-center text-center cursor-pointer relative overflow-hidden"
      style={{ backgroundColor: card.color }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Title - Always visible */}
      <motion.h3
        className="font-serif font-bold text-white text-xl sm:text-2xl lg:text-[32px] uppercase leading-tight mb-4"
        variants={{
          rest: { y: 60 },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {card.title}
      </motion.h3>

      {/* Quote - Reveals on hover */}
      <motion.p
        className="font-mono font-bold text-white text-sm sm:text-base mb-4"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        "{card.quote}"
      </motion.p>

      {/* Description - Reveals on hover */}
      <motion.p
        className="font-mono font-normal text-white text-sm sm:text-base"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {card.description}
      </motion.p>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/50 rounded-full"
        variants={{
          rest: { opacity: 0.5, scaleX: 1 },
          hover: { opacity: 0, scaleX: 0 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero Section */}
      <HeroSection
        videoSrc="/videos/camp-hero.mp4"
        imageSrc="/images/hero-bg.png"
        posterSrc="/images/hero-bg.png"
      />

      {/* Philosophy Intro Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          {/* Divider */}
          <FadeIn direction="none" delay={0}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          {/* Title */}
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif font-bold text-[#1493E8] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-8">
              Philosophy:
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn direction="up" delay={0.2}>
            <h2 className="font-serif font-bold text-[#1493E8] text-xl sm:text-2xl lg:text-[32px] uppercase leading-tight mb-12">
              We're About The Wonderment
            </h2>
          </FadeIn>

          {/* Divider */}
          <FadeIn direction="none" delay={0.3}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          {/* Philosophy Text */}
          <div className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed whitespace-pre-wrap mb-16">
            <FadeIn direction="up" delay={0.4}>
              <p className="mb-0">"We don't hand out blueprints here — we hand out launchpads. At Kid Explorer Camp, we don't teach kids what to think we give them the space to blow our minds.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.45}>
              <p className="mb-0">See, the thing about kids is... some of them already carry the blueprint for a whole civilization in their back pocket. They've already imagined new worlds. They've already felt the beat of tomorrow.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <p className="mb-0">&nbsp;</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.55}>
              <p className="mb-0">We believe wonder is the real flex — that spark that turns curiosity into creation, and mistakes into momentum.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <p className="mb-0">We're not here to impress them with what we know; we're here to remind them that they might be the first to know something no one's ever seen before.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.65}>
              <p className="mb-0">Our job isn't to teach them who they are.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.7}>
              <p className="mb-0">Our job is to stay out of their way long enough for them to find out first.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.75}>
              <p className="mb-0">&nbsp;</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.8}>
              <p className="mb-0">"Wonderment" is that magic spark — the raw fuel behind every breakthrough, every invention, every movement that ever changed the game. It's what happens when curiosity gets loud, when dreams stop being whispers and start sounding like engines warming up. We don't act like we have the answers. We act like we're standing next to the next world-builders. Because we might be.</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.85}>
              <p className="mb-0">&nbsp;</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.9}>
              <p className="mb-0">And when that spark lights?</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.95}>
              <p className="mb-0">We don't bottle it.</p>
            </FadeIn>
            <FadeIn direction="up" delay={1}>
              <p className="mb-0">We build a universe around it.</p>
            </FadeIn>
            <FadeIn direction="up" delay={1.05}>
              <p className="mb-0">&nbsp;</p>
            </FadeIn>
            <FadeIn direction="up" delay={1.1}>
              <p className="mb-0">Wonderment isn't a mood.</p>
            </FadeIn>
            <FadeIn direction="up" delay={1.15}>
              <p className="mb-0">It's a movement.</p>
            </FadeIn>
            <FadeIn direction="up" delay={1.2}>
              <p>It's our secret sauce.</p>
            </FadeIn>
          </div>

          {/* Divider */}
          <FadeIn direction="none" delay={0}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          {/* The DREME 9 Title */}
          <FadeIn direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-[#1493E8] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-4">
                The DREME 9™
              </h2>
              <p className="font-serif font-medium italic text-[#1493E8] text-sm sm:text-base tracking-[2.08px]">
                This isn't a curriculum. It's the code behind world-builders.
              </p>
            </div>
          </FadeIn>

          {/* Divider */}
          <FadeIn direction="none" delay={0.1}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          {/* DREME 9 Grid */}
          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16"
          >
            {dreme9Cards.map((card, index) => (
              <StaggerItem key={index}>
                <DREME9Card card={card} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* How it connects to Wonderment */}
          <FadeIn direction="up" delay={0}>
            <div className="mb-12">
              <h3 className="font-serif font-bold text-black text-lg sm:text-xl lg:text-[24px] leading-tight mb-4">
                How it connects to Wonderment:
              </h3>
              <p className="font-serif font-normal text-black text-sm sm:text-base leading-relaxed">
                Each DREME 9 skill isn't just a lesson — it's a key. A key to unlocking what's already inside these kids. We don't crown the future — we spot it early. We build space for it to grow wild, loud, and limitless.
              </p>
            </div>
          </FadeIn>

          {/* Divider */}
          <FadeIn direction="none" delay={0.1}>
            <div className="w-full h-px bg-[#d9d9d9] mb-8" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
