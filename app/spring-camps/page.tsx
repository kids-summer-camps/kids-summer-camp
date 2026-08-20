import { Metadata } from "next";
import { RocketLaunchIcon, TrophyIcon, PaintBrushIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { ClubsPageHero, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { PORTAL_SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = generateMeta({
  title: "Spring Camps ,  A Week of Exploration",
  description:
    "Kid Explorer Clubs Spring Camps pack a week of STEM, sports, and creative missions into each spring break window.",
  path: "/spring-camps",
  keywords: ["spring camp Chicago", "spring break program", "spring enrichment", "kids spring activities"],
});

const tracks = [
  {
    icon: RocketLaunchIcon,
    name: "STEM & Innovation",
    tag: "Innovation",
    desc: "Build bridges, break codes, and launch rockets in a week of hands-on discovery.",
  },
  {
    icon: TrophyIcon,
    name: "Sports & Movement",
    tag: "Movement",
    desc: "Structured, noncompetitive instruction that builds leaders, not just athletes.",
  },
  {
    icon: CurrencyDollarIcon,
    name: "Entrepreneurship",
    tag: "Business",
    desc: "Dream it, design it, budget it, sell it. Young minds think like owners.",
  },
  {
    icon: PaintBrushIcon,
    name: "Creative Arts",
    tag: "Creativity",
    desc: "Express, create, and perform. Identity built through creation.",
  },
];

export default function SpringCampsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Spring Camps · One Week"
        title="A Week of"
        highlight="Exploration"
        description="One focused week of missions during each spring break. A burst of hands-on STEM, movement, and creativity that keeps momentum strong."
        ctas={[
          { label: "Sign Up Now", href: PORTAL_SIGNUP_URL },
          { label: "Explore Summer Camps", href: "/summer-camps", variant: "outline" },
        ]}
      />

      <ClubsNumberBand
        stats={[
          { value: "1", label: "Week" },
          { value: "4", label: "Mission Tracks" },
          { value: "Pre-K - 8", label: "Grades Served" },
          { value: "Chicago", label: "Location" },
        ]}
      />

      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <FadeIn direction="up">
            <div className="mb-12 text-center sm:mb-16">
              <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0FD3C6]">
                Mission Tracks
              </span>
              <h2 className="font-serif text-[30px] font-medium leading-tight text-[#01325D] sm:text-[40px] lg:text-[48px]">
                A Burst of Momentum
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
            {tracks.map((t) => (
              <StaggerItem key={t.name}>
                <div className="group flex h-full flex-col items-center rounded-[28px] border border-[#1493E8]/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1493E8]/10 text-[#1493E8] transition-colors duration-300 group-hover:bg-[#01325D] group-hover:text-[#0FD3C6]">
                    <t.icon className="h-7 w-7" />
                  </span>
                  <span className="mt-4 rounded-full bg-[#0FD3C6]/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#01325D]">
                    {t.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-[22px] font-medium text-[#01325D]">{t.name}</h3>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-gray-600">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ClubsGlassFeature
        eyebrow="The Journey Continues"
        title="Spring Into Summer"
        description="Spring break is a bridge into summer. Explorers carry their energy straight into Summer Missions without losing a step."
        ctaLabel="Explore Summer Camps"
        ctaHref="/summer-camps"
      />

      <ClubsCTA
        title="Make the Most of the Break"
        description="One week of STEM, movement, and creativity, powered by purpose."
        primaryLabel="Sign Up Now"
        primaryHref={PORTAL_SIGNUP_URL}
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
