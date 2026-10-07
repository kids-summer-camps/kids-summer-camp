"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { programs } from "@/lib/programs-data";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Choose a program",
    description: "Pick the track that fits your child's age and interests — from Pre-K exploration to advanced robotics.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Select your weeks",
    description: "Pick session dates and choose full day, half day, or extended hours — we'll confirm availability.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Complete enrollment",
    description: "Submit the form below, and our team will reach out with paperwork, transportation details, and payment.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

const highlights = [
  { label: "8 Programs", sub: "Pre-K through 8th grade" },
  { label: "Full-Day Care", sub: "9 AM – 6 PM extended hours" },
  { label: "Bus Transport", sub: "Citywide Chicago stops" },
  { label: "STEM + Sports", sub: "Labs, athletics, creative arts" },
];

export default function EnrollPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-[#01325D] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#1493E8]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#0FD3C6]/10 blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.span
                className="inline-block font-mono font-bold text-[#0FD3C6] text-xs sm:text-sm uppercase tracking-[0.25em] mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Summer 2026 Enrollment
              </motion.span>

              <motion.h1
                className="font-mono font-bold text-white text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                Give Them a Summer That{" "}
                <span className="text-[#0FD3C6]">Moves Them Forward</span>
              </motion.h1>

              <motion.p
                className="font-mono text-white/70 text-base sm:text-lg leading-relaxed max-w-[520px] mx-auto lg:mx-0 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                STEM labs, athletics, creative challenges, and structured care — all in one place.
                Enrollment takes two minutes.
              </motion.p>

              <motion.a
                href="#enrollment-form"
                className="inline-flex items-center justify-center font-mono font-bold text-[#01325D] text-[15px] bg-[#0FD3C6] rounded-full px-8 py-4 hover:bg-[#0DC4B8] hover:shadow-lg hover:shadow-[#0FD3C6]/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Enrollment
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </div>

            {/* Right — highlight cards */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[420px] shrink-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`rounded-[16px] p-5 sm:p-6 ${
                    i === 0
                      ? "bg-[#1493E8]/15 border border-[#1493E8]/20"
                      : i === 1
                        ? "bg-[#0FD3C6]/15 border border-[#0FD3C6]/20"
                        : i === 2
                          ? "bg-white/5 border border-white/10"
                          : "bg-[#1493E8]/10 border border-[#1493E8]/15"
                  }`}
                >
                  <p className="font-mono font-bold text-white text-lg sm:text-xl mb-1">{h.label}</p>
                  <p className="font-mono text-white/60 text-xs sm:text-[13px] leading-relaxed">{h.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block font-mono font-bold text-[#0FD3C6] text-xs uppercase tracking-[0.2em] mb-3">
                How it works
              </span>
              <h2 className="font-mono font-bold text-[#01325D] text-[24px] sm:text-[32px] lg:text-[36px] leading-tight">
                Three steps to launch
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.number} direction="up" delay={i * 0.1}>
                <div className="relative bg-[#F8FAFE] rounded-[20px] p-7 sm:p-8 border border-[#E8EFF8] h-full group hover:border-[#1493E8]/30 hover:shadow-lg hover:shadow-[#1493E8]/5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#01325D] text-[#0FD3C6] flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <span className="font-mono font-bold text-[#01325D]/20 text-3xl">{step.number}</span>
                  </div>
                  <h3 className="font-mono font-bold text-[#01325D] text-lg mb-2">{step.title}</h3>
                  <p className="font-mono text-[#3A5068] text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Program selector + form */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFE]">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          {/* Program picker */}
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-block font-mono font-bold text-[#0FD3C6] text-xs uppercase tracking-[0.2em] mb-3">
                Step 1
              </span>
              <h2 className="font-mono font-bold text-[#01325D] text-[22px] sm:text-[28px] lg:text-[32px] leading-tight mb-2">
                Which program is right for your child?
              </h2>
              <p className="font-mono text-[#3A5068] text-sm sm:text-base">
                Select one to learn more, or scroll down to the form.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
              {programs.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProgram(selectedProgram === p.id ? null : p.id)}
                  className={`group relative rounded-[16px] overflow-hidden text-left transition-all duration-300 cursor-pointer ${
                    selectedProgram === p.id
                      ? "ring-2 ring-[#0FD3C6] ring-offset-2 ring-offset-[#F8FAFE] shadow-lg"
                      : "hover:shadow-md"
                  }`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.cardImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 220px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <p className="font-mono font-bold text-white text-[13px] sm:text-[15px] leading-tight">{p.title}</p>
                      <p className="font-mono text-white/70 text-[10px] sm:text-xs">{p.gradeRange || p.ages}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Expanded program info */}
          {selectedProgram && (
            <FadeIn direction="up">
              {(() => {
                const p = programs.find((prog) => prog.id === selectedProgram);
                if (!p) return null;
                return (
                  <div className="bg-white rounded-[20px] border border-[#E8EFF8] p-6 sm:p-8 mb-12 sm:mb-16 shadow-sm">
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className="relative w-full sm:w-[200px] aspect-[4/3] rounded-[12px] overflow-hidden shrink-0">
                        <Image src={p.cardImage} alt={p.title} fill className="object-cover" sizes="200px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="font-mono font-bold text-[#01325D] text-xl sm:text-2xl">{p.title}</h3>
                            <p className="font-mono text-[#1493E8] text-sm font-medium">{p.gradeRange || p.ages} &middot; {p.category}</p>
                          </div>
                          <span className="shrink-0 inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-white" style={{ backgroundColor: p.color }}>
                            {p.ages}
                          </span>
                        </div>
                        <p className="font-mono text-[#3A5068] text-sm leading-relaxed mb-4">{p.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.focus.map((f) => (
                            <span key={f} className="px-2.5 py-1 bg-[#F0F7FF] text-[#1493E8] rounded-md text-[11px] sm:text-xs font-mono font-medium">
                              {f}
                            </span>
                          ))}
                        </div>
                        <Link href={p.href} className="inline-flex items-center gap-1.5 font-mono font-bold text-[#0FD3C6] text-sm mt-4 hover:gap-2.5 transition-all">
                          Full program details
                          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </FadeIn>
          )}

          {/* Form section */}
          <FadeIn direction="up" delay={0.15}>
            <div className="text-center mb-8">
              <span className="inline-block font-mono font-bold text-[#0FD3C6] text-xs uppercase tracking-[0.2em] mb-3">
                Step 2
              </span>
              <h2 className="font-mono font-bold text-[#01325D] text-[22px] sm:text-[28px] lg:text-[32px] leading-tight">
                Complete your enrollment
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-[24px] border border-[#E8EFF8] p-8 sm:p-10 lg:p-12 shadow-sm">
              {/* Zapier / embedded form placeholder */}
              <div
                id="enrollment-form"
                className="rounded-[16px] border-2 border-dashed border-[#1493E8]/30 bg-[#F8FAFE] min-h-[400px] flex flex-col items-center justify-center gap-5 px-6 py-16 text-center scroll-mt-32"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#01325D] text-[#0FD3C6] flex items-center justify-center mb-2">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <p className="font-mono font-bold text-[#01325D] text-base sm:text-lg">Enrollment form goes here</p>
                <p className="font-mono text-[#3A5068] text-sm max-w-[440px] leading-relaxed">
                  Replace this placeholder with your Zapier, Typeform, or registrar embed.
                  Our team will follow up to finalize schedule, transportation, and payment.
                </p>
                <code className="font-mono text-[11px] text-[#1493E8]/70 bg-white px-4 py-2 rounded-lg border border-[#E8EFF8]">
                  &lt;iframe src=&quot;your-form-url&quot; /&gt;
                </code>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#01325D]">
        <div className="max-w-[800px] mx-auto px-6 sm:px-8 py-14 sm:py-16 text-center">
          <FadeIn direction="up">
            <h2 className="font-mono font-bold text-white text-[22px] sm:text-[28px] leading-tight mb-3">
              Questions before enrolling?
            </h2>
            <p className="font-mono text-white/60 text-sm sm:text-base mb-8 max-w-[480px] mx-auto">
              Check out the FAQ or browse programs to find the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center font-mono font-bold text-white text-sm border-2 border-white/30 rounded-full px-7 py-3 hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Browse Programs
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center font-mono font-bold text-white text-sm border-2 border-white/30 rounded-full px-7 py-3 hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Read FAQ
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-mono font-bold text-white/60 text-sm hover:text-white transition-colors px-4 py-3"
              >
                General Contact
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
