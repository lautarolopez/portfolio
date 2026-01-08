'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useWindowDimensions } from '@/hooks/useWindowDimension';
import { COLORS } from '@/constants';

export default function LandingImage() {
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
        width={width && width < 600 ? 100 : 150}
        height={width && width < 600 ? 100 : 150}
        fill={false}
        priority
        src='/images/profile.webp'
        className={`h-auto w-auto rounded-xl ${
          width && width < 600 ? 'max-w-[200px]' : 'max-w-[350px]'
        }`}
        style={{
          filter: `drop-shadow(4px 4px 0 ${COLORS['primary-light']}) drop-shadow(-4px 4px 0 ${COLORS['primary-light']}) drop-shadow(4px -4px 0 ${COLORS['primary-light']}) drop-shadow(-4px -4px 0 ${COLORS['primary-light']}) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))`,
        }}
      />
    </motion.div>
  );
}
