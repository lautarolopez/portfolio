'use client';
import { useState } from 'react';
import { useAnimate } from 'framer-motion';
import { useLang } from '@/contexts/LangContext';
import content from '@/content.json';

export default function ContactSubtitle() {
  const { lang } = useLang();
  const [scope, animate] = useAnimate();

  return (
    <span>
      <p className='pt-4 text-center text-lg md:max-w-[1000px]'>
        <button
          className='font-bold underline'
          onClick={async () => {
            await navigator.clipboard.writeText('hi@lautarolopez.tech');
            animate(scope.current, {
              opacity: 1,
              transition: { duration: 0.5 },
              y: -20,
            });
            setTimeout(() => {
              animate(scope.current, {
                opacity: 0,
                y: 0,
                transition: { duration: 0.5 },
              });
            }, 1500);
          }}
        >
          {content.contact.subtitle.button[lang]}
        </button>
        {content.contact.subtitle.or[lang]}
        <a href='mailto:hi@lautarolopez.tech' className='font-bold underline'>
          {content.contact.subtitle.anchor[lang]}
        </a>
        {content.contact.subtitle.contactForm[lang]}
      </p>
      <div
        ref={scope}
        className='ml-35 text-shadow-sm absolute bottom-10 right-10 z-50 float-left clear-left rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-primary-dark p-8 px-4 text-3xl leading-4 opacity-0 dark:bg-primary-light sm:left-10 sm:right-auto'
      >
        📋✅
      </div>
    </span>
  );
}
