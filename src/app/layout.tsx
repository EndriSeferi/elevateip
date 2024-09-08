import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

// Importing Merriweather (serif) for headings
const merriweather = localFont({
  src: [
    {
      path: './fonts/Merriweather-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Merriweather-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-merriweather', // CSS variable for Merriweather
});

// Importing Inter (sans-serif) for body text
const inter = localFont({
  src: [
    {
      path: './fonts/Inter_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter_18pt-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter', // CSS variable for Inter
});

export const metadata: Metadata = {
  title: 'ElevateIP',
  description:
    'A professional website for protecting your intellectual property.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
