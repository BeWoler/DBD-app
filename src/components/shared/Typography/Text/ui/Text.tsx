import clsx from 'clsx';
import { Children, createElement, PropsWithChildren } from 'react';

import { sanitizeText } from '@/utils/sanitize';

import { TTextProps } from '../lib/text.type';

export const Text = ({
  type,
  weight = 'normal',
  clamp,
  className,
  children,
}: PropsWithChildren<TTextProps>) => {
  const sanitizedContent = Children.map(children, (child) => {
    const isStringContent = typeof child === 'string';

    if (isStringContent) {
      return createElement('span', {
        dangerouslySetInnerHTML: { __html: sanitizeText(child) },
      });
    }

    return child;
  });

  return (
    <div
      className={clsx(
        `text-${type}-custom`,
        `font-${weight}`,
        clamp && `line-clamp-${clamp}`,
        className
      )}
    >
      {sanitizedContent}
    </div>
  );
};
