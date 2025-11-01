/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mincho': ['MS Mincho', 'serif'],
      },
      colors: {
        'eagle-red': '#A61C34',
        'eagle-grey': '#1a1a1a',
      },
    },
  },
  plugins: [],
}

