import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { MissionControlProvider } from "@/components/home/MissionControlSection";
import { MissionControlContent } from "@/components/home/MissionControlSection";
import { ProgramCubesSection } from "@/components/home/ProgramCubesSection";
import { RecommendedMissionSection } from "@/components/home/RecommendedMissionSection";
import { ReckoningSection } from "@/components/home/ReckoningSection";
import { SummerInMotionSection } from "@/components/home/SummerInMotionSection";
import { CTASection } from "@/components/home/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { HomeWelcomePopup } from "@/components/home/HomeWelcomePopup";

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomeWelcomePopup />
      
      <HeroSection
        videoSrc="/videos/homepage-header.mp4"
        posterSrc="/images/posters/lack-woman-astronaut-poster.jpg"
      />

      <WelcomeSection />

      <MissionControlProvider>
        <MissionControlContent />
        
        <RecommendedMissionSection />

        <ProgramCubesSection />

        <ReckoningSection />
      </MissionControlProvider>

      <SummerInMotionSection />

      <CTASection />
    </>
  );
}
