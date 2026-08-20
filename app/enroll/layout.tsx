import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Enroll",
  description:
    "Enroll with Kid Explorer Clubs ,  programs, schedules, and what to expect when you join.",
};

export default function EnrollLayout({ children }: { children: ReactNode }) {
  return children;
}
