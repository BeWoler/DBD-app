import clsx from 'clsx';

import { Heading } from '../../Typography/Heading';
import { Text } from '../../Typography/Text';

import type { THeroBlockProps } from '../lib/heroBlock.type';

export const HeroBlock = ({
  title,
  level = 1,
  textType = 'base',
  description,
  headingClassName,
  textClassName,
  className,
}: THeroBlockProps) => {
  const classes = clsx(
    'flex w-full flex-col items-center justify-center gap-3 text-center',
    className
  );
  const descriptionContent = description && (
    <Text type={textType} weight="medium" className={textClassName}>
      {description}
    </Text>
  );

  return (
    <div className={classes}>
      <Heading level={level} className={headingClassName}>
        {title}
      </Heading>
      {descriptionContent}
    </div>
  );
};
