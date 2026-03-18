"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { programs, type Program } from "@/lib/programs-data";
import Link from "next/link";

// Mobile accordion component
function MobileAccordion({ program }: { program: Program }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-md overflow-hidden relative"
            style={{ backgroundColor: `${program.color}20` }}
          >
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <h3 className="font-mono font-bold text-lg text-gray-900">
              {program.title}
            </h3>
            <p className="font-mono text-sm text-gray-500">
              {program.gradeRange || program.ages}
            </p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 pt-0 space-y-4">
          <div className="pt-4 border-t border-gray-100">
            <p className="font-mono text-xs text-gray-500 uppercase mb-2">Tagline</p>
            <p className="font-mono text-sm font-medium text-gray-800 italic">
              &ldquo;{program.subtitle}&rdquo;
            </p>
          </div>

          <div>
            <p className="font-mono text-sm text-gray-700 leading-relaxed">
              {program.description}
            </p>
          </div>

          <div>
            <h4 className="font-mono font-bold text-xs text-gray-500 uppercase mb-2">
              Key Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.focus.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full font-mono text-xs"
                  style={{
                    backgroundColor: `${program.color}15`,
                    color: program.color,
                    border: `1px solid ${program.color}30`
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100">
            <p className="font-mono text-xs text-gray-500 uppercase mb-2">Promise</p>
            <p className="font-mono text-sm text-gray-700 font-medium">
              {program.tagline}
            </p>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/contact"
              className="block w-full py-3 px-4 rounded-xl text-center font-mono font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ backgroundColor: program.color }}
            >
              Enroll Now →
            </Link>
            <Link
              href={program.href}
              className="block w-full py-3 px-4 rounded-xl text-center font-mono font-bold text-sm transition-all hover:bg-gray-100 border-2"
              style={{ color: program.color, borderColor: `${program.color}40` }}
            >
              Learn More →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Desktop 3D Cube Component
function Cube3D({ program }: { program: Program }) {
  const [currentFace, setCurrentFace] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const cubeSize = 400; // px - increased size
  const translateZ = cubeSize / 2; // 160px

  const faces = [
    { name: "Front", rotateY: 0 },
    { name: "Right", rotateY: -90 },
    { name: "Back", rotateY: -180 },
    { name: "Left", rotateY: -270 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x: x * 12, y: -y * 12 });
  };

  const handleClick = () => {
    setCurrentFace((prev) => (prev + 1) % 4);
  };

  const getRotation = () => {
    if (isHovered) {
      return {
        rotateY: faces[currentFace].rotateY + mousePos.x * 0.5,
        rotateX: mousePos.y * 0.5,
      };
    }
    return {
      rotateY: faces[currentFace].rotateY,
      rotateX: 0,
    };
  };

  const rotation = getRotation();

  return (
    <div
      className="relative cursor-pointer"
      style={{
        width: cubeSize,
        height: cubeSize,
        perspective: "1200px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onClick={handleClick}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full"
      >
        {/* Cube wrapper */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: rotation.rotateY,
            rotateX: rotation.rotateX,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Front Face - Title & Overview */}
          <div
            className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              backgroundColor: "white",
              border: `3px solid ${program.color}`,
              transform: `rotateY(0deg) translateZ(${translateZ}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="h-2 w-full"
              style={{ backgroundColor: program.color }}
            />
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              {/* Kid Image instead of emoji */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg overflow-hidden relative"
                style={{ backgroundColor: `${program.color}20` }}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h3 className="font-mono font-bold text-xl text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="font-mono text-sm text-gray-500 mb-4">
                {program.gradeRange || program.ages}
              </p>
              <p className="font-mono text-xs text-gray-600 italic leading-relaxed mb-4">
                &ldquo;{program.subtitle}&rdquo;
              </p>
              <div
                className="px-4 py-2 rounded-full"
                style={{ backgroundColor: `${program.color}15` }}
              >
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: program.color }}
                >
                  Click to explore
                </span>
              </div>
            </div>
          </div>

          {/* Right Face - Description */}
          <div
            className="absolute inset-0 bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            style={{
              border: `2px solid ${program.color}40`,
              transform: `rotateY(90deg) translateZ(${translateZ}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="p-4 border-b"
              style={{ borderColor: `${program.color}30`, backgroundColor: `${program.color}08` }}
            >
              <h4 className="font-mono font-bold text-xs text-gray-600 uppercase">
                About This Program
              </h4>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <p className="font-mono text-sm text-gray-700 leading-relaxed">
                {program.description}
              </p>
            </div>
            <div
              className="p-3 text-center"
              style={{ backgroundColor: `${program.color}10` }}
            >
              <p className="font-mono text-xs font-medium" style={{ color: program.color }}>
                Face 2 of 4
              </p>
            </div>
          </div>

          {/* Back Face - Focus Areas */}
          <div
            className="absolute inset-0 bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            style={{
              border: `2px solid ${program.color}40`,
              transform: `rotateY(180deg) translateZ(${translateZ}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="p-4 border-b"
              style={{ borderColor: `${program.color}30`, backgroundColor: `${program.color}08` }}
            >
              <h4 className="font-mono font-bold text-xs text-gray-600 uppercase">
                Key Focus Areas
              </h4>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-2">
                {program.focus.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center p-2 rounded-lg"
                    style={{ backgroundColor: `${program.color}12` }}
                  >
                    <span className="mr-2 text-sm" style={{ color: program.color }}>✓</span>
                    <span className="font-mono text-xs text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="p-3 text-center"
              style={{ backgroundColor: `${program.color}10` }}
            >
              <p className="font-mono text-xs font-medium" style={{ color: program.color }}>
                Face 3 of 4
              </p>
            </div>
          </div>

          {/* Left Face - Tagline & CTA with Buttons */}
          <div
            className="absolute inset-0 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            style={{
              backgroundColor: program.color,
              transform: `rotateY(270deg) translateZ(${translateZ}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <p className="font-mono text-xs text-white/70 uppercase mb-4">
                Our Promise
              </p>
              <p className="font-mono text-lg text-white font-bold leading-relaxed mb-6">
                &ldquo;{program.tagline}&rdquo;
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full">
                <Link
                  href="/contact"
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-3 bg-white rounded-xl font-mono font-bold text-sm transition-all hover:scale-105 text-center"
                  style={{ color: program.color }}
                >
                  Enroll Now →
                </Link>
                <Link
                  href={program.href}
                  onClick={(e) => e.stopPropagation()}
                  className="px-6 py-3 bg-white/20 border-2 border-white rounded-xl font-mono font-bold text-sm transition-all hover:scale-105 text-center text-white"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="p-3 text-center bg-black/10">
              <p className="font-mono text-xs text-white/80">
                Face 4 of 4 — Click to return
              </p>
            </div>
          </div>

          {/* Top Face */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${program.color}30, ${program.color}10)`,
              transform: `rotateX(90deg) translateZ(${translateZ}px)`,
              backfaceVisibility: "hidden",
            }}
          />

          {/* Bottom Face */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${program.color}15, transparent)`,
              transform: `rotateX(-90deg) translateZ(${translateZ}px)`,
              backfaceVisibility: "hidden",
              boxShadow: `0 20px 40px ${program.color}30`,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Face indicator dots */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {faces.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentFace(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${i === currentFace ? 'w-6' : 'w-2'
              }`}
            style={{
              backgroundColor: i === currentFace ? program.color : `${program.color}40`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ProgramCubesSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-linear-to-b from-[#f7fbff] to-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <FadeIn direction="up" delay={0}>
          <div className="text-center mb-12 lg:mb-16">
            <h2
              className="font-serif font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-gray-900 mb-4 leading-tight"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Launch Your Child&apos;s Possibilities
            </h2>
            <p className="font-mono text-gray-600 max-w-2xl mx-auto">
              Click on any cube to explore our camp programs for every age and interest
            </p>
          </div>
        </FadeIn>

        {/* Mobile: Accordion cards */}
        <div className="lg:hidden space-y-4 max-w-xl mx-auto">
          {programs.map((program, index) => (
            <FadeIn key={program.id} direction="up" delay={index * 0.05}>
              <MobileAccordion program={program} />
            </FadeIn>
          ))}
        </div>

        {/* Desktop: 3D Cubes */}
        <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-10 xl:gap-12 max-w-[1600px] mx-auto">
          {programs.map((program, index) => (
            <FadeIn key={program.id} direction="up" delay={index * 0.08}>
              <div className="mb-12">
                <Cube3D program={program} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
