"use client";

import React, { ReactNode } from "react";
import { FadeIn } from "@/components/animations";

interface ClubsSectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function ClubsSectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: ClubsSectionHeaderProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <FadeIn direction="up">
      <div className={`mb-10 max-w-[720px] sm:mb-14 ${alignCls}`}>
        {eyebrow && (
          <span
            className={`mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] ${
              light ? "text-[#0FD3C6]" : "text-[#1493E8]"
            }`}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={`font-serif text-[28px] font-medium leading-tight sm:text-[38px] lg:text-[44px] ${
            light ? "text-white" : "text-[#01325D]"
          }`}
          style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 font-mono text-base leading-relaxed sm:text-lg ${
              light ? "text-white/75" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}

interface ClubsCardProps {
  children: ReactNode;
  className?: string;
}

export function ClubsCard({ children, className = "" }: ClubsCardProps) {
  return (
    <div
      className={`rounded-[28px] border border-[#1493E8]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
