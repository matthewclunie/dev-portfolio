/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bullet-highlight": "#06b6d4",
        backgroundBlue: "#002226",
        aliceblue: "#f0f8ff",
        // "title-highlight": "#fef08a",
      },
      keyframes: {
        fadeDown: {
          "0%": { opacity: "0", transform: `translate(0px, -40px)` },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0", transform: `translate(0px, -40px)` },
        },
        fadeColor: {
          "100%": { color: "#fef08a" },
        },
      },
    },
    animation: {
      "fade-down": "fadeDown 1s ease-in-out",
      "fade-up": "fadeUp 1s ease-in-out",
      "fade-color": "fadeColor 1s ease-in-out",
    },
  },

  plugins: [
    function ({ addUtilities, theme, addComponents }) {
      const utilities = {
        ".delay-700": {
          animationDelay: "700ms",
        },
        ".delay-1400": {
          animationDelay: "1400ms",
        },
        ".animation-fill-forwards": {
          "animation-fill-mode": "forwards",
        },
      };

      addComponents({
        ".list-bullet-highlight li::marker": {
          color: theme("colors.bullet-highlight"),
        },
      });
      addUtilities(utilities, ["responsive", "hover"]);
    },
  ],
};
