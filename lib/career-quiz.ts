import { findMatchingPrograms, programs, type Program } from "@/lib/programs-data";

/**
 * Pathfinder quiz — interest items aligned with established career-psychology research:
 *
 * - **Holland’s RIASEC model** (Realistic, Investigative, Artistic, Social, Enterprising,
 *   Conventional): the most widely used taxonomy for vocational interests; underpins tools
 *   like the O*NET Interest Profiler and many school career-interest surveys.
 * - **Person–environment fit**: satisfaction and performance tend to be higher when
 *   interests match the activities/environment (Holland’s congruence idea).
 * - **Youth exploration**: questions emphasize activities and preferences (not premature
 *   “pick one job forever”), consistent with developmental career-education guidance.
 *
 * We map RIASEC-style choices to Kid Explorer `interests` tags for program matching.
 * @see https://www.onetcenter.org/IP.html (O*NET Interest Profiler)
 * @see https://www.careeronestop.org/ExploreCareers/Assessments/interests.aspx
 */

export type AgeQuizOption = {
  label: string;
  age: string;
  interests: string[];
};

export type CareerQuizOption = {
  label: string;
  interests: string[];
};

export type CareerQuizQuestion = {
  id: string;
  /** Optional RIASEC dimension this item mainly reflects (for maintainers). */
  riasec?: "R" | "I" | "A" | "S" | "E" | "C";
  question: string;
  subtitle?: string;
  options: CareerQuizOption[];
};

/** First step: age band + seed interests for matching */
export const QUIZ_AGE_OPTIONS: AgeQuizOption[] = [
  { label: "Pre-K (ages 3–4)", age: "Pre-K", interests: ["Exploration", "STEM"] },
  { label: "Kindergarten", age: "Kindergarten", interests: ["Exploration", "STEM", "Sports"] },
  { label: "Ages 6–8", age: "Age 6-8", interests: ["STEM", "Science", "Exploration"] },
  { label: "Ages 8–11", age: "Age 8-11", interests: ["Building & Engineering", "STEM", "Robots & Technology"] },
  { label: "Ages 11–13+", age: "Age 11-13+", interests: ["Building & Engineering", "Leadership", "STEM"] },
];

/**
 * Nine interest questions after age (ten steps total including age — within 7–10).
 * Covers RIASEC-style themes in kid-friendly language.
 */
export const CAREER_QUIZ_QUESTIONS: CareerQuizQuestion[] = [
  {
    id: "spark",
    riasec: "R",
    question: "What lights them up most?",
    subtitle: "Think about what they’d choose if every option was on the table.",
    options: [
      { label: "Building, tinkering, and taking things apart", interests: ["Building & Engineering", "STEM"] },
      { label: "Games, screens, and digital worlds", interests: ["Video Games", "Gaming & Esports"] },
      { label: "Sports, movement, and competition", interests: ["Sports"] },
      { label: "Experiments, nature, and \"why?\" questions", interests: ["Science", "Exploration"] },
      { label: "Leading friends or presenting ideas", interests: ["Leadership"] },
    ],
  },
  {
    id: "dream",
    riasec: "E",
    question: "A dream they’ve actually said out loud",
    options: [
      { label: "Inventor or engineer", interests: ["Building & Engineering", "STEM"] },
      { label: "Scientist or doctor", interests: ["Science", "STEM"] },
      { label: "Athlete or coach", interests: ["Sports"] },
      { label: "Game designer or creator", interests: ["Video Games", "Gaming & Esports"] },
      { label: "Founder, CEO, or changemaker", interests: ["Leadership", "Entrepreneurship"] },
      { label: "Explorer or astronaut", interests: ["Exploration", "STEM"] },
    ],
  },
  {
    id: "solve",
    riasec: "I",
    question: "How they like to solve problems",
    options: [
      { label: "Hands-on building and prototypes", interests: ["Building & Engineering", "Robots & Technology"] },
      { label: "Logic, code, and systems", interests: ["Robots & Technology", "STEM"] },
      { label: "Research, reading, and evidence", interests: ["Science", "STEM"] },
      { label: "Teams, roles, and rallying people", interests: ["Leadership"] },
      { label: "Practice, drills, and leveling up", interests: ["Sports", "Gaming & Esports"] },
    ],
  },
  {
    id: "weekend",
    riasec: "R",
    question: "Their ideal weekend energy",
    options: [
      { label: "Kits, circuits, and maker projects", interests: ["Building & Engineering", "STEM"] },
      { label: "Outdoor games and physical challenges", interests: ["Sports"] },
      { label: "Esports, worlds, and strategy", interests: ["Gaming & Esports", "Video Games"] },
      { label: "Museums, kits, and discovery", interests: ["Science", "Exploration"] },
      { label: "Projects with friends where they’re in charge", interests: ["Leadership", "Entrepreneurship"] },
    ],
  },
  {
    id: "school_engaged",
    riasec: "I",
    question: "At school, they’re most engaged when…",
    subtitle: "No grades needed — just what pulls their attention.",
    options: [
      { label: "Math puzzles, patterns, or coding", interests: ["STEM", "Robots & Technology"] },
      { label: "Science lab, nature, or how things work", interests: ["Science", "Exploration"] },
      { label: "PE, sports, or moving while learning", interests: ["Sports"] },
      { label: "Making, art, or designing something original", interests: ["STEM", "Building & Engineering"] },
      { label: "Group work, presentations, or helping classmates", interests: ["Leadership", "Exploration"] },
      { label: "Tech time, games, or digital projects", interests: ["Video Games", "Gaming & Esports"] },
    ],
  },
  {
    id: "social_help",
    riasec: "S",
    question: "With other kids, they’re most in their element when they…",
    options: [
      { label: "Teach, coach, or help someone younger", interests: ["Leadership", "Exploration"] },
      { label: "Build or fix something together", interests: ["Building & Engineering", "STEM"] },
      { label: "Organize the game, rules, or the team plan", interests: ["Leadership", "Entrepreneurship"] },
      { label: "Compete head-to-head or in tournaments", interests: ["Sports", "Gaming & Esports"] },
      { label: "Work quietly side-by-side on their own piece", interests: ["STEM", "Science"] },
    ],
  },
  {
    id: "creative_style",
    riasec: "A",
    question: "When they create something, they tend to…",
    subtitle: "Creative doesn't only mean \"arts\" — it's how they like to invent.",
    options: [
      { label: "Sketch, design, or prototype something new", interests: ["Building & Engineering", "STEM"] },
      { label: "Tell stories, characters, or worlds", interests: ["Video Games", "Entrepreneurship"] },
      { label: "Code, animate, or build digitally", interests: ["Robots & Technology", "Video Games"] },
      { label: "Improvise without a strict plan", interests: ["Exploration", "Leadership"] },
      { label: "Follow a kit or recipe exactly, then tweak it", interests: ["STEM", "Building & Engineering"] },
    ],
  },
  {
    id: "structure_prefs",
    riasec: "C",
    question: "They feel most confident when…",
    subtitle: "Structure vs. freedom — both are strengths.",
    options: [
      { label: "Steps, checklists, and clear expectations", interests: ["STEM", "Science"] },
      { label: "Open-ended goals they can interpret their way", interests: ["Exploration", "Leadership"] },
      { label: "Rules and fair play everyone agrees on", interests: ["Sports", "Gaming & Esports"] },
      { label: "Data, scores, or metrics to improve against", interests: ["STEM", "Robots & Technology"] },
      { label: "Collaboration roles so everyone contributes", interests: ["Leadership", "Exploration"] },
    ],
  },
  {
    id: "influence_win",
    riasec: "E",
    question: "They’re proudest after they’ve…",
    options: [
      { label: "Won something or ranked at the top", interests: ["Sports", "Gaming & Esports"] },
      { label: "Convinced others or led the group", interests: ["Leadership", "Entrepreneurship"] },
      { label: "Built or fixed something that finally works", interests: ["Building & Engineering", "STEM"] },
      { label: "Figured out a tough idea on their own", interests: ["Science", "STEM"] },
      { label: "Helped someone else succeed", interests: ["Leadership", "Exploration"] },
    ],
  },
];

/** Parent-facing labels for program `interests` tags */
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

export type CareerPathInsight = {
  /** Short headline, e.g. "STEM, design & discovery path" */
  pathTitle: string;
  /** 2–3 sentences: strengths + how that connects to future paths */
  pathSummary: string;
  /** Top 3 strengths as readable phrases */
  strengthLabels: string[];
};

function scoreInterestTags(interestHits: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const key of interestHits) {
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function pathTitleFromCounts(counts: Map<string, number>): string {
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const top = sorted[0]?.[0];

  const score = (ids: string[]) => ids.reduce((s, id) => s + (counts.get(id) ?? 0), 0);

  const stemScore = score(["Building & Engineering", "Robots & Technology", "STEM", "Science"]);
  const digitalScore = score(["Video Games", "Gaming & Esports"]);
  const peopleScore = score(["Leadership", "Exploration", "Entrepreneurship"]);
  const physicalScore = score(["Sports"]);

  const max = Math.max(stemScore, digitalScore, peopleScore, physicalScore);
  if (max === 0) return "Discovery & growth path";

  if (stemScore === max && stemScore >= digitalScore && stemScore >= peopleScore)
    return "STEM, design & discovery path";
  if (digitalScore === max) return "Digital creation & strategy path";
  if (peopleScore === max) return "Leadership, ideas & collaboration path";
  if (physicalScore === max) return "Movement, competition & performance path";

  if (top === "Building & Engineering" || top === "Robots & Technology") return "Engineering & making path";
  if (top === "Science") return "Science & inquiry path";
  if (top === "Leadership") return "Leadership & teamwork path";
  if (top === "Exploration") return "Exploration & discovery path";

  return "Discovery & growth path";
}

/**
 * Parent-facing copy: strengths from quiz tags + career-path framing (exploration, not a diagnosis).
 */
export function computeCareerPathInsight(interestHits: string[], childName: string): CareerPathInsight {
  const counts = scoreInterestTags(interestHits);
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const topThree = sorted.slice(0, 3).map(([k]) => k);
  const strengthLabels = topThree.map((k) => INTEREST_PARENT_LABELS[k] ?? k.toLowerCase());

  const pathTitle = pathTitleFromCounts(counts);

  const name = childName.trim() || "Your child";
  const [a, b, c] = strengthLabels;
  const listThree =
    c != null ? `${a}, ${b}, and ${c}` : b != null ? `${a} and ${b}` : a ?? "a mix of interests";

  const pathSummary = `${name}'s answers cluster around ${listThree}. That pattern often shows up in people who enjoy ${clusterHint(pathTitle)}—and it's a great set of strengths to nurture early. Summer camp can be a low-pressure place to explore those interests before any one career is chosen.`;

  return {
    pathTitle,
    pathSummary,
    strengthLabels,
  };
}

function clusterHint(pathTitle: string): string {
  if (pathTitle.includes("STEM")) return "solving real problems, designing, and figuring out how things work";
  if (pathTitle.includes("Digital")) return "interactive challenges, digital fluency, and strategic thinking";
  if (pathTitle.includes("Leadership")) return "leading projects, communicating ideas, and working with others";
  if (pathTitle.includes("Movement")) return "physical challenge, teamwork, and healthy competition";
  return "trying new skills and following curiosity";
}

export function recommendProgramFromQuiz(age: string, interestHits: string[]): Program {
  const counts = scoreInterestTags(interestHits);
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
