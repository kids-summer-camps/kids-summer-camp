import { Metadata } from "next";
import { CpuChipIcon, TrophyIcon, PaintBrushIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { generateMetadata as generateMeta } from "@/lib/metadata";
import { ClubsPageHero, ClubsNumberBand, ClubsGlassFeature, ClubsCTA } from "@/components/clubs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { PORTAL_SIGNUP_URL } from "@/lib/site";

export const metadata: Metadata = generateMeta({
  title: "Winter Camps ,  Stay Active During the Break",
  description:
    "Kid Explorer Clubs Winter Camps keep the learning journey moving during the 2-3 week winter break with STEM, sports, and creative missions.",
  path: "/winter-camps",
  keywords: ["winter camp Chicago", "winter break program", "winter enrichment", "kids winter activities"],
});

const tracks = [
  {
    icon: CpuChipIcon,
    name: "STEM & Robotics",
    tag: "Innovation",
    desc: "Build, code, and create during the break. Hands-on projects that keep curious minds firing.",
  },
  {
    icon: TrophyIcon,
    name: "Sports & Movement",
    tag: "Movement",
    desc: "Structured, noncompetitive instruction that builds leaders, not just athletes.",
  },
  {
    icon: PaintBrushIcon,
    name: "Creative Arts",
    tag: "Creativity",
    desc: "Express, create, and perform. Identity built through creation.",
  },
  {
    icon: RocketLaunchIcon,
    name: "E-Gaming & Tech",
    tag: "Digital",
    desc: "Play hard, learn harder. Game design, coding, and esports with a mission.",
  },
];

export default function WinterCampsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ClubsPageHero
        eyebrow="Winter Camps · 2-3 Weeks"
        title="Stay Active During"
        highlight="the Break"
        description="The journey does not pause for the holiday break. Winter Camps keep explorers building through STEM, sports, and creative missions."
        ctas={[
          { label: "Sign Up Now", href: PORTAL_SIGNUP_URL },
          { label: "Explore Afterschool", href: "/afterschool", variant: "outline" },
        ]}
      />

      <ClubsNumberBand
        stats={[
          { value: "2-3", label: "Weeks" },
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
                Keep the Momentum
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
        title="No Pause in the Arc"
        description="Winter is a chapter of the same journey. Explorers return to the school year ready to advance, with momentum intact."
        ctaLabel="Sign Up Now"
        ctaHref={PORTAL_SIGNUP_URL}
      />

      <ClubsCTA
        title="Keep the Mission Moving"
        description="Give your explorer a winter break full of STEM, sports, and creativity."
        primaryLabel="Sign Up Now"
        primaryHref={PORTAL_SIGNUP_URL}
        secondaryLabel="Explore Programs"
        secondaryHref="/programs"
      />
    </div>
  );
}
