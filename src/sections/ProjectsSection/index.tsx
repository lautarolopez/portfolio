'use client';
import { useEffect, useRef } from 'react';
import { useCurrentSection } from '@/contexts/CurrentSectionContext';
import DynamicTitle from '@/components/DynamicTitle';
import ProjectsShowcase from '@/components/ProjectsShowcase';

export default function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { setCurrentSection } = useCurrentSection();

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setCurrentSection('projects');
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={targetRef}
      id='projects'
      className='flex min-h-screen w-full snap-start flex-col items-center justify-center md:pt-32 lg:pt-0'
    >
      <DynamicTitle section='projects' />
      <ProjectsShowcase />
    </section>
  );
}
