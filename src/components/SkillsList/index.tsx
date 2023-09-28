"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useWindowDimensions } from "@/hooks/useWindowDimension";
import { SKILLS } from "./content";

const container = (width: number = 1024) => ({
  hidden: { opacity: 1, scale: width < 365 ? 0 : 1 },
  visible: {
    opacity: 1,
    scale: 1,
  },
});

/** This delays make the items appear in diagonal. Thats a good animation practice, that makes the user attention go from top left to bottom right. */

const delays4Columns = [0, 1, 2, 3, 1, 2, 3, 5, 2, 3, 4, 5];

const delays3Columns = [0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5];

const delays2Columns = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];

const delays1Column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const DELAYS = (width: number) => {
  if (width < 365) return delays1Column;
  if (width < 1025) return delays2Columns;
  if (width < 1165) return delays3Columns;
  return delays4Columns;
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

  const iconSize = width && width < 1024 ? 60 : 90;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.ul
      ref={ref}
      layout
      className="flex flex-wrap gap-8 lg:gap-20 justify-center items-center w-[90vw] max-w-[400px] lg:max-w-[1050px] p-5 mt-10"
      variants={container(width)}
      initial="hidden"
      animate={controls}
    >
      {SKILLS(iconSize).map((skill, index) => (
        <motion.li
          key={skill.name}
          className="lg:w-48 lg:h-48 w-32 h-32 flex flex-col gap-1 items-center justify-center rounded-lg bg-primary-dark dark:bg-primary-light"
          variants={item(index, width)}
        >
          {skill.icon}
          <p className="text-center text-primary-light dark:text-primary-dark text-lg font-bold">
            {skill.name}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
