import type { Config } from "tailwindcss";

/**
 * MAMREX HUB design tokens.
 * Brand colours: Deep Navy #0A1F44 + Bright Orange #FF7A00, plus black and white (and neutral greys via opacity).
 *
 * Adaptive tokens (switch in dark mode via CSS variables in globals.css):
 *   white = page surface   black = body text   brand = headings/links/icons (navy in light, white in dark)
 * Static tokens (never change):
 *   navy = Deep Navy       snow = pure white (use for text on navy/orange areas)   accent = Bright Orange
 *
 * Soft shades use opacity (text-black/70, border-black/10, bg-brand/5), never extra colours.
 */
const rgb = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: rgb("--c-white"),
      black: rgb("--c-black"),
      brand: rgb("--c-brand"),
      navy: "rgb(10 31 68 / <alpha-value>)",
      snow: "rgb(255 255 255 / <alpha-value>)",
      accent: "rgb(255 122 0 / <alpha-value>)",
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "12px", tile: "20px" },
      boxShadow: {
        lift: "0 12px 32px -12px rgb(10 31 68 / 0.28)",
        soft: "0 1px 2px rgb(10 31 68 / 0.06), 0 8px 24px -12px rgb(10 31 68 / 0.18)",
      },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: { "fade-up": "fade-up 0.6s ease-out both" },
    },
  },
  plugins: [],
};

export default config;
