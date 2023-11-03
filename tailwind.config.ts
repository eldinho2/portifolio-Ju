import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '250px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'sm2': {'min': '250px', 'max': '350px'},

      'md': {'min': '350px', 'max': '550px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '550px', 'max': '900px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        play: ['var(--font-playfair)'],
        mon: ['var(--font-montserrat)'],
        edu: ['var(--font-edu)'],
      },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  plugins: [],
}
export default config
