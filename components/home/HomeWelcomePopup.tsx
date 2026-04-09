"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "kid-summercamp-2026-planning-popup-dismissed";

export function HomeWelcomePopup() {
  const titleId = useId();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      if (!window.localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    } finally {
      setReady(true);
    }
  }, []);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, dismiss]);

  if (!ready) return null;

  return (
    <AnimatePresence>
      {open && (
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
            onClick={dismiss}
          />
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
              onClick={dismiss}
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
                  href="/enroll"
                  onClick={dismiss}
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
              <p className="text-sm leading-normal">
                Inside the 2026 Summer Planning Guide:
              </p>
              <p className="mt-1 text-sm leading-normal">
                Every move…every space… every choice…turns Summertime into
                meaningful progress for your child
              </p>
              <p className="mt-3 text-base font-bold leading-normal sm:text-[20px]">
                Move early On your child&apos;s Summer 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
