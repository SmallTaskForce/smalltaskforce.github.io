/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.razor",
    "./**/*.html",
    "./**/*.cshtml",
    "./**/*.{js,ts}",
    "!./bin/**/*",
    "!./obj/**/*",
    "!./node_modules/**/*"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
