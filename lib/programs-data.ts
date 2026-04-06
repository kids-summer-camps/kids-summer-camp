// Shared programs data for reuse across components
// This file centralizes all camp program information to enable:
// 1. Consistent data across all sections
// 2. Mission matching logic based on age, schedule, and interests
// 3. Easy maintenance and updates

export interface Program {
  id: string;
  title: string;
  ages: string;
  ageRanges: string[]; // For matching logic (e.g., ["Age 6-8", "Age 8-11"])
  gradeRange?: string; // e.g., "Rising Grades 4-7"
  subtitle: string;
  description: string;
  focus: string[];
  tagline: string;
  href: string;
  color: string;
  image: string; // Image URL instead of emoji
  interests: string[]; // For matching with selected interests
  schedule: string[]; // Available schedules (e.g., ["Full Day", "Half Day"])
  category: string; // Program category
}

export const ageGroups = [
  "Pre-K",
  "Kindergarten",
  "Age 6-8",
  "Age 8-11",
  "Age 11-13+",
] as const;

export const interests = [
  "Building & Engineering",
  "Robots & Technology",
  "Video Games",
  "Science",
  "Sports",
  "Leadership",
  "Exploration",
  "Entrepreneurship",
  "Gaming & Esports",
  "STEM",
] as const;

export const schedules = [
  "Full Day (9 AM - 3 PM)",
  "Half Day Morning (9 AM - 12 PM)",
  "Half Day Afternoon (12 PM - 3 PM)",
  "Extended Day (8 AM - 5 PM)",
] as const;

// Brand Colors - Kid Explorer Brand Palette
// Primary Blue: #1493E8
// Cyan/Teal: #0FD3C6
// Navy Text: #01325D
// Using complementary shades from the brand family

export const programs: Program[] = [
  {
    id: "lil-launchers",
    title: "Prelude™",
    ages: "3 – 4 years",
    ageRanges: ["Pre-K"],
    gradeRange: "Pre-K 3 & Pre-K 4",
    subtitle: "Welcome to Kid Explorer Camp — where the future isn't just imagined, it's built.",
    description: "At Prelude™, our youngest explorers discover the world through guided play, creativity, and movement. Children build confidence, communication, and early problem-solving skills through hands-on activities, storytelling, and exploration.",
    focus: ["Guided play", "Discovery labs", "Swim development", "Early academics", "Creative exploration"],
    tagline: "This is where future visionaries take their first step.",
    href: "/programs/lil-launchers",
    color: "#1493E8",
    image: "/images/programs/prelude-hero.png",
    interests: ["Exploration", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Morning (9 AM - 12 PM)", "Extended Day (9 AM - 6 PM)"],
    category: "Early Childhood",
  },
  {
    id: "first-flight",
    title: "Launchpad™",
    ages: "Rising K & 1st",
    ageRanges: ["Kindergarten", "Age 6-8"],
    gradeRange: "Rising Grades K-1",
    subtitle: "Welcome to Kid Explorer Camp — where small steps turn into giant leaps.",
    description: "This is the Launchpad™ for young dreamers ready to soar with curiosity. Every day is packed with creative projects, movement challenges, and discovery-driven play, building confidence and imagination along the way. Friendships form fast, creativity sparks faster, and independence grows at supersonic speed.",
    focus: ["STEM exploration", "Creative building", "Swimming", "Academic sessions", "Confidence building"],
    tagline: "Lift off into a summer where imagination takes flight.",
    href: "/programs/first-flight",
    color: "#0FD3C6",
    image: "/images/programs/launchpad-hero.png",
    interests: ["Exploration", "STEM", "Sports"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (9 AM - 6 PM)"],
    category: "Early Elementary",
  },
  {
    id: "cosmic-curiosity",
    title: "Zero™",
    ages: "Rising 1st – 2nd",
    ageRanges: ["Age 6-8"],
    gradeRange: "Rising Grades 1-2",
    subtitle: "From zero to everything.",
    description: "At Kid Explorer ZERO→EVERYTHING™, students begin learning how ideas become real inventions. Campers explore STEM concepts through hands-on building, creative challenges, and collaborative problem solving.",
    focus: ["STEM concepts", "Innovation labs", "Swimming", "Academic sessions", "Foundational thinking"],
    tagline: "Wonder is the superpower.",
    href: "/programs/cosmic-curiosity",
    color: "#1284D1",
    image: "/images/programs/zero-hero.png",
    interests: ["Science", "Exploration", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (9 AM - 6 PM)"],
    category: "Elementary",
  },
  {
    id: "the-blueprint",
    title: "IdeaForge™",
    ages: "Rising 4th – 8th",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-8",
    subtitle: "Where ideas become products and businesses.",
    description: "At IdeaForge™, science, exploration, and imagination take center stage. Campers dive into hands-on experiments, creative investigations, and mind-expanding adventures, all while building teamwork, problem-solving, and a love for discovery.",
    focus: ["Entrepreneurship", "Prototyping", "Brand building", "Venture pitch", "Innovation labs"],
    tagline: "They don't just imagine the future — they design it.",
    href: "/programs/the-blueprint",
    color: "#10B8A8",
    image: "/images/programs/ideaforge-hero.png",
    interests: ["Building & Engineering", "STEM", "Entrepreneurship"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (9 AM - 6 PM)"],
    category: "Innovation & Entrepreneurship",
  },
  {
    id: "power-play",
    title: "Apex Athletics™",
    ages: "Rising K – 7th",
    ageRanges: ["Kindergarten", "Age 6-8", "Age 8-11", "Age 11-13+"],
    gradeRange: "Kindergarten – Grade 7",
    subtitle: "Where strength is built, grit is tested, and confidence takes shape.",
    description: "At Apex Athletics™ Academy, students develop athletic ability through structured sports training and team challenges. Campers build endurance, coordination, and confidence while learning teamwork, sportsmanship, and leadership.",
    focus: ["Sports training", "Team challenges", "Swimming", "Academic sessions", "Physical & mental growth"],
    tagline: "Run the field. Own the game. Lead the pack.",
    href: "/programs/power-play",
    color: "#0DC4B8",
    image: "/images/programs/apex-hero.png",
    interests: ["Sports", "Leadership"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Morning (9 AM - 12 PM)", "Extended Day (9 AM - 6 PM)"],
    category: "Sports",
  },
  {
    id: "vision-architect",
    title: "Vision Architect",
    ages: "Rising 4th – 7th",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-7",
    subtitle: "Where vision meets action.",
    description: "Campers become mini moguls and creative disruptors. Through hands-on projects, pitch challenges, and innovation labs, they learn how to turn ideas into impact. Skills in leadership, collaboration, and problem-solving make every camper a Day One in their own story.",
    focus: ["Entrepreneurship", "Pitch challenges", "Innovation labs", "Leadership skills", "Creative disruption"],
    tagline: "Dream it. Build it. Own it.",
    href: "/programs/vision-architect",
    color: "#1A7BC8", // Deep Blue (brand family)
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
    interests: ["Leadership", "Entrepreneurship", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Leadership",
  },
  // NEW PROGRAMS - Using brand family colors
  {
    id: "robotics-maker",
    title: "ROBOX™",
    ages: "Rising 4th – 8th",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-8",
    subtitle: "Build bots. Code dreams. Engineer the future.",
    description: "At ROBOX™, students go beyond basic building and step into real-world engineering. Campers design intelligent machines, build functional prototypes, and test their creations through dynamic challenges that demand creativity, teamwork, and critical thinking.",
    focus: ["Robotics labs", "Functional prototypes", "Dynamic challenges", "Outdoor movement", "Academic sessions"],
    tagline: "Where circuits meet creativity and robots come to life.",
    href: "/programs/robotics-maker",
    color: "#1493E8",
    image: "/images/programs/robox-hero.png",
    interests: ["Robots & Technology", "Building & Engineering", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (9 AM - 6 PM)"],
    category: "STEM & Technology",
  },
  {
    id: "engineering-maker",
    title: "Mechanica™",
    ages: "Rising 4th – 8th",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-8",
    subtitle: "Where innovation meets velocity.",
    description: "At Mechanica™, students step into the world of real automotive design and racing. Campers engineer race car bodies, explore aerodynamics, and test performance on the track. Through hands-on building and team collaboration, students learn how design decisions impact speed, stability, and performance.",
    focus: ["Automotive design", "Aerodynamics", "Track testing", "Engineering labs", "Competitive challenges"],
    tagline: "Turn imagination into engineering reality.",
    href: "/programs/engineering-maker",
    color: "#0FD3C6",
    image: "/images/programs/mechanica-hero.png",
    interests: ["Building & Engineering", "STEM", "Science"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (9 AM - 6 PM)"],
    category: "STEM & Engineering",
  },
  {
    id: "esports-gaming",
    title: "E Sports Gaming",
    ages: "Rising 4th – 7th",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-7",
    subtitle: "Game with strategy. Compete with integrity. Lead with skill.",
    description: "E Sports Gaming camp combines competitive gaming with real-world skill development. Campers learn strategic thinking, teamwork, communication, and sportsmanship through organized esports competitions. Beyond the screen, they explore game design fundamentals, streaming basics, and the growing career opportunities in the esports industry — all while building friendships in a positive, structured gaming environment.",
    focus: ["Strategic gaming & esports", "Teamwork & communication", "Game design basics", "Digital sportsmanship", "Esports career exploration"],
    tagline: "Level up your game and your future.",
    href: "/programs/esports-gaming",
    color: "#0DC4B8", // Cyan-Teal (brand family)
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80",
    interests: ["Video Games", "Gaming & Esports", "Leadership"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Afternoon (12 PM - 3 PM)"],
    category: "Gaming & Technology",
  },
];

// Helper function to find matching programs based on age, interests, and schedule
export function findMatchingPrograms(
  selectedAge: string,
  selectedInterests: string[],
  selectedSchedule?: string
): Program[] {
  return programs
    .map((program) => {
      // Calculate match score
      let score = 0;

      // Age match (highest priority)
      if (program.ageRanges.includes(selectedAge)) {
        score += 3;
      }

      // Interest matches (up to 3 points)
      const interestMatches = selectedInterests.filter((interest) =>
        program.interests.includes(interest)
      ).length;
      score += interestMatches;

      // Schedule match (if provided)
      if (selectedSchedule && program.schedule.includes(selectedSchedule)) {
        score += 1;
      }

      return { program, score };
    })
    .filter((item) => item.score > 0) // Only return programs with some match
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .slice(0, 3) // Top 3 matches
    .map((item) => item.program);
}

// Get program by ID
export function getProgramById(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}

// Get programs by category
export function getProgramsByCategory(category: string): Program[] {
  return programs.filter((p) => p.category === category);
}

// Get all unique categories
export function getCategories(): string[] {
  return [...new Set(programs.map((p) => p.category))];
}
