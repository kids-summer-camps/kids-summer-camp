"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const STORAGE_KEY = "kid-summercamp-2026-planning-popup-dismissed";

type PlanningGuidePanelProps = {
  titleId: string;
  onDismiss: () => void;
};

function PlanningGuidePanel({ titleId, onDismiss }: PlanningGuidePanelProps) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="relative z-101 w-full max-w-[896px] overflow-hidden rounded-[24px] bg-white shadow-2xl sm:rounded-[32px] lg:rounded-[36px]"
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 12 }}
      transition={{ type: "spring", damping: 26, stiffness: 320 }}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white transition hover:bg-black/50"
        aria-label="Close"
      >
        <span className="text-xl leading-none" aria-hidden>
          ×
        </span>
      </button>

      <div className="relative aspect-1436/667 w-full">
        <Image
          src="/images/summer-planning-popup-hero.jpg"
          alt="Kid Explorer Clubs — ReThink Possibility. Summer planning guide promotion."
          fill
          className="object-cover object-center"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-end px-4 py-2 sm:p-6 md:p-8">
          <Link
            href="/summer-plan"
            onClick={onDismiss}
            className="inline-flex h-8 min-h-[32px] md:h-10 md:min-h-[42px] items-center justify-center rounded-[20px] bg-[#0fd3c6] px-5 text-center font-mono text-sm font-medium uppercase tracking-tight text-white shadow-md transition hover:bg-[#0cc0b4] sm:h-11 sm:px-6 sm:text-base"
          >
            Start my summer plan
          </Link>
        </div>
      </div>

      <div className="bg-white px-4 py-5 text-center font-mono text-black sm:px-8 sm:py-6">
        <p id={titleId} className="sr-only">
          2026 Summer Planning Guide
        </p>
        <p className="text-sm leading-normal">Inside the 2026 Summer Planning Guide:</p>
        <p className="mt-1 text-sm leading-normal">
          Every move…every space… every choice…turns Summertime into meaningful progress for your
          child
        </p>
        <p className="mt-3 text-base font-bold leading-normal sm:text-[20px]">
          Move early On your child&apos;s Summer 2026
        </p>
      </div>
    </motion.div>
  );
}

export function HomeWelcomePopup() {
  const titleId = useId();
  const [ready, setReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      const dismissed = window.localStorage.getItem(STORAGE_KEY);
      if (dismissed) {
        setFabVisible(true);
        setModalOpen(false);
      } else {
        setModalOpen(true);
        setFabVisible(false);
      }
    } catch {
      setModalOpen(true);
      setFabVisible(false);
    } finally {
      setReady(true);
    }
  }, []);

  const closeModal = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setModalOpen(false);
    setFabVisible(true);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [modalOpen, closeModal]);

  if (!ready) return null;

  const showFab = fabVisible && !modalOpen;

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            role="presentation"
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
              aria-label="Close dialog"
              onClick={closeModal}
            />
            <PlanningGuidePanel titleId={titleId} onDismiss={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFab && (
          <motion.div
            className="fixed bottom-5 right-5 z-60 sm:bottom-8 sm:right-8"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ type: "spring", damping: 22, stiffness: 320 }}
          >
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0fd3c6] text-white shadow-lg ring-2 ring-white/40 transition hover:bg-[#0cc0b4] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1493E8] sm:h-16 sm:w-16"
              aria-haspopup="dialog"
              aria-label="Open 2026 Summer Planning Guide"
            >
              <CalendarDaysIcon
                className="h-7 w-7 sm:h-8 sm:w-8 transition group-hover:scale-105"
                aria-hidden
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
