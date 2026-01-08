'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useWindowDimensions } from '@/hooks/useWindowDimension';
import { SKILLS } from './content';

const container = (width: number = 1024) => ({
  hidden: { opacity: 1, scale: width < 365 ? 0 : 1 },
  visible: {
    opacity: 1,
    scale: 1,
  },
});

/** This delays make the items appear in diagonal. Thats a good animation practice, that makes the user attention go from top left to bottom right. */
const delays6Columns = [0, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];

const delays5Columns = [0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 3, 4];

const delays4Columns = [0, 1, 2, 3, 1, 2, 3, 5, 2, 3, 4, 5];

const delays3Columns = [0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5];

const delays2Columns = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];

const delays1Column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const DELAYS = (width: number) => {
  if (width < 330) return delays1Column;
  if (width < 490) return delays2Columns;
  if (width < 650) return delays3Columns;
  if (width < 1024) return delays4Columns;
  if (width < 1058) return delays5Columns;
  if (width < 1280) return delays6Columns;
  return delays5Columns;
};

const item = (i: number, width: number = 1080) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: DELAYS(width)[i] * 0.1,
    },
  },
});

export default function SkillsList() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();
  const { width } = useWindowDimensions();

  const iconSize = width && width < 1280 ? 40 : 70;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.ul
      ref={ref}
      layout
      className='mt-10 flex w-[90vw] max-w-[700px] flex-wrap items-center justify-center gap-8 p-5 md:max-w-[700px] lg:max-w-[1050px] lg:gap-12'
      variants={container(width)}
      initial='hidden'
      animate={controls}
    >
      {SKILLS(iconSize).map((skill, index) => (
        <motion.li
          key={skill.name}
          className='flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-lg bg-indigo-400 md:h-28 md:w-28 xl:h-36 xl:w-36'
          variants={item(index, width)}
        >
          {skill.icon}
          <p className='text-center text-xs font-bold text-gray-900 md:text-lg'>
            {skill.name}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
