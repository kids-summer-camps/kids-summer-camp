"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/experience#founder-story");
  }, [router]);
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-white font-mono text-sm text-[#01325D]">
      Redirecting…
    </div>
  );
}
