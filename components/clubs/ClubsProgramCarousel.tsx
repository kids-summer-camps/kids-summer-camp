"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FadeIn } from "@/components/animations";

interface CarouselProgram {
  id: string;
  name: string;
  tag: string;
  desc: string;
  href: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ClubsProgramCarouselProps {
  eyebrow?: string;
  title: string;
  description?: string;
  programs: CarouselProgram[];
}

function ProgramCard({ card }: { card: CarouselProgram }) {
  return (
    <div className="relative h-full shrink-0 w-[280px] sm:w-[340px] lg:w-[380px]">
      <div className="flex h-full flex-col rounded-[24px] border border-[#1493E8]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
        <div className="flex items-center justify-between">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
          >
            <card.icon className="h-7 w-7" />
          </span>
          <span
            className="rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
          >
            {card.tag}
          </span>
        </div>
        <h3 className="mt-5 font-serif text-[24px] font-medium text-[#01325D]">{card.name}</h3>
        <p className="mt-2 flex-1 font-mono text-sm leading-relaxed text-gray-600">{card.desc}</p>
        <Link
          href={card.href}
          className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-bold transition-transform hover:translate-x-1"
          style={{ color: card.accent }}
        >
          Explore
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function ClubsProgramCarousel({
  eyebrow,
  title,
  description,
  programs,
}: ClubsProgramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimationControls();
  const [cardWidth, setCardWidth] = useState(0);

  const allCards = [...programs, ...programs];

  const calculateCardWidth = useCallback(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".clubs-carousel-card");
      if (firstCard) {
        return firstCard.clientWidth + 20;
      }
    }
    return 400;
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      setCardWidth(calculateCardWidth());
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    const timeout = setTimeout(updateWidth, 100);
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timeout);
    };
  }, [calculateCardWidth]);

  const animateToIndex = useCallback(
    async (index: number, immediate = false) => {
      if (cardWidth === 0) return;
      const targetX = -index * cardWidth;
      if (immediate) {
        x.set(targetX);
      } else {
        await controls.start({
          x: targetX,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        });
      }
      if (index >= programs.length) {
        const resetIndex = index - programs.length;
        x.set(-resetIndex * cardWidth);
        setCurrentIndex(resetIndex);
      } else if (index < 0) {
        const resetIndex = programs.length + index;
        x.set(-resetIndex * cardWidth);
        setCurrentIndex(resetIndex);
      }
    },
    [cardWidth, controls, x, programs.length]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    animateToIndex(nextIndex);
  }, [currentIndex, animateToIndex]);

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    animateToIndex(prevIndex);
  }, [currentIndex, animateToIndex]);

  useEffect(() => {
    if (cardWidth > 0) animateToIndex(currentIndex, true);
  }, [cardWidth, animateToIndex, currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <FadeIn direction="up">
          <div className="mb-10 text-center sm:mb-14">
            {eyebrow && (
              <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
                {eyebrow}
              </span>
            )}
            <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[46px]">
              {title}
            </h2>
            {description && (
              <p className="mx-auto mt-4 max-w-[640px] font-mono text-base leading-relaxed text-gray-600 sm:text-lg">
                {description}
              </p>
            )}
          </div>
        </FadeIn>

        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden px-10 sm:px-16 lg:px-20">
            <motion.div className="flex gap-5" style={{ x }} animate={controls}>
              {allCards.map((card, index) => (
                <div key={`${card.id}-${index}`} className="clubs-carousel-card">
                  <ProgramCard card={card} />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-opacity hover:opacity-80 sm:h-14 sm:w-14"
            aria-label="Previous"
          >
            <svg className="h-6 w-6 rotate-180" viewBox="0 0 24 24" fill="none" stroke="#01325D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-opacity hover:opacity-80 sm:h-14 sm:w-14"
            aria-label="Next"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#01325D" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
