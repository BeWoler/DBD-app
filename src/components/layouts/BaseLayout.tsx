import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ReactNode } from 'react';

import { AudioPlayer, FogVideo, Footer, Header } from '@/components/widgets';

import { montserrat } from '../../config/fonts/montserrat';

const BaseLayout = async ({
  children,
  locale,
}: Readonly<{
  children: ReactNode;
  locale: string;
}>) => {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} bg-dark-primary antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <AudioPlayer />
        <FogVideo />
      </body>
    </html>
  );
};

export default BaseLayout;
