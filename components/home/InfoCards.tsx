"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

export function InfoCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1152px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Blue Gradient Card - Left side, 388px wide */}
          <FadeIn direction="left" delay={0}>
            <motion.div
              className="rounded-[40px] p-8 md:p-10 min-h-[292px] flex items-center cursor-pointer"
              style={{
                background: "linear-gradient(200.642deg, rgb(36, 167, 255) 16.679%, rgb(2, 107, 177) 92.778%)",
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-white font-mono font-medium text-[15px] leading-[1.7]">
                Summertime is where, our campers build more than memories they build mindsets.
                <br />
                <br />
                From science to sport, from imagination to leadership, every program at Kid Explorer Camp is a blueprint for becoming.
              </p>
            </motion.div>
          </FadeIn>

          {/* White Card with Shadow - Right side, 643px wide */}
          <FadeIn direction="right" delay={0.2}>
            <motion.div
              className="bg-white rounded-[40px] p-8 md:p-10 min-h-[292px] flex items-center shadow-[0px_8px_13.7px_0px_rgba(0,0,0,0.1)] cursor-pointer"
              whileHover={{ scale: 1.02, y: -5, boxShadow: "0px 12px 24px 0px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-black font-mono font-medium text-[15px] leading-[1.7]">
                Every camper leaves with more than memories — they leave with skills, mindset, and vision. Sports, STEM, leadership labs, and creative challenges all become launchpads for life, preparing kids to dream big, execute boldly, and lead the way.
                <br />
                <br />
                At Kid Explorer Camps, summer isn't a pause. It's a launch sequence, and every child is a Day One, ready to explore, create, and lead the future.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
