import type { Config } from "tailwindcss";

/**
 * Nitara theme — saturated logo colours plus the pastel tints used for
 * section backgrounds.
 */
export default {
  content: [
    "./app/components/**/*.{vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/utils/**/*.ts",
    "./app/app.vue",
    "./content.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Baloo 2", "Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Logo colours
        brand: {
          blue: "#1c4e9d",
          orange: "#f47920",
          green: "#3fa535",
          pink: "#e8368f",
          yellow: "#fdb913",
          purple: "#7b3f98",
        },
        // Pastel surfaces
        cream: "#fff8f0",
        blush: "#ffefe6",
        sky: "#eaf3fd",
        mint: "#eaf7e9",
        lilac: "#f3edf9",
        butter: "#fff6dc",
        // Ink
        ink: {
          DEFAULT: "#16263f",
          muted: "#5b6b84",
        },
        // Blue ramp for buttons and links
        primary: {
          50: "#eef5fd",
          100: "#d9e8fa",
          200: "#b7d2f4",
          300: "#88b4ea",
          400: "#528fdc",
          500: "#2e6fc6",
          600: "#1c4e9d",
          700: "#183f80",
          800: "#16356a",
          900: "#152e59",
        },
        // Orange ramp for the primary call to action
        accent: {
          50: "#fff5ed",
          100: "#ffe8d4",
          200: "#ffcda8",
          300: "#ffaa70",
          400: "#fb7a37",
          500: "#f47920",
          600: "#e35c0c",
          700: "#bc430c",
          800: "#953712",
          900: "#782f12",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgb(22 38 63 / 0.12)",
        lift: "0 22px 60px -18px rgb(22 38 63 / 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
