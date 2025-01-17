import type { THeadingProps } from '../../Typography/Heading/lib/heading.type';
import type { TTextProps } from '../../Typography/Text/lib/text.type';

export type THeroBlockProps = {
  title: string;
  level?: THeadingProps['level'];
  textType?: TTextProps['type'];
  description?: string;
  className?: string;
  headingClassName?: string;
  textClassName?: string;
};
