type THeadingLevel = 1 | 2 | 3 | 4 | 5;

export type THeadingProps = {
  level: THeadingLevel;
  className?: string;
  disableInjections?: boolean;
};
