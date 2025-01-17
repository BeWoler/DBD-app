import clsx from 'clsx';
import { Children, createElement, PropsWithChildren } from 'react';

import { sanitizeText } from '@/services/utils/sanitize';

import type { THeadingProps } from '../lib/heading.type';

export const Heading = ({
  level,
  className,
  userSelect = false,
  disableInjections,
  children,
}: PropsWithChildren<THeadingProps>) => {
  const classNames = clsx(
    `text-h${level}`,
    userSelect ? 'select-auto' : 'select-none',
    'text-red-primary',
    className
  );
  const sanitizedContent = Children.map(children, (child) => {
    const isStringContent = typeof child === 'string';

    if (isStringContent) {
      return disableInjections
        ? child
        : createElement('span', {
            dangerouslySetInnerHTML: { __html: sanitizeText(child) },
          });
    }

    return child;
  });

  return createElement(
    `h${level}`,
    {
      className: classNames,
    },
    sanitizedContent
  );
};
