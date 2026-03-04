"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

// Program cards data for the 3 cards section
const programCards = [
  {
    id: "prelude-card",
    title: "THE PRELUDE (3 – 4 years)",
    subtitle: "Welcome to Kid Explorer Camp — where the future isn't just imagined, it's built.",
    image: "/images/programs/prelude.jpg",
  },
  {
    id: "first-flight-card",
    title: "FIRST FLIGHT (Day Camp — Rising K & 1st)",
    subtitle: "Welcome to Kid Explorer Camp — where small steps turn into giant leaps.",
    image: "/images/programs/first-flight.jpg",
  },
  {
    id: "power-play-card",
    title: "POWER PLAY (Sports Camp — Rising K–7)",
    subtitle: "Where the field is a stage and every move is a statement.",
    image: "/images/programs/power-play.jpg",
  },
];

function ProgramCard({ card }: { card: typeof programCards[0] }) {
  return (
    <motion.div
      className="group cursor-pointer bg-[#dfdfdf] rounded-[15px] overflow-hidden h-[321px] relative"
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image placeholder - in production, use actual images */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* Text overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.h3
          className="font-mono font-bold text-white text-[16px] leading-tight mb-2"
          initial={{ y: 0 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
        >
          {card.title}
        </motion.h3>
        <motion.p
          className="font-mono font-normal text-white/90 text-[12px] leading-snug"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {card.subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function BestCampSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
        {/* Section Title - 32px, bold, secondary color (#01325D) */}
        <FadeIn direction="up" delay={0}>
          <h2 className="font-serif font-bold text-[#01325D] text-[28px] sm:text-[32px] text-center mb-8 sm:mb-10 leading-tight">
            The Best Camp in the Chicago Area
          </h2>
        </FadeIn>

        {/* Bold Statement - Roboto Mono Bold, 16px */}
        <FadeIn direction="up" delay={0.1}>
          <p className="font-mono font-bold text-black text-base text-center mb-6 max-w-[1036px] mx-auto leading-relaxed">
            Unleashing every child's personal best through an unforgettable summer camp experience.
          </p>
        </FadeIn>

        {/* Description - Roboto Mono Regular, 16px */}
        <FadeIn direction="up" delay={0.2}>
          <p className="font-mono font-normal text-black text-sm sm:text-base text-center leading-relaxed max-w-[1036px] mx-auto mb-10 sm:mb-12">
            Every camper leaves with more than memories — they leave with skills, mindset, and vision. Sports, STEM, leadership labs, and creative challenges all become launchpads for life, preparing kids to dream big, execute boldly, and lead the way. At Kid Explorer Camps, summer isn't a pause. It's a launch sequence, and every child is a Day One, ready to explore, create, and lead the future.
          </p>
        </FadeIn>

        {/* View all link - right aligned, underlined, primary color */}
        <FadeIn direction="up" delay={0.3}>
          <div className="flex justify-end mb-8">
            <motion.a
              href="/programs"
              className="font-serif font-medium text-[#1493E8] text-base underline hover:text-[#1284D1] transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              View all →
            </motion.a>
          </div>
        </FadeIn>

        {/* Three Program Cards - 371px x 321px each, 15px border-radius */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {programCards.map((card) => (
            <StaggerItem key={card.id}>
              <ProgramCard card={card} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
