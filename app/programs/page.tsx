import { ProgramsPageClient } from "./ProgramsPageClient";

const PROGRAMS_HERO_VIDEO = "/videos/programs-landing.mp4";

/**
 * Server component: early preload hint so the hero MP4 competes with other assets
 * as soon as `/programs` starts loading (repeat visits hit HTTP cache).
 */
export default function ProgramsPage() {
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
    </>
  );
}
