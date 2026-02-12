import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md',
  ],
  darkMode: 'class',

  theme: {
    darkSelector: '.dark',
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '' },
            'code::after': { content: '' },
          },
        },
      },
      colors: {
        primary: '#088395',
        secondary: '#333',
        dark: '#091a28',
        elevated: '#dfe8ef',
        linkExactActiveClass: '#088395',
      },
      margin: {
        'top-bar': '100px',
      },
      maxWidth: {
        '1/4': '25%',
      },
    },
  },
  variants: {
    backgroundColor: [
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
