/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      writingMode: {
        "vertical-rl": "vertical-rl",
        "vertical-lr": "vertical-lr",
      },
      textOrientation: {
        mixed: "mixed",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".writing-vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".writing-vertical-lr": {
          writingMode: "vertical-lr",
        },
        ".text-orientation-mixed": {
          textOrientation: "mixed",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
