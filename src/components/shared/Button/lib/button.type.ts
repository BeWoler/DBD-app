import type { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: TButtonBackgroundColor;
}

type TButtonBackgroundColor = 'blue' | 'dark' | 'red' | 'gray';
