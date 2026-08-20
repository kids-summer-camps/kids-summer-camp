import { Metadata } from "next";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "Transportation",
  description:
    "Explorer Express: Kid Voyage Services. Licensed, supervised bus transportation for Kid Explorer Clubs families, included for schools within a 10-mile radius of host sites.",
  path: "/transportation",
  keywords: [
    "camp transportation",
    "school bus service",
    "Chicago bus service",
    "camp pick up and drop off",
    "Kid Explorer Clubs transportation",
  ],
});

export default function TransportationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
