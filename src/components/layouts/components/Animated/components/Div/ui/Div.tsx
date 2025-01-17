'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

import type { IDivProps } from '../lib/div.type';

export const Div = ({
  children,
  delay = 0,
  threshold = 0.5,
  className,
}: PropsWithChildren<IDivProps>) => {
  const { ref, inView } = useInView({
    threshold: threshold >= 1 ? 1 : threshold,
    triggerOnce: true,
  });

  const classes = clsx('w-full', className);

  const variants = {
    hidden: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    visible: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transition: {
        delay,
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={classes}
    >
      {children}
    </motion.div>
  );
};
