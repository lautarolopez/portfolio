'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ResumeButton from '@/components/ResumeButton';
import LandingImage from '@/components/LandingImage';
import { useLang } from '@/contexts/LangContext';
import { useCurrentSection } from '@/contexts/CurrentSectionContext';
import content from '@/content.json';

export default function LandingSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();
  const { setCurrentSection } = useCurrentSection();

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setCurrentSection('home');
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
      id='home'
      className='mx-auto flex min-h-screen w-full max-w-6xl snap-center flex-col-reverse items-center justify-center lg:flex-row lg:justify-around lg:pt-0'
    >
      <div>
        <motion.h1
          className='w-fit bg-gradient-to-r from-pink-400 to-white bg-clip-text text-3xl font-bold text-transparent md:text-6xl'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          {content.landing.title}
        </motion.h1>
        <motion.h2
          className='w-fit text-2xl font-bold text-white md:text-4xl'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          {content.landing.subtitle[lang]}
        </motion.h2>
        {/* <motion.p
          className='mt-5 text-lg text-slate-800 dark:text-slate-300 md:text-xl lg:w-[30vw]'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          {content.landing.paragraph[lang]}
        </motion.p> */}
        <motion.span
          className='mt-5 flex items-center justify-around gap-3'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          <a href='#contact' className='text-lg font-bold md:text-xl'>
            {content.landing.contactButton[lang]}
          </a>
          <ResumeButton />
        </motion.span>
      </div>
      <LandingImage />
    </section>
  );
}
