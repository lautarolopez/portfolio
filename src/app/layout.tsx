import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Providers from '@/app/providers';

const montserrat = Montserrat({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

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
    <html lang='en' className='dark overflow-x-hidden'>
      <Providers>
        <body
          className={`${montserrat.className} ${robotoMono.variable} bg-gradient-to-br from-gray-900 to-gray-800 overflow-x-hidden`}
        >
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
