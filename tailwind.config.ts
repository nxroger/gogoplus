import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gogoplus: {
          primary: '#4B5BFF',
          dark: '#1B1E3D',
          accent: '#FF8E8E'
        }
      },
      fontFamily: {
        heading: ['"Noto Sans TC"', 'sans-serif'],
        body: ['"Noto Sans TC"', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
