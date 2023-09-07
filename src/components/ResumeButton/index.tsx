"use client";
import DownloadIcon from "@/components/Icons/DownloadIcon";

export default function ResumeButton() {
  return (
    <a
      href="/Lautaro López Resume.pdf"
      target="_blank"
      className="flex items-center justify-center gap-3 text-xl font-bold text-primary-light dark:text-primary-dark rounded-lg px-6 py-4  bg-gradient-to-br from-primary-dark to-secondary-dark dark:bg-gradient-to-br dark:from-primary-light dark:to-secondary-light"
    >
      <DownloadIcon height={25} colorMode="regular" /> Resume
    </a>
  );
}
