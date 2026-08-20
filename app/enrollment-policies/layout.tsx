import type { Metadata } from "next";
import type { ReactNode } from "react";
import { generateMetadata as generateMeta } from "@/lib/metadata";

export const metadata: Metadata = generateMeta({
  title: "Enrollment Policies",
  description:
    "Kid Explorer Clubs enrollment policies including cancellation, transfer, absence, and age requirements.",
  path: "/enrollment-policies",
  keywords: [
    "enrollment policies",
    "cancellation policy",
    "refund policy",
    "transfer policy",
    "camp policies",
  ],
});

export default function EnrollmentPoliciesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
