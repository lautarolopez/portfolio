'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { LangProvider } from '@/contexts/LangContext';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  );
}
