"use client";

import React from "react";
import { FadeIn } from "@/components/animations";

export default function EnrollmentPoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="w-full flex justify-center pt-4 sm:pt-6">
        <div className="relative w-full max-w-[1400px] mx-auto h-[280px] sm:h-[353px] rounded-tl-[40px] rounded-tr-[40px] sm:rounded-tl-[60px] sm:rounded-tr-[60px] overflow-hidden">
          <div className="absolute inset-0 bg-[#1493E8]" />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16 px-8 sm:px-16 lg:px-24">
            <FadeIn direction="up" delay={0}>
              <p className="font-sans font-extrabold text-white text-base sm:text-xl leading-[50px] uppercase">
                Terms & Conditions
              </p>
              <h1 className="font-sans font-extrabold text-white text-3xl sm:text-[40px] leading-[50px]">
                Enrollment Policies
              </h1>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 max-w-[900px]">
          <FadeIn direction="up" delay={0.1}>
            {/* Cancellation Policy */}
            <div className="mb-10">
              <h2 className="font-sans font-semibold text-[#0FD3C6] text-xl sm:text-2xl leading-8 mb-4">
                Cancellation Policy
              </h2>
              <p className="font-sans text-black text-sm sm:text-base leading-8 mb-4">
                To deliver high-quality programs for, the Kid Explorer Camps cancellation policy is designed to protect the integrity of our camp programming. We incur significant non-refundable costs in advance of the camp season and scheduled sessions, and as such, the below cancellation policy will apply in the event that plans change affecting your camper&apos;s ability to attend camp.
              </p>

              <p className="font-sans text-black text-sm sm:text-base leading-8 mb-2">
                Before March 18, 2026:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li className="font-sans text-black text-sm sm:text-base leading-8">
                  A 100% credit towards any future Kid Explorer Camps or Kid Explorer Clubs (Afterschool) program that can be used through the 2027 season; OR,
                </li>
                <li className="font-sans text-black text-sm sm:text-base leading-8">
                  A refund minus a $100 cancellation fee per camp session cancelled.
                </li>
              </ul>

              <p className="font-sans text-black text-sm sm:text-base leading-8 mb-2">
                Between March 18, 2026 and up to 14 days prior to start of registered session:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li className="font-sans text-black text-sm sm:text-base leading-8">
                  A 100% credit towards any Kid Explorer Camps or Kid Explorer Clubs (Afterschool) program that can be used through the 2027 season.
                </li>
                <li className="font-sans text-black text-sm sm:text-base leading-8">
                  No refund will be issued.
                </li>
              </ul>

              <p className="font-sans text-black text-sm sm:text-base leading-8 mb-2">
                Less than 14 days before the start of a registered session:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li className="font-sans text-black text-sm sm:text-base leading-8">
                  A 50% credit towards any future Kid Explorer Camps or Kid Explorer Clubs Afterschool program that can be used through the 2027 season.
                </li>
                <li className="font-sans text-black text-sm sm:text-base leading-8">
                  No refund will be issued.
                </li>
              </ul>

              <p className="font-sans text-black text-sm sm:text-base leading-8 mb-2">
                On or after the start of a registered session:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li className="font-sans text-black text-sm sm:text-base leading-8">
                  No credit or refund will be issued for cancellations on the day of, or anytime after, the start of the registered session.
                </li>
              </ul>

              <p className="font-sans text-black text-sm sm:text-base leading-8">
                Credit is issued to the associated Kid Explorer Camps account on file. Credit can be used toward Kid Explorer Camps or Kid Explorer Clubs (Afterschool) tuition and add-ons for any available 2026 or 2027 camp session(s). Please note that any existing credit on Kid Explorer Camps accounts is non-refundable.
              </p>
            </div>

            {/* Transfer Policy */}
            <div className="mb-10">
              <h2 className="font-sans font-semibold text-[#0FD3C6] text-xl sm:text-2xl leading-8 mb-4">
                Transfer Policy
              </h2>
              <p className="font-sans text-black text-sm sm:text-base leading-8">
                Transfers between programs are allowed, as long as capacity exists in the program being transferred into.
              </p>
            </div>

            {/* Camp Absence Policy */}
            <div className="mb-10">
              <h2 className="font-sans font-semibold text-[#0FD3C6] text-xl sm:text-2xl leading-8 mb-4">
                Camp Absence Policy
              </h2>
              <p className="font-sans text-black text-sm sm:text-base leading-8">
                No refund or credit will be provided for any missed day(s) of camp programming.
              </p>
            </div>

            {/* Minimum Age & Potty-Training Policy */}
            <div className="mb-10">
              <h2 className="font-sans font-semibold text-[#0FD3C6] text-xl sm:text-2xl leading-8 mb-4">
                Minimum Age & Potty-Training Policy
              </h2>
              <p className="font-sans text-black text-sm sm:text-base leading-8 mb-4">
                Campers must be at least 3 years old by their first day of camp. In addition, all campers are expected to be fully potty-trained, meaning they are consistently able to recognize when they need to go to the bathroom and can complete toileting activities independently. We know that even potty-trained campers may occasionally have accidents, so families with younger campers and campers with a recent history of accidents are asked to pack an extra set of clothes just in case. If a camper has an accident during the camp day, Kid Explorer Camp staff will help the camper change their clothes, encouraging independence as much as possible, and a member of our Leadership Team will notify the camper&apos;s primary caregiver.
              </p>
              <p className="font-sans text-black text-sm sm:text-base leading-8 mb-4">
                If a camper does not meet the outlined age requirement or potty-training policy, we reserve the right to dismiss the camper from programming for some or all of the remaining camp season. Dismissal determinations will be made by Kid Explorer Camp on a case-by-case basis, taking into account all relevant factors, including our on-site staff&apos;s assessment of their ability to provide ongoing support to a camper. Dismissals made in accordance with these policies are not eligible for refunds (including partial refunds) or credit towards a future program.
              </p>
              <p className="font-sans text-black text-sm sm:text-base leading-8">
                If you have further questions, please contact our customer care team at{" "}
                <a href="tel:+18005532070" className="text-[#1493E8] hover:underline">
                  (800) 553-2070
                </a>{" "}
                or email us at{" "}
                <a href="mailto:customercare@kidexplorercamps.com" className="text-[#1493E8] hover:underline">
                  customercare@kidexplorercamps.com
                </a>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
