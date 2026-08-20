"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const testimonials = [
  {
    quote:
      "My son has grown so much. It is not just camp or afterschool, it is one continuous experience that keeps him excited to learn all year.",
    name: "Kendra M.",
    role: "Parent of a 6th grader",
  },
  {
    quote:
      "They built a robot, launched a rocket, and gave a pitch. He comes home proud every single day. The showcase at the end of summer was amazing.",
    name: "Marcus T.",
    role: "Parent of a 4th grader",
  },
  {
    quote:
      "The sports program is different. No tryouts, no pressure. My daughter plays with confidence and joy, and she has learned real leadership.",
    name: "Alina R.",
    role: "Parent of a 2nd grader",
  },
];

export function HomeTestimonialsSection() {
  return (
    <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <FadeIn direction="up">
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
              Families Love the Journey
            </span>
            <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[48px]">
              Real Stories, Real Growth
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col rounded-[28px] border border-[#1493E8]/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg sm:p-9"
              >
                <span className="font-serif text-[44px] leading-none text-[#0FD3C6]">&ldquo;</span>
                <p className="mt-2 flex-1 font-mono text-base leading-relaxed text-gray-700">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-[#1493E8]/10 pt-5">
                  <p className="font-serif text-lg font-medium text-[#01325D]">{t.name}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-gray-500">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
