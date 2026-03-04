"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const faqData = [
  {
    question: "WHAT IS YOUR REFUND & CANCELLATION POLICY FOR SUMMER 2026 PROGRAMMING?",
    answer: "Please refer to our SUMMER CANCELLATION POLICY for full details at (https://kidexplorerclubs.com/policies/). Cancellations, transfers, and requests.",
  },
  {
    question: "WHERE ARE YOUR CAMP LOCATIONS?",
    answer: "For Summer 2026, our primary Chicago boutique campus is:\n• Address: 10330 S Elizabeth Ave\n• Chicago, IL 60628\n\nAdditional Chicago locations will be announced throughout Spring 2025.",
  },
  {
    question: "WHAT ARE THE CAMP HOURS?",
    answer: "Drop-Off Window: 8:30 AM – 9:00 AM\nCamp Programming: 9:00 AM – 3:00 PM\n\nExtended Day Options:\n• Aftercare: 3:00 PM – 6:00 PM\n• Full Day: 8:30 AM – 6:00 PM\n• Please inquire at info@kidexplorerclubs.com",
  },
  {
    question: "ARE YOUR CAMPS OPEN ON HOLIDAYS?",
    answer: "NO. Summer camps are closed on the following dates:\n• Juneteenth – Closed\n• July 4th Week – Closed (refer to individual camp session dates)\n\nCamp will operate on all other weekdays during the summer session.",
  },
  {
    question: "WHAT DOES MY CHILD NEED TO BRING TO CAMP?",
    answer: "Every child should bring:\n• Lunch (nut-free)\n• Reusable water bottle (refillable)\n• Swimwear (include a slip-on shoe like swim shoe or water slipper)\n• Sunscreen\n• Comfortable, weather-appropriate clothing\n• Any required medication (submitted to our Safety Coordinator)\n• A curious mind and adventurous spirit!",
  },
  {
    question: "WILL MY CHILD SWIM AT CAMP?",
    answer: "At Percy L. Julian High School:\n• All campers participate in daily water play (for fun!) water motor, water confidence)\n• Instructional swim lessons 2x per week\n• Friday Fun Days will rotate (FIELD TRIPS, WATER IMMERSION)\n• It is offered to enhance water confidence under a 3:1 child-to-staff\n\nIn the pool, every child will receive swimming lessons for all programs.",
  },
  {
    question: "IS KID EXPLORER CLUB A GOOD FIT FOR A CHILD WHO HAS ADDITIONAL SUPPORT NEEDS?",
    answer: "Yes. Kid Explorer Club is proud to support campers with additional needs, and we welcome children who require extra support from time to time.\n\nDevelopment of an Inclusion Plan may include:\n• Buddy or peer mentorship\n• Participation of support specialist\n• Communication with parents\n\nIf your child requires 1:1 support at School of Kid, we require additional insurance.\nPlease reach out directly to our Inclusion team at hello@kidexplorerclubs.com.\n\nFor our School age programming (Ages 5-14), buddies must complete our counselor team and background check prior to attendance.",
  },
  {
    question: "DOES MY CHILD NEED TO BE POTTY TRAINED?",
    answer: "Yes. Campers must be:\n• Bathroom independent\n• No pull-ups\n• At least 5 years old by their first day of camp\n\nIf your child is not yet potty trained, please contact our Program Support for suggestions.",
  },
  {
    question: "CAN WE REQUEST THAT MY CAMPERS BE PLACED WITH ANOTHER CAMPER (BUDDY REQUEST)?",
    answer: "Buddy requests are encouraged as long as both campers:\n• Register together 2-3 WKS in advance (with approval)\n• Both are 7 years or older\n• Both campers must be within ONE grade level of each other like 1-1 buddy request\n• We do everything possible to honor requests.",
  },
  {
    question: "WHAT IS THE COUNSELOR-TO-CAMPER RATIO?",
    answer: "Ages 3-4: 1:4\nAges 5-7: 1:6\nAges 8-10: 1:8\n\nKids and Crew Day have enhanced staffing. (Lifeguards, and safety supervision).",
  },
  {
    question: "HOW DO YOU HANDLE SEVERE WEATHER?",
    answer: "If extreme weather or safety conditions occur:\n• Campers transition to indoor classrooms and gym space\n• Parents notified via email and text message for safety, rain, and outages\n• Pickup protocols may be adjusted",
  },
  {
    question: "WHAT PRECAUTIONS DO YOU TAKE TO HANDLE THE SUMMER HEAT?",
    answer: "• Water activities every hour for hydration\n• Shaded rest + indoor AC breaks daily\n• Sunscreen applied daily (parents provide and label)\n• Water intake tracked during extreme temperature days\n• Kid Explorer Club advises drop-off reminders",
  },
  {
    question: "CAN KID EXPLORER CLUB ACCOMMODATE CHILDREN WITH PEANUT OR LIFE-THREATENING ALLERGIES?",
    answer: "Yes. Our camps are peanut and tree-nut free.\n• No tree nuts products on site.\n• EpiPens carried by Counselors + storage available\n• All staff trained in EpiPen use and signs of anaphylaxis\n• Medication checked in on Mondays and returned Fridays\n• Medical emergencies to onsite coordinator\n• Anaphylaxis plan for all protocols",
  },
  {
    question: "WHAT IS THE ILLNESS & LICE POLICY?",
    answer: "ILLNESS\n• Please notify us if your child is ill. Campers may return when:\n– Fever-free (without meds) for 24 hours\n– 48 Hours Must Pass – Vomit + 72 hours communicable illness\n• Head lice: Must be treated\n• 24 hours without symptoms\n\nLICE\n– Routine lice checks for treatment\n– Campers must nit + lice-free with no active infestation",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: typeof faqData[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#d9d9d9] last:border-b-0">
      <motion.button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-serif font-bold text-[#01325D] text-base sm:text-lg lg:text-[20px] pr-4">
          {faq.question}
        </span>
        <motion.span
          className="text-[#0FD3C6] text-2xl shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "−" : "+"}
        </motion.span>
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
            <div className="pb-6 pr-8">
              <p className="font-mono font-normal text-black text-sm sm:text-base lg:text-[18px] leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
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
      {/* Video Hero Section */}
      <HeroSection
        videoSrc="/videos/camp-hero.mp4"
        imageSrc="/images/hero-bg.png"
        posterSrc="/images/hero-bg.png"
      />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          {/* Title */}
          <FadeIn direction="up" delay={0}>
            <h1 className="font-serif font-bold text-[#01325D] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-12">
              FAQ
            </h1>
          </FadeIn>

          {/* FAQ Items */}
          <StaggerContainer staggerDelay={0.05} className="space-y-0">
            {faqData.map((faq, index) => (
              <StaggerItem key={index}>
                <FAQItem
                  faq={faq}
                  index={index}
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
