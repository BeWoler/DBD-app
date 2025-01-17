import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/components/shared';
import { NAV_LINKS_CONSTANT } from '@/config/constants/navLinks.constants';
import { Link } from '@/i18n/routing';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-dark-primary px-5 py-10">
      <div className="container mx-auto flex flex-col gap-10 max-lg:gap-6 max-lg:text-center">
        <div className="flex items-center justify-center gap-3 max-lg:flex-col">
          <Image src="/images/logo/emblem.webp" width={150} height={150} alt="Logo" />
        </div>
        <nav className="flex justify-center gap-8 max-lg:flex-wrap">
          {NAV_LINKS_CONSTANT.map((item, i) => (
            <Link key={i} href={`/${item.link}`}>
              <Text type="base" className="transition-colors hover:text-red-secondary">
                {t(`links.${item.title}`)}
              </Text>
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center">
          <Text type="xl" className="mb-3">
            {t('officialSite')}
          </Text>
          <Link
            href="https://deadbydaylight.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-red-500"
          >
            {t('title')}
          </Link>
        </div>
      </div>
    </footer>
  );
};
