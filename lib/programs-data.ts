// Shared programs data for reuse across components
// This file centralizes all camp program information to enable:
// 1. Consistent data across all sections
// 2. Mission matching logic based on age, schedule, and interests
// 3. Easy maintenance and updates

export interface Program {
  id: string;
  title: string;
  ages: string;
  ageRanges: string[];
  gradeRange?: string;
  subtitle: string;
  description: string;
  focus: string[];
  tagline: string;
  href: string;
  color: string;
  image: string;
  cardImage: string;
  interests: string[];
  schedule: string[];
  category: string;
  reckoningName: string;
  reckoningTagline: string;
  reckoningDescription: string;
  reckoningOverlay: string; // CSS color for the Reckoning banner overlay
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
    id: "prelude-i",
    title: "Prelude I™",
    ages: "3 years",
    ageRanges: ["Pre-K"],
    gradeRange: "Rising Pre-K 3",
    subtitle: "Welcome to Kid Explorer Camp — where the future isn't just imagined, it's built.",
    description: "At Prelude I™, our youngest explorers discover the world through guided play, creativity, and movement. Children build confidence, communication, and early problem-solving skills through hands-on activities, storytelling, and exploration.",
    focus: ["Guided play", "Discovery labs", "Swim development", "Early academics", "Creative exploration"],
    tagline: "This is where future visionaries take their first step.",
    href: "/programs/prelude-i",
    color: "#1493E8",
    image: "/images/programs/prelude-i-hero.png",
    cardImage: "/images/programs/prelude-i-hero.png",
    interests: ["Exploration", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Morning (9 AM - 12 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Early Childhood",
    reckoningName: "The Reveal™",
    reckoningTagline: "Watch it unfold.",
    reckoningDescription: "Our youngest explorers take their very first step into expression. Through guided moments of speaking, sorting, movement, and creation, students reveal emerging language, coordination, and confidence. This is where parents witness the beginning — when curiosity turns into communication, and independence quietly takes shape.",
    reckoningOverlay: "rgba(20,147,232,0.8)",
  },
  {
    id: "prelude-ii",
    title: "Prelude II™",
    ages: "4 years",
    ageRanges: ["Pre-K"],
    gradeRange: "Rising Pre-K 4",
    subtitle: "Welcome to Kid Explorer Camp — where the future isn't just imagined, it's built.",
    description: "At Prelude II™, children build confidence, communication, and early problem-solving skills through hands-on activities, guided play, and creative exploration. Each day blends discovery labs, outdoor play, water experiences, and early academic foundations.",
    focus: ["Guided play", "Discovery labs", "Swim development", "Early academics", "Creative exploration"],
    tagline: "This is where future visionaries take their first step.",
    href: "/programs/prelude-ii",
    color: "#1493E8",
    image: "/images/programs/prelude-hero.png",
    cardImage: "/images/programs/prelude-card.png",
    interests: ["Exploration", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Morning (9 AM - 12 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Early Childhood",
    reckoningName: "Ascension™",
    reckoningTagline: "Rise above. Show what you've become.",
    reckoningDescription: "Students demonstrate measurable growth through early reading, writing, counting, and structured thinking. With before-and-after moments, families see real progress in focus, confidence, and skill. The Reckoning Day™ at this level marks a clear transition from exploration to readiness.",
    reckoningOverlay: "rgba(20,147,232,0.8)",
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
    cardImage: "/images/programs/launchpad-card.png",
    interests: ["Exploration", "STEM", "Sports"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Early Elementary",
    reckoningName: "Launch Day™",
    reckoningTagline: "From idea to ignition.",
    reckoningDescription: "Students activate foundational academic skills in real time — reading with clarity, solving problems, and explaining ideas with confidence. This is where learning moves beyond practice and becomes usable. Students don't just know — they demonstrate that they can apply.",
    reckoningOverlay: "rgba(15,211,198,0.8)",
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
    cardImage: "/images/programs/zero-card.png",
    interests: ["Science", "Exploration", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Elementary",
    reckoningName: "Zero → One™ Showcase",
    reckoningTagline: "From nothing… to everything.",
    reckoningDescription: "Students present creations that began as pure ideas — stories, designs, inventions, or concepts brought to life through focus and intention. This is the core of Kid Explorer Club: the ability to create something meaningful from nothing, and to understand that possibility starts within.",
    reckoningOverlay: "rgba(1,50,93,0.8)",
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
    cardImage: "/images/programs/ideaforge-card.png",
    interests: ["Building & Engineering", "STEM", "Entrepreneurship"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Innovation & Entrepreneurship",
    reckoningName: "Axiom Reveal™",
    reckoningTagline: "Where ideas become truth.",
    reckoningDescription: "Students present original products, concepts, and solutions developed through research, design, and collaboration. Through structured pitches, they communicate ideas with clarity and purpose. The Reckoning Day™ reveals young innovators thinking critically, building intentionally, and presenting with confidence.",
    reckoningOverlay: "rgba(1,50,93,0.8)",
  },
  {
    id: "power-play",
    title: "Apex Athletics™",
    ages: "Rising K – 7th",
    ageRanges: ["Kindergarten", "Age 6-8", "Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Kindergarten – Grade 7",
    subtitle: "Where strength is built, grit is tested, and confidence takes shape.",
    description: "At Apex Athletics™ Academy, students develop athletic ability through structured sports training and team challenges. Campers build endurance, coordination, and confidence while learning teamwork, sportsmanship, and leadership.",
    focus: ["Sports training", "Team challenges", "Swimming", "Academic sessions", "Physical & mental growth"],
    tagline: "Run the field. Own the game. Lead the pack.",
    href: "/programs/power-play",
    color: "#0DC4B8",
    image: "/images/programs/apex-hero.png",
    cardImage: "/images/programs/apex-card.png",
    interests: ["Sports", "Leadership"],
    schedule: ["Full Day (9 AM - 3 PM)", "Half Day Morning (9 AM - 12 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Sports",
    reckoningName: "Show & Prove™",
    reckoningTagline: "No talk. Just results.",
    reckoningDescription: "Students demonstrate athletic skill through precision, agility, and performance challenges. Whether through archery, speed drills, or coordinated movement, results are visible and measurable. This is where discipline becomes performance and effort becomes undeniable.",
    reckoningOverlay: "rgba(20,147,232,0.8)",
  },
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
    cardImage: "/images/programs/robox-card.png",
    interests: ["Robots & Technology", "Building & Engineering", "STEM"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "STEM & Technology",
    reckoningName: "Mission Reveal™",
    reckoningTagline: "This is what they created.",
    reckoningDescription: "Students showcase robots and systems they have programmed to perform real tasks. Through live demonstrations and explanations, they reveal how logic, coding, and problem-solving come together. The Reckoning Day™ becomes a window into how students think, adapt, and build with technology.",
    reckoningOverlay: "rgba(1,50,93,0.8)",
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
    cardImage: "/images/programs/mechanica-card.png",
    interests: ["Building & Engineering", "STEM", "Science"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "STEM & Engineering",
    reckoningName: "Systems Go™",
    reckoningTagline: "All engines. No hesitation.",
    reckoningDescription: "Students present engineered builds — machines, moving systems, and functional designs tested live for performance. This is where ideas meet physics. Students demonstrate how they design, construct, and refine systems that move, respond, and perform under pressure.",
    reckoningOverlay: "rgba(15,211,198,0.8)",
  },
  {
    id: "esports-gaming",
    title: "Esports Lab™",
    ages: "8–14",
    ageRanges: ["Age 8-11", "Age 11-13+"],
    gradeRange: "Rising Grades 4-8",
    subtitle: "Take control of the digital world.",
    description: "Esports Lab™ is where young minds take control of the digital world—building, creating, and leading with confidence in a future powered by technology.",
    focus: ["Competitive esports", "Game design", "Story development", "Digital literacy", "Strategic thinking"],
    tagline: "Level up your game and your future.",
    href: "/programs/esports-gaming",
    color: "#0DC4B8",
    image: "/images/programs/esports-hero.png",
    cardImage: "/images/programs/esports-card.png",
    interests: ["Video Games", "Gaming & Esports", "Leadership"],
    schedule: ["Full Day (9 AM - 3 PM)", "Extended Day (8 AM - 5 PM)"],
    category: "Gaming & Technology",
    reckoningName: "The Drop™",
    reckoningTagline: "They've been building… now it hits.",
    reckoningDescription: "Students compete in live gameplay, showcasing strategy, communication, and focus. Teams demonstrate how they think, adapt, and execute under pressure. The Reckoning Day™ reveals esports as more than play — it is discipline, teamwork, and real-time decision-making.",
    reckoningOverlay: "rgba(1,50,93,0.8)",
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
