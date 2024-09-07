/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#7a68a9",
        secondary: "#ffffff",
        "purple-shade-1": "#b6a5de",
        "gray-shade-1": "#808080",
        "black-shade-1": "#050202d0",
        "pink-shade-1": "#f5e8e8",
        "black-shade-2": "#1f1f1f",
        "black-shade-3": "#454141",
        "gray-shade-2": "#2f4f4f",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow-without-hover": {
            textShadow: "1px 1px 2px rgb(104, 53, 223)",
          },
          ".text-shadow-on-hover": {
            textShadow: "2px 2px 3px rgb(87, 59, 158)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
