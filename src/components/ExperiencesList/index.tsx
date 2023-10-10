'use client';
import Image from 'next/image';
import { useLang } from '@/contexts/LangContext';
import content from '@/content.json';

export default function ExperiencesList() {
  const { lang } = useLang();
  const {
    experience: { experiences },
  } = content;
  return (
    <ul>
      {experiences.map((experience) => (
        <li
          key={experience.company}
          className='flex flex-col px-6 py-8 md:flex-row'
        >
          <span className='flex flex-row justify-start gap-3 pb-4 pr-10 md:w-1/5 md:flex-col md:items-end md:pb-0'>
            {experience.image.map((image) => (
              <Image
                height={70}
                width={70}
                src={image}
                key={image}
                alt={`${experience.company} logo`}
                className='h-[70px] w-[70px] rounded-xl border-[6px] border-solid border-primary-dark bg-white dark:border-primary-light'
              />
            ))}
          </span>
          <span className='w-full md:w-4/5 md:max-w-2xl'>
            <span className='flex flex-col'>
              <span className='text-xl font-bold text-primary-dark dark:text-primary-light'>
                {experience.position[lang]} @ {experience.company}
              </span>
              <span className='text-lg font-semibold text-slate-700 dark:text-slate-300'>
                {experience.startDate[lang]} - {experience.endDate[lang]}
              </span>
            </span>
            <p
              className='pb-4 text-lg text-slate-700 dark:text-slate-300
            '
            >
              {experience.description[lang]}
            </p>
            <span className='flex flex-wrap gap-3'>
              {experience.technologies.map((technology) => (
                <span
                  key={`${technology}_${experience}`}
                  className='rounded-full border-2 border-solid border-primary-dark px-2 py-1 font-bold text-primary-dark dark:border-primary-light dark:text-primary-light'
                >
                  {technology}
                </span>
              ))}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
