'use client';
import Image from 'next/image';
import content from '@/content.json';
import { useLang } from '@/contexts/LangContext';

const { projects } = content;

export default function ProjectsShowcase() {
  const { lang } = useLang();

  return (
    <article className='flex w-full min-w-full flex-col items-center justify-center px-6 py-4'>
      <span className='py-4 text-xl font-bold text-primary-dark dark:text-primary-light'>
        {projects.cat.title[lang]} | {projects.cat.year}
      </span>
      <span className='group relative flex flex-row justify-start gap-3 pb-7 md:flex-col md:items-center md:pb-0 md:pr-10'>
        <Image
          src={projects.cat.image}
          alt='projects'
          width={600}
          height={338}
          className='rounded-xl transition-all duration-500 ease-in-out group-hover:grayscale'
        />
        <span className='absolute left-0 top-0 z-50 flex aspect-video h-full max-h-[338px] w-full max-w-[600px] items-center justify-center rounded-xl bg-black/50 text-3xl text-white opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100'>
          <a href={projects.cat.link} target='blank'>
            {projects.cat.hoverText[lang]}
          </a>
        </span>
      </span>
      <span className='flex w-full flex-col items-center justify-center md:w-4/5 md:max-w-2xl'>
        <p className='py-4 text-lg text-slate-700 dark:text-slate-300'>
          {projects.cat.description[lang]}
        </p>
        <span className='flex flex-wrap gap-3'>
          {projects.cat.technologies.map((technology) => (
            <span
              key={`${technology}_cat`}
              className='rounded-full border-2 border-solid border-primary-dark px-2 py-1 font-bold text-primary-dark dark:border-primary-light dark:text-primary-light'
            >
              {technology}
            </span>
          ))}
        </span>
      </span>
    </article>
  );
}
