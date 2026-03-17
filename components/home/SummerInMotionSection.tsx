"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import { FadeIn } from "@/components/animations";

const programCards = [
  {
    id: "lil-launchers",
    title: "Lil' Launchers",
    ages: "3 – 4 years",
    subtitle: "Welcome to Kid Explorer Camp — where the future isn't just imagined, it's built.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  },
  {
    id: "cosmic-curiosity",
    title: "Cosmic Curiosity",
    ages: "1st – 2nd",
    subtitle: "First they wonder, then they build.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "first-flight",
    title: "First Flight",
    ages: "Rising K & 1st",
    subtitle: "Welcome to Kid Explorer Camp — where small steps turn into giant leaps.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
  },
  {
    id: "the-blueprint",
    title: "The Blueprint",
    ages: "2nd – 3rd",
    subtitle: "Big ideas, small humans, limitless potential.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  },
  {
    id: "power-play",
    title: "Power Play",
    ages: "K – 7",
    subtitle: "Where the field is a stage and every move is a statement.",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&q=80",
  },
  {
    id: "vision-architect",
    title: "Vision Architect",
    ages: "4th – 7th",
    subtitle: "Where vision meets action.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    id: "the-vanguard",
    title: "The Vanguard",
    ages: "Rising 8th",
    subtitle: "Lead loud. Inspire always.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
  },
];

function ProgramCard({ card }: { card: typeof programCards[0] }) {
  return (
    <div className="relative shrink-0 w-[280px] sm:w-[340px] lg:w-[406px]">
      <div className="w-full bg-[rgba(15,211,198,0.1)] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 lg:p-6 flex flex-col items-center">
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 items-start w-full">
          <div className="w-full aspect-366/261 bg-white rounded-[16px] sm:rounded-[20px] overflow-hidden relative group">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 406px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-[#1493E8] text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium">
              {card.ages}
            </div>
          </div>
          <div className="w-full text-center">
            <h3 className="font-mono font-bold text-[#01325D] text-[20px] sm:text-[24px] lg:text-[28px] leading-tight mb-2">
              {card.title}
            </h3>
            <p className="font-mono font-normal text-[#01325D] text-xs sm:text-[13px] lg:text-[14px] leading-relaxed line-clamp-2">
              {card.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SummerInMotionSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimationControls();
  const [cardWidth, setCardWidth] = useState(0);
  
  const allCards = [...programCards, ...programCards];

  const calculateCardWidth = useCallback(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector('.carousel-card');
      if (firstCard) {
        const width = firstCard.clientWidth;
        const gap = 20;
        return width + gap;
      }
    }
    return 426;
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

    if (index >= programCards.length) {
      const resetIndex = index - programCards.length;
      x.set(-resetIndex * cardWidth);
      setCurrentIndex(resetIndex);
    } else if (index < 0) {
      const resetIndex = programCards.length + index;
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
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <FadeIn direction="up" delay={0}>
          <h2 className="font-mono font-bold text-[#01325D] text-[24px] sm:text-[30px] lg:text-[36px] text-center mb-8 sm:mb-12 leading-normal">
            A Summer in Motion
          </h2>
        </FadeIn>

        <div 
          ref={containerRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden px-12 sm:px-16 lg:px-20">
            <motion.div 
              ref={carouselRef}
              className="flex gap-4 sm:gap-5"
              style={{ x }}
              animate={controls}
            >
              {allCards.map((card, index) => (
                <div key={`${card.id}-${index}`} className="carousel-card">
                  <ProgramCard card={card} />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity z-10 bg-white rounded-full shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 rotate-180" viewBox="0 0 24 24" fill="none" stroke="#01325D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity z-10 bg-white rounded-full shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#01325D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
