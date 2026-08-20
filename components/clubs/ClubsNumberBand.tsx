"use client";

import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

interface Stat {
  value: string;
  label: string;
}

interface ClubsNumberBandProps {
  stats: Stat[];
  accent?: "teal" | "blue";
}

export function ClubsNumberBand({ stats, accent = "teal" }: ClubsNumberBandProps) {
  const valueColor = accent === "teal" ? "text-[#0FD3C6]" : "text-[#97cfff]";
  return (
    <section className="w-full bg-[#01325D]">
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:px-8 sm:py-14">
        <StaggerContainer className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4" staggerDelay={0.08}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="flex flex-col items-center text-center">
                <span className={`font-serif text-[40px] font-medium leading-none sm:text-[52px] ${valueColor}`}>
                  {s.value}
                </span>
                <span className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white/70 sm:text-sm">
                  {s.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
