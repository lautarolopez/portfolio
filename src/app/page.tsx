import LandingSection from '@/sections/LandingSection';
import SkillsSection from '@/sections/SkillsSection';
import ExperienceSection from '@/sections/ExperienceSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <main className='no-scrollbar h-[97vh] snap-y snap-mandatory overflow-y-auto scroll-smooth px-8 pt-16 lg:p-24'>
      <LandingSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
