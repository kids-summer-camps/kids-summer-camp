import { ClubsHomeHero } from "@/components/home/ClubsHomeHero";
import { HomeJourneySection } from "@/components/home/HomeJourneySection";
import { HomeProgramsSection } from "@/components/home/HomeProgramsSection";
import { HomeLabsSection } from "@/components/home/HomeLabsSection";
import { HomeExperienceSection } from "@/components/home/HomeExperienceSection";
import { HomeTestimonialsSection } from "@/components/home/HomeTestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { HomeWelcomePopup } from "@/components/home/HomeWelcomePopup";

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomeWelcomePopup />

      <ClubsHomeHero />

      <HomeJourneySection />

      <HomeProgramsSection />

      <HomeLabsSection />

      <HomeExperienceSection />

      <HomeTestimonialsSection />

      <CTASection />
    </>
  );
}
