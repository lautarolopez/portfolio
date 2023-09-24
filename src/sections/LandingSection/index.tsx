"use client";
import { motion } from "framer-motion";
import ResumeButton from "@/components/ResumeButton";
import LandingImage from "@/components/LandingImage";
import { useLang } from "@/contexts/LangContext";
import content from "@/content.json";

export default function LandingSection() {
  const { lang } = useLang();

  return (
    <section className="w-full min-h-[97vh] flex flex-col-reverse lg:flex-row pt-20 lg:pt-0 justify-center items-center lg:justify-around">
      <div>
        <motion.h1
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: "easeOut" }}
        >
          {content.landing.title}
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: "easeOut" }}
        >
          {content.landing.subtitle[lang]}
        </motion.h2>
        <motion.p
          className="dark:text-slate-300 text-slate-800 lg:w-[30vw] text-xl mt-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: "easeOut" }}
        >
          {content.landing.paragraph[lang]}
        </motion.p>
        <motion.span
          className="flex justify-around items-center gap-3 mt-5 lg:w-[30vw]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, ease: "easeOut" }}
        >
          <a href="#" className="text-xl font-bold">
            {content.landing.contactButton[lang]}
          </a>
          <ResumeButton />
        </motion.span>
      </div>
      <LandingImage />
    </section>
  );
}
