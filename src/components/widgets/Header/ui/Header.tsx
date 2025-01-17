'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Text } from '@/components/shared';
import { NAV_LINKS_CONSTANT } from '@/config/constants/navLinks.constants';
import { Link } from '@/i18n/routing';

import { LocaleSwitcher } from '../../LocaleSwitcher';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const t = useTranslations('Header');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.header
      className="sticky top-0 z-20 mb-5 flex items-center justify-between gap-1 bg-dark-secondary px-4 py-2"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <Link href="/" className="max-sm:hidden">
        <Image
          priority
          src="/images/logo/emblem.webp"
          alt="emblem"
          width={100}
          height={69}
          style={{ width: 'auto', height: '4.313rem' }}
        />
      </Link>
      <nav className="flex justify-center gap-4 max-lg:flex-wrap">
        {NAV_LINKS_CONSTANT.map((item, i) => (
          <Link key={i} href={`/${item.link}`}>
            <Text type="base" className="transition-colors hover:text-red-secondary max-sm:text-sm">
              {t(`links.${item.title}`)}
            </Text>
          </Link>
        ))}
      </nav>
      <LocaleSwitcher />
    </motion.header>
  );
};
