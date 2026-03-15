/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        brand: {
          highlight: '#E8D4A1',
          gold: '#E8D4A1',
          dark: '#063227',
          DEFAULT: '#004E3A',
          light: '#006B50',
        }
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(63.88deg, #063227 0%, #02523E 28.18%, #06614B 52.06%, #02523E 73.55%, #063227 99.33%)',
      },
      maxWidth: {
        'content': '1260px',
        'content-mobile': '405px',
      }
    },
  },
  plugins: [],
}

