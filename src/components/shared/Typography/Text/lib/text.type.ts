type TTextType =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

type TTextWeight = 'bold' | 'medium' | 'normal' | 'light' | 'semibold';

type TTextClamp = 1 | 2 | 3 | 4 | 5 | 6;

export type TTextProps = {
  type: TTextType;
  weight?: TTextWeight;
  clamp?: TTextClamp;
  userSelect?: boolean;
  className?: string;
};
