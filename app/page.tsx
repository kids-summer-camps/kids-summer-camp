import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { CampProgramGrid } from "@/components/home/CampProgramGrid";
import { BestCampSection } from "@/components/home/BestCampSection";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      {/* Hero - Video or Image background, no text overlay */}
      <HeroSection
        videoSrc="/videos/lack%20woman%20astronaut.MP4"
        posterSrc="/images/posters/lack-woman-astronaut-poster.jpg"
      />

      {/* Blue Mission Section */}
      <MissionSection />

      {/* Camp Program Grid - 8 cards */}
      <CampProgramGrid />

      {/* Best Camp Section with 3 program cards */}
      <BestCampSection />
    </>
  );
}
