"use client";

import { FadeIn } from "@/components/animations";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1152px] mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up" delay={0.1}>
            <h1
              className="font-serif font-bold text-[#1493E8] text-3xl sm:text-4xl lg:text-[40px] uppercase leading-tight mb-8"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              The Story of Kid Explorer Camp
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h2
              className="font-serif font-bold text-[#1493E8] text-xl sm:text-2xl lg:text-[32px] uppercase leading-tight mb-12"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              &ldquo;When the world didn&apos;t build it for us, we built it ourselves.&rdquo;
            </h2>
          </FadeIn>

          <FadeIn direction="none" delay={0.3}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="font-mono font-medium text-black text-sm sm:text-base leading-relaxed space-y-4 mb-12">
              <p>
                It all began with a mom — not an executive, not a brand, just a mother who wanted more for her kids.
              </p>
              <p>
                She looked around and saw the gap — the missing space between play and purpose, between
                learning and legacy. There were camps for fun, and camps for structure, but nowhere that
                fused both. Nowhere that told kids, &ldquo;You already have what it takes to change the world.&rdquo;
              </p>
              <p>So she built it.</p>
              <p>
                From kitchen-table ideas to real-world launchpads, Kid Explorer Camp was born — a place where curiosity is currency, imagination is innovation, and every child gets to see themselves as the blueprint for the future.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="none" delay={0.5}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <h2
              className="font-serif font-bold text-[#1493E8] text-xl sm:text-2xl lg:text-[32px] uppercase leading-tight mb-8"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              More Than a Camp — It&apos;s a Culture
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <div className="font-mono font-medium text-black text-sm sm:text-base leading-relaxed space-y-4 mb-12">
              <p>
                Kid Explorer isn&apos;t just where kids come to play — it&apos;s where they level up.
                Where learning feels like discovery, and mistakes are just fuel for mastery.
                It&apos;s a full-circle experience — academic, athletic, creative, and entrepreneurial designed for the child who dreams in 4D and moves like the next big thing.
              </p>
              <p>
                We don&apos;t just teach kids to dream — we give them the tools to engineer those dreams.
                To build. To lead. To fail forward. To find their rhythm in the chaos of creation.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="none" delay={0.8}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          <FadeIn direction="up" delay={0.9}>
            <h2
              className="font-serif font-bold text-[#1493E8] text-xl sm:text-2xl lg:text-[32px] uppercase leading-tight mb-8"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              The Mission
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={1}>
            <div className="font-mono font-medium text-black text-sm sm:text-base leading-relaxed space-y-4 mb-12">
              <p>
                To build what didn&apos;t exist — for our kids, and for every kid after them.
                To create spaces where wonderment runs the show, and where the next generation learns that the future isn&apos;t something that happens to them it&apos;s something they make happen.
              </p>
              <p>
                Because the mom who built this camp wasn&apos;t just solving a problem she was starting a movement.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="none" delay={1.1}>
            <div className="w-full h-px bg-[#d9d9d9] mb-12" />
          </FadeIn>

          <FadeIn direction="up" delay={1.2}>
            <div className="mb-8">
              <h3
                className="font-serif font-bold text-[#01325D] text-lg sm:text-xl lg:text-[24px] uppercase leading-tight mb-2"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Kid Explorer Camp
              </h3>
              <p
                className="font-serif font-normal text-[#01325D] text-base sm:text-lg lg:text-[24px]"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Born from Wonder. Built for What&apos;s Next. 🚀
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
