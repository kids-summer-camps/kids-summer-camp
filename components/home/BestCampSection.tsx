"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { programs, type Program } from "@/lib/programs-data";

function ProgramCard({ card }: { card: Program }) {
  return (
    <motion.a
      href={card.href}
      className="group relative shrink-0 w-full sm:w-[45%] lg:w-[calc(33.333%-1rem)] min-w-0"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative h-[321px] rounded-[15px] overflow-hidden cursor-pointer">
        <Image
          src={card.cardImage}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute top-4 right-4 bg-[#1493E8] text-white px-3 py-1 rounded-full text-xs font-mono font-medium">
          {card.gradeRange || card.ages}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <motion.h3
            className="font-mono font-bold text-white text-[16px] leading-tight mb-2"
            initial={{ y: 0 }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            {card.title}
          </motion.h3>
          <motion.p
            className="font-mono font-normal text-white/90 text-[12px] leading-snug line-clamp-2"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {card.subtitle}
          </motion.p>
          
          {/* Action buttons overlay on hover */}
          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              href="/enroll"
              onClick={(e) => e.stopPropagation()}
              className="px-3 py-1.5 bg-[#0FD3C6] rounded-lg text-white font-mono text-xs font-medium hover:bg-[#0DC4B8] transition-colors"
            >
              Enroll
            </Link>
            <span className="px-3 py-1.5 bg-white/20 border border-white/50 rounded-lg text-white font-mono text-xs font-medium">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function BestCampSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimationControls();
  
  const allCards = [...programs, ...programs];

  const calculateCardWidth = useCallback(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector('a');
      if (firstCard) {
        const width = firstCard.offsetWidth;
        const gap = 16;
        return width + gap;
      }
    }
    return 300;
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const width = calculateCardWidth();
      setCardWidth(width);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    const timeout = setTimeout(updateWidth, 100);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timeout);
    };
  }, [calculateCardWidth]);

  const animateToIndex = useCallback(async (index: number, immediate = false) => {
    if (cardWidth === 0) return;
    
    const targetX = -index * cardWidth;
    
    if (immediate) {
      x.set(targetX);
    } else {
      await controls.start({
        x: targetX,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }
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
  }, [cardWidth, controls, x]);

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

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    animateToIndex(index);
  }, [animateToIndex]);

  useEffect(() => {
    if (cardWidth > 0) {
      animateToIndex(currentIndex, true);
    }
  }, [cardWidth]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
        <FadeIn direction="up" delay={0}>
          <h2 className="font-serif font-bold text-[#01325D] text-[28px] sm:text-[32px] text-center mb-8 sm:mb-10 leading-tight">
            The Best Camp in the Chicago Area
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <p className="font-mono font-bold text-black text-base text-center mb-6 max-w-[1036px] mx-auto leading-relaxed">
            Unleashing every child&apos;s personal best through an unforgettable summer camp experience.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="font-mono font-normal text-black text-sm sm:text-base text-center leading-relaxed max-w-[1036px] mx-auto mb-10 sm:mb-12">
            Every camper leaves with more than memories — they leave with skills, mindset, and vision. Sports, STEM, leadership labs, and creative challenges all become launchpads for life, preparing kids to dream big, execute boldly, and lead the way. At Kid Explorer Camps, summer isn&apos;t a pause. It&apos;s a launch sequence, and every child is a Day One, ready to explore, create, and lead the future.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="flex justify-end mb-8">
            <Link
              href="/programs"
              className="font-serif font-medium text-[#1493E8] text-base underline hover:text-[#1284D1] transition-colors"
            >
              View all →
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#01325D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#01325D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div ref={containerRef} className="overflow-hidden px-12">
              <motion.div 
                ref={carouselRef}
                className="flex gap-4"
                style={{ x }}
                animate={controls}
              >
                {allCards.map((card, index) => (
                  <ProgramCard key={`${card.id}-${index}`} card={card} />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {programs.map((_, index) => {
              const normalizedIndex = ((currentIndex % programs.length) + programs.length) % programs.length;
              
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    normalizedIndex === index
                      ? "bg-[#1493E8] w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
