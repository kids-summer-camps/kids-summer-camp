import { Metadata } from "next";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { ClubsProgramDetail } from "@/components/clubs";

export const metadata: Metadata = generateMeta({
  title: "InnoGenius (Rising Grades 3 - 5)",
  description:
    "Kid Explorer Clubs InnoGenius, built for bold, curious minds in rising grades 3 to 5. Tech, innovation, and creativity fused into every single day.",
  path: "/programs/innogenius",
  keywords: ["innoGenius", "grades 3-5", "STEM program", "kids coding", "innovation program"],
});

export default function InnoGeniusPage() {
  return (
    <ClubsProgramDetail
      eyebrow="InnoGenius · Rising Grades 3 - 5"
      title="This Is Where Ideas Get Loud"
      description="InnoGenius is built for bold, curious minds who are not afraid to ask big questions and build even bigger answers. This experience fuses tech, innovation, and unstoppable creativity into every single day."
      snapshot={[
        { label: "Band", value: "3rd - 5th" },
        { label: "Grades", value: "Rising 3 - 5" },
        { label: "Hours", value: "After School" },
        { label: "Focus", value: "Tech + Innovation" },
        { label: "Location", value: "Chicago" },
      ]}
      sidebar={{
        sessions: ["School Year", "Summer Launch Labs"],
        ages: "Rising grades 3 through 5",
        transportation: "Citywide bus stops",
      }}
      sections={[
        {
          heading: "Future CEOs and Inventors",
          body: [
            "Whether they are coding their first game, launching a mini start-up, building smart gadgets, or remixing science with art, the InnoGenius crew moves like future CEOs, inventors, and culture-shapers in the making.",
            "We are not babysitting brilliance. We are igniting it. This is next-gen genius in motion.",
          ],
        },
        {
          heading: "Hands-On, High Energy",
          body: [
            "Hands-on experiments, real-world tech tools, creative freedom, and high-energy collabs. Every session is built to move students beyond the basics and into mastery.",
          ],
        },
      ]}
      notes={[
        "Each day fuses coding, design, and creativity into one project-based experience.",
        "Students learn to think like owners and turn ideas into working prototypes.",
        "Small pods keep every explorer supported and challenged.",
      ]}
      accordions={[
        {
          title: "Daily Missions",
          content: (
            <div className="font-mono text-base leading-relaxed text-[#01325D]">
              <p>Every afternoon moves through academic core skill-building, then into hands-on labs where ideas become code, prototypes, and pitch decks.</p>
            </div>
          ),
        },
        {
          title: "Skills",
          content: (
            <ul className="space-y-2 font-mono text-base leading-relaxed text-[#01325D]">
              <li className="ms-6 list-disc">Coding and game design</li>
              <li className="ms-6 list-disc">Creative problem-solving</li>
              <li className="ms-6 list-disc">Mini start-up and pitch skills</li>
              <li className="ms-6 list-disc">Science-meets-art experimentation</li>
            </ul>
          ),
        },
        {
          title: "The Continuum",
          content: (
            <p className="font-mono text-base leading-relaxed text-[#01325D]">
              InnoGenius is a chapter of the same journey. After this band, explorers advance into NextGen Legends, carrying their skills, confidence, and momentum forward without a gap.
            </p>
          ),
        },
        {
          title: "FAQ",
          content: (
            <div className="space-y-5 font-mono text-base leading-relaxed text-[#01325D]">
              <div>
                <p className="font-bold">Is this only for advanced students?</p>
                <p className="text-gray-700">No. InnoGenius supports every learner, meeting each student where they are and launching them forward.</p>
              </div>
              <div>
                <p className="font-bold">Do students need coding experience?</p>
                <p className="text-gray-700">No experience required. We start with the basics and build up through real projects.</p>
              </div>
            </div>
          ),
        },
      ]}
      showcase={{
        eyebrow: "The Continuum",
        title: "The Next Level Awaits",
        description: "After InnoGenius, explorers advance into NextGen Legends, turning bold ideas into real-world impact.",
        ctaLabel: "Meet NextGen Legends",
        ctaHref: "/programs/nextgen-legends",
      }}
    />
  );
}
