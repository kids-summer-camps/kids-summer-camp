import { Metadata } from "next";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "Experience — Our Curriculum",
  description:
    "Experience is our curriculum. Launch Curiosity: every Kid Explorer Camp Lab moves students from Spark to Grit. Philosophy, founder story, DREME 9, and Be · Do · Play.",
  path: "/experience",
  keywords: [
    "camp curriculum",
    "DREME 9",
    "Spark to Grit",
    "Kid Explorer Camp philosophy",
    "summer camp experience",
  ],
});

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
