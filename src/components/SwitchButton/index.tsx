"use client";
import { useState, useEffect } from "react";
import LightBulbSolidIcon from "@/components/Icons/LightBulbSolidIcon";
import LightBulbRegularIcon from "@/components/Icons/LightBulbRegularIcon";
import { useTheme } from "next-themes";
import { useAnimate } from "framer-motion";
import { ColorMode } from "@/types";

type Props = {
  colorMode: ColorMode;
};

export default function SwitchButton({ colorMode }: Props) {
  const [mounted, setMounted] = useState(false);
  const [scope, animate] = useAnimate();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleClick = () => {
    animate([
      [scope.current, { rotate: 15, y: 10 }, { duration: 0.1 }],
      [scope.current, { rotate: 0, y: 0 }],
    ]);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button ref={scope} onClick={handleClick} type="button">
      {theme === "dark" ? (
        <LightBulbSolidIcon height={40} colorMode={colorMode} />
      ) : (
        <LightBulbRegularIcon height={40} colorMode={colorMode} />
      )}
    </button>
  );
}
