"use client";
import { useLang } from "@/contexts/LangContext";
import content from "@/content.json";

export default function SkillsTitle() {
  const { lang } = useLang();
  return (
    <h2 className="text-4xl font-bold text-center lg:text-left">
      {content.skills.title[lang]}
    </h2>
  );
}
