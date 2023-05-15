/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // @todo fix theme
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary: {
          DEFAULT: "#243763",
          muted: "#576CBC",
          light: "#A5D7E8",
          lighter: "#D4E4E6",
          dark: "#0B2447",
        },
        secondary: {
          DEFAULT: "#FFEBB7",
          light: "#AD8E70",
        },
        highlight: "#FF6E31",
        skin: {
          muted: "#FAFCFC",
          DEFAULT: "#E5EEEF",
        },
        disabled: {
          DEFAULT: "#8B7E74",
          text: "#D3D3D3"
        }
      },
      fontFamily: {
        primary: ["sans-serif"],
        secondary: ["sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
