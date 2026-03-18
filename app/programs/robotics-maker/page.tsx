import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { HeroSection } from "@/components/home/HeroSection";
import { getProgramById } from "@/lib/programs-data";

export default function RoboticsMakerPage() {
  const program = getProgramById("robotics-maker");
  
  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80"
      />
      
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-[10%]">
          <ProgramDetail
            title={`${program.title} (${program.gradeRange || program.ages})`}
            subtitle={program.subtitle}
            description={program.description}
            ages={`Rising ${program.gradeRange || program.ages}`}
            hours={program.schedule[0]}
            location="Citywide Bus Stops, Chicago"
            tagline={program.tagline}
            href="/contact"
            image={program.image}
          />
          
          {/* Additional Program Details */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#6C5CE7]/10 to-[#6C5CE7]/5 rounded-[24px]">
            <h3 className="font-serif font-bold text-[#01325D] text-[24px] mb-4">
              What Campers Will Build
            </h3>
            <ul className="space-y-3 font-mono text-[15px] text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#6C5CE7] font-bold">→</span>
                <span>Autonomous robots using LEGO Mindstorms and Arduino kits</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6C5CE7] font-bold">→</span>
                <span>Line-following robots with sensor integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6C5CE7] font-bold">→</span>
                <span>Remote-controlled robotic arms and grippers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6C5CE7] font-bold">→</span>
                <span>Sumo robots for camp competitions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6C5CE7] font-bold">→</span>
                <span>AI-powered projects using machine learning basics</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="/contact"
              className="inline-block bg-[#6C5CE7] text-white font-mono font-medium px-8 py-4 rounded-[12px] hover:bg-[#5B4BD4] transition-colors"
            >
              Enroll in Robotics Maker Camp →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
