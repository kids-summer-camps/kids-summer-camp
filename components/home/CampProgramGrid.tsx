"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animations";

interface CampProgram {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
}

const campPrograms: CampProgram[] = [
  {
    id: "prelude",
    title: "THE PRELUDE",
    subtitle: "Rising Pre-K (3 - 4 years)",
    icon: "/images/icons/saturn.svg",
    bgColor: "bg-[#0FD3C6]",
  },
  {
    id: "first-flight",
    title: "FIRST FLIGHT",
    subtitle: "Day Camp — Rising K & 1st",
    icon: "/images/icons/flight.svg",
    bgColor: "bg-[#01325D]",
  },
  {
    id: "power-play",
    title: "POWER PLAY",
    subtitle: "Sports Camp — Rising K–7",
    icon: "/images/icons/binoculars.svg",
    bgColor: "bg-[#1493E8]",
  },
  {
    id: "blueprint",
    title: "THE BLUEPRINT",
    subtitle: "Rising 2nd–3rd",
    icon: "/images/icons/toxic.svg",
    bgColor: "bg-[#01325D]",
  },
  {
    id: "cosmic",
    title: "COSMIC CURIOSITY",
    subtitle: "1st–2nd",
    icon: "/images/icons/atom.svg",
    bgColor: "bg-[#1493E8]",
  },
  {
    id: "vision",
    title: "VISION ARCHITECT",
    subtitle: "The Plug Club — Rising 4th–7th",
    icon: "/images/icons/token-space.svg",
    bgColor: "bg-[#0FD3C6]",
  },
  {
    id: "vanguard",
    title: "THE VANGUARD",
    subtitle: "Leadership — Rising 8th",
    icon: "/images/icons/shuttle.svg",
    bgColor: "bg-[#01325D]",
  },
  {
    id: "sports",
    title: "SPORTS",
    subtitle: "Rising K - 7th",
    icon: "/images/icons/sports.svg",
    bgColor: "bg-[#1493E8]",
  },
];

function CampCard({ program }: { program: CampProgram }) {
  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Icon Container - Exact dimensions: 165px x 167px, border-radius: 20px */}
      <motion.div
        className={`${program.bgColor} rounded-[20px] w-[140px] h-[140px] sm:w-[165px] sm:h-[167px] flex items-center justify-center mb-4`}
        whileHover={{ scale: 1.08, rotate: 2 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="w-[100px] h-[100px] sm:w-[128px] sm:h-[128px] relative"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={program.icon}
            alt={program.title}
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Text - Roboto Serif, 16px, Medium, centered */}
      <div className="text-center w-[180px] sm:w-[213px]">
        <h3 className="font-serif font-medium text-black text-[14px] sm:text-[16px] leading-tight mb-1">
          {program.title}
        </h3>
        <p className="font-serif font-medium text-black text-[14px] sm:text-[16px] leading-tight">
          {program.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export function CampProgramGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
        {/* Grid of 8 camp programs - 4 columns on desktop, 2 on tablet, 2 on mobile */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-8 lg:gap-x-12"
        >
          {campPrograms.map((program) => (
            <StaggerItem key={program.id}>
              <CampCard program={program} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
