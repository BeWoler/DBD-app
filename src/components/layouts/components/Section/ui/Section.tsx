import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import type { TSectionProps } from '../lib/section.type';

export const Section = ({
  children,
  className,
  maxWidth,
  paddingX,
  ref,
}: PropsWithChildren<TSectionProps>) => {
  const classes = clsx(
    'flex w-full',
    maxWidth && 'mx-auto max-w-[90rem]',
    paddingX && 'px-[6.25rem] max-lg:px-[1rem]',
    className
  );

  return (
    <section ref={ref} className={classes}>
      {children}
    </section>
  );
};
