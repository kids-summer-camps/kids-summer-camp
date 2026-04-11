"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CAREER_QUIZ_QUESTIONS,
  QUIZ_AGE_OPTIONS,
  computeCareerPathInsight,
  recommendProgramFromQuiz,
  type CareerPathInsight,
} from "@/lib/career-quiz";
import { submitSummerPlanLead, type SummerPlanLead } from "@/lib/summer-plan-lead";
import type { Program } from "@/lib/programs-data";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";

type Phase = "lead" | "success" | "quiz" | "results";

const fadeProps = (reduce: boolean) =>
  reduce
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 1 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] as const },
      };

export function SummerPlanFlow() {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("lead");
  const [lead, setLead] = useState<SummerPlanLead>({
    parentName: "",
    childName: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [quizStep, setQuizStep] = useState(0);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [ageInterests, setAgeInterests] = useState<string[]>([]);
  const [personalityPicks, setPersonalityPicks] = useState<string[][]>([]);
  const [recommended, setRecommended] = useState<Program | null>(null);
  const [pathInsight, setPathInsight] = useState<CareerPathInsight | null>(null);

  const totalQuizSteps = 1 + CAREER_QUIZ_QUESTIONS.length;
  const progress =
    selectedAge != null ? Math.min(100, ((quizStep + 1) / totalQuizSteps) * 100) : 0;

  const currentQuestion = CAREER_QUIZ_QUESTIONS[quizStep - 1];

  const finishQuiz = useCallback(
    (finalHits: string[]) => {
      const age = selectedAge;
      if (!age) return;
      const program = recommendProgramFromQuiz(age, finalHits);
      const childLabel = lead.childName.trim() || "your child";
      setPathInsight(computeCareerPathInsight(finalHits, childLabel));
      setRecommended(program);
      setPhase("results");
    },
    [selectedAge, lead.childName]
  );

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmed: SummerPlanLead = {
      parentName: lead.parentName.trim(),
      childName: lead.childName.trim(),
      email: lead.email.trim(),
    };
    if (!trimmed.parentName || !trimmed.childName || !trimmed.email) {
      setError("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    try {
      await submitSummerPlanLead(trimmed);
      setLead(trimmed);
      setPhase("success");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const selectAgeOption = (age: string, interests: string[]) => {
    setSelectedAge(age);
    setAgeInterests(interests);
    setPersonalityPicks([]);
    setQuizStep(1);
  };

  const selectPersonalityOption = (interests: string[]) => {
    const nextPicks = [...personalityPicks, interests];
    setPersonalityPicks(nextPicks);
    if (nextPicks.length === CAREER_QUIZ_QUESTIONS.length) {
      finishQuiz([...ageInterests, ...nextPicks.flat()]);
    } else {
      setQuizStep((s) => s + 1);
    }
  };

  const quizHeadline = useMemo(() => {
    if (phase !== "quiz") return "";
    if (quizStep === 0) return "A few questions about your child";
    return "Discover their path";
  }, [phase, quizStep]);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden sm:min-h-[calc(100vh-5rem)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(20,147,232,0.12),transparent_55%)]"
        aria-hidden
      />
      {/* Soft color washes — avoid large blur-3xl filters (very expensive on GPU) */}
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[#0fd3c6]/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-[#1493E8]/8"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <nav className="mb-8 font-mono text-sm text-[#01325D]/70">
          <Link href="/" className="text-[#1493E8] transition hover:text-[#0fd3c6]">
            Home
          </Link>
          <span className="mx-2 text-[#01325D]/40">/</span>
          <span className="text-[#01325D]">Summer plan</span>
        </nav>

        <AnimatePresence mode="wait">
          {phase === "lead" && (
            <motion.div
              key="lead"
              {...fadeProps(!!reduceMotion)}
              className="rounded-[28px] border border-[#1493E8]/12 bg-white p-6 shadow-[0_24px_64px_rgba(1,50,93,0.08)] sm:p-10"
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#0fd3c6]">
                2026 planning
              </p>
              <h1
                className="mt-3 font-serif text-[28px] font-medium leading-tight text-[#01325D] sm:text-[36px] lg:text-[42px]"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                Start your summer plan
              </h1>
              <p className="mt-4 font-mono text-[15px] leading-relaxed text-[#01325D]/80">
                Tell us a little about your family. We&apos;ll keep you in the loop for Summer 2026 —
                and you can take a short quiz next to see which camp style fits your child best.
              </p>

              <form onSubmit={handleLeadSubmit} className="mt-8 flex flex-col gap-5">
                <label className="block">
                  <span className="mb-1.5 block font-mono text-sm font-medium text-[#01325D]">
                    Your name
                  </span>
                  <input
                    type="text"
                    name="parentName"
                    autoComplete="name"
                    value={lead.parentName}
                    onChange={(e) => setLead((p) => ({ ...p, parentName: e.target.value }))}
                    className="w-full rounded-xl border border-[#01325D]/15 bg-white px-4 py-3 font-mono text-[15px] text-[#01325D] outline-none transition focus:border-[#1493E8] focus:ring-2 focus:ring-[#1493E8]/20"
                    placeholder="Alex Morgan"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-sm font-medium text-[#01325D]">
                    Child&apos;s name
                  </span>
                  <input
                    type="text"
                    name="childName"
                    autoComplete="off"
                    value={lead.childName}
                    onChange={(e) => setLead((p) => ({ ...p, childName: e.target.value }))}
                    className="w-full rounded-xl border border-[#01325D]/15 bg-white px-4 py-3 font-mono text-[15px] text-[#01325D] outline-none transition focus:border-[#1493E8] focus:ring-2 focus:ring-[#1493E8]/20"
                    placeholder="Jordan"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-sm font-medium text-[#01325D]">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={lead.email}
                    onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                    className="w-full rounded-xl border border-[#01325D]/15 bg-white px-4 py-3 font-mono text-[15px] text-[#01325D] outline-none transition focus:border-[#1493E8] focus:ring-2 focus:ring-[#1493E8]/20"
                    placeholder="you@example.com"
                  />
                </label>

                {error && (
                  <p className="font-mono text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#0fd3c6] font-mono text-base font-semibold text-white shadow-[0_8px_24px_rgba(15,211,198,0.35)] transition hover:bg-[#0cc0b4] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Saving…" : "Continue"}
                </button>
              </form>
            </motion.div>
          )}

          {phase === "success" && (
            <motion.div
              key="success"
              {...fadeProps(!!reduceMotion)}
              className="rounded-[28px] border border-[#1493E8]/12 bg-white p-6 text-center shadow-[0_24px_64px_rgba(1,50,93,0.08)] sm:p-12"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0fd3c6]/15">
                <CheckCircleIcon className="h-9 w-9 text-[#0fd3c6]" aria-hidden />
              </div>
              <h2
                className="mt-6 font-serif text-[26px] font-medium text-[#01325D] sm:text-[32px]"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                You&apos;re in, {lead.parentName.split(" ")[0] || "friend"}!
              </h2>
              <p className="mx-auto mt-4 max-w-md font-mono text-[15px] leading-relaxed text-[#01325D]/80">
                Next, take a quick quiz to explore the kinds of paths {lead.childName || "your child"}{" "}
                might love — we&apos;ll suggest a camp that lines up with their strengths.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setQuizStep(0);
                    setSelectedAge(null);
                    setAgeInterests([]);
                    setPersonalityPicks([]);
                    setPathInsight(null);
                    setPhase("quiz");
                  }}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#1493E8] px-8 font-mono text-base font-semibold text-white shadow-md transition hover:bg-[#1280cc]"
                >
                  Take the quiz
                </button>
                <Link
                  href="/enroll"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl border-2 border-[#01325D]/15 bg-transparent px-8 font-mono text-base font-medium text-[#01325D] transition hover:border-[#1493E8]/40 hover:bg-[#1493E8]/5"
                >
                  Skip for now
                </Link>
              </div>
            </motion.div>
          )}

          {phase === "quiz" && (
            <motion.div
              key="quiz"
              {...fadeProps(!!reduceMotion)}
              className="rounded-[28px] border border-[#1493E8]/12 bg-white p-6 shadow-[0_24px_64px_rgba(1,50,93,0.08)] sm:p-10"
            >
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#0fd3c6]">
                    {quizHeadline}
                  </p>
                  <span className="font-mono text-xs text-[#01325D]/50">
                    {selectedAge ? `${quizStep + 1} / ${totalQuizSteps}` : "—"}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#01325D]/10">
                  {/* CSS width transition — avoids spring layout thrash from framer on every step */}
                  <div
                    className="h-full max-w-full rounded-full bg-linear-to-r from-[#1493E8] to-[#0fd3c6] transition-[width] duration-300 ease-out motion-reduce:transition-none"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* No nested AnimatePresence here — exit+enter stacking was duplicating option text in Chrome */}
              <div
                key={quizStep === 0 ? "quiz-step-age" : `quiz-step-${currentQuestion?.id ?? "q"}`}
                className="relative isolate"
              >
                {quizStep === 0 ? (
                  <>
                    <h2 className="font-serif text-[24px] font-medium text-[#01325D] sm:text-[28px]">
                      What age group is your child in?
                    </h2>
                    <p className="mt-2 font-mono text-sm text-[#01325D]/70">
                      We use this to match camps built for their stage.
                    </p>
                    <ul className="mt-8 flex flex-col gap-3">
                      {QUIZ_AGE_OPTIONS.map((opt) => (
                        <li key={opt.age}>
                          <button
                            type="button"
                            onClick={() => selectAgeOption(opt.age, opt.interests)}
                            className="w-full rounded-xl border border-[#01325D]/10 bg-[#f7fbff] px-4 py-4 text-left font-mono text-[15px] font-medium leading-snug text-[#01325D] transition hover:border-[#1493E8]/35 hover:bg-white hover:shadow-md"
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  currentQuestion && (
                    <>
                      <h2 className="font-serif text-[24px] font-medium text-[#01325D] sm:text-[28px]">
                        {currentQuestion.question}
                      </h2>
                      {currentQuestion.subtitle && (
                        <p className="mt-2 font-mono text-sm text-[#01325D]/70">{currentQuestion.subtitle}</p>
                      )}
                      <ul className="mt-8 flex flex-col gap-3">
                        {currentQuestion.options.map((opt, idx) => (
                          <li key={`${currentQuestion.id}-${idx}`}>
                            <button
                              type="button"
                              onClick={() => selectPersonalityOption(opt.interests)}
                              className="w-full rounded-xl border border-[#01325D]/10 bg-[#f7fbff] px-4 py-4 text-left font-mono text-[15px] leading-snug text-[#01325D] transition hover:border-[#1493E8]/35 hover:bg-white hover:shadow-md"
                            >
                              {opt.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )
                )}
              </div>

              {quizStep > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    if (quizStep === 1) {
                      setQuizStep(0);
                      setSelectedAge(null);
                      setAgeInterests([]);
                      setPersonalityPicks([]);
                    } else {
                      setPersonalityPicks((p) => p.slice(0, -1));
                      setQuizStep((s) => s - 1);
                    }
                  }}
                  className="mt-8 font-mono text-sm text-[#1493E8] underline-offset-4 hover:underline"
                >
                  Back
                </button>
              )}
            </motion.div>
          )}

          {phase === "results" && recommended && pathInsight && (
            <motion.div
              key="results"
              {...fadeProps(!!reduceMotion)}
              className="overflow-hidden rounded-[28px] border border-[#1493E8]/12 bg-white shadow-[0_24px_64px_rgba(1,50,93,0.1)]"
            >
              <div className="border-b border-[#1493E8]/10 bg-[#f7fbff] px-6 py-8 sm:px-10 sm:py-10">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#0fd3c6]">
                  Career path snapshot
                </p>
                <h2
                  className="mt-2 font-serif text-2xl font-medium leading-tight text-[#01325D] sm:text-[28px]"
                  style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
                >
                  {pathInsight.pathTitle}
                </h2>
                <p className="mt-4 font-mono text-[15px] leading-relaxed text-[#01325D]/85">
                  {pathInsight.pathSummary}
                </p>
                <p className="mt-5 font-mono text-xs font-medium uppercase tracking-wider text-[#01325D]/50">
                  Top strengths from their answers
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {pathInsight.strengthLabels.map((label) => (
                    <li
                      key={label}
                      className="rounded-full border border-[#1493E8]/20 bg-white px-3 py-1.5 font-mono text-xs text-[#01325D]"
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-video w-full sm:aspect-2/1">
                <Image
                  src={recommended.cardImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#01325d]/90 via-[#01325d]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <SparklesIcon className="h-6 w-6 shrink-0" aria-hidden />
                    <span className="font-mono text-xs font-medium uppercase tracking-wider">
                      Camp that fits this path
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-3xl font-medium text-white sm:text-4xl">
                    {recommended.title}
                  </h2>
                  <p className="mt-1 font-mono text-sm text-white/85">
                    For {lead.childName || "your child"} · {recommended.gradeRange || recommended.ages}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <p className="font-mono text-[15px] leading-relaxed text-[#01325D]/85">
                  {recommended.tagline}
                </p>
                <p className="mt-4 font-mono text-sm leading-relaxed text-[#01325D]/75">
                  {recommended.description.slice(0, 220)}
                  {recommended.description.length > 220 ? "…" : ""}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={recommended.href}
                    className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-xl bg-[#0fd3c6] font-mono text-base font-semibold text-white shadow-md transition hover:bg-[#0cc0b4]"
                  >
                    View program
                  </Link>
                  <Link
                    href="/enroll"
                    className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-xl border-2 border-[#1493E8] font-mono text-base font-semibold text-[#1493E8] transition hover:bg-[#1493E8]/5"
                  >
                    Enroll
                  </Link>
                </div>
                <p className="mt-8 text-center font-mono text-xs text-[#01325D]/45">
                  Prefer to browse everything?{" "}
                  <Link href="/programs" className="text-[#1493E8] hover:underline">
                    All programs
                  </Link>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
