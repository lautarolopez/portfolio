'use client';
import { motion } from 'framer-motion';
import ResumeButton from '@/components/ResumeButton';
import LandingImage from '@/components/LandingImage';
import { useLang } from '@/contexts/LangContext';
import content from '@/content.json';

export default function LandingSection() {
  const { lang } = useLang();

  return (
    <section
      id='home'
      className='flex min-h-[97vh] w-full snap-center flex-col-reverse items-center justify-center lg:flex-row lg:justify-around lg:pt-0'
    >
      <div>
        <motion.h1
          className='bg-gradient-to-r from-pink-400 to-white bg-clip-text text-3xl font-bold text-transparent md:text-6xl'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          {content.landing.title}
        </motion.h1>
        <motion.h2
          className='text-2xl font-bold text-white md:text-4xl'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          {content.landing.subtitle[lang]}
        </motion.h2>
        <motion.p
          className='mt-5 text-lg text-slate-800 dark:text-slate-300 md:text-xl lg:w-[30vw]'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          {content.landing.paragraph[lang]}
        </motion.p>
        <motion.span
          className='mt-5 flex items-center justify-around gap-3 lg:w-[30vw]'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: 'easeOut' }}
        >
          <a href='#' className='text-lg font-bold md:text-xl'>
            {content.landing.contactButton[lang]}
          </a>
          <ResumeButton />
        </motion.span>
      </div>
      <LandingImage />
    </section>
  );
}
