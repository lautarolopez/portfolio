'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useWindowDimensions } from '@/hooks/useWindowDimension';
import { COLORS } from '@/constants';

export default function LandingImage() {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <motion.div
      className='relative mb-10 flex items-center justify-center lg:mb-0'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, ease: 'easeOut' }}
    >
      <Image
        alt='Developer picture'
        width={width && width < 600 ? 250 : 500}
        height={width && width < 600 ? 250 : 500}
        fill={false}
        priority
        src={theme === 'dark' ? '/images/blackt.webp' : '/images/whitet.webp'}
        className={`h-auto w-[95vw] ${
          width && width < 600 ? 'max-w-[250px]' : 'max-w-[500px]'
        }`}
        style={{
          filter: `drop-shadow(4px 4px 0 ${
            theme === 'dark' ? COLORS['primary-light'] : COLORS['primary-dark']
          }) drop-shadow(-4px 4px 0 ${
            theme === 'dark' ? COLORS['primary-light'] : COLORS['primary-dark']
          }) drop-shadow(4px -4px 0 ${
            theme === 'dark' ? COLORS['primary-light'] : COLORS['primary-dark']
          }) drop-shadow(-4px -4px 0 ${
            theme === 'dark' ? COLORS['primary-light'] : COLORS['primary-dark']
          }) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))`,
        }}
      />
    </motion.div>
  );
}
