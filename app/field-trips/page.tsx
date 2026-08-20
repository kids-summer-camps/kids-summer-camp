"use client";

import React from "react";
import { motion } from "framer-motion";
import { RocketLaunchIcon, BeakerIcon, GlobeAltIcon, CubeIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsEditorial, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const trips = [
  {
    icon: RocketLaunchIcon,
    name: "iFLY Indoor Skydiving",
    tag: "Feel It in Your Bones",
    desc: "Kids should not just dream about flying, they should feel it. Physics meets adrenaline in a confidence-building experience.",
  },
  {
    icon: BeakerIcon,
    name: "Museum of Science and Industry",
    tag: "Innovation Comes Alive",
    desc: "A playground for problem-solvers and science rebels, where innovation comes alive and kids become inventors.",
  },
  {
    icon: GlobeAltIcon,
    name: "Adler Planetarium",
    tag: "Train Like Cosmic Captains",
    desc: "Explorers dive into real NASA missions, touch meteorites, and train like cosmic captains of the future.",
  },
  {
    icon: CubeIcon,
    name: "Chicago Children's Museum",
    tag: "Wild Ideas Get Wings",
    desc: "Where wild ideas get their wings. Our youngest visionaries build, climb, splash, and create.",
  },
];

export default function FieldTripsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Beyond the Classroom"
        title="Into the"
        highlight="Cosmos"
        description="Field trips at Kid Explorer Clubs are full-sensory launch missions, designed to open young minds and ignite curiosity across science, art, and imagination."
      />

      <ClubsNumberBand
        stats={[
          { value: "4", label: "Signature Trips" },
          { value: "Chicago", label: "World-Class Venues" },
          { value: "100%", label: "Hands-On" },
          { value: "All Year", label: "Real Experiences" },
        ]}
      />

      <ClubsEditorial
        eyebrow="Launch Missions"
        title="We Do Not Ride Buses to See Stuff."
        highlight="We Teleport."
        body="Every field trip is engineered to crack open young minds and blast curiosity into orbit, in worlds where science, art, and imagination collide."
        reversed
      />

      {/* Trips - designed showcase */}
      <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
            {trips.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#1493E8]/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="relative flex h-28 items-center justify-center bg-[#01325D]">
                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border-2 border-dashed border-[#0FD3C6]/30" aria-hidden />
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0FD3C6]/15 text-[#0FD3C6] transition-transform duration-300 group-hover:scale-110">
                      <t.icon className="h-7 w-7" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#1493E8]">
                      {t.tag}
                    </span>
                    <h3 className="mt-2 font-serif text-[22px] font-medium leading-tight text-[#01325D]">
                      {t.name}
                    </h3>
                    <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-gray-600">{t.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClubsGlassFeature
        eyebrow="Training Grounds"
        title="More Than Trips, Launch Missions"
        description="These are training grounds for tomorrow's leaders, curated with purpose and powered by wonder."
        ctaLabel="Explore Summer Camps"
        ctaHref="/summer-camps"
      />

      <ClubsCTA
        title="Adventure Awaits"
        description="Give your explorer a summer of launch missions and unforgettable experiences."
        secondaryLabel="Explore Summer Camps"
        secondaryHref="/summer-camps"
      />
    </div>
  );
}
