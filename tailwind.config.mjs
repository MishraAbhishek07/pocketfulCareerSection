import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": {
            transform: "translateY(2rem)", // Start below
            opacity: "0", // Start invisible
          },
          "100%": {
            transform: "translateY(0)", // End at normal position
            opacity: "1", // End fully visible
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
