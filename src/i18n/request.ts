import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

import type { TLocales } from '@/config/types/locales.type';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as TLocales)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
