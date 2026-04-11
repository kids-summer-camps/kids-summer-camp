"use client";

import { useEffect, useRef, useState } from "react";
import { ProgramCard } from "@/components/programs/ProgramDetail";
import { programs } from "@/lib/programs-data";
import { FadeIn } from "@/components/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProgramsPageClient() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const mutedRef = useRef(false);
  /** false = try sound first; set true only if autoplay with sound fails */
  const [muted, setMuted] = useState(false);

  mutedRef.current = muted;

  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;

    const attemptAutoplayPreferSound = async () => {
      try {
        v.muted = false;
        await v.play();
        setMuted(false);
        mutedRef.current = false;
      } catch {
        v.muted = true;
        setMuted(true);
        mutedRef.current = true;
        await v.play().catch(() => {});
      }
    };

    void attemptAutoplayPreferSound();
    v.addEventListener("canplay", attemptAutoplayPreferSound, { once: true });

    return () => {
      v.removeEventListener("canplay", attemptAutoplayPreferSound);
    };
  }, []);

  useEffect(() => {
    const v = heroVideoRef.current;
    const section = heroSectionRef.current;
    if (!v || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.muted = mutedRef.current;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const ctaPrimaryClass =
    "inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-[#0FD3C6] px-5 font-mono text-[14px] font-bold text-[#01325D] shadow-sm transition-all hover:bg-[#0DC4B8] active:scale-[0.98] sm:min-w-[200px] sm:flex-none sm:px-8 sm:text-[15px]";
  const ctaSecondaryClass =
    "inline-flex min-h-12 flex-1 items-center justify-center rounded-full border-2 border-[#01325D]/25 bg-white px-5 font-mono text-[14px] font-bold text-[#01325D] shadow-sm transition-all hover:border-[#01325D]/40 hover:bg-[#f8fafc] active:scale-[0.98] sm:min-w-[200px] sm:flex-none sm:px-8 sm:text-[15px]";

  return (
    <div className="min-h-screen w-full max-w-none overflow-x-hidden bg-white">
      <section
        ref={heroSectionRef}
        className="relative w-full bg-linear-to-b from-[#01325D] via-[#0a2544] to-[#F8FAFE] pb-2 pt-4 md:bg-black md:pb-0 md:pt-0"
      >
        {/* Video: mobile = framed 16:9 card + object-contain (in-video text stays readable); md+ = full-bleed cover */}
        <div
          className="relative mx-auto aspect-video w-[calc(100%-2rem)] max-w-xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15
            md:mx-0 md:aspect-auto md:h-[min(85vh,900px)] md:min-h-[500px] md:w-full md:max-w-none md:rounded-none md:ring-0 md:shadow-none"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 overflow-hidden bg-black"
          >
            <video
              ref={heroVideoRef}
              autoPlay
              muted={muted}
              loop
              playsInline
              preload="auto"
              poster="/images/posters/white-kid-space-poster.jpg"
              className="absolute inset-0 block h-full w-full object-contain object-center md:object-cover"
              controlsList="nodownload"
            >
              <source src="/videos/programs-landing.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {muted && (
            <button
              type="button"
              onClick={() => {
                setMuted(false);
                const el = heroVideoRef.current;
                if (el) {
                  el.muted = false;
                  mutedRef.current = false;
                  el.play().catch(() => {});
                }
              }}
              className="absolute right-3 top-3 z-20 rounded-full border border-white/35 bg-black/45 px-3 py-1.5 font-mono text-[11px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/60 md:right-6 md:top-[calc(4.75rem+env(safe-area-inset-top))] md:text-xs"
            >
              Tap for sound
            </button>
          )}

          {/* Desktop-only bottom gradient + overlay CTAs */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[46%] max-h-[360px] bg-linear-to-t from-[#01325D]/90 to-transparent md:block"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden justify-end pb-10 pt-24 md:flex md:px-10 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="pointer-events-auto flex w-full max-w-2xl flex-row justify-center gap-4"
            >
              <Link href="#programs" className={ctaPrimaryClass}>
                Explore Programs
              </Link>
              <Link href="/enroll" className={`${ctaSecondaryClass} border-white/45 bg-black/20 text-white backdrop-blur-sm hover:bg-black/35`}>
                Enroll Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile-only: CTAs on light surface under the card (no overlap on the video) */}
        <div className="relative z-10 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-5 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto flex max-w-xl flex-row gap-3"
          >
            <Link href="#programs" className={ctaPrimaryClass}>
              Explore Programs
            </Link>
            <Link href="/enroll" className={ctaSecondaryClass}>
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#01325D]">
        <div className="mx-auto max-w-[1200px] px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-0 sm:divide-x sm:divide-white/20">
            {[
              { label: "Programs", value: "8" },
              { label: "Ages", value: "3 – 14" },
              { label: "Camp Hours", value: "9 AM – 6 PM" },
              { label: "Location", value: "Chicago" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-6 sm:px-10">
                <span className="font-mono text-xl font-bold text-[#0FD3C6] sm:text-2xl">{stat.value}</span>
                <span className="font-mono text-xs text-white/70 sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section id="programs" className="scroll-mt-20 bg-[#F8FAFE] pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-12 pt-16 text-center sm:mb-16 sm:pt-20 lg:pt-24">
              <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
                Explore by Program
              </span>
              <h2 className="font-mono text-[24px] font-bold leading-tight text-[#01325D] sm:text-[30px] lg:text-[36px]">
                Find the Right Fit
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-8">
            {programs.map((program, index) => (
              <FadeIn key={program.id} direction="up" delay={index * 0.08}>
                <ProgramCard program={program} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
