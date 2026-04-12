"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

export const dreme9Cards = [
  {
    title: "Emotional Intelligence (E.Q. Flow)",
    quote: "Power moves start with self-mastery.",
    description:
      "We teach kids to lead their inner world before they lead the outer one — reading the room, owning their energy, moving with intention.",
    color: "#1493E8",
  },
  {
    title: "Critical Thinking (Code Cracker)",
    quote: "The future belongs to the ones who ask the hard questions.",
    description:
      "Every breakthrough starts with curiosity. We train young minds to think like architects — question, decode, rebuild.",
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
    description:
      "Leadership here isn't loud — it's electric. It's presence. It's power. It's knowing when to lead and when to lift.",
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
      <div
        className="flex cursor-pointer flex-col items-center overflow-hidden p-6 text-center"
        style={{ backgroundColor: card.color }}
        onClick={onTap}
      >
        <h3
          className="font-serif text-lg font-bold uppercase leading-tight text-white"
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
        >
          {card.title}
        </h3>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{
            gridTemplateRows: isExpanded ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <p className="mb-2 mt-3 font-mono text-sm font-bold text-white">&ldquo;{card.quote}&rdquo;</p>
            <p className="font-mono text-sm font-normal text-white/90">{card.description}</p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <span className="block h-0.5 w-6 rounded-full bg-white/40" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
            {isExpanded ? "tap to close" : "tap to read"}
          </span>
          <span className="block h-0.5 w-6 rounded-full bg-white/40" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative flex min-h-[381px] cursor-pointer flex-col items-center justify-center overflow-hidden p-8 text-center"
      style={{ backgroundColor: card.color }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.h3
        className="mb-4 font-serif text-lg font-bold uppercase leading-tight text-white sm:text-xl lg:text-2xl"
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
        className="mb-4 font-mono text-sm font-bold text-white"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        &ldquo;{card.quote}&rdquo;
      </motion.p>

      <motion.p
        className="font-mono text-sm font-normal text-white"
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {card.description}
      </motion.p>

      <motion.div
        className="absolute bottom-4 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-white/50"
        variants={{
          rest: { opacity: 0.5, scaleX: 1 },
          hover: { opacity: 0, scaleX: 0 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function Dreme9Section() {
  const isMobile = useIsMobile();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardTap = (index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <section id="dreme-9" className="scroll-mt-20 bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1152px] px-6 sm:px-8 lg:px-12">
        <FadeIn direction="none" delay={0}>
          <div className="mb-12 h-px w-full bg-[#d9d9d9]" />
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h2
            className="mb-4 font-serif text-3xl font-bold uppercase leading-tight text-[#1493E8] sm:text-4xl lg:text-[40px]"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            The DREME 9&trade;
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <p className="mb-12 text-center font-serif text-sm italic tracking-[2.08px] text-[#1493E8] sm:text-base">
            This isn&apos;t a curriculum. It&apos;s the code behind world-builders.
          </p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        >
          {dreme9Cards.map((card, index) => (
            <StaggerItem key={card.title}>
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
              className="mb-4 font-serif text-lg font-bold leading-tight text-black sm:text-xl lg:text-[24px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              How it connects to Wonderment
            </h3>
            <p
              className="font-serif text-sm font-normal leading-relaxed text-black sm:text-base"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Each DREME 9 skill isn&apos;t just a lesson — it&apos;s a key. A key to unlocking what&apos;s already inside
              these kids. We don&apos;t crown the future — we spot it early. We build space for it to grow wild, loud, and
              limitless.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="none" delay={0.1}>
          <div className="mb-8 h-px w-full bg-[#d9d9d9]" />
        </FadeIn>
      </div>
    </section>
  );
}
