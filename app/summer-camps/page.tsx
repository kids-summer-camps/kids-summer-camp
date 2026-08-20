import { ProgramsPageClient } from "./ProgramsPageClient";
import { MissionControlProvider } from "@/components/home/MissionControlSection";
import { MissionControlContent } from "@/components/home/MissionControlSection";
import { RecommendedMissionSection } from "@/components/home/RecommendedMissionSection";
import { ProgramCubesSection } from "@/components/home/ProgramCubesSection";
import { ReckoningSection } from "@/components/home/ReckoningSection";
import { SummerInMotionSection } from "@/components/home/SummerInMotionSection";

const PROGRAMS_HERO_VIDEO = "/videos/programs-landing.mp4";

/**
 * Server component: early preload hint so the hero MP4 competes with other assets
 * as soon as `/summer-camps` starts loading (repeat visits hit HTTP cache).
 */
export default function SummerCampsPage() {
  return (
    <>
      <link
        rel="preload"
        href={PROGRAMS_HERO_VIDEO}
        as="video"
        type="video/mp4"
        fetchPriority="high"
      />
      <ProgramsPageClient />

      <MissionControlProvider>
        <MissionControlContent />

        <RecommendedMissionSection />

        <ProgramCubesSection />

        <ReckoningSection />
      </MissionControlProvider>

      <SummerInMotionSection />
    </>
  );
}
