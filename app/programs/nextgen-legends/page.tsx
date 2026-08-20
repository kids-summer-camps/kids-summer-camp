import { Metadata } from "next";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { ClubsProgramDetail } from "@/components/clubs";

export const metadata: Metadata = generateMeta({
  title: "NextGen Legends (Rising Grades 6 - 8)",
  description:
    "Kid Explorer Clubs NextGen Legends, for rising 6th to 8th graders ready to turn bold ideas into real-world impact through digital startups and smart tech.",
  path: "/programs/nextgen-legends",
  keywords: ["nextgen legends", "grades 6-8", "entrepreneurship program", "digital startups", "leadership program"],
});

export default function NextGenLegendsPage() {
  return (
    <ClubsProgramDetail
      eyebrow="NextGen Legends · Rising Grades 6 - 8"
      title="This Is Where Future Icons Level Up"
      description="NextGen Legends is built for rising 6th to 8th graders who are ready to turn their boldest ideas into real-world impact. From launching digital startups to engineering smart tech and expressing themselves through music, design, and movement, this crew is rewriting the rules of what is possible."
      snapshot={[
        { label: "Band", value: "6th - 8th" },
        { label: "Grades", value: "Rising 6 - 8" },
        { label: "Hours", value: "After School" },
        { label: "Focus", value: "Startups + Leadership" },
        { label: "Location", value: "Chicago" },
      ]}
      sidebar={{
        sessions: ["School Year", "Summer Launch Labs"],
        ages: "Rising grades 6 through 8",
        transportation: "Citywide bus stops",
      }}
      sections={[
        {
          heading: "Leading, Building, Shaping",
          body: [
            "With hands-on challenges, creative labs, and entrepreneur missions, they are not just learning, they are leading, building, and shaping what is next.",
            "Every session pushes them to think sharper, move smarter, and create with purpose. If they have vision, drive, and a voice that cannot be boxed in, this is their arena.",
          ],
        },
        {
          heading: "Real-World Impact",
          body: [
            "Digital startups, smart tech, music, design, and movement. Students take ideas from concept to launch and learn what it means to guide with vision.",
          ],
        },
      ]}
      notes={[
        "Students build real portfolios and present their work like founders.",
        "Entrepreneur missions pair creativity with accountability and execution.",
        "Leadership development is woven into every challenge.",
      ]}
      accordions={[
        {
          title: "Daily Missions",
          content: (
            <div className="font-mono text-base leading-relaxed text-[#01325D]">
              <p>Each session moves through academic mastery, then into startup labs, creative builds, and entrepreneur missions that sharpen strategy and execution.</p>
            </div>
          ),
        },
        {
          title: "Skills",
          content: (
            <ul className="space-y-2 font-mono text-base leading-relaxed text-[#01325D]">
              <li className="ms-6 list-disc">Digital startup and product design</li>
              <li className="ms-6 list-disc">Leadership and team communication</li>
              <li className="ms-6 list-disc">Creative expression across music and design</li>
              <li className="ms-6 list-disc">Real-world execution and accountability</li>
            </ul>
          ),
        },
        {
          title: "The Continuum",
          content: (
            <p className="font-mono text-base leading-relaxed text-[#01325D]">
              NextGen Legends is the final band before College Readiness. Explorers carry their identity, portfolio, and momentum straight into the next stage of the journey.
            </p>
          ),
        },
        {
          title: "FAQ",
          content: (
            <div className="space-y-5 font-mono text-base leading-relaxed text-[#01325D]">
              <div>
                <p className="font-bold">What makes this different from other middle school programs?</p>
                <p className="text-gray-700">NextGen Legends pairs real startup missions with leadership development, so students build actual products while learning to lead.</p>
              </div>
              <div>
                <p className="font-bold">What comes after this band?</p>
                <p className="text-gray-700">Explorers advance into our College Readiness Prep Academy, carrying their momentum forward.</p>
              </div>
            </div>
          ),
        },
      ]}
      showcase={{
        eyebrow: "Mission: Future",
        title: "Onward to College Readiness",
        description: "After NextGen Legends, explorers advance into our College Readiness Prep Academy, carrying their identity and momentum forward.",
        ctaLabel: "Explore College Readiness",
        ctaHref: "/college-readiness",
      }}
    />
  );
}
