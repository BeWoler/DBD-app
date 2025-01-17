import clsx from 'clsx';
import { Children, createElement, PropsWithChildren } from 'react';

import { sanitizeText } from '@/services/utils/sanitize';

import type { TTextProps } from '../lib/text.type';

export const Text = ({
  type,
  weight = 'normal',
  clamp,
  userSelect = false,
  className,
  children,
}: PropsWithChildren<TTextProps>) => {
  const classNames = clsx(
    `text-${type}-custom`,
    `font-${weight}`,
    userSelect ? 'select-auto' : 'select-none',
    clamp && `line-clamp-${clamp}`,
    'text-gray-secondary',
    className
  );
  const sanitizedContent = Children.map(children, (child) => {
    const isStringContent = typeof child === 'string';

    if (isStringContent) {
      return createElement('span', {
        dangerouslySetInnerHTML: { __html: sanitizeText(child) },
      });
    }

    return child;
  });

  return <div className={classNames}>{sanitizedContent}</div>;
};
