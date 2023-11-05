'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useAnimate } from 'framer-motion';
import content from '@/content.json';
import { useLang } from '@/contexts/LangContext';

const {
  experience: { experiences },
} = content;

export default function ExperiencesList() {
  const [selectedExperience, setSelectedExperience] = useState(
    experiences[0].company
  );
  const [scope, animate] = useAnimate();
  const { lang } = useLang();

  const selectedExperienceObject =
    experiences.find(
      (experience) => experience.company === selectedExperience
    ) ?? experiences[0];

  const handleClick =
    (experience: any) => async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      await animate(scope.current, {
        opacity: 0,
        y: 20,
        transition: { duration: 0.1, ease: 'easeInOut' },
      });
      setSelectedExperience(experience.company);
      await animate(scope.current, {
        opacity: 1,
        y: 0,
        transition: { duration: 0.1, ease: 'easeInOut' },
      });
    };

  return (
    <article className='flex w-full min-w-full flex-col justify-center px-6 py-20 md:flex-row'>
      <span className='flex flex-row justify-start gap-3 pb-7 md:flex-col md:items-end md:pb-0 md:pr-10'>
        {experiences.map((experience) => (
          <button
            key={experience.company}
            onClick={handleClick(experience)}
            className='flex gap-3'
          >
            <Image
              height={70}
              width={70}
              src={experience.image}
              alt={`${experience.company} logo`}
              className={`${
                experience.company === selectedExperience
                  ? 'border-primary-dark dark:border-primary-light'
                  : ' border-white grayscale'
              } h-[70px] w-[70px] rounded-xl border-[6px] border-solid  bg-white hover:filter-none `}
            />
          </button>
        ))}
      </span>
      <span className='h-[400px] w-full md:w-4/5 md:max-w-2xl' ref={scope}>
        <span className='flex flex-col'>
          <span className='text-xl font-bold text-primary-dark dark:text-primary-light'>
            {selectedExperienceObject.position[lang]} @{' '}
            {selectedExperienceObject.company}
          </span>
          <span className='text-lg font-semibold text-slate-700 dark:text-slate-300'>
            {selectedExperienceObject.startDate[lang]} -{' '}
            {selectedExperienceObject.endDate[lang]}
          </span>
        </span>
        <p
          className='pb-4 text-lg text-slate-700 dark:text-slate-300
             '
        >
          {selectedExperienceObject.description[lang]}
        </p>
        <span className='flex flex-wrap gap-3'>
          {selectedExperienceObject.technologies.map((technology) => (
            <span
              key={`${technology}_${selectedExperience}`}
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
