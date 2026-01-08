'use client';
import DownloadIcon from '@/components/Icons/DownloadIcon';
import { useLang } from '@/contexts/LangContext';
import content from '@/content.json';

export default function ResumeButton() {
  const { lang } = useLang();

  return (
    <a
      href='/Lautaro López Resume.pdf'
      target='_blank'
      className='flex items-center justify-center gap-3 rounded-lg bg-indigo-400 px-4 py-3 text-lg font-bold text-gray-900 md:px-6 md:py-4 md:text-xl'
    >
      <DownloadIcon height={25} colorMode='regular' />
      {content.landing.resumeButton[lang]}
    </a>
  );
}
