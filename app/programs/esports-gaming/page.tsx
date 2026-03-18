import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { HeroSection } from "@/components/home/HeroSection";
import { getProgramById } from "@/lib/programs-data";

export default function EsportsGamingPage() {
  const program = getProgramById("esports-gaming");
  
  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80"
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
          <div className="mt-12 p-8 bg-gradient-to-br from-[#E84393]/10 to-[#E84393]/5 rounded-[24px]">
            <h3 className="font-serif font-bold text-[#01325D] text-[24px] mb-4">
              Esports & Gaming Skills
            </h3>
            <ul className="space-y-3 font-mono text-[15px] text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#E84393] font-bold">→</span>
                <span>Strategic gameplay in team-based competitive environments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E84393] font-bold">→</span>
                <span>Learn fundamentals of game design and development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E84393] font-bold">→</span>
                <span>Develop communication and leadership skills through team play</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E84393] font-bold">→</span>
                <span>Understand digital citizenship and online sportsmanship</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E84393] font-bold">→</span>
                <span>Explore career paths in the growing esports industry</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="/contact"
              className="inline-block bg-[#E84393] text-white font-mono font-medium px-8 py-4 rounded-[12px] hover:bg-[#D63079] transition-colors"
            >
              Enroll in E Sports Gaming →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
