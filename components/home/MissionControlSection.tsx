"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

const ageGroups = ["Pre-K", "Kindergarten", "Age 6-8", "Age 8-11", "Age 11-13+"];

const interests = [
  "Building & Engineering",
  "Robots & Technology",
  "Video Games",
  "Science",
  "Sports",
  "Leadership",
  "Exploration",
];

export function MissionControlSection() {
  const [selectedAge, setSelectedAge] = useState("Age 8-11");
  const [selectedInterests, setSelectedInterests] = useState(["Leadership"]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < 3) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 flex justify-center">
      <div className="max-w-[1285px] w-full rounded-[32px] sm:rounded-[48px] lg:rounded-[68px] px-6 py-10 sm:px-12 sm:py-16 lg:px-28 lg:py-20 flex flex-col gap-8 sm:gap-10 lg:gap-14 items-center"
           style={{ background: "linear-gradient(240.667deg, rgb(255, 255, 255) 9.3078%, rgb(240, 247, 255) 99.394%)" }}>
        <FadeIn direction="up" delay={0}>
          <div className="text-center w-full">
            <h2 className="font-mono font-bold text-[#1493E8] text-[24px] sm:text-[30px] lg:text-[36px] mb-2">
              Mission Control
            </h2>
            <p className="font-mono font-medium text-[#01325D] text-base sm:text-lg lg:text-[20px]">
              Find the missions that match your child's curiosity and energy
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
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
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-center font-mono font-medium text-[#01325D] text-base sm:text-lg lg:text-[20px] leading-relaxed">
            What does your child naturally lean toward?<br />
            Choose up to 3.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 max-w-[683px]">
            {interests.map((interest) => (
              <motion.button
                key={interest}
                onClick={() => toggleInterest(interest)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`h-9 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg font-mono font-medium text-sm sm:text-[15px] shadow-sm transition-colors ${
                  selectedInterests.includes(interest)
                    ? "bg-[#0FD3C6] text-white"
                    : "bg-white text-black"
                }`}
              >
                {interest}
              </motion.button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
