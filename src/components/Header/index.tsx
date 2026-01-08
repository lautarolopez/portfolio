'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import NaraLogo from '@/components/NaraLogo';
import LangButton from '@/components/LangButton';
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
    <nav className='fixed left-0 top-0 z-30 flex w-full items-center justify-between p-6'>
      <NaraLogo className='justify-self-start' />
      <HamburgerButton
        ref={buttonRef}
        height={40}
        className='fill-indigo-400'
        onClick={handleClick}
      />
      <motion.menu
        ref={menuRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={
          open
            ? 'absolute right-4 top-20 flex min-w-[200px] flex-col gap-7 rounded-md bg-indigo-50/95 p-6 backdrop-blur-lg'
            : 'hidden'
        }
      >
        <div className='flex justify-end'>
          <LangButton colorMode='regular' />
        </div>
        <LayoutGroup>
          {content.header.links.map((link) => (
            <span className='relative' key={link.href}>
              <a
                href={link.href}
                className='text-xl font-bold text-gray-900 hover:text-indigo-400'
              >
                {link.name[lang]}
              </a>
              {open && currentSection === link.href.replace('#', '') ? (
                <motion.div
                  className='absolute bottom-0 right-0 h-1 w-full rounded-lg bg-indigo-400'
                  layoutId='underline'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              ) : null}
            </span>
          ))}
        </LayoutGroup>
      </motion.menu>
    </nav>
  );
}
