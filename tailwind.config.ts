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
      dropShadow: {
        "border-dark": [
          "4px 4px 0 #F6E3BA",
          "-4px -4px 0 #F6E3BA",
          "4px -4px 0 #F6E3BA",
          "-4px 4px 0 #F6E3BA",
          "0 25px 25px rgb(0 0 0 / 0.15)"
        ],
        "border-light": [
          "4px 4px 0 #00003f",
          "-4px -4px 0 #00003f",
          "4px -4px 0 #00003f",
          "-4px 4px 0 #00003f",
          "0 25px 25px rgb(0 0 0 / 0.15)"
        ],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
