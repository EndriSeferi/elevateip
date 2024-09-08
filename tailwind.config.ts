import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#59E0EA', // Primary accent color
          light: '#a3eff2', // Lighter shade
          dark: '#32b8c4', // Darker shade
        },
        secondary_accent: {
          DEFAULT: '#EEDA77', // Primary secondary accent color
          light: '#f3e8a2', // Lighter shade
          dark: '#d2bd63', // Darker shade
        },
        gray: {
          100: '#f5f5f5', // Very light gray
          200: '#e5e5e5', // Light gray
          300: '#d4d4d4', // Medium gray
          400: '#a3a3a3', // Darker gray
          500: '#737373', // Dark gray
        },
        white: '#ffffff',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'], // Use Merriweather for headings
        sans: ['Inter', 'sans-serif'], // Use Inter for body text
      },
      fontSize: {
        // Headings
        h1: ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // 40px
        h2: ['2rem', { lineHeight: '1.3', fontWeight: '700' }], // 32px
        h3: ['1.75rem', { lineHeight: '1.4', fontWeight: '600' }], // 28px

        // Body text
        base: ['1rem', { lineHeight: '1.75', fontWeight: '400' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }], // 18px
        sm: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
