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
      fontFamily: {
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      colors: {
        'primary-dark': '#4f46e5', // indigo-600
        'primary-light': '#6366f1', // indigo-500
        'secondary-dark': '#111827', // gray-900
        'secondary-light': '#1f2937', // gray-800
      },
      dropShadow: {
        "border-dark": [
          "4px 4px 0 #818cf8",
          "-4px -4px 0 #818cf8",
          "4px -4px 0 #818cf8",
          "-4px 4px 0 #818cf8",
          "0 25px 25px rgb(0 0 0 / 0.15)"
        ],
        "border-light": [
          "4px 4px 0 #6366f1",
          "-4px -4px 0 #6366f1",
          "4px -4px 0 #6366f1",
          "-4px 4px 0 #6366f1",
          "0 25px 25px rgb(0 0 0 / 0.15)"
        ],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
