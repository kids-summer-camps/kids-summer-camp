"use client";

import React from "react";
import { FadeIn } from "@/components/animations";

export function MissionSection() {
  return (
    <section className="bg-[#1493E8] w-full py-12 sm:py-16 lg:py-20">
      <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%] text-center">
        {/* Section Title - Pixel perfect: 32px, bold, white */}
        <FadeIn direction="up" delay={0}>
          <h2 className="font-serif font-bold text-white text-[28px] sm:text-[32px] mb-8 sm:mb-10 leading-tight">
            KID EXPLORER CAMPS — CHICAGO, IL
          </h2>
        </FadeIn>

        {/* Mission Text - Roboto Mono, 16px, medium, white */}
        <div className="font-mono font-medium text-white text-sm sm:text-base leading-relaxed max-w-[1152px] mx-auto space-y-4">
          <FadeIn direction="up" delay={0.1}>
            <p className="font-bold">
              Where the Future Starts in the Summer.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p>
              This isn't just a camp. It's a launchpad. A movement. A place where young minds don't just play they build, create, and become.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p>
              At Kid Explorer Camps, we're engineering summer to be unforgettable. Every moment is designed to spark curiosity, elevate confidence, and unlock the personal best in every child. We blend STEM innovation, creative arts, sports, and outdoor exploration with the kind of energy that turns ordinary days into legendary stories. With transportation across Chicago, your child can step into a world built to inspire bold thinkers and fearless explorers — no matter where they're coming from.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
