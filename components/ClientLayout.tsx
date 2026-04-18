"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="min-h-screen pt-16 sm:pt-20">{children}</main>
      <Footer />
    </>
  );
}
