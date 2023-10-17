import SkillsList from '@/components/SkillsList';
import DynamicTitle from '@/components/DynamicTitle';

export default function SkillsSection() {
  return (
    <section
      id='skills'
      className='flex min-h-screen w-full snap-start flex-col items-center justify-center pt-32 lg:pt-0'
    >
      <DynamicTitle section='skills' />
      <SkillsList />
    </section>
  );
}
