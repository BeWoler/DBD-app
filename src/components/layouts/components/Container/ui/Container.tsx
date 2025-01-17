import clsx from 'clsx';

import type { TContainerProps } from '../lib/container.type';
import type { PropsWithChildren } from 'react';

export const Container = ({ className, children }: PropsWithChildren<TContainerProps>) => {
  return (
    <div className={clsx('flex flex-col gap-32 pt-9 max-lg:gap-20', className)}>{children}</div>
  );
};
