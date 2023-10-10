import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#00003f',
        'primary-light': '#F6E3BA',
        'secondary-dark': '#25234a',
        'secondary-light': '#FFEFCB',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
