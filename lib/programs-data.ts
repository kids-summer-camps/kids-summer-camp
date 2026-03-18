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
    title: "Lil' Launchers",
    ages: "3 – 4 years",
    ageRanges: ["Pre-K"],
    gradeRange: "Ages 3-4",
    subtitle: "Welcome to Kid Explorer Camp — where the future isn't just imagined, it's built.",
    description: "This isn't your average day camp. It's the launchpad for your little explorer's first adventure — a space where creativity flows, confidence grows, and curiosity runs wild. Our youngest campers step into a world where art collides with innovation, STEM sparks imagination, and friendships are formed with the same energy rockets meet the sky.",
    focus: ["Hands-on creations", "Splash-ready swim sessions", "Early leadership skills", "Art meets innovation", "STEM exploration"],
    tagline: "This is where future visionaries take their first step.",
    href: "/programs/lil-launchers",
    color: "#1493E8", // Brand Primary Blue
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
    interests: ["Exploration", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Morning (9 AM - 12 PM)"],
    category: "Early Childhood",
  },
  {
    id: "first-flight",
    title: "First Flight",
    ages: "Rising K & 1st",
    ageRanges: ["Kindergarten", "Age 6-8"],
    gradeRange: "Rising Grades K-1",
    subtitle: "Welcome to Kid Explorer Camp — where small steps turn into giant leaps.",
    description: "This is the launchpad for young dreamers ready to soar with curiosity. Every day is packed with creative projects, movement challenges, and discovery-driven play, building confidence and imagination along the way. Friendships form fast, creativity sparks faster, and independence grows at supersonic speed.",
    focus: ["Creative projects", "Movement challenges", "Discovery-driven play", "Confidence building", "Imagination exploration"],
    tagline: "Lift off into a summer where imagination takes flight.",
    href: "/programs/first-flight",
    color: "#0FD3C6", // Brand Cyan
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80",
    interests: ["Exploration", "STEM", "Sports"],
    schedule: ["Full Day (9 AM - 3 PM)"],
    category: "Early Elementary",
  },
  {
    id: "cosmic-curiosity",
    title: "Cosmic Curiosity",
    ages: "Rising 1st – 2nd",
    ageRanges: ["Age 6-8"],
    gradeRange: "Rising Grades 1-2",
    subtitle: "First they wonder, then they build.",
    description: "At Cosmic Curiosity, science, exploration, and imagination take center stage. Campers dive into hands-on experiments, creative investigations, and mind-expanding adventures, all while building teamwork, problem-solving, and a love for discovery.",
    focus: ["Hands-on experiments", "Creative investigations", "Mind-expanding adventures", "Teamwork building", "Problem-solving skills"],
    tagline: "Wonder is the superpower.",
    href: "/programs/cosmic-curiosity",
    color: "#1284D1", // Darker Blue (brand family)
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    interests: ["Science", "Exploration", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)"],
    category: "Elementary",
  },
  {
    id: "the-blueprint",
    title: "The Blueprint",
    ages: "Rising 2nd – 3rd",
    ageRanges: ["Age 6-8", "Age 8-11"],
    gradeRange: "Rising Grades 2-3",
    subtitle: "Big ideas, small humans, limitless potential.",
    description: "At The Blueprint, campers become architects of innovation. STEM labs, creative builds, and collaborative projects turn curiosity into real-world problem-solving. Every activity is a mini launch sequence for the future innovators ready to dream, design, and disrupt.",
    focus: ["STEM labs", "Creative builds", "Collaborative projects", "Problem-solving", "Design thinking"],
    tagline: "They don't just imagine the future — they design it.",
    href: "/programs/the-blueprint",
    color: "#10B8A8", // Teal (brand family)
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
    interests: ["Building & Engineering", "STEM", "Science"],
    schedule: ["Full Day (9 AM - 3 PM)"],
    category: "Elementary",
  },
  {
    id: "power-play",
    title: "Power Play",
    ages: "Rising K – 7th",
    ageRanges: ["Kindergarten", "Age 6-8", "Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades K-7",
    subtitle: "Where the field is a stage and every move is a statement.",
    description: "Kid Explorer Camp Sports merges athletic skill with leadership, teamwork, and grit. From fast-paced games to strategic challenges, campers push limits, crush personal records, and discover the power of discipline plus fun. Energy, skill, and confidence collide in a summer where every kid becomes a game-changer.",
    focus: ["Athletic skills", "Leadership development", "Teamwork & grit", "Strategic challenges", "Confidence building"],
    tagline: "Run the field. Own the game. Lead the pack.",
    href: "/programs/power-play",
    color: "#0DC4B8", // Cyan-Teal blend (brand family)
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=400&q=80",
    interests: ["Sports", "Leadership"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Morning (9 AM - 12 PM)", "Half Day Afternoon (12 PM - 3 PM)"],
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
    title: "Robotics Maker Camp",
    ages: "Rising 4th – 7th",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-7",
    subtitle: "Build bots. Code dreams. Engineer the future.",
    description: "In Robotics Maker Camp, campers dive into the world of robotics, automation, and coding. From building their first robot to programming autonomous movements, every day is a hands-on adventure in engineering. Campers work with real robotics kits, learn coding fundamentals, and compete in friendly robot challenges that spark innovation and teamwork.",
    focus: ["Robot building & design", "Coding & programming", "Autonomous robotics", "Engineering challenges", "Team competitions"],
    tagline: "Where circuits meet creativity and robots come to life.",
    href: "/programs/robotics-maker",
    color: "#1493E8", // Brand Primary Blue
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80",
    interests: ["Robots & Technology", "Building & Engineering", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "STEM & Technology",
  },
  {
    id: "engineering-maker",
    title: "Engineering Maker Camp",
    ages: "Rising 4th – 7th",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-7",
    subtitle: "Design. Build. Test. Repeat.",
    description: "Engineering Maker Camp is where young inventors transform ideas into inventions. Campers explore mechanical, electrical, and civil engineering through hands-on projects like bridge building, circuit design, and 3D modeling. Using real tools and materials, they'll prototype inventions, solve engineering challenges, and develop the mindset of a true maker.",
    focus: ["Mechanical engineering", "Circuit design & electronics", "3D modeling & printing", "Structural building", "Design thinking"],
    tagline: "Turn imagination into engineering reality.",
    href: "/programs/engineering-maker",
    color: "#0FD3C6", // Brand Cyan
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&q=80",
    interests: ["Building & Engineering", "STEM", "Science"],
    schedule: ["Full Day (9 AM - 3 PM)"],
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
