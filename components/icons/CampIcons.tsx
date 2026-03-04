// Camp Program Icons - SVG components based on Figma design

export const SaturnIcon = () => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <circle cx="64" cy="64" r="28" fill="white" stroke="#1493E8" strokeWidth="3"/>
    <ellipse cx="64" cy="64" rx="48" ry="16" stroke="white" strokeWidth="3" transform="rotate(-20 64 64)"/>
  </svg>
);

export const AtomIcon = () => (
  <svg viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[118px] h-[118px]">
    <circle cx="59" cy="59" r="12" fill="white"/>
    <ellipse cx="59" cy="59" rx="50" ry="20" stroke="white" strokeWidth="3"/>
    <ellipse cx="59" cy="59" rx="50" ry="20" stroke="white" strokeWidth="3" transform="rotate(60 59 59)"/>
    <ellipse cx="59" cy="59" rx="50" ry="20" stroke="white" strokeWidth="3" transform="rotate(120 59 59)"/>
  </svg>
);

export const FlightIcon = () => (
  <svg viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[106px] h-[106px]">
    <path d="M53 10L88 88H18L53 10Z" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M53 35L65 70H41L53 35Z" fill="white"/>
  </svg>
);

export const BinocularsIcon = () => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
    <circle cx="40" cy="64" r="28" stroke="white" strokeWidth="4"/>
    <circle cx="88" cy="64" r="28" stroke="white" strokeWidth="4"/>
    <path d="M68 64H60" stroke="white" strokeWidth="4"/>
    <path d="M40 36V20H88V36" stroke="white" strokeWidth="4"/>
  </svg>
);

export const ShuttleIcon = () => (
  <svg viewBox="0 0 92 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[92px] h-[74px]">
    <path d="M46 5L86 70H6L46 5Z" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M46 25L60 55H32L46 25Z" fill="white"/>
    <path d="M30 70L20 85H70L60 70" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
  </svg>
);

export const ToxicIcon = () => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
    <circle cx="64" cy="64" r="24" fill="white"/>
    <path d="M64 20V36M64 92V108M20 64H36M92 64H108M32 32L44 44M84 84L96 96M32 96L44 84M84 44L96 32" stroke="white" strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

export const SportsIcon = () => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
    <circle cx="64" cy="64" r="24" stroke="white" strokeWidth="4"/>
    <path d="M64 20V10M64 118V108M20 64H10M118 64H108" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <path d="M36 36L28 28M100 100L92 92M36 92L28 100M100 28L92 36" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="64" cy="64" r="8" fill="white"/>
  </svg>
);

export const TokenSpaceIcon = () => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
    <circle cx="64" cy="64" r="40" stroke="white" strokeWidth="4"/>
    <circle cx="64" cy="64" r="24" stroke="white" strokeWidth="3"/>
    <circle cx="64" cy="64" r="8" fill="white"/>
    <path d="M64 4V20M64 108V124M4 64H20M108 64H124" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// Map of icon names to components for easy lookup
export const campProgramIcons = {
  saturn: SaturnIcon,
  atom: AtomIcon,
  flight: FlightIcon,
  binoculars: BinocularsIcon,
  shuttle: ShuttleIcon,
  toxic: ToxicIcon,
  sports: SportsIcon,
  tokenSpace: TokenSpaceIcon,
};
