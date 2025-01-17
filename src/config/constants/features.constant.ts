import type { TFeatureProps } from '@/components/common/Feature/lib/feature.type';

export const FEATURES_CONSTANT: TFeatureProps[] = [
  {
    title: 'randomizer.title',
    description: 'randomizer.description',
    image: '/images/icons/Randomizer.webp',
    linkText: 'goTo',
    isReady: true,
    link: 'randomizer',
  },
  {
    title: 'buildCreator.title',
    description: 'buildCreator.description',
    image: '/images/icons/Builds.webp',
    linkText: 'soon',
    isReady: false,
    link: '#',
  },
  {
    title: 'tierLists.title',
    description: 'tierLists.description',
    image: '/images/icons/Tier.webp',
    linkText: 'soon',
    isReady: false,
    link: '#',
  },
];
