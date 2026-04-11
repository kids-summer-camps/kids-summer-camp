import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start your summer plan",
  description:
    "Share your details for Summer 2026 updates, then take a short quiz to discover a camp path that fits your child.",
  openGraph: {
    title: "Start your summer plan | Kid Explorer Camps",
    description:
      "Plan Summer 2026 and discover a camp match with our quick pathfinder quiz.",
  },
};

export default function SummerPlanLayout({ children }: { children: React.ReactNode }) {
  return children;
}
