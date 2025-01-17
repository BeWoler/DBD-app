import { HTMLAttributes } from 'react';

export interface IDivProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  threshold?: number;
}
