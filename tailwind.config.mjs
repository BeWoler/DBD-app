import tailwindCssVariables from '@mertasan/tailwindcss-variables';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-h1',
    'text-h2',
    'text-h3',
    'text-h4',
    'text-h5',
    'text-xs-custom',
    'text-sm-custom',
    'text-base-custom',
    'text-lg-custom',
    'text-xl-custom',
    'text-2xl-custom',
    'text-3xl-custom',
    'text-4xl-custom',
    'text-5xl-custom',
    'text-6xl-custom',
    'text-7xl-custom',
    'text-8xl-custom',
    'text-9xl-custom',
    'font-bold',
    'font-semibold',
    'font-normal',
    'font-medium',
    'font-light',
    'line-clamp-1',
    'line-clamp-2',
    'line-clamp-3',
    'line-clamp-4',
    'line-clamp-5',
    'line-clamp-6',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '4.2rem', fontWeight: '600', letterSpacing: '-0.0675rem' }],
        h2: ['3rem', { lineHeight: '3.6rem', fontWeight: '600', letterSpacing: '-0.0675rem' }],
        h3: ['2.25rem', { lineHeight: '2.7rem', fontWeight: '600' }],
        h4: ['2rem', { lineHeight: '2.4rem', fontWeight: '600' }],
        h5: ['1.5rem', { lineHeight: '1.8rem', fontWeight: '600' }],
        'xs-custom': ['0.75rem', { lineHeight: '1rem' }],
        'sm-custom': ['0.875rem', { lineHeight: '1.25rem' }],
        'base-custom': ['1rem', { lineHeight: '1.5rem' }],
        'lg-custom': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl-custom': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl-custom': ['1.5rem', { lineHeight: '2rem' }],
        '3xl-custom': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl-custom': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl-custom': ['3rem', { lineHeight: '3rem' }],
        '6xl-custom': ['3.75rem', { lineHeight: '3.75rem' }],
        '7xl-custom': ['4.5rem', { lineHeight: '4.5rem' }],
        '8xl-custom': ['6rem', { lineHeight: '6rem' }],
        '9xl-custom': ['8rem', { lineHeight: '8rem' }],
      },
    },
  },
  plugins: [
    tailwindCssVariables({
      colorVariables: true,
    }),
  ],
};

export default config;
