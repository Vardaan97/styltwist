import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#FFFFFF",
        champagne: "#C9A84C",
        ivory: "#1B2A4A",
        slate: "#F0F3F9",
        navy: "#1B2A4A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
        card: "12px",
        "card-lg": "16px",
        section: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
