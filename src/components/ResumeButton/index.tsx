"use client";
import DownloadIcon from "@/components/Icons/DownloadIcon";
import { useLang } from "@/contexts/LangContext";
import content from "@/content.json";

export default function ResumeButton() {
  const { lang } = useLang();

  return (
    <a
      href="/Lautaro López Resume.pdf"
      target="_blank"
      className="flex items-center justify-center gap-3 text-lg md:text-xl font-bold text-primary-light dark:text-primary-dark rounded-lg px-4 py-3 md:px-6 md:py-4  bg-gradient-to-br from-primary-dark to-secondary-dark dark:bg-gradient-to-br dark:from-primary-light dark:to-secondary-light"
    >
      <DownloadIcon height={25} colorMode="regular" />
      {content.landing.resumeButton[lang]}
    </a>
  );
}
