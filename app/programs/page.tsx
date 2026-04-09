"use client";

import { ProgramCard } from "@/components/programs/ProgramDetail";
import { programs } from "@/lib/programs-data";
import { FadeIn } from "@/components/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero with video background — full viewport width (edge-to-edge) */}
      <section className="relative w-screen max-w-[100vw] left-1/2 -translate-x-1/2 h-[85vh] min-h-[500px] max-h-[900px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-full min-w-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/posters/white-kid-space-poster.jpg"
            className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center"
            controlsList="nodownload"
          >
            <source src="/videos/White%20kid%20in%20space.MP4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#01325D]/70 via-[#01325D]/40 to-[#01325D]/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block font-mono font-bold text-[#0FD3C6] text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 sm:mb-5">
              Summer 2026
            </span>
          </motion.div>

          <motion.h1
            className="font-mono font-bold text-white text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.1] mb-5 sm:mb-6 max-w-[800px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Programs Built for Explorers
          </motion.h1>

          <motion.p
            className="font-mono text-white/80 text-base sm:text-lg lg:text-xl max-w-[600px] leading-relaxed mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            From Pre-K to 8th grade — every program is a launchpad for skills, mindset, and vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="#programs"
              className="inline-flex items-center justify-center font-mono font-bold text-[#01325D] text-[15px] bg-[#0FD3C6] rounded-full px-8 py-3.5 hover:bg-[#0DC4B8] hover:shadow-lg transition-all"
            >
              Explore Programs
            </Link>
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center font-mono font-bold text-white text-[15px] border-2 border-white/40 rounded-full px-8 py-3.5 hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Enroll Now
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/60">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#01325D]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-white/20">
            {[
              { label: "Programs", value: "8" },
              { label: "Ages", value: "3 – 14" },
              { label: "Camp Hours", value: "9 AM – 6 PM" },
              { label: "Location", value: "Chicago" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-6 sm:px-10">
                <span className="font-mono font-bold text-[#0FD3C6] text-xl sm:text-2xl">{stat.value}</span>
                <span className="font-mono text-white/70 text-xs sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section id="programs" className="pb-16 sm:pb-20 lg:pb-24 bg-[#F8FAFE] scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="text-center pt-16 sm:pt-20 lg:pt-24 mb-12 sm:mb-16">
              <span className="inline-block font-mono font-bold text-[#0FD3C6] text-xs uppercase tracking-[0.2em] mb-3">
                Explore by Program
              </span>
              <h2 className="font-mono font-bold text-[#01325D] text-[24px] sm:text-[30px] lg:text-[36px] leading-tight">
                Find the Right Fit
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {programs.map((program, index) => (
              <FadeIn key={program.id} direction="up" delay={index * 0.08}>
                <ProgramCard program={program} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
