"use client";

import React from "react";
import { GiftIcon, UsersIcon, RocketLaunchIcon, WrenchScrewdriverIcon, CreditCardIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ClubsPageHero, ClubsEditorial, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const benefits = [
  {
    icon: GiftIcon,
    title: "Monthly Momentum Kit",
    desc: "A curated drop crafted for clarity and growth. Parent growth guides, family ritual cards, affirmations, and micro-masterclasses.",
  },
  {
    icon: UsersIcon,
    title: "Parent Studio Sessions",
    desc: "Live and on-demand conversations with experts across wellness, leadership, and modern parenting. Labs, not lectures.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Legacy Builder Access",
    desc: "Early access to Young Inventors League and Future CEO Labs, monthly entrepreneurship missions, and Parent-Child CoLabs.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "The Studio Concierge",
    desc: "Priority enrollment, a direct scheduling line, and 10% off additional purchases and pop-ups.",
  },
  {
    icon: CreditCardIcon,
    title: "Rewards Portfolio",
    desc: "Earn 2X Impact Credits for every dollar, redeemable for tuition credits, coaching, seasonal events, and exclusive drops.",
  },
];

const founderBonuses = [
  "Founders Welcome Kit",
  "Lifetime Locked-In Rate",
  "Name on the Founders Wall",
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Membership"
        title="Welcome to"
        highlight="The Atelier"
        description="A private, yearlong membership for families committed to both Summer and Academic Year programs. Not a rewards program, a studio for family legacy."
        ctas={[{ label: "Become a Founding Member", href: "/enroll" }]}
      />

      <ClubsEditorial
        eyebrow="From the Desk of the Founder"
        title="Where Family Growth Becomes"
        highlight="Legacy"
        body="Inspired by an atelier, a place where artists and makers refine their craft, this membership supports not just the child's journey but the family's evolution. When parents thrive, children rise. When families grow with clarity and purpose, everything changes."
      />

      <ClubsNumberBand
        stats={[
          { value: "150", label: "Founding Families" },
          { value: "$47", label: "Monthly" },
          { value: "$444", label: "Annual" },
          { value: "5", label: "Benefits" },
        ]}
      />

      {/* Benefits - designed showcase */}
      <section className="w-full bg-[#f7fbff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-14 text-center">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1493E8]">
                What Awaits Inside
              </span>
              <h2 className="mt-3 font-serif text-[32px] font-medium leading-tight text-[#01325D] sm:text-[42px] lg:text-[50px]">
                Crafted for Your Family
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-5" staggerDelay={0.07}>
            {benefits.map((b, i) => (
              <StaggerItem key={b.title}>
                <div className="group flex flex-col gap-5 rounded-[26px] border border-[#1493E8]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center sm:gap-8 sm:p-9">
                  <div className="flex items-center gap-5 sm:w-[280px] sm:shrink-0">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] transition-colors duration-300 group-hover:bg-[#1493E8] group-hover:text-white">
                      <b.icon className="h-7 w-7" />
                    </span>
                    <div>
                      <span className="font-serif text-[40px] font-medium leading-none text-[#0FD3C6]/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-[22px] font-medium leading-tight text-[#01325D]">
                        {b.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-mono text-sm leading-relaxed text-gray-600 sm:text-base">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClubsGlassFeature
        eyebrow="Limited to 150 Families"
        title="Founding Member, Forever"
        description="Secure your family's place with lifetime benefits, a founders welcome kit, and a permanent name on the Founders Wall at every Kid Explorer Club campus."
        ctaLabel="Become a Founding Member"
        ctaHref="/enroll"
      >
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {founderBonuses.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0FD3C6] text-[#01325D]">
                <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="font-mono text-sm font-medium text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </ClubsGlassFeature>

      <ClubsCTA
        title="Parent With Purpose"
        description="Join a limited community of families building a lasting legacy, together."
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
