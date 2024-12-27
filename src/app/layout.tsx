import { ReactNode } from 'react';

import { montserrat } from '../config/fonts/montserrat';

import type { Metadata } from 'next';

import './globals.scss';

export const metadata: Metadata = {
  title: 'DBD App',
  description: 'Dead By Daylight App',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
