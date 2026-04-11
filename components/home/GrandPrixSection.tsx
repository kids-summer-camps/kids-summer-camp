"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { useMissionControl } from "./MissionControlSection";
import { getProgramById } from "@/lib/programs-data";

const MECHANICA = getProgramById("engineering-maker")!;

export function GrandPrixSection() {
  const { matchingPrograms } = useMissionControl();
  const targetProgram = matchingPrograms[0] ?? MECHANICA;

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[740px] bg-[#010a12] overflow-hidden">
      <Image
        src={targetProgram.image}
        alt={`${targetProgram.title} — Ascension`}
        fill
        className="object-cover object-[center_28%] sm:object-center"
        priority={false}
        sizes="100vw"
      />
      {/* Readability: layered scrims + vignette so copy never fights the photo */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,10,20,0.55)_0%,rgba(1,50,93,0.25)_38%,rgba(0,0,0,0.45)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_95%_80%_at_50%_40%,rgba(0,0,0,0.12)_0%,rgba(1,18,40,0.65)_72%,rgba(0,0,0,0.75)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-black/80 via-black/35 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[520px] sm:min-h-[620px] lg:min-h-[740px] flex-col items-center justify-center px-4 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-10 lg:py-24">
        <div className="w-full max-w-[640px]">
          <FadeIn direction="up" delay={0}>
            <div className="rounded-[20px] border border-white/15 bg-black/40 px-6 py-8 shadow-[0_24px_64px_rgba(0,0,0,0.45)] backdrop-blur-md sm:rounded-[28px] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <div className="flex flex-col items-center gap-5 sm:gap-6 text-center">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#0fd3c6]/95">
                  {targetProgram.title}
                </p>
                <h2
                  className="font-mono font-bold text-white text-[28px] leading-[1.15] tracking-tight sm:text-[38px] lg:text-[46px]"
                  style={{
                    textShadow:
                      "0 2px 28px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.8)",
                  }}
                >
                  Ascension
                </h2>
                <p
                  className="font-mono font-normal text-white/95 text-[15px] leading-relaxed sm:text-lg lg:text-[19px] max-w-[520px]"
                  style={{
                    textShadow: "0 1px 16px rgba(0,0,0,0.5)",
                  }}
                >
                  Rise Above, Show what you&apos;ve become
                </p>

                <motion.div
                  className="mt-1 w-full max-sm:max-w-[320px] sm:mt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={targetProgram.href}
                    className="group inline-flex min-h-[48px] w-full items-center justify-center rounded-[12px] bg-[#0FD3C6] px-8 py-3.5 font-mono text-base font-semibold text-white shadow-[0_8px_24px_rgba(15,211,198,0.35)] ring-1 ring-white/15 transition hover:bg-[#0cc0b4] hover:shadow-[0_12px_32px_rgba(15,211,198,0.45)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-[52px] sm:px-10 sm:text-[17px] lg:text-lg"
                  >
                    Explore the Competition
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
