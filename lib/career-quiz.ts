import { findMatchingPrograms, programs, type Program } from "@/lib/programs-data";

/**
 * Kid Explorer Club™ — Natural Identity Quiz
 * Maps parent-reported patterns (A–E) to camp interests + career-alignment archetypes.
 */

export const QUIZ_LETTER_PREFIX = "quizLetter:" as const;

export type ArchetypeLetter = "A" | "B" | "C" | "D" | "E";

export type AgeQuizOption = {
  label: string;
  age: string;
  interests: string[];
};

export type CareerQuizOption = {
  label: string;
  /** A–E — used for archetype scoring */
  letter: ArchetypeLetter;
  interests: string[];
};

export type CareerQuizQuestion = {
  id: string;
  /** Section heading shown when the section changes */
  section?: string;
  question: string;
  subtitle?: string;
  options: CareerQuizOption[];
};

/** Synthetic tags appended to each answer for scoring — stripped when matching programs */
export function quizLetterTag(letter: ArchetypeLetter): string {
  return `${QUIZ_LETTER_PREFIX}${letter}`;
}

export function splitQuizHits(interestHits: string[]): {
  letters: ArchetypeLetter[];
  interestOnly: string[];
} {
  const letters: ArchetypeLetter[] = [];
  const interestOnly: string[] = [];
  for (const h of interestHits) {
    if (h.startsWith(QUIZ_LETTER_PREFIX)) {
      const L = h.slice(QUIZ_LETTER_PREFIX.length) as ArchetypeLetter;
      if (L === "A" || L === "B" || L === "C" || L === "D" || L === "E") letters.push(L);
    } else {
      interestOnly.push(h);
    }
  }
  return { letters, interestOnly };
}

/** First step: age band + seed interests for matching */
export const QUIZ_AGE_OPTIONS: AgeQuizOption[] = [
  { label: "Pre-K (ages 3–4)", age: "Pre-K", interests: ["Exploration", "STEM"] },
  { label: "Kindergarten", age: "Kindergarten", interests: ["Exploration", "STEM", "Sports"] },
  { label: "Ages 6–8", age: "Age 6-8", interests: ["STEM", "Science", "Exploration"] },
  { label: "Ages 8–11", age: "Age 8-11", interests: ["Building & Engineering", "STEM", "Robots & Technology"] },
  { label: "Ages 11–13+", age: "Age 11-13+", interests: ["Building & Engineering", "Leadership", "STEM"] },
];

export const CAREER_QUIZ_QUESTIONS: CareerQuizQuestion[] = [
  {
    id: "think-1",
    section: "SECTION 1: HOW YOUR CHILD THINKS",
    question: "When your child encounters something new, they:",
    options: [
      {
        label: "Ask detailed questions about how it works (body, systems, causes)",
        letter: "A",
        interests: ["Science", "STEM"],
      },
      {
        label: "Stay calm and observe before acting",
        letter: "B",
        interests: ["Exploration", "Leadership"],
      },
      {
        label: "Take things apart or try to rebuild/improve them",
        letter: "C",
        interests: ["Building & Engineering", "STEM"],
      },
      {
        label: "Turn it into a plan, idea, or opportunity",
        letter: "D",
        interests: ["Leadership", "Entrepreneurship"],
      },
      {
        label: "Think strategically about how to win or optimize outcomes",
        letter: "E",
        interests: ["Gaming & Esports", "STEM"],
      },
    ],
  },
  {
    id: "think-2",
    question: "Your child is most likely to:",
    options: [
      { label: "Notice small details others miss", letter: "A", interests: ["Science", "STEM"] },
      { label: "Stay composed in stressful or chaotic moments", letter: "B", interests: ["Leadership", "Exploration"] },
      { label: "Build, design, or fix objects", letter: "C", interests: ["Building & Engineering", "Robots & Technology"] },
      { label: "Lead or organize people naturally", letter: "D", interests: ["Leadership", "Entrepreneurship"] },
      { label: "Analyze patterns, timing, or systems (games, decisions)", letter: "E", interests: ["Gaming & Esports", "Video Games"] },
    ],
  },
  {
    id: "behavior-1",
    section: "SECTION 2: NATURAL BEHAVIOR",
    question: "Discipline looks like:",
    options: [
      { label: "Studies or focuses deeply when curious", letter: "A", interests: ["Science", "STEM"] },
      { label: "Handles pressure without panic", letter: "B", interests: ["Leadership", "Exploration"] },
      { label: "Repeats hands-on skills to improve", letter: "C", interests: ["Building & Engineering", "STEM"] },
      { label: "Sets goals and follows through independently", letter: "D", interests: ["Leadership", "Entrepreneurship"] },
      { label: "Practices strategy, timing, or performance consistently", letter: "E", interests: ["Sports", "Gaming & Esports"] },
    ],
  },
  {
    id: "behavior-2",
    question: "In group settings, your child:",
    options: [
      { label: "Asks insightful or unexpected questions", letter: "A", interests: ["Science", "Exploration"] },
      { label: "Becomes a steady presence others rely on", letter: "B", interests: ["Leadership", "Exploration"] },
      { label: "Takes initiative in building or doing", letter: "C", interests: ["Building & Engineering", "STEM"] },
      { label: "Leads, directs, or influences others", letter: "D", interests: ["Leadership", "Entrepreneurship"] },
      { label: "Thinks ahead and anticipates outcomes", letter: "E", interests: ["Gaming & Esports", "STEM"] },
    ],
  },
  {
    id: "interests-1",
    section: "SECTION 3: NATURAL INTERESTS",
    question: "Your child is drawn to:",
    options: [
      { label: "Human body, health, science, life processes", letter: "A", interests: ["Science", "STEM"] },
      { label: "Helping others, staying calm, solving urgent problems", letter: "B", interests: ["Leadership", "Exploration"] },
      { label: "Machines, tools, building, creating systems", letter: "C", interests: ["Building & Engineering", "Robots & Technology"] },
      { label: "Money, ideas, leadership, creating something new", letter: "D", interests: ["Entrepreneurship", "Leadership"] },
      { label: "Games, strategy, competition, performance", letter: "E", interests: ["Gaming & Esports", "Sports"] },
    ],
  },
  {
    id: "interests-2",
    question: "If left alone, your child would:",
    options: [
      {
        label: "Research or learn about how things work (especially the body)",
        letter: "A",
        interests: ["Science", "STEM"],
      },
      { label: "Organize, prepare, or stay in control of their environment", letter: "B", interests: ["Leadership", "STEM"] },
      { label: "Build, experiment, or create something", letter: "C", interests: ["Building & Engineering", "STEM"] },
      { label: "Plan a project, business, or big idea", letter: "D", interests: ["Entrepreneurship", "Leadership"] },
      { label: "Play games with strategy, timing, or mastery", letter: "E", interests: ["Video Games", "Gaming & Esports"] },
    ],
  },
  {
    id: "pressure-1",
    section: "SECTION 4: PRESSURE RESPONSE",
    question: "When something goes wrong, your child:",
    options: [
      { label: "Wants to understand exactly why it happened", letter: "A", interests: ["Science", "STEM"] },
      { label: "Stays calm and tries to fix it immediately", letter: "B", interests: ["Leadership", "Exploration"] },
      { label: "Adjusts and tries a new method", letter: "C", interests: ["Building & Engineering", "STEM"] },
      { label: "Takes control and directs others", letter: "D", interests: ["Leadership", "Entrepreneurship"] },
      { label: "Re-strategizes to win next time", letter: "E", interests: ["Gaming & Esports", "Sports"] },
    ],
  },
  {
    id: "pressure-2",
    question: "Your child often says:",
    options: [
      { label: "“Why does this happen?”", letter: "A", interests: ["Science", "Exploration"] },
      { label: "“It’s okay, I’ll fix it.”", letter: "B", interests: ["Leadership", "Exploration"] },
      { label: "“Let me try it my way.”", letter: "C", interests: ["Building & Engineering", "STEM"] },
      { label: "“I have an idea.”", letter: "D", interests: ["Entrepreneurship", "Leadership"] },
      { label: "“I know how to win.”", letter: "E", interests: ["Gaming & Esports", "Sports"] },
    ],
  },
];

export const INTEREST_PARENT_LABELS: Record<string, string> = {
  "Building & Engineering": "hands-on building & engineering",
  "Robots & Technology": "robotics & technology",
  STEM: "STEM & applied learning",
  Science: "science & inquiry",
  Sports: "movement & competition",
  Leadership: "leadership & teamwork",
  Exploration: "curiosity & exploration",
  Entrepreneurship: "ideas & initiative",
  "Video Games": "games & digital worlds",
  "Gaming & Esports": "esports & strategy",
};

export type ArchetypeKey = "healer" | "stabilizer" | "builder" | "creator" | "strategist" | "astronaut";

export type CareerPathInsight = {
  pathTitle: string;
  pathSummary: string;
  strengthLabels: string[];
  archetypeKey: ArchetypeKey;
  archetypeEmoji: string;
  archetypeSubtitle: string;
  naturalTraits: string[];
  earlySignals: string[];
  futurePathways: string[];
  letterCounts: Record<ArchetypeLetter, number>;
  finalMessageLines: string[];
};

const LETTER_LABELS: Record<ArchetypeLetter, string> = {
  A: "A — detail & inquiry",
  B: "B — calm under pressure",
  C: "C — hands-on building",
  D: "D — ideas & leadership",
  E: "E — strategy & performance",
};

function countLetters(letters: ArchetypeLetter[]): Record<ArchetypeLetter, number> {
  const counts: Record<ArchetypeLetter, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (const L of letters) counts[L] += 1;
  return counts;
}

/** Balanced A+C profile → astronaut / advanced science mind */
function isAstronautSignal(counts: Record<ArchetypeLetter, number>): boolean {
  const { A, C } = counts;
  if (A < 2 || C < 2) return false;
  if (Math.abs(A - C) > 1) return false;
  if (A + C < 5) return false;
  return true;
}

function dominantLetter(counts: Record<ArchetypeLetter, number>): ArchetypeLetter {
  const entries = (Object.entries(counts) as [ArchetypeLetter, number][]).sort((a, b) => b[1] - a[1]);
  const top = entries[0][1];
  const tied = entries.filter(([, n]) => n === top).map(([L]) => L);
  if (tied.length === 1) return tied[0];
  return tied.sort()[0];
}

const ARCHETYPE_COPY: Record<
  ArchetypeKey,
  {
    emoji: string;
    title: string;
    subtitle: string;
    naturalTraits: string[];
    earlySignals: string[];
    futurePathways: string[];
  }
> = {
  healer: {
    emoji: "🩺",
    title: "The Healer",
    subtitle: "Surgeon / Doctor / OBGYN",
    naturalTraits: ["Precision", "Curiosity about the human body", "Detail-focused thinking", "Deep study without prompting"],
    earlySignals: [
      "Notices physical details",
      'Asks “why” about health, life, and function',
      "Can focus intensely for long periods",
    ],
    futurePathways: ["Surgeon", "Physician", "OBGYN", "Medical Specialist"],
  },
  stabilizer: {
    emoji: "🚑",
    title: "The Stabilizer",
    subtitle: "ER Doctor / Critical Response",
    naturalTraits: ["Calm under pressure", "Emotionally steady", "Quick, controlled decision-making"],
    earlySignals: ["Doesn’t panic when others do", "Steps in to help immediately", "Handles stress better than peers"],
    futurePathways: ["ER Doctor", "Trauma Specialist", "Crisis Leader"],
  },
  builder: {
    emoji: "⚙️",
    title: "The Builder",
    subtitle: "Engineer / Inventor",
    naturalTraits: ["Hands-on problem solving", "System thinking", "Curiosity about how things work"],
    earlySignals: ["Builds, fixes, experiments", "Loves tools, materials, construction", "Improves existing ideas"],
    futurePathways: ["Engineer", "Architect", "Robotics", "Systems Designer"],
  },
  creator: {
    emoji: "🚀",
    title: "The Creator",
    subtitle: "Entrepreneur / Visionary",
    naturalTraits: ["Leadership", "Idea generation", "Initiative + independence"],
    earlySignals: ["Starts projects without being told", "Thinks big", "Organizes others around ideas"],
    futurePathways: ["Entrepreneur", "CEO", "Founder", "Innovator"],
  },
  strategist: {
    emoji: "🎮",
    title: "The Strategist",
    subtitle: "Esports Director / System Thinker",
    naturalTraits: ["Pattern recognition", "Strategic thinking", "Timing + decision-making"],
    earlySignals: ["Excels in games or competition", "Thinks multiple steps ahead", "Obsessed with improving performance"],
    futurePathways: ["Esports Director", "Game Designer", "Analyst", "Systems Strategist"],
  },
  astronaut: {
    emoji: "🌌",
    title: "The Astronaut / Advanced Science Mind",
    subtitle: "A + C — curiosity about systems + precision",
    naturalTraits: ["Curiosity about systems + precision", "Interest in space, physics, engineering"],
    earlySignals: ["Blends deep “why” questions with hands-on building and iteration"],
    futurePathways: ["Astronaut", "Aerospace Engineer", "Scientist"],
  },
};

const FINAL_MESSAGE_LINES = [
  "Your child is already showing you who they are.",
  "Not through grades. Not through labels. But through patterns:",
  "What they return to · What they focus on · How they respond under pressure · What they do without being told",
  "Do not ignore it. Do not flatten it. Do not delay it.",
  "Because when a child’s natural way of being is aligned early—",
  "👉 discipline becomes natural · 👉 confidence becomes internal · 👉 excellence becomes inevitable",
];

function scoreInterestTags(interestHits: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const key of interestHits) {
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function pathTitleFromArchetype(key: ArchetypeKey): string {
  const c = ARCHETYPE_COPY[key];
  return `${c.emoji} ${c.title} — ${c.subtitle}`;
}

/**
 * Parent-facing copy: archetype from A–E counts + interest tags for nuance.
 */
export function computeCareerPathInsight(interestHits: string[], childName: string): CareerPathInsight {
  const { letters, interestOnly } = splitQuizHits(interestHits);
  const letterCounts = countLetters(letters);

  const astro = isAstronautSignal(letterCounts);
  const dom = dominantLetter(letterCounts);
  const archetypeKey: ArchetypeKey = astro
    ? "astronaut"
    : dom === "A"
      ? "healer"
      : dom === "B"
        ? "stabilizer"
        : dom === "C"
          ? "builder"
          : dom === "D"
            ? "creator"
            : "strategist";

  const meta = ARCHETYPE_COPY[archetypeKey];
  const pathTitle = pathTitleFromArchetype(archetypeKey);

  const name = childName.trim() || "Your child";
  const pathSummary = `${name}’s pattern maps to the ${meta.title} archetype — ${meta.subtitle}. The answers you chose point to how they think, behave, and respond before the world labels them.`;

  const counts = scoreInterestTags(interestOnly);
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const topThree = sorted.slice(0, 3).map(([k]) => k);
  const strengthLabels =
    topThree.length > 0
      ? topThree.map((k) => INTEREST_PARENT_LABELS[k] ?? k.toLowerCase())
      : [LETTER_LABELS[dom]];

  return {
    pathTitle,
    pathSummary,
    strengthLabels,
    archetypeKey,
    archetypeEmoji: meta.emoji,
    archetypeSubtitle: meta.subtitle,
    naturalTraits: meta.naturalTraits,
    earlySignals: meta.earlySignals,
    futurePathways: meta.futurePathways,
    letterCounts,
    finalMessageLines: FINAL_MESSAGE_LINES,
  };
}

export function recommendProgramFromQuiz(age: string, interestHits: string[]): Program {
  const { interestOnly } = splitQuizHits(interestHits);
  const counts = scoreInterestTags(interestOnly);
  const topInterests = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([k]) => k);

  const matches = findMatchingPrograms(age, topInterests, "Full Day (9 AM - 3 PM)");
  if (matches[0]) return matches[0];

  const forAge = programs.filter((p) => p.ageRanges.includes(age));
  if (forAge.length > 0) return forAge[0];

  return programs[0];
}
