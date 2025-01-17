import clsx from 'clsx';

import type { IButtonProps } from '../lib/button.type';
import type { PropsWithChildren } from 'react';

export const Button = ({
  className,
  children,
  backgroundColor = 'dark',
  ...props
}: PropsWithChildren<IButtonProps>) => {
  const colors = {
    blue: 'bg-blue-primary',
    dark: 'bg-dark-primary',
    red: 'bg-red-primary',
    gray: 'bg-gray-primary',
  };

  const classes = clsx(
    'flex w-fit text-center py-2 px-[1.25rem] justify-center items-center rounded-md',
    'transition-all duration-[300ms] hover:bg-opacity-50',
    colors[backgroundColor],
    className
  );

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};
