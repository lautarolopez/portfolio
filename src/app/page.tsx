import LandingSection from "@/sections/LandingSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between lg:p-24 px-8 pt-16 snap-y snap-mandatory h-[97vh] overflow-y-auto no-scrollbar scroll-smooth">
      <LandingSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
