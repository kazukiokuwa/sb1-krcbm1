/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#FFB5B5',
          green: '#95D5B2',
          blue: '#95B5D5',
        }
      },
    },
  },
  plugins: [],
};