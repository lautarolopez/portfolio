"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { SKILLS } from "./content";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const delays = [0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5];

const item = (i: number) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delays[i] * 0.1,
    },
  },
});

export default function SkillsList() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.ul
      ref={ref}
      layout
      className="flex flex-wrap gap-8 lg:gap-20 justify-center items-center w-[90vw] max-w-[400px] lg:max-w-[900px] h-full p-5 mt-10"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {SKILLS.map((skill, index) => (
        <motion.li
          key={skill.name}
          className="lg:w-48 lg:h-48 w-32 h-32 flex flex-col gap-1 items-center justify-center rounded-lg bg-primary-dark dark:bg-primary-light"
          variants={item(index)}
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
