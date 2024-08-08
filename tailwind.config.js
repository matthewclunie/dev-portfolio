/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: `translate(0px, -40px)` },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-down": "fadeDown 1s ease-in-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        ".delay-700": {
          animationDelay: "700ms",
        },
        ".animation-fill-forwards": {
          "animation-fill-mode": "forwards",
        },
      };

      addUtilities(utilities, ["responsive", "hover"]);
    },
  ],
};
