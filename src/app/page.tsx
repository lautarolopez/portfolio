import LandingSection from "@/sections/LandingSection";
import SkillsSection from "@/sections/SkillsSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between lg:p-24 p-8">
      <LandingSection />
      <SkillsSection />
    </main>
  );
}
