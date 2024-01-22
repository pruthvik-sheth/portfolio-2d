/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: ["light", "business"],
    themes: ["business", "light"],
  },
}

