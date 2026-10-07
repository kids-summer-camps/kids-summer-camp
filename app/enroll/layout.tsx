import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Enroll",
  description:
    "Sign up for Kid Explorer Camps Summer 2026 — programs, schedules, and what to expect when you enroll.",
};

export default function EnrollLayout({ children }: { children: ReactNode }) {
  return children;
}
