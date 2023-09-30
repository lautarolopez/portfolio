"use client";
import { motion, useAnimate } from "framer-motion";
import CheckIcon from "../Icons/CheckIcon";
import { useEffect } from "react";

type ButtonStates = "initial" | "invalid" | "loading" | "success" | "error";

type Props = {
  disabled: boolean;
  state?: ButtonStates;
};

const buttonStates = {
  initial: {
    width: "10rem",
    borderRadius: "0.5rem",
  },
  invalid: {
    width: "10rem",
    borderRadius: "0.5rem",
  },
  loading: {
    width: "5rem",
    borderRadius: "50%",
  },
  success: {
    width: "5rem",
    borderRadius: "50%",
  },
  error: {
    width: "5rem",
    borderRadius: "50%",
  },
};

const spanStates = {
  initial: {
    opacity: 1,
  },
  invalid: {
    opacity: 1,
  },
  loading: {
    opacity: 0,
  },
  success: {
    opacity: 0,
  },
  error: {
    opacity: 0,
  },
};

const successStates = {
  initial: {
    opacity: 0,
  },
  invalid: {
    opacity: 0,
  },
  loading: {
    opacity: 0,
  },
  success: {
    opacity: 1,
  },
  error: {
    opacity: 0,
  },
};

const errorStates = {
  initial: {
    opacity: 0,
  },
  invalid: {
    opacity: 0,
  },
  loading: {
    opacity: 0,
  },
  success: {
    opacity: 0,
  },
  error: {
    opacity: 1,
  },
};

const loadingStates = {
  initial: {
    opacity: 0,
  },
  invalid: {
    opacity: 0,
  },
  loading: {
    opacity: 1,
  },
  success: {
    opacity: 0,
  },
  error: {
    opacity: 0,
  },
};

export default function ContactFormButton({
  disabled = false,
  state = "initial",
}: Props) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, buttonStates[state]);
    animate(scope.current.children[0], spanStates[state]);
    animate(scope.current.children[1], successStates[state]);
    animate(scope.current.children[2], errorStates[state]);
    animate(scope.current.children[3], loadingStates[state]);
  }, [animate, scope, state]);

  const handleClick = () => {
    if (disabled) {
      animate(scope.current, {
        x: [0, -80, 80, -80, 80, -40, 40, 0],
        rotate: 0,
        transition: {
          duration: 0.05,
        },
      });
    }
  };

  return (
    <motion.button
      type="submit"
      disabled={["loading", "success", "error"].includes(state)}
      ref={scope}
      onClick={handleClick}
      initial={buttonStates["initial"]}
      className={`relative flex items-center justify-center h-20 gap-3 text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark px-4 py-3 md:px-6 md:py-4 bg-gradient-to-br from-primary-dark to-secondary-dark dark:bg-gradient-to-br dark:from-primary-light dark:to-secondary-light duration-500`}
    >
      <motion.span initial={spanStates["initial"]} className="absolute">
        Submit
      </motion.span>
      <motion.svg
        height={40}
        width={40}
        initial={successStates["initial"]}
        viewBox="0 0 448 512"
        className=" fill-primary-light dark:fill-primary-dark absolute"
      >
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </motion.svg>
      <motion.svg
        height={40}
        width={40}
        initial={errorStates["initial"]}
        viewBox="0 0 384 512"
        className=" fill-primary-light dark:fill-primary-dark absolute"
      >
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </motion.svg>
      <motion.svg
        height={40}
        width={40}
        initial={loadingStates["initial"]}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        viewBox="0 0 512 512"
        className=" fill-primary-light dark:fill-primary-dark absolute"
      >
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </motion.svg>
    </motion.button>
  );
}
