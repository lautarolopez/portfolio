"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useWindowDimensions } from "@/hooks/useWindowDimension";
import { COLORS } from "@/constants";

export default function LandingImage() {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-[95vw] ${
          width && width < 600 ? "max-w-[250px]" : "max-w-[500px]"
        }`}
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stopColor={
                theme === "dark"
                  ? COLORS["primary-light"]
                  : COLORS["primary-dark"]
              }
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stopColor={
                theme === "dark"
                  ? COLORS["secondary-light"]
                  : COLORS["secondary-dark"]
              }
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M20.8,-34.8C25.3,-29.4,26.3,-20.9,28.2,-13.8C30,-6.6,32.6,-0.8,33.4,5.9C34.1,12.6,33,20.1,29.2,26.3C25.4,32.6,18.9,37.6,11.4,40.7C3.8,43.9,-4.9,45.2,-13.1,43.3C-21.2,41.4,-28.7,36.4,-34,29.8C-39.2,23.1,-42.2,14.8,-42.6,6.6C-43,-1.6,-40.9,-9.6,-37.7,-17.5C-34.6,-25.4,-30.4,-33.1,-23.9,-37.6C-17.5,-42.2,-8.7,-43.6,-0.3,-43.1C8.1,-42.6,16.2,-40.2,20.8,-34.8Z"
          transform="translate(50 50)"
          width={width && width < 600 ? 250 : 500}
          height={width && width < 600 ? 250 : 500}
          strokeWidth="0"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <Image
        alt="Developer picture"
        width={width && width < 600 ? 250 : 500}
        height={width && width < 600 ? 250 : 500}
        fill={false}
        priority
        src={theme === "dark" ? "/images/blackt.webp" : "/images/whitet.webp"}
        className={`absolute bottom-0 left-0 w-[95vw] h-auto ${
          width && width < 600 ? "max-w-[250px]" : "max-w-[500px]"
        }`}
        style={{
          clipPath: "circle(50% at 50% 50%)",
        }}
      />
    </motion.div>
  );
}
