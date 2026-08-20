# KEC Clubs Website — Migration Plan (Confirmed Scope)

> **Purpose:** Working document capturing the confirmed scope and decisions for
> migrating the current camp-only site into the **Kid Explorer Clubs (KEC)**
> master brand. Supersedes/refines the earlier assumptions in `MIGRATION-HANDOFF.md`.
> See `KEC-BRIEF.md` for the brand strategy ("WHY").

---

## 1. Confirmed decisions (from client, Aug 2026)

### 1.1 The master brand model
- **Clubs** is the master organization / brand — **one site, one domain**.
- **Under Clubs** live separate **programs**: Afterschool (Tier 0+), Summer Camps,
  Winter camps, Spring camps, College Readiness.
- Each **program has its own missions**. "Mission" is a level *below* the program —
  the programs themselves are **not** "missions."
- Camps and Afterschool are **distinct and never mixed**. Camps migrate unchanged;
  Afterschool is its own program with its own academies + missions.

### 1.2 Design system
- **Use the existing camps design system** — the current look and feel is the
  source of truth (NOT the Figma `Colors` frame).
  - Current tokens: navy `#01325D`, teal `#0FD3C6`, blue `#1493E8`
  - Fonts: DM Sans / Roboto Serif / Roboto Mono / Poppins / Cinzel Decorative
  - Animations: Framer Motion; hero video + poster
- This **overrides** the earlier "Figma design wins" note in `MIGRATION-HANDOFF.md`
  §2. Do not replace the repo's visual identity with the Figma `Colors` frame
  (`#5992C4` / `#1E4767`).

### 1.3 Portal
- The **portal** (family login, child profiles, progression dashboard) is a
  **separate Next.js app** and is **out of scope for this repo**.
- No Supabase auth/tables/RLS needed here for the portal.

---

## 2. Target structure (one section per program, under Clubs)

```
kidexplorerclubs.com          (the Clubs master brand)
├── /                         Home — Clubs master (Tier 0+ launch focus)
├── /afterschool              Afterschool (Tier 0+) — its own academies + missions
├── /summer-camps             Summer Camps — existing 9 tracks migrate here unchanged
├── /winter-camps             Winter camps (new)
├── /spring-camps             Spring camps (new)
├── /college-readiness        College Readiness (future phase, new)
└── /portal                   (separate Next.js app — NOT in this repo)
```

- **One section per program.** No flat "missions" list at the top level.
- Summer camp tracks move from `/programs/*` to `/summer-camps/*` unchanged.

---

## 3. Current codebase map (what we're migrating FROM)

- **Stack:** Next.js 16 (App Router, Turbopack), Tailwind CSS 4, Framer Motion,
  Netlify.
- **Brand in code today:** "Kid Explorer Camps" (metadata, SEO, copy), though
  "Kid Explorer Club(s)" already appears in nav logo alt, footer copyright,
  experience page, career quiz.
- **Routes:** Home, Programs (+ 9 sub-tracks), Experience, FAQ, Enroll,
  Enrollment Policies, Contact, Summer Plan. No auth/database (lead-capture stub
  at `/summer-plan` + `/api/summer-plan-lead`).

### Homepage composition (`app/page.tsx`)
Hero → Welcome → MissionControl → RecommendedMission → ProgramCubes →
Reckoning → SummerInMotion → CTA (+ StructuredData, HomeWelcomePopup).

### The 9 summer camp tracks (`lib/programs-data.ts`, `app/programs/*`)
| Route | Title | Ages/Grades | Category | Orbit |
|---|---|---|---|---|
| `/programs/prelude-i` | Prelude I™ | Age 3 / Pre-K 3 | Early Childhood | Orbit I |
| `/programs/prelude-ii` | Prelude II™ | Age 4 / Pre-K 4 | Early Childhood | Orbit I |
| `/programs/first-flight` | Launchpad™ | Rising K–1 | Early Elementary | Orbit II |
| `/programs/cosmic-curiosity` | Zero™ | Rising 1–2 | Elementary | Orbit III |
| `/programs/power-play` | Apex Athletics™ | Rising K–7 | Sports | Orbit IV |
| `/programs/the-blueprint` | IdeaForge™ | Rising 4–8 | Innovation & Entrepreneurship | Orbit IV |
| `/programs/robotics-maker` | ROBOX™ | Rising 4–8 | STEM & Technology | Orbit IV |
| `/programs/engineering-maker` | Mechanica™ | Rising 4–8 | STEM & Engineering | Orbit IV |
| `/programs/esports-gaming` | Esports Lab™ | 8–14 | Gaming & Technology | Orbit IV |
| `/programs/the-vanguard` | The Vanguard™ | Ages 13+ | Leadership | Orbit V (hardcoded, unregistered) |

> Each track already carries its own "Reckoning™" mission fields in `programs-data.ts`.

### Static pages
Experience (founder story + DREME 9), FAQ, Enroll, Enrollment Policies, Contact,
Summer Plan. Redirects: `/philosophy` → experience#dreme-9, `/about` →
experience#founder-story.

### Key data files
- `lib/programs-data.ts` — central program data (`category`, `reckoning*` mission fields).
- `lib/metadata.ts` — `generateMetadata()` + per-program metadata.
- `lib/career-quiz.ts`, `lib/summer-plan-lead.ts` — quiz + lead-capture stubs.

---

## 4. Migration tasks (in order)

### A. Rebrand to Clubs master brand
1. **Metadata/SEO** — `app/layout.tsx`, `lib/metadata.ts`: "Kid Explorer Camps" →
   "Kid Explorer Clubs" (title, description, OG, siteName, keywords, authors).
2. **Nav** (`components/shared/Navigation.tsx`) — Clubs program structure. Keep
   the existing look/feel, change links to reflect programs (Home · Programs ·
   Experience · FAQ · Enroll CTA).
3. **Footer** — Clubs branding + program links regrouped (Summer Camps tracks
   under `/summer-camps`, add Afterschool/Winter/Spring/College links).
4. **Homepage** — Clubs master hero + sections. Tier 0+ launch focus ("The Mission
   Starts Here.") while keeping the camp design system.

### B. Add program routes
- `/afterschool` — Afterschool (Tier 0+) — academies + missions
- `/summer-camps` — move the 9 tracks here (from `/programs/*`)
- `/winter-camps`, `/spring-camps` — new placeholders
- `/college-readiness` — future-phase placeholder
- `/portal` — NOT here (separate app)

### C. Content
- **Sports Core + E-Gaming** content from `KEC-BRIEF.md` §6 → the track/academy
  pages (25-sport table, E-Gaming grade bands, Program Standard, facilities,
  signature line).

---

## 5. Out of scope (this repo)

- Portal: family login, child profiles, progression dashboard (separate app).
- Supabase auth / tables / RLS (belongs to the portal app).
- Changing the camps design system (keep the existing look and feel).

---

## 6. Open items / flags

- Confirm exact nav label set with the client (per `KEC-BRIEF.md` §4 nav).
- Sports Core content placement: which pages (academy/track pages) get the 25-sport
  table vs. the E-Gaming bands.
- Whether `/programs/*` routes should redirect to `/summer-camps/*` for SEO.
