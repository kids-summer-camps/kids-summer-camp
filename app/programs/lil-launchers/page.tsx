"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LilLaunchersPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
        {/* Hero Section with Background Video */}
        <section className="relative">
          {/* Hero Video Container */}
          <div className="relative h-[600px] sm:h-[700px] lg:h-[584px] overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/lil-launchers-hero.png"
                className="w-full h-full object-cover"
              >
                <source src="/videos/gaming%20pad.MP4" type="video/mp4" />
              </video>
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Blue Bar at Bottom of Hero */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#1493E8] z-10" />

            {/* Tab Navigation on Blue Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
              <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%] h-14 flex items-center">
                {/* Tabs with left margin to align with content area */}
                <div className="flex items-center gap-8 lg:gap-12 lg:ml-[320px]">
                  <button
                    onClick={() => scrollToSection("overview")}
                    className={`font-mono font-bold text-[14px] sm:text-[16px] text-white hover:text-[#b0ff40] transition-colors ${activeTab === "overview" ? "text-[#b0ff40]" : ""}`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => scrollToSection("why-different")}
                    className={`font-mono font-bold text-[14px] sm:text-[16px] text-white hover:text-[#b0ff40] transition-colors ${activeTab === "why-different" ? "text-[#b0ff40]" : ""}`}
                  >
                    Why We&apos;re Different
                  </button>
                  <button
                    onClick={() => scrollToSection("swim")}
                    className={`font-mono font-bold text-[14px] sm:text-[16px] text-white hover:text-[#b0ff40] transition-colors ${activeTab === "swim" ? "text-[#b0ff40]" : ""}`}
                  >
                    Swim & Water Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Left Sidebar Info Card - Extends below hero */}
          <div className="absolute left-6 sm:left-12 lg:left-[89px] top-[461px] z-30 w-[239px] hidden md:block">
            {/* Light Blue Box with Title */}
            <div className="bg-[#40b3ff] h-[252px] w-full flex flex-col justify-end p-4">
              <h1 className="font-serif font-bold text-[64px] text-white leading-none">Lil</h1>
              <h2 className="font-serif font-bold text-[36px] text-white leading-none">Launchers</h2>
            </div>

            {/* Green CTA Button - Separate from blue box */}
            <div className="mt-3">
              <button className="bg-[#b0ff40] h-[42px] w-full flex items-center justify-center hover:brightness-110 transition-all cursor-pointer">
                <span className="font-mono font-bold text-[#1493E8] text-[20px]">ENROLL TODAY:</span>
              </button>
            </div>

            {/* Info Sections with dividers */}
            <div className="bg-white py-4 mt-3">
              <div className="border-t border-[#d9d9d9] pt-4 mb-4">
                <p className="font-mono font-bold text-[#1493E8] text-[20px]">HOURS</p>
                <p className="font-mono font-normal text-black text-[20px]">9am – 3pm</p>
              </div>
              <div className="border-t border-[#d9d9d9] pt-4 mb-4">
                <p className="font-mono font-bold text-[#1493E8] text-[20px]">AGES</p>
                <p className="font-mono font-normal text-black text-[20px]">Rising Pre-K (3–4yrs)</p>
              </div>
              <div className="border-t border-[#d9d9d9] pt-4">
                <p className="font-mono font-bold text-[#1493E8] text-[20px]">LOCATION</p>
                <p className="font-mono font-normal text-black text-[20px]">Percy L Julian High School</p>
                <p className="font-mono font-normal text-black text-[20px]">10330 S Elizabeth St.</p>
                <p className="font-mono font-normal text-black text-[20px]">Chicago, IL 60643</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Info Card - Shows only on mobile */}
        <div className="md:hidden bg-white py-6 px-6">
          <div className="bg-[#40b3ff] p-4">
            <h1 className="font-serif font-bold text-[48px] text-white leading-none">Lil</h1>
            <h2 className="font-serif font-bold text-[28px] text-white leading-none">Launchers</h2>
          </div>
          <div className="mt-3">
            <button className="bg-[#b0ff40] p-3 w-full hover:brightness-110 transition-all cursor-pointer">
              <span className="font-mono font-bold text-[#1493E8] text-[16px]">ENROLL TODAY:</span>
            </button>
          </div>
          <div className="space-y-3">
            <div className="border-t border-[#d9d9d9] pt-3">
              <p className="font-mono font-bold text-[#1493E8] text-[16px]">HOURS</p>
              <p className="font-mono font-normal text-black text-[16px]">9am – 3pm</p>
            </div>
            <div className="border-t border-[#d9d9d9] pt-3">
              <p className="font-mono font-bold text-[#1493E8] text-[16px]">AGES</p>
              <p className="font-mono font-normal text-black text-[16px]">Rising Pre-K (3–4yrs)</p>
            </div>
            <div className="border-t border-[#d9d9d9] pt-3">
              <p className="font-mono font-bold text-[#1493E8] text-[16px]">LOCATION</p>
              <p className="font-mono font-normal text-black text-[16px]">Percy L Julian High School</p>
              <p className="font-mono font-normal text-black text-[16px]">10330 S Elizabeth St.</p>
              <p className="font-mono font-normal text-black text-[16px]">Chicago, IL 60643</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
            {/* Desktop: Add left margin to account for sidebar */}
            <div className="ml-0 lg:ml-[320px]">
              {/* Overview Section */}
              <div id="overview" className="mb-16">
                {/* Divider */}
                <div className="w-full h-px bg-[#d9d9d9] mb-8" />

                <h2 className="font-serif font-bold text-[#01325D] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-8">
                  Lil Launchers
                </h2>

                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  Welcome to Kid Explorer Camp — where the future isn&apos;t just imagined, it&apos;s built.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  This isn&apos;t your average day camp. It&apos;s the launchpad for your little explorer&apos;s first adventure a space where creativity flows, confidence grows, and curiosity runs wild. Our youngest campers step into a world where art collides with innovation, STEM sparks imagination, and friendships are formed with the same energy rockets meet the sky.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8">
                  Think: hands-on creations, splash-ready swim sessions, and early leadership skills wrapped in a summer they&apos;ll never forget. Every moment is designed to nurture independence, ignite brilliance, and make learning feel like play.
                </p>

                {/* Video */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] mb-8 rounded-[5px] overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/images/lil-launchers-video.png"
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/gaming%20pad.MP4" type="video/mp4" />
                  </video>
                </div>

                {/* Philosophy Link */}
                <p className="font-mono font-normal text-black text-sm sm:text-base mb-4">
                  <span>Learn about the Kid Explorer Camp Philosophy </span>
                  <Link href="/philosophy" className="text-[#0FD3C6] hover:underline">
                    (click here)
                  </Link>
                </p>
              </div>

              {/* Why We're Different Section */}
              <div id="why-different" className="mb-16">
                <p className="font-mono font-bold text-black text-sm sm:text-base mb-4">
                  Limitless By Nature —Kid Explorer Camp 2026
                </p>

                <h2 className="font-serif font-bold text-[#01325D] text-2xl sm:text-3xl lg:text-[32px] uppercase leading-tight mb-8">
                  WHY WE&apos;RE DIFFERENT
                </h2>

                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  At Kid Explorer Camp, we don&apos;t do ordinary.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  Every week is a mission, not a routine a hands-on storyline where imagination drives learning and curiosity sparks confidence. Whether it&apos;s oceans or outer space, dinosaurs or design thinking, every theme becomes an immersive world campers step into, not just learn about.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  Here, art meets science, teamwork fuels discovery, and every challenge builds emotional intelligence grit, optimism, and the ability to bounce back stronger.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-4">
                  We call it the Launchpad Effect where every camper&apos;s &quot;what if?&quot; becomes &quot;watch this&quot;.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed">
                  We&apos;re not raising campers. We&apos;re raising thinkers, doers, and builders — future legends in the making.
                </p>
              </div>

              {/* Swim & Water Play Section */}
              <div id="swim" className="mb-16">
                <h2 className="font-serif font-bold text-[#01325D] text-2xl sm:text-3xl lg:text-[32px] uppercase leading-tight mb-8">
                  SWIM & WATER PLAY
                </h2>

                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  Some days, it&apos;s splashdowns. Other days, it&apos;s small victories that feel cosmic.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  Every camper in Chicago, IL gets the chance to cool off and level up with daily water play and instructional swim sessions built for confidence, safety, and skill.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                  From first-time floaters to mini Olympians, our trained staff keep a 3:1 camper-to-coach ratio in the pool, ensuring every child gets the attention, feedback, and encouragement they deserve. Parents receive progress updates that celebrate every dive, every kick, every brave jump into the deep end.
                </p>
                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed">
                  And when it&apos;s not swim time? We turn up the fun with water play zones, splash games, and creative challenges that bring the same energy and joy all while keeping our explorers cool under the Chicago summer sun.
                </p>
              </div>

              {/* Notes for Parents Section */}
              <div id="notes" className="mb-16">
                <h3 className="font-mono font-bold text-black text-xl sm:text-2xl mb-6">
                  Notes for Parents
                </h3>

                <ul className="list-disc pl-6 space-y-2 font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8">
                  <li>Each age group follows a unique daily schedule built around their developmental rhythm.</li>
                  <li>Lunch times, water breaks, and bathroom breaks are structured and always supervised.</li>
                  <li>Sunscreen is applied throughout the day — because safety is part of our design.</li>
                  <li>Quiet moments are woven into our day for reflection, reset, and rest.</li>
                  <li>Our staff are trained to create a balance of high energy, high learning, and high care — the perfect trio for a transformative summer.</li>
                </ul>

                <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed">
                  Kid Explorer Camp — Chicago, IL<br />
                  They come curious. They leave legends.
                </p>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}
