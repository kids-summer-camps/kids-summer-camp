import { Metadata } from "next";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { AfterschoolPageClient } from "./AfterschoolPageClient";

export const metadata: Metadata = generateMeta({
  title: "Afterschool (Tier 0+) ,  The Mission Starts Here",
  description:
    "Kid Explorer Clubs Afterschool ,  a year-round learning journey for Pre-K through 8th grade. Build through the school year, apply it in the summer, advance every year.",
  path: "/afterschool",
  keywords: ["afterschool Chicago", "Tier 0+", "kids enrichment", "year round program", "before and after school"],
});

export default function AfterschoolPage() {
  return <AfterschoolPageClient />;
}
