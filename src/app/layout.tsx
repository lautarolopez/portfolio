import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/app/providers';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lautaro López',
  description: 'Lautaro López personal portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Providers>
        <body
          className={`${montserrat.className} bg-gradient-to-br from-primary-light to-secondary-light dark:bg-gradient-to-br dark:from-primary-dark dark:to-secondary-dark`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
