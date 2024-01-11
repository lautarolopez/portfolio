'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import NaraLogo from '@/components/NaraLogo';
import LangButton from '@/components/LangButton';
import SwitchButton from '@/components/SwitchButton';
import HamburgerButton from '@/components/HamburgerButton';
import { useLang } from '@/contexts/LangContext';
import { useCurrentSection } from '@/contexts/CurrentSectionContext';
import content from '@/content.json';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const { currentSection } = useCurrentSection();
  const menuRef = useRef<HTMLMenuElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node))
        return;
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuRef]);

  return (
    <nav className='fixed left-0 top-0 z-30 flex w-full flex-wrap items-center justify-between bg-primary-light/20 p-6 backdrop-blur-sm dark:bg-primary-dark/20 lg:grid lg:grid-cols-3'>
      <NaraLogo className='justify-self-start' />
      <motion.menu
        ref={menuRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`flex-1 items-center gap-7 justify-self-center lg:flex ${
          open
            ? 'absolute right-4 top-20 flex flex-col rounded-md bg-primary-dark/90 p-4 dark:bg-primary-light/90'
            : 'hidden'
        }`}
      >
        <LayoutGroup>
          {content.header.links.map((link) => (
            <span className='relative' key={link.href}>
              <a
                href={link.href}
                className='text-xl font-bold text-primary-light hover:text-gray-900 dark:text-primary-dark dark:hover:text-gray-100 lg:text-3xl lg:text-gray-700 lg:dark:text-gray-300'
              >
                {link.name[lang]}
              </a>
              {currentSection === link.href.replace('#', '') ? (
                <motion.div
                  className='absolute bottom-0 right-0 h-1 w-full rounded-lg bg-primary-light dark:bg-primary-dark lg:bg-gray-700 lg:dark:bg-gray-300'
                  layoutId='underline'
                ></motion.div>
              ) : null}
            </span>
          ))}
        </LayoutGroup>
        <span className='flex gap-3 lg:hidden'>
          <LangButton colorMode='regular' />
          <SwitchButton colorMode='regular' />
        </span>
      </motion.menu>
      <span className='hidden gap-3 lg:flex lg:justify-self-end'>
        <LangButton colorMode='inverted' />
        <SwitchButton colorMode='inverted' />
      </span>
      <HamburgerButton
        ref={buttonRef}
        height={40}
        className='fill-primary-dark dark:fill-primary-light lg:hidden'
        onClick={handleClick}
      />
    </nav>
  );
}
