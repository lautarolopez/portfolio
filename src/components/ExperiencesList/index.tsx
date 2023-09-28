"use client";
import Image from "next/image";
import { useLang } from "@/contexts/LangContext";
import content from "@/content.json";

export default function ExperiencesList() {
  const { lang } = useLang();
  const {
    experience: { experiences },
  } = content;
  return (
    <ul>
      {experiences.map((experience) => (
        <li
          key={experience.company}
          className="px-6 py-8 flex flex-col md:flex-row"
        >
          <span className="flex flex-row md:flex-col gap-3 md:w-1/5 justify-start md:items-end pr-10 pb-4 md:pb-0">
            {experience.image.map((image) => (
              <Image
                height={70}
                width={70}
                src={image}
                key={image}
                alt={`${experience.company} logo`}
                className="rounded-xl bg-white border-solid border-primary-dark dark:border-primary-light border-[6px] w-[70px] h-[70px]"
              />
            ))}
          </span>
          <span className="w-full md:w-4/5 md:max-w-2xl">
            <span className="flex flex-col">
              <span className="text-xl font-bold text-primary-dark dark:text-primary-light">
                {experience.position[lang]} @ {experience.company}
              </span>
              <span className="text-lg text-slate-700 dark:text-slate-300 font-semibold">
                {experience.startDate[lang]} - {experience.endDate[lang]}
              </span>
            </span>
            <p
              className="pb-4 text-lg text-slate-700 dark:text-slate-300
            "
            >
              {experience.description[lang]}
            </p>
            <span className="flex gap-3 flex-wrap">
              {experience.technologies.map((technology) => (
                <span
                  key={`${technology}_${experience}`}
                  className="border-solid border-2 rounded-full px-2 py-1 border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light font-bold"
                >
                  {technology}
                </span>
              ))}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
