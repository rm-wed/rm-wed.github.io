/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#faf3eb",
          DEFAULT: "#f5e6d3",
          200: "#e8d5c0",
          300: "#d4bc9e",
        },
        wine: {
          DEFAULT: "#5c3a2e",
          light: "#7a5548",
        },
        rose: {
          DEFAULT: "#c4756e",
          light: "#e8c4b8",
          dark: "#a85a53",
        },
        sage: {
          DEFAULT: "#8a9a7b",
          light: "#b5c4a8",
        },
        gold: "#c9a96e",
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        heading: ['"Playfair Display"', "serif"],
        body: ['"Cormorant Garamond"', "serif"],
      },
    },
  },
  plugins: [],
};
