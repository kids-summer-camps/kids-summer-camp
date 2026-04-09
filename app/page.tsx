import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { MissionControlProvider } from "@/components/home/MissionControlSection";
import { MissionControlContent } from "@/components/home/MissionControlSection";
import { ProgramCubesSection } from "@/components/home/ProgramCubesSection";
import { RecommendedMissionSection } from "@/components/home/RecommendedMissionSection";
import { GrandPrixSection } from "@/components/home/GrandPrixSection";
import { SummerInMotionSection } from "@/components/home/SummerInMotionSection";
import { CTASection } from "@/components/home/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { HomeWelcomePopup } from "@/components/home/HomeWelcomePopup";

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomeWelcomePopup />
      
      {/* Hero - Clean video background */}
      <HeroSection
        videoSrc="/videos/homepage-header.mp4"
        posterSrc="/images/posters/lack-woman-astronaut-poster.jpg"
      />

      {/* Welcome Section - Cyan card overlay with "Welcome to Kid Explorer Camp" */}
      <WelcomeSection />

      {/* Mission Control - Age, schedule & interest selection with matching logic */}
      <MissionControlProvider>
        <MissionControlContent />
        
        {/* Recommended Mission - Dynamic based on selections (MOVED ABOVE CUBES) */}
        <RecommendedMissionSection />

        {/* Program Cubes - 3x3 grid with images and action buttons */}
        <ProgramCubesSection />
      </MissionControlProvider>

      {/* Grand Prix Section */}
      <GrandPrixSection />

      {/* A Summer in Motion */}
      <SummerInMotionSection />

      {/* Call to Action */}
      <CTASection />
    </>
  );
}
