"use client";

import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 sm:pt-20">{children}</main>
      <Footer />
    </>
  );
}
