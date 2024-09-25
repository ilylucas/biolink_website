/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#7CB3C6"
      }
    },
    fontFamily: {
      default: ["Source code pro", "monospace"]
    }
  },
  plugins: [],
}