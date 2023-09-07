"use client";
import { useState, useEffect } from "react";
import EarthAmericasIcon from "@/components/Icons/EarthAmericasIcon";
import { useLang } from "@/contexts/LangContext";
import { useAnimate } from "framer-motion";
import { ColorMode } from "@/types";

type Props = {
  colorMode: ColorMode;
};

export default function SwitchButton({ colorMode }: Props) {
  const [mounted, setMounted] = useState(false);
  const { lang, setLang } = useLang();
  const [scope, animate] = useAnimate();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClick = () => {
    animate([
      [
        scope.current,
        { scaleX: 0.8, scaleY: 0.8, rotate: 15 },
        { duration: 0.1, ease: "easeInOut" },
      ],
      [
        scope.current,
        { scaleX: 1, scaleY: 1, rotate: 0 },
        { duration: 0.1, ease: "easeInOut" },
      ],
    ]);
    setLang(lang === "en" ? "es" : "en");
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2"
      onClick={handleClick}
    >
      <span
        className={`text-xl underline ${
          colorMode === "regular"
            ? "dark:text-primary-dark text-primary-light"
            : "text-primary-dark dark:text-primary-light"
        }`}
      >
        {lang}
      </span>
      <span ref={scope}>
        <EarthAmericasIcon height={40} colorMode={colorMode} />
      </span>
    </button>
  );
}
