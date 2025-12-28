import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PolySans Trial', 'sans-serif'],
        primary: ['PolySans Trial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

