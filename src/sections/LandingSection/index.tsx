"use client";
import { motion } from "framer-motion";
import ResumeButton from "@/components/ResumeButton";
import LandingImage from "@/components/LandingImage";

export default function LandingSection() {
  return (
    <section className="w-full min-h-[97vh] flex flex-col-reverse lg:flex-row pt-20 lg:pt-0 justify-center items-center lg:justify-around">
      <div>
        <motion.h1
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Lautaro López
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          React/Node Developer
        </motion.h2>
        <motion.p
          className="dark:text-slate-400 text-slate-800 lg:w-[30vw] text-xl mt-5"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I am a fullstack developer from{" "}
          <b className="font-bold text-transparent bg-clip-text bg-gradient-to-b dark:from-blue-300 from-blue-700 dark:to-white to-white">
            Argentina
          </b>{" "}
          with a strong foundation in both front-end and back-end technologies.
          My journey in the world of web development began with a fascination
          for crafting beautiful, user-centric interfaces. Over the years, I
          honed my skills to become a versatile problem solver who thrives on
          challenges.
        </motion.p>
        <motion.span
          className="flex justify-around items-center gap-3 mt-5 lg:w-[30vw]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#" className="text-xl font-bold">
            Contact
          </a>
          <ResumeButton />
        </motion.span>
      </div>
      <LandingImage />
    </section>
  );
}
