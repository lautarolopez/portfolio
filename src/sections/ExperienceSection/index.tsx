import ExperiencesList from '@/components/ExperiencesList';
import DynamicTitle from '@/components/DynamicTitle';

export default function ExperienceSection() {
  return (
    <section
      id='experience'
      className='flex w-full snap-start flex-col items-center justify-center pt-32 md:min-h-[97vh] lg:pt-0 xl:scroll-m-28'
    >
      <DynamicTitle section='experience' />
      <ExperiencesList />
    </section>
  );
}
