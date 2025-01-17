import { useTranslations } from 'next-intl';

import { AboutApp, CallToAction, FeaturesList, Roadmap } from '@/components/common';
import { PageComponent } from '@/components/layouts';
import { HeroBlock } from '@/components/shared';
import { FEATURES_CONSTANT } from '@/config/constants/features.constant';

export const HomeScreen = () => {
  const t = useTranslations('HomePage');

  return (
    <PageComponent.Container>
      <PageComponent.Section maxWidth paddingX>
        <PageComponent.Animated.Div>
          <HeroBlock
            title={t('heroBlock.title')}
            description={t('heroBlock.description')}
            level={1}
            textType="2xl"
            headingClassName="uppercase"
          />
        </PageComponent.Animated.Div>
      </PageComponent.Section>
      <PageComponent.Section maxWidth paddingX>
        <PageComponent.Animated.Div delay={0.2}>
          <AboutApp title={t('aboutApp.title')} description={t('aboutApp.description')} />
        </PageComponent.Animated.Div>
      </PageComponent.Section>
      <PageComponent.Section maxWidth paddingX>
        <FeaturesList features={FEATURES_CONSTANT} title={t('features.title')} />
      </PageComponent.Section>
      <PageComponent.Section maxWidth paddingX>
        <PageComponent.Animated.Div threshold={0.1}>
          <Roadmap />
        </PageComponent.Animated.Div>
      </PageComponent.Section>
      <PageComponent.Animated.Div>
        <CallToAction />
      </PageComponent.Animated.Div>
    </PageComponent.Container>
  );
};
