"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProgramById } from "@/lib/programs-data";
import { motion } from "framer-motion";

export default function RoboticsMakerPage() {
  const program = getProgramById("robotics-maker");

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative">
        <div className="relative h-[767px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80"
              alt={program.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-[80px]">
            <h1 
              className="font-serif font-semibold text-white text-[48px] sm:text-[56px] lg:text-[64px] mb-6 leading-normal"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Robotics & Maker Camp
            </h1>
            
            <div className="font-mono font-medium text-[#0FD3C6] text-[20px] sm:text-[24px] mb-8 leading-normal whitespace-pre-line">
              {`Orbit Level: Orbit III – Inventors Lab\nTypical Ages: 8–11`}
            </div>
            
            <p className="font-mono font-normal text-white text-[16px] sm:text-[20px] max-w-[758px] mb-8 leading-normal">
              Students design robots, build engineering prototypes, and solve real-world challenges in the Kid
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white h-[48px] px-[21px] rounded-[14px] flex items-center justify-center hover:shadow-lg transition-all w-[231px]"
              >
                <span className="font-mono font-medium text-[#0FD3C6] text-[16px] leading-normal whitespace-nowrap">
                  Enroll Now
                </span>
              </Link>
              <Link
                href="#schedule"
                className="border-2 border-solid border-white h-[48px] px-[21px] rounded-[14px] flex items-center justify-center hover:bg-white/10 transition-all w-[278px]"
              >
                <span className="font-mono font-medium text-white text-[16px] leading-normal whitespace-nowrap">
                  View Camp Schedule
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Snapshot Bar */}
      <section className="bg-[#f7fbff] h-[140px] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-[25px] flex gap-[60px] items-start leading-normal overflow-hidden p-[10px] whitespace-nowrap">
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] shrink-0 leading-normal">
              Program
            </p>
            <p className="font-mono font-bold text-[#01325D] text-[18px] shrink-0 leading-normal">
              Robotics & Maker Camp
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] shrink-0 leading-normal">
              Orbit Level
            </p>
            <p className="font-mono font-bold text-[#01325D] text-[18px] shrink-0 leading-normal">
              Orbit II & III
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] shrink-0 leading-normal">
              Ages
            </p>
            <p className="font-mono font-bold text-[#01325D] text-[18px] shrink-0 leading-normal">
              8–11
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] shrink-0 leading-normal">
              Camp Time
            </p>
            <p className="font-mono font-bold text-[#01325D] text-[18px] shrink-0 leading-normal">
              9 AM – 3 PM
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] shrink-0 leading-normal">
              Skill Level
            </p>
            <p className="font-mono font-bold text-[#01325D] text-[18px] shrink-0 leading-normal">
              Beginner
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center justify-center overflow-hidden p-[10px] shrink-0">
            <p className="font-mono font-medium text-[#7e859d] text-[14px] shrink-0 leading-normal">
              Daily Academic Session
            </p>
            <p className="font-mono font-bold text-[#01325D] text-[18px] shrink-0 leading-normal">
              30–35 min Math & Reading
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="h-[420px] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-[80px] flex flex-col gap-[24px] items-center leading-normal text-center w-[822px]">
          <p className="font-mono font-bold text-[#1493e8] text-[36px] shrink-0 leading-normal">
            Where Young Engineers Build the Future
          </p>
          <div className="flex flex-col font-mono font-medium text-[16px] text-black w-[720px] shrink-0 leading-normal whitespace-pre-wrap">
            <p className="mb-0">At Kid Explorer Robotics & Maker Camp, students move beyond simple building projects and step into real engineering challenges. </p>
            <p className="mb-0"> </p>
            <p className="mb-0">Campers design robots, construct mechanical inventions, and test prototypes through collaborative challenges that encourage creativity, teamwork, and problem solving. </p>
            <p className="mb-0"> </p>
            <p>Each day blends innovation labs, outdoor play, and focused academic reinforcement so students leave camp stronger, more confident, and inspired.</p>
          </div>
        </div>
      </section>

      {/* What Campers Will Do - 5 Cards - Matching Figma 121:503 */}
      <section className="bg-[#f7fbff] h-[950px] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[103.5px] flex flex-col font-mono font-bold justify-center leading-normal text-[#01325d] text-[36px] text-center whitespace-nowrap">
          <p className="leading-normal">What Campers Will Do</p>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[190px] flex flex-wrap gap-[32px] items-start justify-center w-[1062px]">
          {[
            {
              title: "Robotics Engineering",
              description: "Students build and program robots that move, respond, and complete challenges.",
              image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80"
            },
            {
              title: "Maker Invention Lab",
              description: "Campers design creative prototypes and mechanical inventions.",
              image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80"
            },
            {
              title: "Drone Exploration",
              description: "Students learn the basics of drone flight and engineering.",
              image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80"
            },
            {
              title: "Engineering Challenges",
              description: "Teams compete in design competitions that test creativity and problem solving.",
              image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80"
            },
            {
              title: "Daily Academic Power Sessions",
              description: "Students build and program robots that move, respond, and complete challenges.",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
            },
          ].map((activity, index) => (
            <div key={index} className="flex flex-col gap-[12px] items-center shrink-0 w-[260px]">
              <div className="bg-white h-[220px] rounded-[16px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-full relative overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col font-mono font-bold justify-center leading-normal min-w-full shrink-0 text-[#01325d] text-[20px] text-center">
                <p className="leading-normal">{activity.title}</p>
              </div>
              <div className="flex flex-col font-mono font-normal justify-center leading-normal shrink-0 text-[#6a6f8c] text-[14px] text-center w-[242px]">
                <p className="leading-normal">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Schedule - Static Section - Matching Figma 137:536 */}
      <section className="bg-white h-[716px] relative overflow-hidden font-mono font-bold leading-normal text-[#01325d] text-center whitespace-nowrap">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[93.5px] flex flex-col justify-center text-[36px]">
          <p className="leading-normal">A Day in the Innovation Lab</p>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[177px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">9:00</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Launch Circle</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[231px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">9:15</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Math & Reading Power Session</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[285px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">9:45</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Robotics Lab</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[339px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">11:00</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Engineering Challenge</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[393px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">12:00</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Lunch</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[447px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">12:30</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Outdoor Sports</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[501px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">1:30</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Maker Build Lab</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[555px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">2:30</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Innovation Showcase</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-[609px] flex gap-[40px] items-start justify-center overflow-hidden px-[16px] py-[10px]">
          <div className="flex flex-col justify-center shrink-0 text-[20px]">
            <p className="leading-normal">3:00</p>
          </div>
          <div className="flex flex-col justify-center shrink-0 text-[16px]">
            <p className="leading-normal">Innovation Showcase</p>
          </div>
        </div>
      </section>

      {/* Skills Section - Matching Figma 142:450 */}
      <section className="bg-white h-[889px] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 bg-[rgba(15,211,198,0.1)] h-[795px] overflow-hidden rounded-[24px] top-[47px] w-[1280px]">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[103.5px] flex flex-col font-mono font-bold justify-center leading-normal text-[#0fd3c6] text-[36px] text-center whitespace-nowrap">
            <p className="leading-normal">Skills Campers Develop</p>
          </div>
          
          {/* 6 Skill Cards in specific layout - Grid positioning to prevent overlap */}
          <div className="absolute left-[80px] top-[179px] bg-white/60 border border-solid border-white rounded-[12px] shadow-[0px_8px_24px_4px_rgba(0,0,0,0.08)] px-[48px] py-[36px] flex flex-col gap-[9px] items-center justify-center w-[260px] h-[238px]">
            <div className="text-[64px] shrink-0">🔧</div>
            <div className="flex flex-col font-mono font-medium justify-center leading-normal text-[#01325d] text-[16px] text-center shrink-0">
              <p className="leading-normal">Engineering thinking</p>
            </div>
          </div>
          
          <div className="absolute left-[510px] top-[179px] bg-white/60 border border-solid border-white rounded-[12px] shadow-[0px_8px_24px_4px_rgba(0,0,0,0.08)] px-[48px] py-[36px] flex flex-col gap-[9px] items-center justify-center w-[260px] h-[238px]">
            <div className="text-[64px] shrink-0">🎯</div>
            <div className="flex flex-col font-mono font-medium justify-center leading-normal text-[#01325d] text-[16px] text-center shrink-0">
              <p className="mb-0">Problem</p>
              <p>solving</p>
            </div>
          </div>
          
          <div className="absolute left-[940px] top-[179px] bg-white/60 border border-solid border-white rounded-[12px] shadow-[0px_8px_24px_4px_rgba(0,0,0,0.08)] px-[48px] py-[36px] flex flex-col gap-[9px] items-center justify-center w-[260px] h-[238px]">
            <div className="text-[64px] shrink-0">🏆</div>
            <div className="flex flex-col font-mono font-medium justify-center leading-normal text-[#01325d] text-[16px] text-center shrink-0">
              <p className="leading-normal">Team collaboration</p>
            </div>
          </div>
          
          <div className="absolute left-[80px] top-[457px] bg-white/60 border border-solid border-white rounded-[12px] shadow-[0px_8px_24px_4px_rgba(0,0,0,0.08)] px-[48px] py-[36px] flex flex-col gap-[9px] items-center justify-center w-[260px] h-[238px]">
            <div className="text-[64px] shrink-0">⚡</div>
            <div className="flex flex-col font-mono font-medium justify-center leading-normal text-[#01325d] text-[16px] text-center shrink-0">
              <p className="mb-0">Creativity</p>
              <p>and design</p>
            </div>
          </div>
          
          <div className="absolute left-[510px] top-[457px] bg-white/60 border border-solid border-white rounded-[12px] shadow-[0px_8px_24px_4px_rgba(0,0,0,0.08)] px-[48px] py-[36px] flex flex-col gap-[9px] items-center justify-center w-[260px] h-[238px]">
            <div className="text-[64px] shrink-0">👍</div>
            <div className="flex flex-col font-mono font-medium justify-center leading-normal text-[#01325d] text-[16px] text-center shrink-0">
              <p className="leading-normal">Confidence presenting ideas</p>
            </div>
          </div>
          
          <div className="absolute left-[940px] top-[457px] bg-white/60 border border-solid border-white rounded-[12px] shadow-[0px_8px_24px_4px_rgba(0,0,0,0.08)] px-[48px] py-[36px] flex flex-col gap-[9px] items-center justify-center w-[260px] h-[238px]">
            <div className="text-[64px] shrink-0">📊</div>
            <div className="flex flex-col font-mono font-medium justify-center leading-normal text-[#01325d] text-[16px] text-center shrink-0 w-[176px]">
              <p className="leading-normal">Persistence through challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Environment Section */}
      <section className="bg-white h-[500px] relative overflow-hidden">
        <div className="absolute bg-gray-200 h-[339px] left-[730px] rounded-[24px] top-[54px] w-[522px]" />
        <div className="absolute left-[991px] -translate-x-1/2 -translate-y-1/2 top-[439px] flex flex-col font-mono font-normal justify-center leading-normal text-[15px] text-[rgba(19,26,48,0.5)] text-center w-[522px]">
          <p className="leading-normal">This is where kids feel safe to try, build, fail, improve, and succeed.</p>
        </div>
        <div className="absolute left-[297px] top-[158px] flex flex-col gap-[14px] items-start w-[410px]">
          <div className="flex flex-col font-mono font-bold justify-center leading-normal shrink-0 text-[#0fd3c6] text-[24px] w-[305px]">
            <p className="leading-normal">Built for Curiosity and Confidence</p>
          </div>
          <div className="flex flex-col font-mono font-medium justify-center leading-normal min-w-full shrink-0 text-[16px] text-black whitespace-pre-wrap">
            <p className="mb-0">• Hands-on learning   </p>
            <p className="mb-0">• Energetic environment   </p>
            <p className="mb-0">• Structured but joyful   </p>
            <p className="mb-0">• Collaborative   </p>
            <p>• Designed for exploration</p>
          </div>
        </div>
      </section>

      {/* Parent Note Section */}
      <section className="bg-[#f7fbff] h-[403px] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-[92px] flex flex-col gap-[16px] items-center overflow-hidden p-[10px] text-center">
          <div className="flex flex-col font-mono font-bold justify-center leading-normal shrink-0 text-[#01325d] text-[24px] whitespace-nowrap">
            <p className="leading-normal">Knowledge Gained — Not Lost</p>
          </div>
          <div className="flex flex-col font-mono font-normal justify-center leading-normal shrink-0 text-[#374151] w-[850px] whitespace-pre-wrap">
            <p className="mb-0 text-[16px]">
              Every Kid Explorer program includes daily math and reading power sessions lasting 20–45 minutes depending on Orbit level.
              <br />
              <br />
              These short, focused sessions help students maintain academic momentum while spending the rest of the day exploring robotics, invention, sports, and creativity.
            </p>
            <p className="mb-0 text-[16px]">&nbsp;</p>
            <p className="font-mono font-medium text-[18px]">We call it the No Snoozing Zone.</p>
          </div>
        </div>
      </section>

      {/* Call to Action - Matching Home Page CTA */}
      <section className="w-full lg:pt-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1360px] mx-auto bg-[#0FD3C6] rounded-tl-[48px] rounded-tr-[48px] sm:rounded-tl-[60px] sm:rounded-tr-[60px] lg:rounded-tl-[72px] lg:rounded-tr-[72px] px-6 py-10 sm:px-12 sm:py-16 lg:px-28 lg:py-20"
        >
          <div className="max-w-[1128px] mx-auto flex flex-col gap-4 sm:gap-5 lg:gap-6 items-center text-center">
            <h2 
              className="font-serif font-medium text-white text-[28px] sm:text-[36px] lg:text-[48px] leading-tight tracking-widest"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Launch Their Summer Now!!!
            </h2>
            <p className="font-mono font-medium text-white text-base sm:text-lg lg:text-[20px] leading-relaxed">
              Your child already has curiosity and talent. Give those sparks a place to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[33px] items-center justify-center mt-2 sm:mt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-[#1493E8] h-12 w-full sm:w-[200px] lg:w-[231px] rounded-[12px] px-6 flex items-center justify-center"
                >
                  <span className="font-mono font-medium text-white text-base whitespace-nowrap">
                    Enroll Now
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/programs"
                  className="bg-white/10 border border-white h-[47px] w-full sm:w-[200px] lg:w-[232px] rounded-[10px] px-6 flex items-center justify-center"
                >
                  <span className="font-mono font-medium text-white text-base whitespace-nowrap">
                    Explore Camps
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
