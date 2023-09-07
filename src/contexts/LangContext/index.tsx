"use client";
import React, { createContext, useState } from "react";

type LangProviderProps = {
  children: React.ReactNode;
};

export const LangOptions = ["en", "es"] as const;
export type LangOptionsType = (typeof LangOptions)[number];
export type LangContextType = {
  lang: LangOptionsType;
  setLang: (lang: LangOptionsType) => void;
};

export const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
});

export const LangProvider = ({ children }: LangProviderProps) => {
  const [lang, setLang] = useState<LangOptionsType>("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => React.useContext(LangContext);
