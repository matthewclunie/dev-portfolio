/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeLeft: "fadeLeft 1s ease-in-out",
        fadeDown: "fadeDown 1s ease-in-out",
      },
      keyframes: {
        fadeLeft: {
          "0%": { opacity: "0%", transform: `translate(-40px)` },
          "100%": { opacity: "100%" },
        },
        fadeDown: {
          "0%": { opacity: "0%", transform: `translate(0px, -40px)` },
          "100%": { opacity: "100%" },
        },
      },
      writingMode: {
        "vertical-lr": "vertical-lr",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".writing-vertical-lr": {
          writingMode: "vertical-lr",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
