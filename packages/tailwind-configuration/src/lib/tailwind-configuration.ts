// import { Config } from 'tailwindcss';
import Plugin = require('tailwindcss/plugin');

export const lgcTailwindPlugin = Plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--lgc-screen-xs': '320px',
        '--lgc-screen-sm': '576px',
        '--lgc-screen-md': '768px',
        '--lgc-screen-lg': '992px',
        '--lgc-screen-xl': '1200px',
        '--dp-0': '0', //0
        '--dp-4': '0.25rem', //50
        '--dp-8': '0.5rem', //100
        '--dp-12': '0.75rem', //150
        '--dp-14': '0.875rem', //175
        '--dp-16': '1rem', //200
        '--dp-20': '1.25rem', //250
        '--dp-24': '1.5rem', //300
        '--dp-28': '1.75rem', //350
        '--dp-32': '2rem', //400
        '--dp-36': '2.25rem', //450
        '--dp-40': '2.5rem', //500
        '--dp-44': '2.75rem', //550
        '--dp-48': '3rem', //600
        '--dp-52': '3.25rem', //650
        '--dp-56': '3.5rem', //700
        '--dp-60': '3.75rem', //750
        '--dp-64': '4rem', //800
        '--dp-68': '4.25rem', //850
        '--dp-72': '4.5rem', //900
        '--dp-76': '4.75rem', //950
        '--dp-80': '5rem', // 1000
        '--dp-96': '6rem', //1200
        '--dp-128': '8rem', // 1600
        '--dp-160': '10rem', //2000
        '--dp-192': '12rem', //2400
        '--dp-224': '14rem', //2800
        '--dp-256': '16rem', //3200
        '--space-xxs': 'var(--dp-4)',
        '--space-xs': 'var(--dp-8)',
        '--space-sm': 'var(--dp-12)',
        '--space-md': 'var(--dp-16)',
        '--space-lg': 'var(--dp-20)',
        '--space-xl': 'var(--dp-20)',
        '--space-2xl': 'var(--dp-24)',
        '--space-3xl': 'var(--dp-32)',
        '--space-4xl': 'var(--dp-40)',
        '--space-5xl': 'var(--dp-48)',
        '--space-6xl': 'var(--dp-80)',
        '--radius-xs': 'var(--dp-4)',
        '--radius-sm': 'var(--dp-8)',
        '--radius-md': 'var(--dp-12)',
        '--radius-lg': 'var(--dp-16)',
        '--radius-xl': 'var(--dp-20)',
        '--radius-full': '9999rem',
        '--shadow-xs': '0px 1px 4px 0px rgba(95, 109, 179, 0.24)',
        '--shadow-sm': '0px 1px 8px 0px rgba(95, 109, 179, 0.24)',
        '--shadow-md': '0px 2px 12px 0px rgba(95, 109, 179, 0.24)',
        '--shadow-lg': '0px 4px 16px 0px rgba(95, 109, 179, 0.24)',
        '--shadow-xl': '0px 8px 24px 0px rgba(95, 109, 179, 0.24)',
        '--shadow-2xl': '0px 12px 32px 0px rgba(95, 109, 179, 0.24)',
        '--shadow-form': '0px -2px 0px 0px #dbDFE4 inset',
        '--shadow-form-hover': '0px -2px 0px 0px #bec6d4 inset',
        '--shadow-form-active': '0px -2px 0px 0px #00b1c2 inset',
        '--shadow-form-error': '0px -2px 0px 0px #ce365a inset',
        '--shadow-focus': '0px 0px 0px 3px rgba(0, 177, 194,0.24)',
        '--font-size-heading-2xl': 'var(--dp-28)',
        '--font-size-heading-xl': 'var(--dp-28)',
        '--font-size-heading-lg': 'var(--dp-24)',
        '--font-size-heading-md': 'var(--dp-20)',
        '--font-size-heading-sm': 'var(--dp-16)',
        '--font-size-heading-xs': 'var(--dp-14)',
        '--font-size-body-lead': 'var(--dp-20)',
        '--font-size-body-md': 'var(--dp-16)',
        '--font-size-body-sm': 'var(--dp-14)',
        '--font-size-body-xs': 'var(--dp-12)',
        '--font-size-form-md': 'var(--dp-16)',
        '--font-size-form-sm': 'var(--dp-14)',
        '--font-size-form-xs': 'var(--dp-12)',
        '--line-height-heading-2xl': 'var(--dp-36)',
        '--line-height-heading-xl': 'var(--dp-36)',
        '--line-height-heading-lg': 'var(--dp-32)',
        '--line-height-heading-md': 'var(--dp-28)',
        '--line-height-heading-sm': 'var(--dp-24)',
        '--line-height-heading-xs': 'var(--dp-20)',
        '--line-height-body-lead': 'var(--dp-28)',
        '--line-height-body-md': 'var(--dp-24)',
        '--line-height-body-sm': 'var(--dp-20)',
        '--line-height-body-xs': 'var(--dp-16)',
        '--line-height-form-md': 'var(--dp-24)',
        '--line-height-form-sm': 'var(--dp-16)',
        '--line-height-form-xs': 'var(--dp-14)',
      },
    });
    addBase({
      //medium screen
      '@media (min-width:768px) and (max-width: 992px)': {
        ':root': {
          '--font-size-heading-2xl': 'var(--dp-36)',
          '--font-size-heading-xl': 'var(--dp-28)',
          '--line-height-heading-2xl': 'var(--dp-44)',
          '--line-height-heading-xl': 'var(--dp-36)',
        },
      },
      '@media (min-width:992px)': {
        // large screens
        ':root': {
          '--space-xxs': 'var(--dp-4)',
          '--space-xs': 'var(--dp-8)',
          '--space-sm': 'var(--dp-12)',
          '--space-md': 'var(--dp-16)',
          '--space-lg': 'var(--dp-20)',
          '--space-xl': 'var(--dp-24)',
          '--space-2xl': 'var(--dp-32)',
          '--space-3xl': 'var(--dp-40)',
          '--space-4xl': 'var(--dp-48)',
          '--space-5xl': 'var(--dp-64)',
          '--space-6xl': 'var(--dp-80)',
          '--radius-md': 'var(--dp-16)',
          '--radius-lg': 'var(--dp-20)',
          '--radius-xl': 'var(--dp-32)',
          '--font-size-heading-2xl': 'var(--dp-44)',
          '--font-size-heading-xl': 'var(--dp-36)',
          '--font-size-heading-lg': 'var(--dp-28)',
          '--font-size-heading-md': 'var(--dp-24)',
          '--font-size-heading-sm': 'var(--dp-20)',
          '--font-size-heading-xs': 'var(--dp-16)',
          '--line-height-heading-2xl': 'var(--dp-52)',
          '--line-height-heading-xl': 'var(--dp-44)',
          '--line-height-heading-lg': 'var(--dp-36)',
          '--line-height-heading-md': 'var(--dp-32)',
          '--line-height-heading-sm': 'var(--dp-28)',
          '--line-height-heading-xs': 'var(--dp-24)',
        },
      },
    });
  },
  {
    theme: {
      fontFamily: {
        sans: [
          '"Source Sans 3 VF"',
          '"Nunito Sans"',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      fontSize: {
        'heading-2xl': [
          'var(--font-size-heading-2xl)',
          { lineHeight: 'var(--line-height-heading-2xl)' },
        ],
        'heading-xl': [
          'var(--font-size-heading-xl)',
          { lineHeight: 'var(--line-height-heading-xl)' },
        ],
        'heading-lg': [
          'var(--font-size-heading-lg)',
          { lineHeight: 'var(--line-height-heading-lg)' },
        ],
        'heading-md': [
          'var(--font-size-heading-md)',
          { lineHeight: 'var(--line-height-heading-md)' },
        ],
        'heading-sm': [
          'var(--font-size-heading-sm)',
          { lineHeight: 'var(--line-height-heading-sm)' },
        ],
        'heading-xs': [
          'var(--font-size-heading-xs)',
          { lineHeight: 'var(--line-height-heading-xs)' },
        ],
        'body-lead': [
          'var(--font-size-body-lead)',
          { lineHeight: 'var(--line-height-body-lead)' },
        ],
        'body-md': [
          'var(--font-size-body-md)',
          { lineHeight: 'var(--line-height-body-md)' },
        ],
        'body-sm': [
          'var(--font-size-body-sm)',
          { lineHeight: 'var(--line-height-body-sm)' },
        ],
        'body-xs': [
          'var(--font-size-body-xs)',
          { lineHeight: 'var(--line-height-body-xs)' },
        ],
        'form-md': [
          'var(--font-size-form-md)',
          { lineHeight: 'var(--line-height-form-md)' },
        ],
        'form-sm': [
          'var(--font-size-form-sm)',
          { lineHeight: 'var(--line-height-form-sm)' },
        ],
        'form-xs': [
          'var(--font-size-form-xs)',
          { lineHeight: 'var(--line-height-form-xs)' },
        ],
        '150': 'var(--dp-12)',
        '175': 'var(--dp-14)',
        '200': 'var(--dp-16)',
        '250': 'var(--dp-20)',
        '300': 'var(--dp-24)',
        '350': 'var(--dp-28)',
        '450': 'var(--dp-36)',
        '550': 'var(--dp-44)',
      },
      lineHeight: {
        '150': 'var(--dp-12)',
        '175': 'var(--dp-14)',
        '200': 'var(--dp-16)',
        '250': 'var(--dp-20)',
        '300': 'var(--dp-24)',
        '350': 'var(--dp-28)',
        '400': 'var(--dp-32)',
        '450': 'var(--dp-36)',
        '550': 'var(--dp-44)',
        '650': 'var(--dp-52)',
      },
      spacing: {
        '0': 'var(--dp-0)',
        '50': 'var(--dp-4)',
        '100': 'var(--dp-8)',
        '150': 'var(--dp-12)',
        '200': 'var(--dp-16)',
        '250': 'var(--dp-20)',
        '300': 'var(--dp-24)',
        '400': 'var(--dp-32)',
        '500': 'var(--dp-40)',
        '600': 'var(--dp-48)',
        '800': 'var(--dp-64)',
        '1000': 'var(--dp-80)',
        xxs: 'var(--space-xxs)',
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
        '6xl': 'var(--space-6xl)',
      },
      space: {
        '0': 'var(--dp-0)',
        '50': 'var(--dp-4)',
        '100': 'var(--dp-8)',
        '150': 'var(--dp-12)',
        '200': 'var(--dp-16)',
        '250': 'var(--dp-20)',
        '300': 'var(--dp-24)',
        '400': 'var(--dp-32)',
        '500': 'var(--dp-40)',
        '600': 'var(--dp-48)',
        '800': 'var(--dp-64)',
        '1000': 'var(--dp-80)',
        xxs: 'var(--space-xxs)',
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
        '6xl': 'var(--space-6xl)',
      },
      borderRadius: {
        0: 'var(--dp-0)',
        50: 'var(--dp-4)',
        100: 'var(--dp-8)',
        150: 'var(--dp-12)',
        200: 'var(--dp-16)',
        250: 'var(--dp-20)',
        300: 'var(--dp-24)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        none: 'none',
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        form: 'var(--shadow-form)',
        'form-hover': 'var(--shadow-form-hover)',
        'form-active': 'var(--shadow-form-active)',
        'form-error': 'var(--shadow-form-error)',
        focus: 'var(--shadow-focus)',
      },
      screens: {
        xs: 'var(--lgc-screen-xs, 320px)',
        sm: 'var(--lgc-screen-sm, 576px)',
        md: 'var(--lgc-screen-md, 768px)',
        lg: 'var(--lgc-screen-lg, 992px)',
        xl: 'var(--lgc-screen-xl, 1200px)',
      },
    },
  }
);
