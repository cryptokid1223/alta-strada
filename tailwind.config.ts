import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        "navy-light": "#132038",
        charcoal: "#2C3E50",
        slate: "#475B6F",
        silver: "#94A3B8",
        white: "#FFFFFF",
        "off-white": "#F8FAFC",
        ice: "#E2E8F0",
        accent: "#3B82C8",
        "accent-hover": "#2563A8"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      maxWidth: {
        "content": "1200px"
      }
    }
  },
  plugins: []
};

export default config;

