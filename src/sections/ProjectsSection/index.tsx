import DynamicTitle from '@/components/DynamicTitle';
import ProjectsShowcase from '@/components/ProjectsShowcase';

export default function ProjectsSection() {
  return (
    <section
      id='projects'
      className='flex min-h-screen w-full snap-start flex-col items-center justify-center md:pt-32 lg:pt-0 xl:scroll-m-28'
    >
      <DynamicTitle section='projects' />
      <ProjectsShowcase />
    </section>
  );
}
