/** @type {import('tailwindcss').Config} */ 
/* eslint-disable */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["plus-jakarta-sans", "ui-sans-serif"],
    },
    fontSize: {
      "3sm": "6.76px",
      "2sm": "9px",
      "1sm": "12px",
      "base": "16px",
      "1lg": "21.33px",
      "2lg": "28.43px",
      "3lg": "37.9px",
      "4lg": "50.52px",
      "5lg": "77.34px",
    },
    minHeight: {
      "4": "1rem",
      "8": "2rem",
      "12": "3rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
    },
  },
  plugins: [],
}
/* eslint-enable */