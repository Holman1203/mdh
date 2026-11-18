import type { Config } from "tailwindcss";

// Brand palette: ONLY these four colours (indigo, orange, black, white).
// Softer shades are made with opacity (e.g. text-black/60, bg-brand/5, border-black/10).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: "#120186",
      accent: "#FF4221",
      black: "#111111",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        tile: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
