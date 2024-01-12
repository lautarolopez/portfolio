import LandingSection from '@/sections/LandingSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';
import ProjectsSection from '@/sections/ProjectsSection';

export default function Home() {
  return (
    <main className='no-scrollbar h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth px-2 pt-16 lg:p-24'>
      <LandingSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
