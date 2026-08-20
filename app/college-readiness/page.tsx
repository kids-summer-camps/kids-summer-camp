import { Metadata } from "next";
import { AcademicCapIcon, RocketLaunchIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { ClubsPageHero, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { PORTAL_SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = generateMeta({
  title: "College Readiness Prep ,  Mission: Future",
  description:
    "Kid Explorer Clubs College Readiness Prep Academy for grades 8-12. The next stage of the journey toward future readiness.",
  path: "/college-readiness",
  keywords: ["college prep Chicago", "college readiness", "grades 8-12", "high school prep", "future readiness"],
});

const pillars = [
  {
    icon: AcademicCapIcon,
    name: "Academic Mastery",
    tag: "Discipline",
    desc: "Study strategy and the skills that unlock competitive high schools and colleges.",
  },
  {
    icon: RocketLaunchIcon,
    name: "Leadership",
    tag: "Vision",
    desc: "Own your voice, lead with vision, and build the identity of a future changemaker.",
  },
  {
    icon: ChartBarIcon,
    name: "Real-World Readiness",
    tag: "Execution",
    desc: "From college essays to interviews, turn preparation into confident performance.",
  },
];

export default function CollegeReadinessPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="College Readiness · Grades 8-12"
        title="Mission:"
        highlight="Future"
        description="The next stage of the Kid Explorer Clubs journey. As the journey advances, so does the mission, preparing explorers to lead from who they are."
        ctas={[
          { label: "Sign Up Now", href: PORTAL_SIGNUP_URL },
          { label: "Explore the Journey", href: "/afterschool", variant: "outline" },
        ]}
      />

      <ClubsNumberBand
        stats={[
          { value: "8-12", label: "Grades" },
          { value: "3", label: "Pillars" },
          { value: "1", label: "Continuous Journey" },
          { value: "Chicago", label: "Location" },
        ]}
      />

      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-12 text-center sm:mb-16">
              <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
                What&apos;s Ahead
              </span>
              <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[48px]">
                Built for the Next Stage
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {pillars.map((p) => (
              <StaggerItem key={p.name}>
                <div className="group flex h-full flex-col rounded-[28px] border border-[#1493E8]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] transition-colors duration-300 group-hover:bg-[#01325D] group-hover:text-[#0FD3C6]">
                      <p.icon className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-[#0FD3C6]/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#01325D]">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-[24px] font-medium text-[#01325D]">{p.name}</h3>
                  <p className="mt-3 flex-1 font-mono text-sm leading-relaxed text-gray-600">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClubsGlassFeature
        eyebrow="The Full Arc"
        title="The Child Never Leaves the Club"
        description="From Prelude through College Readiness and beyond, the journey is continuous. Growth compounds because the arc never breaks."
        ctaLabel="Explore the Journey"
        ctaHref="/afterschool"
      />

      <ClubsCTA
        title="Prepare for What Is Next"
        description="Academic mastery, leadership, and real-world readiness, built on the journey so far."
        primaryLabel="Sign Up Now"
        primaryHref={PORTAL_SIGNUP_URL}
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
