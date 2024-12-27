import clsx from 'clsx';
import { Children, createElement, PropsWithChildren } from 'react';

import { sanitizeText } from '@/utils/sanitize';

import { THeadingProps } from '../lib/heading.type';

export const Heading = ({
  level,
  className,
  disableInjections,
  children,
}: PropsWithChildren<THeadingProps>) => {
  const classNames = clsx(`text-h${level}`, className);
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
