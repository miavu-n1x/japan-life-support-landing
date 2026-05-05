import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        ivory: "#fffaf1",
        cream: "#fff6e8",
        mist: "#f6fbfb",
        pastel: {
          blue: "#b9dcf5",
          mint: "#cdeee1",
          lavender: "#d9d2f3",
          coral: "#f7c8bd",
          peach: "#ffe1c7",
        },
        navy: {
          50: "#f2f7fb",
          100: "#d9eaf5",
          500: "#1f6f9f",
          700: "#124a73",
          900: "#08223a",
          950: "#041725",
        },
        skysoft: "#e9f7ff",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(8, 34, 58, 0.08)",
        premium: "0 24px 70px rgba(8, 34, 58, 0.12)",
        glow: "0 18px 50px rgba(185, 220, 245, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
