import Image from 'next/image';

import { PageComponent } from '@/components/layouts';
import { Heading, Text } from '@/components/shared';

import type { TAboutAppProps } from '../lib/aboutApp.type';

export const AboutApp = ({ description, title }: TAboutAppProps) => {
  return (
    <div className="flex items-center justify-center gap-x-5 rounded-lg border-[0.125rem] border-blue-primary bg-dark-secondary p-5 shadow-lg shadow-blue-primary max-lg:flex-col max-lg:gap-3">
      <PageComponent.Animated.Div className="flex flex-1 flex-col gap-4">
        <Heading level={2}>{title}</Heading>
        <Text type="xl" weight="medium">
          {description}
        </Text>
      </PageComponent.Animated.Div>
      <div className="flex-1">
        <Image
          src="/images/backgrounds/AboutBackground.webp"
          width={1440}
          height={400}
          alt="campfire"
          className="w-full rounded-lg object-contain"
        />
      </div>
    </div>
  );
};
