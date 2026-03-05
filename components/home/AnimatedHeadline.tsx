"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedHeadlineProps {
  staticText?: string;
  rotatingTexts: string[];
  className?: string;
}

export function AnimatedHeadline({
  staticText = "",
  rotatingTexts,
  className = "",
}: AnimatedHeadlineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentText = rotatingTexts[currentIndex];

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, isPaused, currentText, rotatingTexts.length]);

  return (
    <h1
      className={`font-bold text-white ${className}`}
    >
      {staticText && (
        <span className="elementor-headline-plain-text">{staticText}</span>
      )}
      <span className="relative inline-block text-white">
        <span className="elementor-headline-dynamic-text">
          {displayText}
        </span>
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </span>
    </h1>
  );
}
