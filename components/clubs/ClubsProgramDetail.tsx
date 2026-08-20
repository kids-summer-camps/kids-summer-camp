"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FadeIn } from "@/components/animations";
import { ClubsCTA } from "@/components/clubs";
import { PORTAL_SIGNUP_URL } from "@/lib/site";

interface SnapshotItem {
  label: string;
  value: string;
}

interface Section {
  heading: string;
  body: string[];
}

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface ClubsProgramDetailProps {
  eyebrow: string;
  title: string;
  description: string;
  snapshot: SnapshotItem[];
  sidebar: {
    sessions?: string[];
    ages: string;
    transportation?: string;
  };
  sections?: Section[];
  notes?: string[];
  accordions: AccordionItem[];
  showcase?: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  signupLabel?: string;
}

export function ClubsProgramDetail({
  eyebrow,
  title,
  description,
  snapshot,
  sidebar,
  sections = [],
  notes = [],
  accordions,
  showcase,
  signupLabel = "Sign Up Now",
}: ClubsProgramDetailProps) {
  const [open, setOpen] = useState<Set<string>>(new Set([accordions[0]?.title ?? ""]));

  const toggle = (t: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Hero banner */}
      <section className="relative w-full overflow-hidden bg-[#01325D]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-2 border-dashed border-[#1493E8]/40" />
          <div className="absolute -left-10 bottom-8 h-24 w-24 rotate-12 rounded-2xl bg-[#0FD3C6]/20" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-32 sm:px-8 sm:pt-36 lg:pb-20 lg:pt-40">
          <FadeIn direction="up" delay={0.05}>
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#0FD3C6]">
              {eyebrow}
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <h1
              className="mt-5 max-w-[760px] font-serif text-[38px] font-medium leading-[1.06] text-white sm:text-[52px] lg:text-[64px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {title}
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.25}>
            <p className="mt-6 max-w-[600px] font-mono text-base leading-relaxed text-white/80 sm:text-lg">
              {description}
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.35}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <motion.a
                href={PORTAL_SIGNUP_URL}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-12 w-full min-h-[48px] items-center justify-center gap-2 rounded-[12px] bg-[#1493E8] px-8 font-mono text-base font-medium text-white transition hover:bg-[#1180d0] sm:w-auto"
              >
                {signupLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </motion.a>
              <Link
                href="/enroll"
                className="inline-flex h-12 w-full min-h-[48px] items-center justify-center rounded-[12px] border-2 border-[#0FD3C6] px-8 font-mono text-base font-medium text-[#0FD3C6] transition hover:bg-[#0FD3C6]/10 sm:w-auto"
              >
                How Enrollment Works
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Snapshot bar */}
      <section className="bg-[#1493E8]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-6 px-6 py-6 sm:gap-10 sm:py-8">
          {snapshot.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-2 py-2 text-center">
              <p className="font-mono text-sm font-medium text-white/80">{s.label}</p>
              <p className="font-mono text-lg font-bold text-white">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar + main content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 sm:px-8 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <motion.a
              href={PORTAL_SIGNUP_URL}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#0FD3C6] font-mono text-base font-bold text-[#01325D] transition hover:bg-[#0cc0b4]"
            >
              {signupLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </motion.a>

            <Link
              href="/enroll"
              className="flex h-12 items-center justify-center rounded-[12px] border border-[#1493E8] font-mono text-base font-bold text-[#1493E8] transition hover:bg-[#1493E8]/5"
            >
              How Enrollment Works
            </Link>

            {sidebar.sessions && sidebar.sessions.length > 0 && (
              <div>
                <p className="mb-2 font-mono text-lg font-bold text-[#0FD3C6]">SESSIONS</p>
                {sidebar.sessions.map((s) => (
                  <p key={s} className="font-mono text-base text-black">
                    {s}
                  </p>
                ))}
              </div>
            )}

            <div className="h-px w-full bg-[#d9d9d9]" />

            <div>
              <p className="mb-2 font-mono text-lg font-bold text-[#0FD3C6]">AGES</p>
              <p className="font-mono text-base text-black">{sidebar.ages}</p>
            </div>

            {sidebar.transportation && (
              <>
                <div className="h-px w-full bg-[#d9d9d9]" />
                <div>
                  <p className="mb-2 font-mono text-lg font-bold text-[#0FD3C6]">TRANSPORTATION</p>
                  <p className="font-mono text-base text-black">{sidebar.transportation}</p>
                </div>
              </>
            )}
          </aside>

          {/* Main content */}
          <div>
            <div className="mb-8 h-px w-full bg-[#d9d9d9]" />

            <h2
              className="font-serif text-[36px] font-medium uppercase leading-tight text-[#01325D] sm:text-[40px]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              {title}
            </h2>

            <p className="mt-6 max-w-[720px] font-mono text-base leading-relaxed text-gray-700">
              {description}
            </p>

            {sections.map((section) => (
              <div key={section.heading} className="mt-12">
                <h3
                  className="font-serif text-[26px] font-medium uppercase leading-tight text-[#01325D] sm:text-[30px]"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  {section.heading}
                </h3>
                <div className="mt-2 mb-6 h-1 w-14 rounded-full bg-[#1493E8]" />
                <div className="space-y-4">
                  {section.body.map((p, i) => (
                    <p key={i} className="font-mono text-base leading-relaxed text-gray-700">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {notes.length > 0 && (
              <div className="mt-12">
                <h3 className="mb-4 font-mono text-xl font-bold text-black">Notes for Parents</h3>
                <ul className="space-y-2">
                  {notes.map((n) => (
                    <li key={n} className="flex items-start gap-2 font-mono text-base leading-relaxed text-gray-700">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0FD3C6]" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Showcase / reckoning-style banner */}
      {showcase && (
        <section className="relative w-full overflow-hidden bg-[#01325D] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute -left-16 top-1/4 h-56 w-56 rounded-full border-2 border-dashed border-[#1493E8]/30" />
            <div className="absolute -right-12 bottom-8 h-32 w-32 rotate-12 rounded-2xl bg-[#0FD3C6]/20" />
          </div>
          <div className="relative mx-auto max-w-[1000px] px-6 text-center sm:px-8">
            <FadeIn direction="up">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#0FD3C6]">
                {showcase.eyebrow}
              </span>
              <h2
                className="mt-5 font-serif text-[32px] font-medium leading-tight text-white sm:text-[44px]"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                {showcase.title}
              </h2>
              <p className="mx-auto mt-5 max-w-[640px] font-mono text-base leading-relaxed text-white/80">
                {showcase.description}
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-9 inline-block">
                <Link
                  href={showcase.ctaHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] bg-[#0FD3C6] px-8 font-mono text-base font-semibold text-[#01325D] transition hover:bg-[#0cc0b4]"
                >
                  {showcase.ctaLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Accordions */}
      <section className="pb-20 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="w-full">
              {accordions.map((a, i) => {
                const isOpen = open.has(a.title);
                const isFirst = i === 0;
                const isLast = i === accordions.length - 1;
                return (
                  <div
                    key={a.title}
                    className={`overflow-hidden border-[0.5px] border-solid border-[#99adbe] ${
                      isFirst ? "rounded-t-[24px] sm:rounded-t-[40px]" : "border-t-0"
                    } ${isLast ? "rounded-b-[24px] sm:rounded-b-[40px]" : ""}`}
                  >
                    <button
                      onClick={() => toggle(a.title)}
                      className="flex w-full items-center justify-between px-5 py-5 transition-colors hover:bg-gray-50 sm:px-10 sm:py-8"
                    >
                      <h3 className={`font-mono text-base font-bold sm:text-2xl ${isOpen ? "text-[#0FD3C6]" : "text-[#01325D]"}`}>
                        {a.title}
                      </h3>
                      <ChevronDownIcon
                        className={`h-6 w-6 shrink-0 text-[#01325D] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-10 sm:pb-9">{a.content}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <ClubsCTA
        title="Start the Mission"
        description="Create your family account and enroll today."
        primaryLabel="Sign Up Now"
        primaryHref={PORTAL_SIGNUP_URL}
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
