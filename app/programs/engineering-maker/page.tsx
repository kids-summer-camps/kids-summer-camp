import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { HeroSection } from "@/components/home/HeroSection";
import { getProgramById } from "@/lib/programs-data";

export default function EngineeringMakerPage() {
  const program = getProgramById("engineering-maker");
  
  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1920&q=80"
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
          <div className="mt-12 p-8 bg-gradient-to-br from-[#00B894]/10 to-[#00B894]/5 rounded-[24px]">
            <h3 className="font-serif font-bold text-[#01325D] text-[24px] mb-4">
              Engineering Projects
            </h3>
            <ul className="space-y-3 font-mono text-[15px] text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#00B894] font-bold">→</span>
                <span>Build and test structural bridges using real engineering principles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00B894] font-bold">→</span>
                <span>Design and 3D print custom mechanical parts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00B894] font-bold">→</span>
                <span>Create working circuits and electronic devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00B894] font-bold">→</span>
                <span>Prototype inventions using maker tools and materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00B894] font-bold">→</span>
                <span>Compete in engineering design challenges</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="/contact"
              className="inline-block bg-[#00B894] text-white font-mono font-medium px-8 py-4 rounded-[12px] hover:bg-[#00A885] transition-colors"
            >
              Enroll in Engineering Maker Camp →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
