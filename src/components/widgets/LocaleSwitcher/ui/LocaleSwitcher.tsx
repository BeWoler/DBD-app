'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

import { Button } from '@/components/shared';
import { routing, usePathname, useRouter } from '@/i18n/routing';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  function onButtonClick(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- skip runtime checks
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="flex gap-2 p-2">
      {routing.locales.map((cur) => (
        <Button
          key={cur}
          onClick={() => onButtonClick(cur)}
          className={clsx(
            'rounded-lg font-semibold text-dark-primary',
            'hover:bg-opacity-900 bg-gray-primary hover:bg-red-secondary',
            locale === cur && 'bg-red-primary'
          )}
          disabled={isPending}
        >
          {t('locale', { locale: cur })}
        </Button>
      ))}
    </div>
  );
};
