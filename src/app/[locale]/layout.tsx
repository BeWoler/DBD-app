import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';

import { BaseLayout } from '@/components/layouts';
import { routing } from '@/i18n/routing';

import type { TLocales } from '@/config/types/locales.type';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DBD App',
  description: 'Dead By Daylight App',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const LocaleLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as TLocales)) {
    notFound();
  }

  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
};
export default LocaleLayout;
