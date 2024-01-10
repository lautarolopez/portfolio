'use client';
import { useEffect, useRef } from 'react';
import { useCurrentSection } from '@/contexts/CurrentSectionContext';
import ExperiencesList from '@/components/ExperiencesList';
import DynamicTitle from '@/components/DynamicTitle';

export default function ExperienceSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { setCurrentSection } = useCurrentSection();

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setCurrentSection('experience');
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
      id='experience'
      className='flex min-h-screen w-full snap-start flex-col items-center justify-center md:pt-32 lg:pt-0 xl:scroll-m-28'
    >
      <DynamicTitle section='experience' />
      <ExperiencesList />
    </section>
  );
}
