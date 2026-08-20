"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClubsPageHero, ClubsSectionHeader, ClubsCard, ClubsNumberBand, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const howItWorks = [
  {
    title: "Licensed and Supervised",
    desc: "Buses are provided and driven by a fully licensed Chicago company, with Kid Explorer Clubs Bus Monitors supervising every ride.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 22s8-3.6 8-9V5l-8-3-8 3v8c0 5.4 8 9 8 9z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Optional Add-On",
    desc: "Bus service is a convenient, complementary add-on you can select during registration.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Within 10 Miles",
    desc: "Service is included to host sites from schools within a 10-mile radius. Bus stops are created based on enrollment and school locations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const schedules = [
  {
    title: "Rising Pre-K (AM Half Day)",
    pickup: "6:30am to 7:30am",
    dropoff: "10:00am to 12:00pm",
  },
  {
    title: "Rising Pre-K (PM Half Day)",
    pickup: "10:45am to 12:00pm",
    dropoff: "3:30pm to 4:45pm",
  },
  {
    title: "Rising K to 8 (Full Day)",
    pickup: "7:15am to 8:30am",
    dropoff: "3:30pm to 4:45pm",
  },
];

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${className}`}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export default function TransportationPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Transportation"
        title="Explorer Express:"
        highlight="Kid Voyage Services"
        description="Transportation is a game changer for families. It saves time, removes the drive, and opens doors to programs that might otherwise be out of reach."
      />

      <ClubsNumberBand
        stats={[
          { value: "10", label: "Mile Radius" },
          { value: "100%", label: "Supervised" },
          { value: "AM + PM", label: "Service Windows" },
          { value: "Optional", label: "At Registration" },
        ]}
      />

      {/* How It Works */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ClubsSectionHeader
            eyebrow="How It Works"
            title="Safe Rides, Simple Setup"
            description="From licensed drivers to onboard supervision, every detail is handled so your explorer gets to camp and back with care."
          />
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorks.map((item) => (
              <StaggerItem key={item.title}>
                <ClubsCard className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#e7fbf9] text-[#0FD3C6]">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 font-serif text-[22px] font-medium text-[#01325D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </ClubsCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sample Pick Up and Drop Off */}
      <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ClubsSectionHeader
            eyebrow="Daily Schedule"
            title="Sample Pick Up and Drop Off"
            description="Exact times vary by route and stop. Here is what a typical day looks like for each program."
          />
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schedules.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                >
                  <ClubsCard className="h-full">
                    <h3 className="font-serif text-[22px] font-medium text-[#01325D]">
                      {s.title}
                    </h3>
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center gap-3 rounded-[16px] bg-[#e7fbf9] px-4 py-3">
                        <span className="text-[#0FD3C6]">
                          <ClockIcon />
                        </span>
                        <div>
                          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#01325D]/60">
                            Pick Up
                          </p>
                          <p className="font-mono text-base font-bold text-[#01325D]">
                            {s.pickup}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 rounded-[16px] border border-[#1493E8]/10 bg-[#f7fbff] px-4 py-3">
                        <span className="text-[#1493E8]">
                          <ClockIcon />
                        </span>
                        <div>
                          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#01325D]/60">
                            Drop Off
                          </p>
                          <p className="font-mono text-base font-bold text-[#01325D]">
                            {s.dropoff}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ClubsCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* 10-mile note */}
          <FadeIn direction="up" delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mx-auto mt-10 max-w-[900px] rounded-[24px] bg-[#e7fbf9] p-7 sm:mt-14 sm:p-9"
            >
              <p className="text-center font-mono text-base leading-relaxed text-[#01325D] sm:text-lg">
                Follow the steps during registration to check whether your child&apos;s
                school is within the 10-mile limit.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <ClubsCTA
        title="Save the Drive"
        description="Select bus service during registration and let the Explorer Express handle the ride."
        primaryLabel="Enroll Now"
        primaryHref="/enroll"
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
