"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";

export default function EsportsGamingPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const program = getProgramById("esports-gaming");

  if (!program) {
    return <div>Program not found</div>;
  }

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split title for display
  const titleParts = program.title.split(" ");
  const mainTitle = "E Sports"; // First two words
  const subTitle = "Gaming"; // Last word

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative">
        {/* Hero Image Container */}
        <div className="relative h-[600px] sm:h-[700px] lg:h-[584px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              priority
            />
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
                  onClick={() => scrollToSection("activities")}
                  className={`font-mono font-bold text-[14px] sm:text-[16px] text-white hover:text-[#b0ff40] transition-colors ${activeTab === "activities" ? "text-[#b0ff40]" : ""}`}
                >
                  Activities
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Left Sidebar Info Card - Extends below hero */}
        <div className="absolute left-6 sm:left-12 lg:left-[89px] top-[461px] z-30 w-[239px] hidden md:block">
          {/* Light Blue Box with Title */}
          <div className="bg-[#40b3ff] h-[252px] w-full flex flex-col justify-end p-4">
            <h1 className="font-serif font-bold text-[48px] text-white leading-none">{mainTitle}</h1>
            <h2 className="font-serif font-bold text-[36px] text-white leading-none">{subTitle}</h2>
          </div>

          {/* Green CTA Button - Separate from blue box */}
          <div className="mt-3">
            <Link 
              href="/contact"
              className="bg-[#b0ff40] h-[42px] w-full flex items-center justify-center hover:brightness-110 transition-all cursor-pointer"
            >
              <span className="font-mono font-bold text-[#1493E8] text-[20px]">ENROLL TODAY:</span>
            </Link>
          </div>

          {/* Info Sections with dividers */}
          <div className="bg-white py-4 mt-3">
            <div className="border-t border-[#d9d9d9] pt-4 mb-4">
              <p className="font-mono font-bold text-[#1493E8] text-[20px]">HOURS</p>
              <p className="font-mono font-normal text-black text-[20px]">{program.schedule[0]}</p>
            </div>
            <div className="border-t border-[#d9d9d9] pt-4 mb-4">
              <p className="font-mono font-bold text-[#1493E8] text-[20px]">AGES</p>
              <p className="font-mono font-normal text-black text-[20px]">Rising {program.gradeRange || program.ages}</p>
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
          <h1 className="font-serif font-bold text-[48px] text-white leading-none">{mainTitle}</h1>
          <h2 className="font-serif font-bold text-[36px] text-white leading-none">{subTitle}</h2>
        </div>
        <div className="mt-3">
          <Link 
            href="/contact"
            className="bg-[#b0ff40] p-3 w-full block text-center hover:brightness-110 transition-all cursor-pointer"
          >
            <span className="font-mono font-bold text-[#1493E8] text-[16px]">ENROLL TODAY:</span>
          </Link>
        </div>
        <div className="space-y-3">
          <div className="border-t border-[#d9d9d9] pt-3">
            <p className="font-mono font-bold text-[#1493E8] text-[16px]">HOURS</p>
            <p className="font-mono font-normal text-black text-[16px]">{program.schedule[0]}</p>
          </div>
          <div className="border-t border-[#d9d9d9] pt-3">
            <p className="font-mono font-bold text-[#1493E8] text-[16px]">AGES</p>
            <p className="font-mono font-normal text-black text-[16px]">Rising {program.gradeRange || program.ages}</p>
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
                {program.title}
              </h2>

              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                {program.subtitle}
              </p>
              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                {program.description}
              </p>
              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8">
                {program.tagline}
              </p>

              {/* Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] mb-8 rounded-[5px] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
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
                Limitless By Nature — Kid Explorer Camp 2026
              </p>

              <h2 className="font-serif font-bold text-[#01325D] text-2xl sm:text-3xl lg:text-[32px] uppercase leading-tight mb-8">
                WHY WE&apos;RE DIFFERENT
              </h2>

              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                At Kid Explorer Camp, we don&apos;t do ordinary.
              </p>
              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                Our E Sports Gaming camp reimagines gaming as a platform for skill-building. Through structured competitions and team-based play, campers develop strategic thinking, communication, and leadership—all while doing what they love.
              </p>
              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                We balance screen time with physical activities, ensuring campers stay active and engaged. Our curriculum explores the esports industry, game design basics, and digital citizenship, preparing kids for opportunities in the growing gaming world.
              </p>
              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-4">
                We call it the Launchpad Effect—where every camper&apos;s passion becomes a pathway to growth.
              </p>
              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed">
                We&apos;re not raising campers. We&apos;re raising strategists, communicators, and digital citizens—future legends in the making.
              </p>
            </div>

            {/* Activities Section */}
            <div id="activities" className="mb-16">
              <h2 className="font-serif font-bold text-[#01325D] text-2xl sm:text-3xl lg:text-[32px] uppercase leading-tight mb-8">
                ACTIVITIES & SKILLS
              </h2>

              <ul className="list-disc pl-6 space-y-3 font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8">
                <li>Team-based esports competitions with rotating game titles</li>
                <li>Strategy sessions and post-game analysis</li>
                <li>Communication and shot-calling skill development</li>
                <li>Game design fundamentals and level creation</li>
                <li>Introduction to streaming and content creation basics</li>
                <li>Digital citizenship and online sportsmanship workshops</li>
              </ul>

              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-6">
                Campers participate in daily tournaments, team-building exercises, and physical activities to maintain balance. Our experienced coaches emphasize positive gaming culture, ensuring a supportive environment for all skill levels.
              </p>
            </div>

            {/* Notes for Parents Section */}
            <div id="notes" className="mb-16">
              <h3 className="font-mono font-bold text-black text-xl sm:text-2xl mb-6">
                Notes for Parents
              </h3>

              <ul className="list-disc pl-6 space-y-2 font-mono font-normal text-black text-sm sm:text-base leading-relaxed mb-8">
                <li>All gaming equipment is provided—no need to bring personal devices.</li>
                <li>Screen time is balanced with physical activities and team exercises.</li>
                <li>Games are age-appropriate and selected for strategic value, not just popularity.</li>
                <li>Emphasis on digital wellness and healthy gaming habits.</li>
                <li>Camp concludes with a Championship Tournament open to families.</li>
              </ul>

              <p className="font-mono font-normal text-black text-sm sm:text-base leading-relaxed">
                Kid Explorer Camp — Chicago, IL<br />
                They come curious. They leave legends.
              </p>
            </div>

            {/* Enroll CTA */}
            <div className="text-center pt-8">
              <Link 
                href="/contact"
                className="inline-block bg-[#0FD3C6] text-white font-serif font-bold text-[16px] px-8 py-4 rounded-lg hover:bg-[#0DC4B8] transition-colors"
              >
                Enroll in {program.title} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
