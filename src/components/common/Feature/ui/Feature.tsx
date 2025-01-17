import Image from 'next/image';

import { PageComponent } from '@/components/layouts';
import { Heading, Text } from '@/components/shared';
import { Link } from '@/i18n/routing';
import { renderWithBreaks } from '@/services/utils/renderWithBreaks';

import type { TFeatureProps } from '../lib/feature.type';

export const Feature = ({ description, title, image, linkText, isReady, link }: TFeatureProps) => {
  return (
    <div className="group relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-lg border-[0.125rem] border-blue-primary bg-dark-secondary p-5 shadow-lg shadow-blue-primary">
      <PageComponent.Animated.Div className="flex flex-col gap-5">
        <Heading level={4}>{title}</Heading>
        <Text type="base" weight="medium">
          {renderWithBreaks(description)}
        </Text>
      </PageComponent.Animated.Div>
      <div className="flex justify-center">
        <Image src={image} width={150} height={150} alt="icon" />
      </div>
      <Link
        href={`/${link}`}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 backdrop-blur-sm transition-opacity duration-[400ms] group-hover:opacity-100 max-lg:hidden"
      >
        <Text type="xl" weight="medium" className="text-blue-secondary">
          {linkText}
        </Text>
      </Link>
      {isReady && (
        <Link href={`/${link}`} className="hidden items-center justify-end gap-3 max-lg:flex">
          <Image src="/images/icons/Link.webp" width={45} height={45} alt="link" />
          <Text type="lg" className="text-blue-secondary">
            {linkText}
          </Text>
        </Link>
      )}
    </div>
  );
};
