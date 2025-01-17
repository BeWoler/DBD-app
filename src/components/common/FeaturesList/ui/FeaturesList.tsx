import { useTranslations } from 'next-intl';

import { PageComponent } from '@/components/layouts';
import { Heading } from '@/components/shared';

import { Feature } from '../../Feature/ui/Feature';

import type { TFeaturesListProps } from '../lib/featuresList.type';

export const FeaturesList = ({ features, title }: TFeaturesListProps) => {
  const t = useTranslations('Features');

  return (
    <PageComponent.Animated.Div threshold={0} className="flex flex-col gap-5">
      <Heading level={2}>{title}</Heading>
      <div className="flex gap-5 max-lg:flex-col">
        {features.map((feature, i) => (
          <PageComponent.Animated.Div delay={i * 0.2} key={feature.title}>
            <Feature
              {...feature}
              title={t(feature.title)}
              description={t(feature.description)}
              linkText={t(feature.linkText)}
            />
          </PageComponent.Animated.Div>
        ))}
      </div>
    </PageComponent.Animated.Div>
  );
};
