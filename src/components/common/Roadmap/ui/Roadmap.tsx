import { useTranslations } from 'next-intl';

import { PageComponent } from '@/components/layouts';
import { Heading } from '@/components/shared';
import { MILESTONES_CONSTANT } from '@/config/constants/milestones.constant';

import { MilestoneItem } from '../../MilestoneItem/ui/MilestoneItem';

export const Roadmap = () => {
  const t = useTranslations('Roadmap');

  return (
    <div>
      <Heading level={2} className="mb-12 text-center">
        {t('title')}
      </Heading>
      <div className="relative flex w-full flex-col gap-20 max-lg:gap-12 max-lg:p-0">
        <div className="absolute left-1/2 z-0 h-full w-1 -translate-x-1/2 transform rounded-sm bg-blue-primary max-lg:hidden" />
        {MILESTONES_CONSTANT.map((milestone, i) => {
          const isLeft = i % 2 === 0;
          return (
            <PageComponent.Animated.Div
              delay={0.2}
              key={i}
              threshold={0.2}
              className="flex w-fit justify-center"
            >
              <MilestoneItem
                {...milestone}
                feature={t(milestone.feature)}
                className={
                  isLeft
                    ? 'mr-10 -translate-x-1/2 max-lg:mr-0 max-lg:-translate-x-0'
                    : 'ml-10 translate-x-1/2 max-lg:ml-0 max-lg:translate-x-0'
                }
              />
              <div className="absolute left-1/2 top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-secondary max-lg:hidden" />
            </PageComponent.Animated.Div>
          );
        })}
      </div>
    </div>
  );
};
