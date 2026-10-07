import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kid Explorer Camps for general questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[720px] mx-auto px-6 sm:px-8 py-16 sm:py-24">
        <h1 className="font-mono font-bold text-[#01325D] text-[32px] sm:text-[40px] mb-4">Contact us</h1>
        <p className="font-mono text-[#3A5068] text-base leading-relaxed mb-8">
          For enrollment, use the{" "}
          <Link href="/enroll" className="text-[#1493E8] font-bold hover:underline">
            enroll page
          </Link>
          . Use this page for general questions, partnerships, or media.
        </p>
        <p className="font-mono text-[#3A5068] text-sm leading-relaxed">
          Replace this section with your preferred contact details (email, phone, form) when ready.
        </p>
      </div>
    </div>
  );
}
