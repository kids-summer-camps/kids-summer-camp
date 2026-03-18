"use client";

import React, { useState, createContext, useContext, useCallback } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { 
  ageGroups, 
  interests, 
  schedules, 
  programs, 
  type Program,
  findMatchingPrograms 
} from "@/lib/programs-data";

// Context for sharing selection state with other components
interface MissionControlContextType {
  selectedAge: string;
  selectedSchedule: string;
  selectedInterests: string[];
  matchingPrograms: Program[];
  setSelectedAge: (age: string) => void;
  setSelectedSchedule: (schedule: string) => void;
  toggleInterest: (interest: string) => void;
}

const MissionControlContext = createContext<MissionControlContextType | null>(null);

export function useMissionControl() {
  const context = useContext(MissionControlContext);
  if (!context) {
    throw new Error("useMissionControl must be used within MissionControlProvider");
  }
  return context;
}

export function MissionControlProvider({ children }: { children: React.ReactNode }) {
  const [selectedAge, setSelectedAge] = useState("Age 8-11");
  const [selectedSchedule, setSelectedSchedule] = useState("Full Day (9 AM - 3 PM)");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Robots & Technology"]);

  const toggleInterest = useCallback((interest: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interest)) {
        return prev.filter((i) => i !== interest);
      } else if (prev.length < 3) {
        return [...prev, interest];
      }
      return prev;
    });
  }, []);

  // Calculate matching programs
  const matchingPrograms = findMatchingPrograms(selectedAge, selectedInterests, selectedSchedule);

  return (
    <MissionControlContext.Provider
      value={{
        selectedAge,
        selectedSchedule,
        selectedInterests,
        matchingPrograms,
        setSelectedAge,
        setSelectedSchedule,
        toggleInterest,
      }}
    >
      {children}
    </MissionControlContext.Provider>
  );
}

function MissionControlContent() {
  const {
    selectedAge,
    selectedSchedule,
    selectedInterests,
    matchingPrograms,
    setSelectedAge,
    setSelectedSchedule,
    toggleInterest,
  } = useMissionControl();

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 flex justify-center">
      <div 
        className="max-w-[1285px] w-full rounded-[32px] sm:rounded-[48px] lg:rounded-[68px] px-6 py-10 sm:px-12 sm:py-16 lg:px-28 lg:py-20 flex flex-col gap-8 sm:gap-10 lg:gap-14 items-center"
        style={{ background: "linear-gradient(240.667deg, rgb(255, 255, 255) 9.3078%, rgb(240, 247, 255) 99.394%)" }}
      >
        <FadeIn direction="up" delay={0}>
          <div className="text-center w-full">
            <h2 className="font-mono font-bold text-[#1493E8] text-[24px] sm:text-[30px] lg:text-[36px] mb-2">
              Mission Control
            </h2>
            <p className="font-mono font-medium text-[#01325D] text-base sm:text-lg lg:text-[20px]">
              Find the missions that match your child&apos;s curiosity and energy
            </p>
          </div>
        </FadeIn>

        {/* Age Selection */}
        <FadeIn direction="up" delay={0.1}>
          <div className="w-full">
            <p className="text-center font-mono font-medium text-[#01325D] text-sm sm:text-base mb-4">
              1. Select your child&apos;s age group
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 max-w-[687px]">
              {ageGroups.map((age) => (
                <motion.button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-10 sm:h-11 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-mono font-medium text-sm sm:text-base shadow-md transition-colors ${
                    selectedAge === age
                      ? "bg-[#1493E8] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {age}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Schedule Selection */}
        <FadeIn direction="up" delay={0.15}>
          <div className="w-full">
            <p className="text-center font-mono font-medium text-[#01325D] text-sm sm:text-base mb-4">
              2. Choose your preferred schedule
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-[900px]">
              {schedules.map((schedule) => (
                <motion.button
                  key={schedule}
                  onClick={() => setSelectedSchedule(schedule)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-10 px-4 py-2 rounded-lg font-mono font-medium text-xs sm:text-sm shadow-md transition-colors ${
                    selectedSchedule === schedule
                      ? "bg-[#7B61FF] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {schedule}
                </motion.button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Interest Selection */}
        <FadeIn direction="up" delay={0.2}>
          <div className="w-full">
            <p className="text-center font-mono font-medium text-[#01325D] text-sm sm:text-base mb-2">
              3. What does your child naturally lean toward?
            </p>
            <p className="text-center font-mono text-gray-500 text-xs sm:text-sm mb-4">
              Choose up to 3 interests
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-[900px]">
              {interests.map((interest) => {
                const isSelected = selectedInterests.includes(interest);
                const canSelect = selectedInterests.length < 3 || isSelected;
                
                return (
                  <motion.button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    whileHover={{ scale: canSelect ? 1.05 : 1 }}
                    whileTap={{ scale: canSelect ? 0.95 : 1 }}
                    disabled={!canSelect && !isSelected}
                    className={`h-9 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg font-mono font-medium text-sm sm:text-[15px] shadow-sm transition-colors ${
                      isSelected
                        ? "bg-[#0FD3C6] text-white"
                        : canSelect
                          ? "bg-white text-black hover:bg-gray-50"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {interest}
                    {isSelected && (
                      <span className="ml-2 text-xs">✓</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Match Summary */}
        <FadeIn direction="up" delay={0.3}>
          <div className="text-center">
            <p className="font-mono text-sm text-gray-600 mb-2">
              Found <span className="font-bold text-[#1493E8]">{matchingPrograms.length}</span> matching program{matchingPrograms.length !== 1 ? 's' : ''}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-[#1493E8]/10 text-[#1493E8] font-mono text-xs">
                {selectedAge}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#7B61FF]/10 text-[#7B61FF] font-mono text-xs">
                {selectedSchedule}
              </span>
              {selectedInterests.map((interest) => (
                <span 
                  key={interest}
                  className="px-3 py-1 rounded-full bg-[#0FD3C6]/10 text-[#0FD3C6] font-mono text-xs"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function MissionControlSection() {
  return (
    <MissionControlProvider>
      <MissionControlContent />
    </MissionControlProvider>
  );
}

// Export the raw component for use without provider (for nested usage)
export { MissionControlContent };
