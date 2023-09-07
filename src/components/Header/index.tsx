"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NaraLogo from "@/components/NaraLogo";
import LangButton from "@/components/LangButton";
import SwitchButton from "@/components/SwitchButton";
import HamburgerButton from "@/components/HamburgerButton";
import { LINKS } from "./links";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLMenuElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    console.log(open);

    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node))
        return;
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 fixed top-0 left-0 w-full dark:bg-primary-dark/20 bg-primary-light/20 z-30 backdrop-blur-sm">
      <NaraLogo />
      <motion.menu
        ref={menuRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`lg:flex gap-3 items-center ${
          open
            ? "flex absolute right-4 top-20 flex-col bg-primary-dark/90 dark:bg-primary-light/90 p-4 rounded-md"
            : "hidden"
        }`}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="dark:text-primary-dark text-primary-light lg:text-gray-700 lg:dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 lg:text-3xl text-xl font-bold"
          >
            {link.name}
          </a>
        ))}
        <span className="flex gap-3 lg:hidden">
          <LangButton colorMode="regular" />
          <SwitchButton colorMode="regular" />
        </span>
      </motion.menu>
      <span className="lg:flex gap-3 hidden">
        <LangButton colorMode="inverted" />
        <SwitchButton colorMode="inverted" />
      </span>
      <HamburgerButton
        ref={buttonRef}
        height={40}
        className="lg:hidden dark:fill-primary-light fill-primary-dark"
        onClick={handleClick}
      />
    </nav>
  );
}
