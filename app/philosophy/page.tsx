"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

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
    title: "Creativity (Dream Alchemy)",
    quote: "Ideas are gold — we just teach 'em how to melt it down and shape it.",
    description: "We turn raw imagination into engineered brilliance.",
    color: "#1493E8",
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

function DREME9Card({
  card,
  isMobile,
  isExpanded,
  onTap,
}: {
  card: (typeof dreme9Cards)[0];
  isMobile: boolean;
  isExpanded: boolean;
  onTap: () => void;
}) {
  if (isMobile) {
    return (
      <motion.div
        className="p-6 flex flex-col justify-center items-center text-center cursor-pointer relative overflow-hidden"
        style={{ backgroundColor: card.color }}
        onClick={onTap}
        layout
      >
        <motion.h3
          className="font-serif font-bold text-white text-lg uppercase leading-tight"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          layout="position"
        >
          {card.title}
        </motion.h3>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="font-mono font-bold text-white text-sm mt-3 mb-2">
                &ldquo;{card.quote}&rdquo;
              </p>
              <p className="font-mono font-normal text-white/90 text-sm">
                {card.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-3 flex items-center gap-1.5">
          <span className="block w-6 h-0.5 rounded-full bg-white/40" />
          <span className="text-white/50 text-[10px] font-mono uppercase tracking-wider">
            {isExpanded ? "tap to close" : "tap to read"}
          </span>
          <span className="block w-6 h-0.5 rounded-full bg-white/40" />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-8 min-h-[381px] flex flex-col justify-center items-center text-center cursor-pointer relative overflow-hidden"
      style={{ backgroundColor: card.color }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.h3
        className="font-serif font-bold text-white text-lg sm:text-xl lg:text-2xl uppercase leading-tight mb-4"
        style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
        variants={{
          rest: { y: 60 },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {card.title}
      </motion.h3>

      <motion.p
        className="font-mono font-bold text-white text-sm mb-4"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        &ldquo;{card.quote}&rdquo;
      </motion.p>

      <motion.p
        className="font-mono font-normal text-white text-sm"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {card.description}
      </motion.p>

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
  const isMobile = useIsMobile();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardTap = (index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1152px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="none" delay={0}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1
              className="font-serif font-bold text-[#1493E8] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-8"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Philosophy:
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2
              className="font-serif font-bold text-[#1493E8] text-xl sm:text-2xl lg:text-[32px] uppercase leading-tight mb-12"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              We&apos;re About The Wonderment
            </h2>
          </FadeIn>

          <FadeIn direction="none" delay={0.3}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          <div className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed space-y-4 mb-16">
            <FadeIn direction="up" delay={0.4}>
              <p>
                We don&apos;t hand out blueprints here — we hand out launchpads. At Kid Explorer Camp, we don&apos;t teach kids what to think we give them the space to blow our minds.
                See, the thing about kids is... some of them already carry the blueprint for a whole civilization in their back pocket. They&apos;ve already imagined new worlds. They&apos;ve already felt the beat of tomorrow.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.5}>
              <p>
                We believe wonder is the real flex — that spark that turns curiosity into creation, and mistakes into momentum.
                We&apos;re not here to impress them with what we know; we&apos;re here to remind them that they might be the first to know something no one&apos;s ever seen before.
                Our job isn&apos;t to teach them who they are.
                Our job is to stay out of their way long enough for them to find out first.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <p>
                &ldquo;Wonderment&rdquo; is that magic spark — the raw fuel behind every breakthrough, every invention, every movement that ever changed the game. It&apos;s what happens when curiosity gets loud, when dreams stop being whispers and start sounding like engines warming up. We don&apos;t act like we have the answers. We act like we&apos;re standing next to the next world-builders. Because we might be.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.7}>
              <p>
                And when that spark lights?
                We don&apos;t bottle it.
                We build a universe around it.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.8}>
              <p>
                Wonderment isn&apos;t a mood.
                It&apos;s a movement.
                It&apos;s our secret sauce.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="none" delay={0}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          <FadeIn direction="up" delay={0}>
            <div className="text-center mb-4">
              <h2
                className="font-serif font-bold text-[#1493E8] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                The DREME 9&trade;
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <p className="font-serif font-medium italic text-[#1493E8] text-sm sm:text-base tracking-[2.08px] text-center mb-12">
              This isn&apos;t a curriculum. It&apos;s the code behind world-builders.
            </p>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16"
          >
            {dreme9Cards.map((card, index) => (
              <StaggerItem key={index}>
                <DREME9Card
                  card={card}
                  isMobile={isMobile}
                  isExpanded={expandedCard === index}
                  onTap={() => handleCardTap(index)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0}>
            <div className="mb-12">
              <h3
                className="font-serif font-bold text-black text-lg sm:text-xl lg:text-[24px] leading-tight mb-4"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                How it connects to Wonderment:
              </h3>
              <p
                className="font-serif font-normal text-black text-sm sm:text-base leading-relaxed"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Each DREME 9 skill isn&apos;t just a lesson — it&apos;s a key. A key to unlocking what&apos;s already inside these kids. We don&apos;t crown the future — we spot it early. We build space for it to grow wild, loud, and limitless.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="none" delay={0.1}>
            <div className="w-full h-px bg-[#d9d9d9] mb-8" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
