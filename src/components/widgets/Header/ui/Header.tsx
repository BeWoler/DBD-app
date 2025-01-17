'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Link } from '@/i18n/routing';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
      className="sticky top-0 z-20 mb-5 flex items-center gap-1 bg-dark-secondary px-4 py-2"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <Link href="/">
        <Image
          priority
          src="/images/logo/emblem.webp"
          alt="emblem"
          width={100}
          height={69}
          style={{ width: 'auto', height: '4.313rem' }}
        />
      </Link>
    </motion.header>
  );
};
