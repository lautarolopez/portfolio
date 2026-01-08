'use client';
import { useEffect, useRef } from 'react';
import { useCurrentSection } from '@/contexts/CurrentSectionContext';
import DynamicTitle from '@/components/DynamicTitle';
import ContactSubtitle from '@/components/ContactSubtitle';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { setCurrentSection } = useCurrentSection();

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setCurrentSection('contact');
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
      id='contact'
      className='flex min-h-screen w-full flex-col items-center justify-center py-16 lg:py-24'
    >
      <DynamicTitle section='contact' />
      <ContactSubtitle />
      <ContactForm />
    </section>
  );
}
