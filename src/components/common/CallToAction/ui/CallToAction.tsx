'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Heading, Text } from '@/components/shared';
import { SubscribeForm } from '@/components/widgets';
import { postSubscription } from '@/services/strapi/Subscribe/repository/subscribe.repository';

import type { TSubscribeFormData } from '@/components/widgets/SubscribeForm/lib/subscribeForm.type';

export const CallToAction = () => {
  const t = useTranslations('CallToAction');

  const onSubmit = async (data: TSubscribeFormData): Promise<void> =>
    postSubscription({ email: data.email });

  return (
    <div className="relative">
      <div className="relative">
        <Image
          src="/images/backgrounds/FanArt.webp"
          width={1920}
          height={350}
          alt="Fan Art"
          className="h-auto max-h-[350px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-primary bg-opacity-80" />
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-5 max-lg:flex-col">
        <div className="flex max-w-[25rem] flex-col gap-2 max-lg:max-w-none max-lg:text-center">
          <Heading level={3}>{t('title')}</Heading>
          <Text type="xl" weight="medium">
            {t('description')}
          </Text>
        </div>
        <SubscribeForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
