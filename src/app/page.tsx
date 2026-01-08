import LandingSection from '@/sections/LandingSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';
import ProjectsSection from '@/sections/ProjectsSection';

export default function Home() {
  return (
    <main className='w-full max-w-full overflow-x-hidden px-2 lg:px-24'>
      <LandingSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
