/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        myanmar: ['Noto Sans Myanmar', 'Padauk', 'sans-serif'],
      },
      colors: {
        'app': {
          bg: '#FAFAF8',
          card: '#FFFFFF',
          text: '#1A1814',
          muted: '#6B6860',
          border: '#E8E6DF',
          accent: '#1B4F3A',
          'accent-light': '#E8F4EE',
          'accent2': '#C9440A',
          'accent2-light': '#FAEEE7',
          gold: '#B8860B',
          'gold-light': '#FDF6DC',
          blue: '#1A4B7C',
          'blue-light': '#EAF1FA',
          purple: '#4A3580',
          'purple-light': '#EEEAFA',
          teal: '#0F6E56',
          'teal-light': '#E1F5EE',
        },
        'dark': {
          bg: '#141210',
          card: '#1E1C18',
          text: '#F0EDE4',
          muted: '#9B9888',
          border: '#2E2B24',
          'accent-light': '#0F2B1E',
          'accent2-light': '#2B150A',
          'gold-light': '#231E07',
          'blue-light': '#0D1F30',
          'purple-light': '#1A1530',
          'teal-light': '#061E17',
        }
      },
    },
  },
  plugins: [],
}