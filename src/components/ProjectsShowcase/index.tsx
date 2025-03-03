'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import content from '@/content.json';
import { useLang } from '@/contexts/LangContext';

const {
  projects: { data },
} = content;

export default function ProjectsShowcase() {
  const { lang } = useLang();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartRef = useRef<number | null>(null);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    stopAutoSlide();
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 8000);
  };

  const stopAutoSlide = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    stopAutoSlide();
    dragStartRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartRef.current !== null) {
      const diff = e.clientX - dragStartRef.current;
      setDragOffset(diff);
    }
  };

  const handleMouseUp = () => {
    if (dragStartRef.current !== null) {
      if (dragOffset < -50) {
        setCurrentIndex((prev) => (prev + 1) % data.length);
      } else if (dragOffset > 50) {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
      }
    }
    setDragOffset(0);
    dragStartRef.current = null;
    startAutoSlide();
  };

  const handleMouseLeave = () => {
    if (dragStartRef.current !== null) handleMouseUp();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoSlide();
    dragStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartRef.current !== null) {
      const diff = e.touches[0].clientX - dragStartRef.current;
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragStartRef.current !== null) {
      if (dragOffset < -50) {
        setCurrentIndex((prev) => (prev + 1) % data.length);
      } else if (dragOffset > 50) {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
      }
    }
    setDragOffset(0);
    dragStartRef.current = null;
    startAutoSlide();
  };

  return (
    <div className='relative overflow-hidden'>
      <div
        className={`flex ${
          dragOffset !== 0
            ? 'transition-none'
            : 'transition-transform duration-500 ease-in-out'
        }`}
        style={{
          transform: `translateX(calc(-${
            currentIndex * 100
          }% + ${dragOffset}px))`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((project, index) => (
          <div key={index} className='w-full flex-shrink-0'>
            <article className='mb-4 flex w-full flex-col items-center justify-center px-6 py-4'>
              <span className='py-4 text-center text-xl font-bold text-primary-dark dark:text-primary-light'>
                {project.title[lang]} | {project.year}
              </span>
              <span className='group relative flex flex-col items-center justify-center gap-3 pb-7 md:pb-0'>
                <Image
                  src={project.image}
                  alt='projects'
                  width={600}
                  height={338}
                  className='rounded-xl transition-all duration-500 ease-in-out group-hover:grayscale'
                />
                <span className='absolute left-0 top-0 z-50 flex aspect-video h-full max-h-[338px] w-full max-w-[600px] items-center justify-center rounded-xl bg-black/50 text-3xl text-white opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100'>
                  <a href={project.link} target='_blank'>
                    {project.hoverText[lang]}
                  </a>
                </span>
              </span>
              <span className='flex w-full flex-col items-center justify-center text-center md:w-4/5 md:max-w-2xl'>
                <p className='py-4 text-lg text-slate-700 dark:text-slate-300'>
                  {project.description[lang]}
                </p>
                <span className='flex flex-wrap justify-center gap-3'>
                  {project.technologies.map((technology) => (
                    <span
                      key={`${technology}_${index}`}
                      className='rounded-full border-2 border-solid border-primary-dark px-2 py-1 font-bold text-primary-dark dark:border-primary-light dark:text-primary-light'
                    >
                      {technology}
                    </span>
                  ))}
                </span>
              </span>
            </article>
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 flex w-full items-center justify-center gap-2'>
        {data.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              currentIndex === i
                ? 'bg-primary-dark dark:bg-secondary-light'
                : 'bg-primary-dark/30 dark:bg-secondary-light/30'
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
