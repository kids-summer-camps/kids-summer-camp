"use client";

import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { HeroSection } from "@/components/home/HeroSection";
import { programs } from "@/lib/programs-data";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Video Hero Section */}
      <HeroSection
        videoSrc="/videos/White%20kid%20in%20space.MP4"
        posterSrc="/images/posters/white-kid-space-poster.jpg"
      />

      {/* Intro Cards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Blue Gradient Card */}
            <div 
              className="rounded-[40px] p-8 sm:p-10 lg:p-12 w-full lg:flex-[0.376] min-h-[292px] flex items-center"
              style={{ background: "linear-gradient(200.642deg, rgb(36, 167, 255) 16.679%, rgb(2, 107, 177) 92.778%)" }}
            >
              <p className="font-mono font-medium text-white text-[15px] leading-relaxed">
                Summertime is where, our campers build more than memories they build mindsets.{" "}
                From science to sport, from imagination to leadership, every program at Kid Explorer Camp is a blueprint for becoming.
              </p>
            </div>

            {/* White Card with Shadow */}
            <div className="rounded-[40px] p-8 sm:p-10 lg:p-12 w-full lg:flex-[0.624] min-h-[292px] flex items-center bg-white shadow-[0px_8px_13.7px_0px_rgba(0,0,0,0.1)]">
              <p className="font-mono font-medium text-black text-[15px] leading-relaxed">
                Every camper leaves with more than memories — they leave with skills, mindset, and vision. Sports, STEM, leadership labs, and creative challenges all become launchpads for life, preparing kids to dream big, execute boldly, and lead the way.{" "}
                <br /><br />
                At Kid Explorer Camps, summer isn&apos;t a pause. It&apos;s a launch sequence, and every child is a Day One, ready to explore, create, and lead the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          {programs.map((program, index) => (
            <ProgramDetail
              key={program.id}
              title={`${program.title} (${program.gradeRange || program.ages})`}
              subtitle={program.subtitle}
              description={program.description}
              ages={`Rising ${program.gradeRange || program.ages}`}
              hours={program.schedule[0] || "9 AM – 3 PM"}
              location="Citywide Bus Stops, Chicago"
              tagline={program.tagline}
              href={program.href}
              image={program.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
