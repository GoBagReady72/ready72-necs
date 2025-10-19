import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        ready72: '#FF6A00',
      },
    },
  },
  plugins: [],
} satisfies Config