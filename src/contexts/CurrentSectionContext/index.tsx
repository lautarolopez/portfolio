'use client';
import React, { createContext, useState } from 'react';

type CurrentSectionProviderProps = {
  children: React.ReactNode;
};

export const CurrentSectionOptions = [
  'home',
  'skills',
  'experience',
  'projects',
  'contact',
] as const;
export type CurrentSectionOptionsType = (typeof CurrentSectionOptions)[number];
export type CurrentSectionContextType = {
  currentSection: CurrentSectionOptionsType;
  setCurrentSection: (lang: CurrentSectionOptionsType) => void;
};

export const CurrentSectionContext = createContext<CurrentSectionContextType>({
  currentSection: 'home',
  setCurrentSection: () => {},
});

export const CurrentSectionProvider = ({
  children,
}: CurrentSectionProviderProps) => {
  const [currentSection, setCurrentSection] =
    useState<CurrentSectionOptionsType>('home');

  return (
    <CurrentSectionContext.Provider
      value={{ currentSection, setCurrentSection }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
};

export const useCurrentSection = () => React.useContext(CurrentSectionContext);
