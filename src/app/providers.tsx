'use client';

import { LangProvider } from '@/contexts/LangContext';
import { CurrentSectionProvider } from '@/contexts/CurrentSectionContext';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <LangProvider>
      <CurrentSectionProvider>{children}</CurrentSectionProvider>
    </LangProvider>
  );
}
