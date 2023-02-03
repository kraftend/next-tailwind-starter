const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './public/**/*.html'],
  theme: {
    fontFamily: {
      sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
    },
  },
  plugins: [],
};
