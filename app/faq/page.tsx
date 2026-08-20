"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClubsPageHero, ClubsSectionHeader, ClubsCard, ClubsNumberBand, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const clubFAQs: FAQItem[] = [
  {
    question: "What ages do you serve?",
    answer:
      "We serve Pre-K through 8th grade in our after-school and summer programs, with age-appropriate leadership, academics, and enrichment that grows with your child.",
  },
  {
    question: "Is this childcare or a learning program?",
    answer:
      "A launch system. Summer is the application of the school year, and every season builds toward the next level. The child never leaves the journey, they simply move to the next mission.",
  },
  {
    question: "What does the year look like?",
    answer:
      "After-school runs through the school year (Build). Summer is the application window (Apply). Each fall students return stronger (Advance). We also run Winter and Spring break camps.",
  },
];

const feeFAQs: FAQItem[] = [
  {
    question: "What are the qualifications to receive Illinois Action for Children?",
    answer:
      "All adults in the household must be working or in school during the hours care is needed. Parents must be Illinois residents, and children must be under 13 (up to 18 with a documented special need). You must also meet the monthly gross income guidelines for your family size.",
  },
  {
    question: "What is the process to apply?",
    answer:
      "Complete the Kid Explorer Clubs enrollment application and the Action for Children application during signup, with two recent pay stubs or an employer letter (or your school schedule if applicable). Once received, our fee assistance team confirms your eligibility and estimated coverage within 3-5 business days.",
  },
  {
    question: "What is the cost to apply?",
    answer: "There is no cost to apply for Illinois Action for Children.",
  },
  {
    question: "How much would Action for Children cover?",
    answer:
      "Depending on your income, family size, and program, you can receive anywhere from 25% to 100% off your child care costs.",
  },
];

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <StaggerContainer staggerDelay={0.06} className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <StaggerItem key={item.question}>
            <div
              className={`overflow-hidden rounded-[24px] border bg-white transition-all duration-300 ${
                isOpen
                  ? "border-[#1493E8]/30 shadow-md"
                  : "border-[#1493E8]/10 shadow-sm hover:border-[#1493E8]/25"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex min-h-[48px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
              >
                <span className="font-serif text-lg font-medium leading-snug text-[#01325D] sm:text-xl">
                  {item.question}
                </span>
                <span
                  className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-[#0FD3C6]/15 text-[#01325D]" : "bg-[#1493E8]/10 text-[#1493E8]"
                  }`}
                  aria-hidden
                >
                  <span className="absolute h-[2px] w-3.5 rounded-full bg-current" />
                  <motion.span
                    className="absolute h-3.5 w-[2px] rounded-full bg-current"
                    initial={false}
                    animate={{ scaleY: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                  />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-6 font-mono text-sm leading-relaxed text-gray-600 sm:px-7 sm:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Support"
        title="Questions,"
        highlight="Answered"
        description="Everything you need to know about Kid Explorer Clubs, our programs, and the year-round journey."
      />

      <ClubsNumberBand
        stats={[
          { value: "Pre-K - 8", label: "Grades" },
          { value: "3", label: "Year Windows" },
          { value: "0", label: "Cost to Apply" },
          { value: "100%", label: "Coverage Possible" },
        ]}
      />

      {/* Group 1: The Club & Programs */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 sm:px-8">
          <ClubsSectionHeader
            eyebrow="Programs"
            title="The Club & Programs"
            description="How the year-round journey works, from first enrollment to every next level."
          />
          <FAQAccordion items={clubFAQs} />
        </div>
      </section>

      {/* Group 2: Fees & Assistance */}
      <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[900px] px-6 sm:px-8">
          <ClubsSectionHeader
            eyebrow="Illinois Action for Children"
            title="Fees & Assistance"
            description="We proudly accept Illinois Action for Children fee assistance. Here is how eligibility and coverage work."
          />
          <FAQAccordion items={feeFAQs} />
        </div>
      </section>

      {/* Still have questions? */}
      <section className="w-full py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <FadeIn direction="up">
            <ClubsCard className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[560px]">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
                  We Are Here to Help
                </p>
                <h2 className="mt-3 font-serif text-[28px] font-medium text-[#01325D] sm:text-[32px]">
                  Still have questions?
                </h2>
                <p className="mt-3 font-mono text-sm leading-relaxed text-gray-600 sm:text-base">
                  Reach out to our team anytime, or review our{" "}
                  <Link
                    href="/enrollment-policies"
                    className="font-bold text-[#1493E8] hover:underline"
                  >
                    2026 Enrollment Policies
                  </Link>{" "}
                  for refunds, cancellations, and program details.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[12px] bg-[#1493E8] px-8 font-mono text-base font-medium text-white transition hover:bg-[#1180d0] sm:min-w-[160px]"
                  >
                    Contact Us
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <a
                    href="tel:+18005532070"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-[#0FD3C6] px-8 font-mono text-base font-medium text-[#01325D] transition hover:bg-[#e7fbf9] sm:min-w-[200px]"
                  >
                    Call (800) 553-2070
                  </a>
                </motion.div>
              </div>
            </ClubsCard>
          </FadeIn>
        </div>
      </section>

      <ClubsCTA
        title="Ready to Start the Journey?"
        description="Enrollment is open for after-school clubs and summer camps. Spots fill fast, so save your child's seat today."
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
