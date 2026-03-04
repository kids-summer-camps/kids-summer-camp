"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
interface ProgramDetailProps {
  title: string;
  subtitle: string;
  description: string;
  ages: string;
  hours: string;
  location: string;
  tagline: string;
  href: string;
}

export function ProgramDetail({
  title,
  subtitle,
  description,
  ages,
  hours,
  location,
  tagline,
  href,
}: ProgramDetailProps) {
  const ImagePlaceholder = (
    <motion.div
      className="bg-[#d9d9d9] rounded-[5px] w-full max-w-[403px] h-[300px] sm:h-[350px] md:h-[413px] flex items-center justify-center"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      <span className="text-gray-500 font-sans text-sm">Program Image</span>
    </motion.div>
  );

  const Content = (
    <div className="flex flex-col justify-center h-full">
      {/* Title & Subtitle */}
      <FadeIn direction="up" delay={0.1}>
        <div className="mb-4">
          <h2 className="font-serif font-bold text-[#1493E8] text-xl sm:text-2xl md:text-[24px] mb-2 leading-tight">
            {title}
          </h2>
          <p className="font-serif font-medium text-[#1493E8] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Description */}
      <FadeIn direction="up" delay={0.2}>
        <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
          {description}
        </p>
      </FadeIn>

      {/* Meta Info */}
      <FadeIn direction="up" delay={0.3}>
        <div className="font-mono text-sm sm:text-base mb-2">
          <p className="mb-1 leading-[35px]">
            <span className="font-bold">Ages:</span>{" "}
            <span className="font-normal">{ages}</span>
            <span className="mx-4"></span>
            <span className="font-bold">Hours:</span>{" "}
            <span className="font-normal">{hours}</span>
            <span className="mx-4"></span>
            <span className="font-bold">Location:</span>{" "}
            <span className="font-normal">{location}</span>
          </p>
        </div>
      </FadeIn>

      {/* Tagline */}
      <FadeIn direction="up" delay={0.4}>
        <p className="font-mono font-normal text-sm sm:text-base leading-[35px] mb-6">
          {tagline}
        </p>
      </FadeIn>

      {/* Button */}
      <FadeIn direction="up" delay={0.5}>
        <div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href={href}
              className="inline-flex items-center justify-center font-serif font-bold text-white text-[16px] bg-[#0FD3C6] rounded-lg px-6 py-3 hover:bg-[#0DC4B8] hover:shadow-lg transition-all w-[168px] h-[50px]"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </FadeIn>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[403px_1fr] gap-8 lg:gap-[76px] mb-12 lg:mb-16 items-start">
      <div className="flex justify-center lg:justify-start">
        {ImagePlaceholder}
      </div>
      <div>{Content}</div>
    </div>
  );
}
