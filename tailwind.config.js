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
        'text-primary': '#A61C34',    // 0. Red
        'text-dark': '#333333',       // 1. Dark gray
        'text-medium': '#666666',     // 2. Medium gray
        'text-light': '#999999',      // 3. Light gray
        'text-white': '#ffffff',      // 4. White
        'text-black': '#000000',      // 5. Black
      },
    },
  },
  plugins: [],
}

