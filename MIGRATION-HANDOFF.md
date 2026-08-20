# KEC Clubs Website Migration — Handoff Document

> **Purpose:** This file documents the migration plan agreed with the client so the
> Figma-connected session can pick up implementation directly. It is the source of
> truth for HOW we're restructuring the site. See `KEC-BRIEF.md` for the full brand
> strategy and content (the "WHY").
>
> **UPDATE (Aug 2026):** See **`MIGRATION-PLAN.md`** for the *confirmed* scope and
> decisions. Key corrections to the assumptions below:
> - **Clubs** = the master brand; under it are **programs** (Afterschool, Summer
>   Camps, Winter, Spring, College Readiness). Each program has its **own
>   missions** — programs are NOT "missions."
> - **Keep the existing camps design system** (navy `#01325D`, teal `#0FD3C6`,
>   blue `#1493E8`, DM Sans/Roboto/Cinzel, Framer Motion). This overrides the
>   "Figma design wins" note in §2 below — do NOT adopt the Figma `Colors` frame
>   (`#5992C4` / `#1E4767`).
> - The **portal** (login, child profiles, progression dashboard) is a **separate
>   Next.js app** — out of scope for this repo.

---

## 1. What we're building

Turn the current **camp-only** site into the **Kid Explorer Clubs (KEC)** master
brand — one site, multiple program "missions" living inside it:

```
kidexplorerclubs.com          (the club master brand)
├── /                         Tier 0+ Afterschool — hero "The Mission Starts Here." (launch focus)
├── /summer-missions          Summer Camp  (the summer chapter)
├── /winter-missions          Winter Break program (2–3 wks)
├── /spring-missions          Spring Break program (1 wk each)
├── /college-readiness        Future phase (grades 8–12)
└── /portal                   Family login, child profiles, progression dashboard
```

The child NEVER leaves KEC — they move to the next mission (Prelude → Tier 0+ →
Summer Missions → College Readiness → Alumni).

**Master brand is Tier 0+ Afterschool**, not Summer Camp. The site must reflect
that launch order: Summer is the *extension/application* chapter, not the headline.

---

## 2. The Figma design

- **File:** `https://www.figma.com/design/zuM1HGcE7gK3fOyEdGBm9n/Kid-Explorer-page`
- **Node:** `0-1` (top-level page / first frame)
- **Source of truth:** Pull design tokens, layout, components, and copy from this
  file using the Figma MCP tools (`figma_get_design_context` on `0-1`).

> The current repo's visual identity (DM Sans/Roboto Serif/Roboto Mono/Poppins/
> Cinzel Decorative, navy `#01325D`, teal `#0FD3C6`, blue `#1493E8`, hero video +
> poster, Framer Motion animations) should be **reconciled against the Figma file**
> before implementation. If the Figma design introduces new tokens/colors/fonts,
> those win — migrate the site to match the design, not the other way around.

---

## 3. Current codebase state (what we're migrating FROM)

- **Stack:** Next.js 16 (App Router, Turbopack), Tailwind CSS 4, Framer Motion,
  deployed to **Netlify**.
- **Pages:** Home, Programs (+ sub-pages), Experience, Philosophy, FAQ, Contact,
  Enroll, Summer Plan, Enrollment Policies.
- **No auth, no accounts, no database** — lead capture is a `sessionStorage` stub
  + dummy API route (`app/api/summer-plan-lead`, `lib/summer-plan-lead.ts`).
- **Branding is summer-first** (hero, nav, metadata, URLs) — this is the core of
  what must change.

### Key files
- `app/layout.tsx` — fonts, global metadata (URLs/metadata say "Kid Explorer Camps",
  need rebrand to Clubs)
- `app/page.tsx` — homepage section composition
- `components/shared/Navigation.tsx` — nav links: Home, Programs, Experience, FAQ
- `components/shared/Footer.tsx`
- `app/programs/*` — program pages
- `components/home/*` — homepage sections (Hero, Welcome, MissionControl,
  ProgramCubes, Reckoning, SummerInMotion, CTA)

---

## 4. Migration tasks (in order)

### A. Rebrand to Clubs master brand
1. **Nav** (`components/shared/Navigation.tsx`) — new structure per the mission
   language. Suggested:
   `Tier 0+ · Home · Mission Control · Academies · Daily Missions · Future
   Readiness · Summer Missions · Enrollment`.
2. **Metadata/SEO** (`app/layout.tsx`) — update site name, titles, descriptions,
   OG tags, keywords from "Kid Explorer Camps" → "Kid Explorer Clubs". Update
   `metadataBase`/URLs when the new domain is known.
3. **Homepage hero** — Tier 0+ launch copy. New hero: **"The Mission Starts Here."**
   (replaces any "The Mission Continues"/summer-first messaging).
4. **Homepage sections** — rename/reorganize into the branded sections:
   - Mission Briefing (what the program is)
   - Mission Control (choose your path)
   - Mission Tracks (academies)
   - Daily Missions (schedule)
   - Mission Launch (enrollment)
   - Mission Showcase / The Reckoning™️
   - Mission Gallery
   - Mission HQ (parent resources)

### B. Add the program "missions" as routes
Add new routes (all inside the same site, same domain, same eventual login):
- `/summer-missions` — move current summer camp content here (rename from
  summer-first homepage)
- `/winter-missions` — winter break (2–3 wks)
- `/spring-missions` — spring break (1 wk each)
- `/college-readiness` — future phase (grades 8–12)
- `/portal` — family login + child profiles + progression dashboard (Phase 1)

### C. Build the portal + progression (Phase 1, per client)
- Family login (accounts) — ships at Tier 0+ launch
- Child profiles — one account follows the child across programs (camp → club)
- Per-child **progression dashboard** tracking **Build → Apply → Advance**
- Mission stage: Prelude → Tier 0+ → Summer Missions → College Readiness → Alumni
- Seasonal cycle: Discover → Develop → Demonstrate → Explore

### D. Content
- **Sports Core** content (in `KEC-BRIEF.md` §6) → Mission Tracks / academy pages:
  the 25-sport table, E-Gaming band structure (K–2/3–5/6–8), Program Standard,
  facilities positioning, and the signature line.
- Rebrand copy per the language table in `KEC-BRIEF.md` §4.

---

## 5. Backend / data implications

The journey + progression dashboard need real state. This maps to the connected
**Supabase** MCP (already configured). Expect to need:
- **Auth** (Supabase Auth) for family login
- **Tables** (Supabase Postgres): `families`, `children`, `enrollments`,
  `missions`/`progression`, `milestones`, `skills`
- **RLS** so parents only access their own family/children data
- The existing dummy lead capture (`app/api/summer-plan-lead`) can be replaced or
  kept for non-logged-in lead gen.

> **Open question (client unclear):** one unified year-round enrollment system
> across all program windows, or keep current lead-capture for now? Flag before
> building the enrollment flow.

---

## 6. Design decisions to confirm during implementation

1. Confirm Figma design tokens (colors/fonts/spacing) — pull from the file and
   apply to the whole site. The Figma design wins over current repo styling.
2. Single page that houses all missions, or separate routes? (Recommended: separate
   routes under one domain + a "missions" hub page — matches the brief's nav.)
3. Portal UX — where in Figma is the portal/dashboard designed (if present)?
4. Navigation — confirm the exact link set + labels with the client before
   finalizing.

---

## 7. Definition of done (Phase 1 launch)

- [ ] Site rebranded to KEC Clubs master brand (nav, hero "The Mission Starts
      Here.", mission-named sections, metadata)
- [ ] Matches the Figma design (`0-1`)
- [ ] `/summer-missions`, `/winter-missions`, `/spring-missions`,
      `/college-readiness` routes exist (even if placeholder content)
- [ ] `/portal` with family login + child profiles + progression dashboard
- [ ] Sports Core content on academy/track pages
- [ ] Supabase tables + RLS in place for auth/progression
- [ ] Deployed (Netlify or as decided)

---

*Handoff: This document + `KEC-BRIEF.md` are the working agreement. Pull design
context from Figma node `0-1` and implement. Ask the client to confirm nav + portal
location in Figma if ambiguous.*
