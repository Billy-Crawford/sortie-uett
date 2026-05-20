import Hero from "@/components/sections/hero";
import CountdownSection from "@/components/sections/countdown";
import ProgrammeSection from "@/components/sections/programme";
import RoadmapSection from "@/components/sections/roadmap";
import ChecklistSection from "@/components/sections/checklist";
import FooterSection from "@/components/sections/footer";
import FloatingActions from "@/components/ui/floating-actions";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CountdownSection />
      <ProgrammeSection />
      <RoadmapSection />
      <ChecklistSection />
      <FooterSection />
      <FloatingActions />
    </main>
  );
}
