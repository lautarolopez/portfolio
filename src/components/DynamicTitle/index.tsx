"use client";
import { useLang } from "@/contexts/LangContext";
import content from "@/content.json";

type Props = {
  section: "skills" | "experience" | "contact";
};

export default function DynamicTitle({ section }: Props) {
  const { lang } = useLang();
  return (
    <h2 className="text-4xl font-bold text-center lg:text-left">
      {content[section].title[lang]}
    </h2>
  );
}
