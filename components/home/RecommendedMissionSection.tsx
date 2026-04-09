"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { useMissionControl } from "./MissionControlSection";

export function RecommendedMissionSection() {
  const { matchingPrograms, selectedAge, selectedInterests, selectedSchedule } = useMissionControl();
  
  // Get top match or default to first program if no matches
  const topMatch = matchingPrograms[0];
  const alternativeMatches = matchingPrograms.slice(1, 3);

  return (
    <section className="w-full bg-[#f7fbff] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn direction="up" delay={0}>
          <h2 className="font-mono font-bold text-[24px] sm:text-[30px] lg:text-[36px] text-black text-center mb-2 leading-normal">
            Recommended Mission
          </h2>
          <p className="text-center font-mono text-gray-500 text-sm mb-8">
            Based on your selections: {selectedAge} • {selectedSchedule}
          </p>
        </FadeIn>
        
        {topMatch ? (
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-lg p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-[1000px] mx-auto">
              {/* Program Image */}
              <div className="w-full lg:w-[300px] shrink-0">
                <div className="relative aspect-4/3 rounded-[16px] overflow-hidden">
                  <Image
                    src={topMatch.cardImage}
                    alt={topMatch.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />
                  <div 
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-white font-mono text-xs font-medium"
                    style={{ backgroundColor: topMatch.color }}
                  >
                    {topMatch.gradeRange || topMatch.ages}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:gap-5 flex-1">
                <div>
                  <p className="font-mono font-medium text-black text-xs sm:text-sm tracking-[0.28px] uppercase">
                    Best Match
                  </p>
                  <h3 
                    className="font-mono font-bold text-[24px] sm:text-[28px] lg:text-[32px] mt-2"
                    style={{ color: topMatch.color }}
                  >
                    {topMatch.title}
                  </h3>
                  <p className="font-mono text-gray-500 text-sm mt-1">
                    {topMatch.subtitle}
                  </p>
                </div>
                
                <p className="font-mono font-normal text-black text-sm lg:text-[15px] leading-relaxed">
                  {topMatch.description.slice(0, 200)}...
                </p>

                {/* Focus Areas */}
                <div className="flex flex-wrap gap-2">
                  {topMatch.focus.slice(0, 3).map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 rounded-full font-mono text-xs"
                      style={{ 
                        backgroundColor: `${topMatch.color}15`,
                        color: topMatch.color,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Alternative Matches */}
                {alternativeMatches.length > 0 && (
                  <div className="pt-2">
                    <p className="font-mono font-medium text-black text-sm mb-2">
                      Also Consider:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {alternativeMatches.map((program) => (
                        <Link
                          key={program.id}
                          href={program.href}
                          className="px-3 py-1.5 rounded-lg font-mono text-xs bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
                        >
                          {program.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full sm:w-[220px] shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/enroll"
                    className="rounded-[10px] px-6 py-3 h-12 flex items-center justify-center cursor-pointer w-full font-mono font-medium text-white text-[15px] transition-all"
                    style={{ backgroundColor: topMatch.color }}
                  >
                    Enroll Now →
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={topMatch.href}
                    className="border-2 rounded-[10px] px-6 py-3 h-12 flex items-center justify-center cursor-pointer w-full font-mono font-medium text-[15px] transition-all hover:bg-gray-50"
                    style={{ borderColor: `${topMatch.color}40`, color: topMatch.color }}
                  >
                    Learn More →
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/programs"
                    className="bg-[#1493E8] rounded-[10px] px-6 py-3 h-11 flex items-center justify-center cursor-pointer w-full"
                  >
                    <span className="font-mono font-medium text-white text-[15px] whitespace-nowrap">
                      Explore All Camps
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        ) : (
          // No matches state
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-lg p-8 sm:p-12 text-center max-w-[800px] mx-auto">
              <p className="font-mono text-gray-600 text-lg mb-4">
                No exact matches found for your current selections.
              </p>
              <p className="font-mono text-gray-500 text-sm mb-6">
                Try adjusting your age group, schedule, or interests to find the perfect camp.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/programs"
                  className="inline-block bg-[#1493E8] rounded-[10px] px-8 py-3 font-mono font-medium text-white text-[15px]"
                >
                  Browse All Programs →
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
