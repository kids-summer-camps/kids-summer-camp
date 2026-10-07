"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Program } from "@/lib/programs-data";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link href={program.href} className="group block h-full">
      <motion.div
        className="relative bg-white rounded-[20px] sm:rounded-[24px] overflow-hidden h-full border border-transparent shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(20,147,232,0.15)] hover:border-[#1493E8]/20 transition-all duration-300"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Image */}
        <div className="relative w-full aspect-16/10 overflow-hidden">
          <Image
            src={program.cardImage}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 560px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

          {/* Grade badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#01325D] px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold shadow-sm">
            {program.gradeRange || program.ages}
          </div>

          {/* Category pill */}
          <div className="absolute bottom-4 left-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold text-white"
              style={{ backgroundColor: program.color }}
            >
              {program.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 lg:p-7 flex flex-col gap-3">
          <div>
            <h3 className="font-mono font-bold text-[#01325D] text-[20px] sm:text-[22px] lg:text-[24px] leading-tight mb-1 group-hover:text-[#1493E8] transition-colors duration-300">
              {program.title}
            </h3>
            <p className="font-mono font-medium text-[#1493E8] text-[13px] sm:text-[14px] leading-relaxed">
              {program.subtitle}
            </p>
          </div>

          <p className="font-mono text-[#3A5068] text-[13px] sm:text-[14px] leading-relaxed line-clamp-3">
            {program.description}
          </p>

          {/* Focus tags */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {program.focus.slice(0, 3).map((item) => (
              <span
                key={item}
                className="inline-block px-2.5 py-1 bg-[#F0F7FF] text-[#1493E8] rounded-md text-[11px] sm:text-[12px] font-mono font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-[#E8EFF8]">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[12px] text-[#3A5068]">
                <span className="font-bold text-[#01325D]">Ages:</span> {program.ages}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono font-bold text-[#0FD3C6] text-[13px] sm:text-[14px] group-hover:gap-2.5 transition-all duration-300">
              Learn more
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
