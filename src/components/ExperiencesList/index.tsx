'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import content from '@/content.json';
import { useLang } from '@/contexts/LangContext';

const {
  experience: { experiences },
} = content;

function LineConnector({ index }: { index: number }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const updateHeight = () => {
      if (lineRef.current) {
        if (window.matchMedia('(min-width: 768px)').matches) {
          lineRef.current.style.height = 'calc(100% - 70px + 64px)';
        } else {
          lineRef.current.style.height = 'calc(100% - 70px + 48px)';
        }
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      ref={lineRef}
      className='absolute left-[34px] z-0 hidden w-0.5 bg-indigo-400 md:left-[35px] md:block'
      style={{
        top: '70px',
        height: 'calc(100% - 70px + 48px)',
      }}
    ></div>
  );
}

export default function ExperiencesList() {
  const { lang } = useLang();

  return (
    <article className='relative flex w-full min-w-full flex-col justify-center px-4 py-20 md:px-6'>
      <div className='relative mx-auto flex w-full max-w-5xl flex-col gap-12 md:gap-16'>
        {/* Timeline items */}
        {experiences.map((experience, index) => {
          const isLast = index === experiences.length - 1;
          return (
            <div
              key={experience.company}
              className='relative flex w-full flex-col gap-6 md:flex-row md:items-start md:gap-8'
            >
              {/* Logo container on timeline */}
              <div className='relative z-10 flex flex-col items-center md:absolute md:left-0'>
                <Image
                  height={70}
                  width={70}
                  src={experience.image}
                  alt={`${experience.company} logo`}
                  className='h-[70px] w-[70px] flex-shrink-0 rounded-xl border-2 border-solid border-indigo-400 bg-white'
                />
              </div>
              {/* Line connector - only for non-last items, spans from logo bottom through gap to next logo */}
              {!isLast && <LineConnector index={index} />}

              {/* Content */}
              <div className='w-full overflow-hidden md:ml-24 md:w-[calc(100%-6rem)]'>
                <div className='flex flex-col'>
                  <span className='text-xl font-bold text-white'>
                    {experience.position[lang]} @ {experience.company}
                  </span>
                  <span className='font-mono text-lg font-semibold text-slate-300'>
                    {experience.startDate[lang]} - {experience.endDate[lang]}
                  </span>
                </div>
                <p className='py-4 font-mono text-lg text-slate-300'>
                  {experience.description[lang]}
                </p>
                <span className='flex flex-wrap gap-3'>
                  {experience.technologies.map((technology) => (
                    <span
                      key={`${technology}_${experience.company}`}
                      className='rounded-full border-2 border-solid border-indigo-400 px-2 py-1 font-bold text-indigo-400'
                    >
                      {technology}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
