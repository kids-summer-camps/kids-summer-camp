import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start your summer plan",
  description:
    "Share your details for Summer 2026 updates, then take the Kid Explorer Club Natural Identity Quiz to see camp paths that fit your child.",
  openGraph: {
    title: "Start your summer plan | Kid Explorer Camps",
    description:
      "Plan Summer 2026 and discover a camp match with the Natural Identity Quiz.",
  },
};

export default function SummerPlanLayout({ children }: { children: React.ReactNode }) {
  return children;
}
