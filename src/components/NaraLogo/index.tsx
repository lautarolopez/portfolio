"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NaraIcon from "@/components/Icons/NaraIcon";

export default function NaraButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeatDelay: 5,
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <NaraIcon height={40} colorMode="inverted" />
    </motion.div>
  );
}
