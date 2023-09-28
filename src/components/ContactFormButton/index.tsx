"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  disabled: boolean;
  error: boolean;
};

export default function ContactFormButton({
  disabled = false,
  error = false,
}: Props) {
  const [isActive, setIsActive] = useState(false);
  const shakeAnimation = {
    x: [0, -5, 5, -5, 5, 0],
    rotate: [0, -2.5, 2.5, -2.5, 2.5, 0],
    transition: { duration: 0.5 },
  };

  const transformAnimation = {
    borderRadius: "50%",
    rotate: 360,
    transition: { duration: 0.5 },
  };

  return (
    <motion.button
      type="submit"
      onClick={() => setIsActive(!isActive)}
      variants={{
        shake: shakeAnimation,
        transform: transformAnimation,
      }}
      className={`${
        isActive
          ? "w-40 h-40"
          : "w-170 h-40 hover:bg-purple-600 hover:text-white"
      } flex items-center justify-center gap-3 text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark rounded-lg px-4 py-3 md:px-6 md:py-4  bg-gradient-to-br from-primary-dark to-secondary-dark dark:bg-gradient-to-br dark:from-primary-light dark:to-secondary-light`}
    >
      <span
        className={`opacity-${
          isActive ? "0 invisible" : "100 visible"
        } transition-all duration-350 ease-in-out`}
      >
        Submit
      </span>
      <div
        className={`success ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-350 ease-in-out`}
      >
        <svg
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 29.756 29.756"
          enableBackground="0 0 29.756 29.756"
          xmlSpace="preserve"
          className={`w-20 h-20 fill-yellowgreen transform-origin-center transform ${
            isActive
              ? "-translate-y-1/2 rotate-720 scale-100"
              : "-translate-y-1/2 rotate-0 scale-0"
          } transition-all duration-350 ease-in-out`}
        >
          <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"></path>
        </svg>
      </div>
    </motion.button>
  );
}
