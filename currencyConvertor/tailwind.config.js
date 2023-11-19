/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
