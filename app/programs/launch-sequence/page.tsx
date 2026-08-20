import { Metadata } from "next";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { ClubsProgramDetail } from "@/components/clubs";

export const metadata: Metadata = generateMeta({
  title: "Launch Sequence (Pre-K - 2nd Grade)",
  description:
    "Kid Explorer Clubs Launch Sequence, a year-round model starting with Pre-K. One seamless system, all year, with no gaps and no guesswork.",
  path: "/programs/launch-sequence",
  keywords: ["pre-k program", "kindergarten program", "year round model", "after school clubs", "early education"],
});

export default function LaunchSequencePage() {
  return (
    <ClubsProgramDetail
      eyebrow="Launch Sequence · Pre-K - 2nd Grade"
      title="One Seamless System, All Year"
      description="The first and only year-round model starting with Pre-K, full of discovery, movement, and momentum. Families of half-day Pre-K add before and after school for full coverage that inspires. Grades K-2 level up with after-school clubs and roll right into Summer Launch Labs."
      snapshot={[
        { label: "Band", value: "Pre-K - 2" },
        { label: "Grades", value: "Pre-K - 2nd" },
        { label: "Hours", value: "Before & After" },
        { label: "Model", value: "Year-Round" },
        { label: "Location", value: "Chicago" },
      ]}
      sidebar={{
        sessions: ["Before School", "After School", "Summer Launch Labs"],
        ages: "Pre-K through 2nd grade",
        transportation: "Citywide bus stops",
      }}
      sections={[
        {
          heading: "Built for Working Families",
          body: [
            "Half-day Pre-K? Add before and after school for full coverage that inspires. There are no gaps and no guesswork, just one seamless system that carries your child all year.",
            "This is early education reimagined, with tuition grants available for qualifying families.",
          ],
        },
        {
          heading: "Packed With Purpose",
          body: [
            "Every day blends academic core skill-building, creative play, and movement. Young explorers build confidence, communication, and early problem-solving through hands-on discovery.",
          ],
        },
      ]}
      notes={[
        "Discovery, movement, and momentum are built into every day.",
        "After-school clubs roll directly into Summer Launch Labs, so progress never pauses.",
        "Tuition grants are available for qualifying families.",
      ]}
      accordions={[
        {
          title: "Daily Missions",
          content: (
            <div className="font-mono text-base leading-relaxed text-[#01325D]">
              <p>A typical day blends guided play, early academics, movement, and creative projects, with quiet moments for reflection woven in.</p>
            </div>
          ),
        },
        {
          title: "Skills",
          content: (
            <ul className="space-y-2 font-mono text-base leading-relaxed text-[#01325D]">
              <li className="ms-6 list-disc">Early literacy and language development</li>
              <li className="ms-6 list-disc">Number sense and early math</li>
              <li className="ms-6 list-disc">Confidence and communication</li>
              <li className="ms-6 list-disc">Creative expression and problem-solving</li>
            </ul>
          ),
        },
        {
          title: "The Continuum",
          content: (
            <p className="font-mono text-base leading-relaxed text-[#01325D]">
              Launch Sequence is not a reset. It is the start of a continuous journey. After summer, students transition seamlessly into the next grade band, so progress never pauses and momentum keeps building.
            </p>
          ),
        },
        {
          title: "FAQ",
          content: (
            <div className="space-y-5 font-mono text-base leading-relaxed text-[#01325D]">
              <div>
                <p className="font-bold">What ages are included?</p>
                <p className="text-gray-700">Pre-K through 2nd grade, with before and after school coverage for half-day Pre-K families.</p>
              </div>
              <div>
                <p className="font-bold">How does the year-round model work?</p>
                <p className="text-gray-700">After-school clubs run through the school year and roll right into Summer Launch Labs, so there are no gaps between seasons.</p>
              </div>
            </div>
          ),
        },
      ]}
      showcase={{
        eyebrow: "The Continuum",
        title: "From Launch to Legend",
        description: "After Launch Sequence, explorers advance into InnoGenius, carrying their skills and momentum forward without a gap.",
        ctaLabel: "Meet InnoGenius",
        ctaHref: "/programs/innogenius",
      }}
    />
  );
}
