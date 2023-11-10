/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abc: ["abc", ...defaultTheme.fontFamily.sans],
        "abc-thin": ["abc-thin", ...defaultTheme.fontFamily.sans],
        "abc-bold": ["abc-bold", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-238%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(238%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-infinite": "marquee 60s linear infinite",
        "marquee2-infinite": "marquee2 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
