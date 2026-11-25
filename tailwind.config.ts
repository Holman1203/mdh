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
      // Heading sizes tuned for Cormorant Garamond (small x-height, so a little larger)
      fontSize: {
        "3xl": ["1.875rem", { lineHeight: "1.15" }],
        "4xl": ["2.375rem", { lineHeight: "1.1" }],
        "5xl": ["3rem", { lineHeight: "1.05" }],
        "6xl": ["3.625rem", { lineHeight: "1.05" }],
        "7xl": ["4.25rem", { lineHeight: "1.02" }],
      },
      fontFamily: {
        heading: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "12px", tile: "20px" },
      boxShadow: {
        lift: "0 12px 32px -12px rgb(10 31 68 / 0.28)",
        soft: "0 1px 2px rgb(10 31 68 / 0.06), 0 8px 24px -12px rgb(10 31 68 / 0.18)",
      },
      keyframes: {
        scanY: { "0%": { transform: "translateY(-100%)", opacity: "0" }, "12%": { opacity: "1" }, "88%": { opacity: "1" }, "100%": { transform: "translateY(210%)", opacity: "0" } },
        scanX: { "0%": { transform: "translateX(-100%)", opacity: "0" }, "12%": { opacity: "1" }, "88%": { opacity: "1" }, "100%": { transform: "translateX(300%)", opacity: "0" } },
        netDrift: { from: { transform: "translate(0,0)" }, to: { transform: "translate(-18px,12px)" } },
        twinkle: { "0%,100%": { opacity: "0.25" }, "50%": { opacity: "0.9" } },
        zoomIn: { from: { transform: "scale(1)" }, to: { transform: "scale(1.2)" } },
        kenburns: { from: { transform: "scale(1.02) translate(0,0)" }, to: { transform: "scale(1.12) translate(-1.5%,-1%)" } },
        float: { from: { transform: "translateY(0)" }, to: { transform: "translateY(-12px)" } },
        drift: { from: { transform: "translate(0,0) scale(1)" }, to: { transform: "translate(60px,-40px) scale(1.15)" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite alternate",
        "zoom-in": "zoomIn 10s linear forwards",
        kenburns: "kenburns 26s ease-in-out infinite alternate",
        "scan-y": "scanY 16s linear infinite",
        "scan-y-slow": "scanY 24s linear infinite",
        "scan-x": "scanX 22s linear infinite",
        "net-drift": "netDrift 20s ease-in-out infinite alternate",
        twinkle: "twinkle 5s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
