import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { MissionControlSection } from "@/components/home/MissionControlSection";
import { ProgramCubesSection } from "@/components/home/ProgramCubesSection";
import { RecommendedMissionSection } from "@/components/home/RecommendedMissionSection";
import { GrandPrixSection } from "@/components/home/GrandPrixSection";
import { SummerInMotionSection } from "@/components/home/SummerInMotionSection";
import { DemoDaySection } from "@/components/home/DemoDaySection";
import { CTASection } from "@/components/home/CTASection";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      
      {/* Hero - Clean video background */}
      <HeroSection
        videoSrc="/videos/lack%20woman%20astronaut.MP4"
        posterSrc="/images/posters/lack-woman-astronaut-poster.jpg"
      />

      {/* Welcome Section - Cyan card overlay */}
      <WelcomeSection />

      {/* Mission Control - Age & interest selection */}
      <MissionControlSection />

      {/* Program Cubes - 3x3 grid */}
      <ProgramCubesSection />

      {/* Recommended Mission */}
      <RecommendedMissionSection />

      {/* Grand Prix Section */}
      <GrandPrixSection />

      {/* A Summer in Motion */}
      <SummerInMotionSection />

      {/* Demo Day Section */}
      <DemoDaySection />

      {/* Call to Action */}
      <CTASection />
    </>
  );
}
