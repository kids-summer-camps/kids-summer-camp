"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

interface FAQAnswer {
  type: "text" | "list" | "nested-list" | "bold-section";
  content?: string;
  highlight?: boolean;
  items?: string[];
  nestedItems?: string[];
  boldTitle?: string;
  boldContent?: FAQAnswer[];
}

interface FAQItem {
  question: string;
  answers: FAQAnswer[];
}

const faqData: FAQItem[] = [
  {
    question: "WHAT IS YOUR REFUND & CANCELLATION POLICY FOR SUMMER 2026 PROGRAMMING?",
    answers: [
      {
        type: "text",
        content: "Please refer to our ",
      },
      {
        type: "text",
        content: "2026 Enrollment Policies",
        highlight: true,
      },
      {
        type: "text",
        content: " for information on refunds and cancellations.",
      },
      {
        type: "text",
        content: "If you have any further questions regarding on-site camp, please contact our Customer Experience team at (800) 553-2070",
      },
      {
        type: "text",
        content: "or email us at Customercare@kidexplorercamp.com.",
      },
    ],
  },
  {
    question: "WHAT ARE THE CAMP HOURS?",
    answers: [
      {
        type: "text",
        content: "9:00am–3:00pm, with optional Extended Day available before and after camp from 7:30am–9:00am and from 3:00pm–6:00pm.",
      },
    ],
  },
  {
    question: "ARE YOUR CAMPS OPEN ON HOLIDAYS?",
    answers: [
      { type: "text", content: "KEC Summer Camp observes the following closures:" },
      { type: "list", items: ["Juneteenth — Closed", "July 4th — Closed"] },
      { type: "text", content: "Camp will operate on all other weekdays during the summer session." },
    ],
  },
  {
    question: "WHAT DOES MY CHILD NEED TO BRING TO CAMP?",
    answers: [
      { type: "text", content: "Please send your camper with:" },
      {
        type: "list",
        items: [
          "Lunch (nut-free)",
          "Water bottle (refill stations available)",
          "Sunscreen (labeled; we also have backup sunscreen on-site)",
          "Swimwear + towel (see swimming section)",
          "Extra change of clothes (especially younger campers)",
          "Any required medication (submitted to our Safety Coordinator)",
        ],
      },
      { type: "text", content: "Label all items with your child's full name." },
    ],
  },
  {
    question: "WILL MY CHILD SWIM AT CAMP?",
    answers: [
      {
        type: "list",
        items: [
          "All campers participate in daily water play (sprinklers, splash pads, water activities).",
          "Swimming availability depends on pool access.",
        ],
      },
      { type: "text", content: "If the pool is available for Summer 2026:" },
      {
        type: "list",
        items: [
          "Younger campers will receive instructional swim",
          "Older campers will participate in recreational swim",
          "A trained aquatics team and lifeguards supervise swimmers with a 3:1 child-to-staff ratio",
        ],
      },
      { type: "text", content: "If the pool is unavailable, water play will replace swimming for all programs." },
    ],
  },
  {
    question: "IS KID EXPLORER CLUB A GOOD FIT FOR A CHILD WHO HAS ADDITIONAL SUPPORT NEEDS?",
    answers: [
      {
        type: "text",
        content: "Our program is a structured group-learning environment, and we welcome children with mild support needs who are able to:",
      },
      {
        type: "list",
        items: [
          "Make safe choices",
          "Follow directions (with age-appropriate reminders)",
          "Participate in group activities",
        ],
      },
      { type: "text", content: "KEC cannot provide continuous 1:1 support." },
      {
        type: "text",
        content: "If your child receives 1:1 support at school or may require additional assistance, please notify us during registration so we can prepare accommodations where possible.",
      },
      {
        type: "text",
        content: "Families requesting to bring a personal aide/paraprofessional must complete the required forms and background check prior to attendance.",
      },
    ],
  },
  {
    question: "DOES MY CHILD NEED TO BE POTTY TRAINED?",
    answers: [
      { type: "text", content: "Yes. Campers must:" },
      {
        type: "list",
        items: [
          "Be fully potty trained,",
          "Independently handle toileting needs,",
          "Be at least 3 years old by their first day of camp.",
        ],
      },
      { type: "text", content: "Accidents may occur—please pack an extra outfit for younger campers." },
    ],
  },
  {
    question: "CAN WE REQUEST THAT MY CAMPER BE PLACED WITH ANOTHER CAMPER (BUDDY REQUESTS)?",
    answers: [
      { type: "text", content: "Yes! Buddy requests can be submitted during registration until June 1." },
      { type: "text", content: "Guarantees:" },
      {
        type: "list",
        items: [
          "Prelude™ (ages 3–5) – Up to 2 buddy requests",
          "Launchpad™, ZERO™, Esports™, IdeaForge™, Mechanica™, Robox™ or Apex Athletics™ — 1 buddy request",
        ],
      },
      { type: "text", content: "We do everything possible to honor requests." },
    ],
  },
  {
    question: "WHAT IS THE COUNSELOR-TO-CAMPER RATIO?",
    answers: [
      {
        type: "list",
        items: [
          "Ages 3–5: 6:1",
          "Rising K–1st graders: 8:1",
          "Older programs: 10:1",
        ],
      },
      { type: "text", content: "Pools and water play have enhanced staffing, lifeguards, and safety supervision." },
    ],
  },
  {
    question: "HOW DO YOU HANDLE INCLEMENT WEATHER?",
    answers: [
      {
        type: "list",
        items: ["If storms, lightning, or unsafe conditions appear:"],
        nestedItems: [
          "All outdoor activities move indoors immediately",
          "Campers transition to indoor classrooms and gym spaces",
          "Activities adjust to keep campers active, safe, and engaged",
        ],
      },
    ],
  },
  {
    question: "WHAT PRECAUTIONS DO YOU TAKE TO HANDLE THE SUMMER HEAT?",
    answers: [
      {
        type: "list",
        items: [
          "Mandatory water breaks every 15–20 minutes",
          "Shade + indoor rotation during peak heat",
          "Sunscreen reapplication several times daily (tracked in Sunscreen Logs)",
          "Lower-impact activities during extreme heat",
        ],
      },
    ],
  },
  {
    question: "CAN KID EXPLORER CLUB ACCOMMODATE CHILDREN WITH PEANUT OR LIFE-THREATENING ALLERGIES?",
    answers: [
      {
        type: "list",
        items: [
          "Yes. KEC camps are peanut and tree-nut free.",
          "Our allergy procedure includes:",
        ],
        nestedItems: [
          "Morning identification + allergy wristband",
          "EpiPens stored in a secured Safety Office",
          "Medication checked in on Mondays and returned Fridays",
          "Mandatory handwashing after meals",
          "No food sharing",
          "Lunches checked for nut products",
        ],
      },
    ],
  },
  {
    question: "WHAT IS THE ILLNESS & LICE POLICY?",
    answers: [
      {
        type: "bold-section",
        boldTitle: "Illness",
        boldContent: [
          { type: "text", content: "Please notify us if your child is ill. Campers may return when:" },
          {
            type: "list",
            items: [
              "Symptoms have resolved",
              "They have been fever-free for 24 hours",
              "They have completed necessary treatment for communicable illness",
            ],
          },
        ],
      },
      {
        type: "bold-section",
        boldTitle: "Lice",
        boldContent: [
          {
            type: "list",
            items: ["If lice are suspected:"],
            nestedItems: [
              "Camper will be sent home for treatment",
              "Children must return lice-free with no active infestation",
            ],
          },
        ],
      },
    ],
  },
];

function renderAnswer(answer: FAQAnswer, idx: number) {
  switch (answer.type) {
    case "text":
      if (answer.highlight) {
        return (
          <Link key={idx} href="/enrollment-policies" className="text-[#0FD3C6] hover:underline">
            {answer.content}
          </Link>
        );
      }
      return (
        <p key={idx} className="font-sans text-black text-base sm:text-lg leading-8">
          {answer.content}
        </p>
      );
    case "list":
      return (
        <div key={idx}>
          <ul className="list-disc pl-7 space-y-0.5">
            {answer.items?.map((item, i) => (
              <li key={i} className="font-sans text-black text-base sm:text-lg leading-8">
                {item}
              </li>
            ))}
          </ul>
          {answer.nestedItems && (
            <ul className="list-disc pl-14 space-y-0.5">
              {answer.nestedItems.map((item, i) => (
                <li key={i} className="font-sans text-black text-base sm:text-lg leading-8">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    case "bold-section":
      return (
        <div key={idx} className="space-y-1">
          <p className="font-sans font-bold text-black text-lg sm:text-xl leading-6">
            {answer.boldTitle}
          </p>
          {answer.boldContent?.map((sub, i) => renderAnswer(sub, i))}
        </div>
      );
    default:
      return null;
  }
}

function FAQItemComponent({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isFirstQuestion = faq.question === "WHAT IS YOUR REFUND & CANCELLATION POLICY FOR SUMMER 2026 PROGRAMMING?";

  return (
    <div className="space-y-2.5">
      <motion.button
        onClick={onToggle}
        className="w-full flex items-start text-left gap-3 group cursor-pointer"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-[#1493E8] text-2xl leading-none mt-2.5 shrink-0">•</span>
        <span className="font-sans font-bold text-[#1493E8] text-lg sm:text-xl lg:text-2xl leading-[48px]">
          {faq.question}
        </span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-6 space-y-1 max-w-[1000px]">
              {isFirstQuestion ? (
                <div className="space-y-1">
                  <p className="font-sans text-black text-base sm:text-lg leading-8">
                    Please refer to our{" "}
                    <Link href="/enrollment-policies" className="text-[#0FD3C6] hover:underline">
                      2026 Enrollment Policies
                    </Link>{" "}
                    for information on refunds and cancellations.
                  </p>
                  <p className="font-sans text-black text-base sm:text-lg leading-8">
                    If you have any further questions regarding on-site camp, please contact our Customer Experience team at{" "}
                    <span className="text-[#0FD3C6]">(800) 553-2070</span>
                  </p>
                  <p className="font-sans text-black text-base sm:text-lg leading-8">
                    or email us at{" "}
                    <a href="mailto:Customercare@kidexplorercamp.com" className="text-[#0FD3C6] hover:underline">
                      Customercare@kidexplorercamp.com.
                    </a>
                  </p>
                </div>
              ) : (
                faq.answers.map((answer, idx) => renderAnswer(answer, idx))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="w-full flex justify-center pt-4 sm:pt-6">
        <div className="relative w-full max-w-[1400px] mx-auto h-[280px] sm:h-[353px] rounded-tl-[40px] rounded-tr-[40px] sm:rounded-tl-[60px] sm:rounded-tr-[60px] overflow-hidden">
          <Image
            src="/images/faq-hero.png"
            alt="Parent and child smiling"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-[#0FD3C6]/80" />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16 px-8 sm:px-16 lg:px-24">
            <FadeIn direction="up" delay={0}>
              <p className="font-sans font-bold text-white text-lg sm:text-2xl leading-[50px] uppercase">
                About
              </p>
              <h1 className="font-sans font-bold text-white text-4xl sm:text-[48px] leading-[50px]">
                FAQs
              </h1>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%] max-w-[1200px]">
          <StaggerContainer staggerDelay={0.05} className="space-y-10 sm:space-y-12">
            {faqData.map((faq, index) => (
              <StaggerItem key={index}>
                <FAQItemComponent
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
