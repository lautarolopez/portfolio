import ExperiencesList from '@/components/ExperiencesList';
import DynamicTitle from '@/components/DynamicTitle';

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='flex min-h-screen w-full snap-start flex-col items-center justify-center md:pt-32 lg:pt-0 xl:scroll-m-28'
    >
      <DynamicTitle section='experience' />
      <ExperiencesList />
    </section>
  );
}
