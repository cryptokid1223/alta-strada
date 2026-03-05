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
        blue: {
          primary: "#1E6FC4",
          dark: "#0D3B7A",
          deeper: "#091F48",
          light: "#3A8FE2",
          pale: "#E8F1FB",
          wash: "#F2F7FD"
        },
        gray: {
          50: "#F5F7FA",
          100: "#E9ECF1",
          200: "#D1D5DB",
          400: "#8896A6",
          600: "#4A5568",
          800: "#1E293B",
          900: "#0F172A"
        },
        silver: "#A8B4C0",
        "silver-light": "#C8D0D8",
        white: "#FFFFFF",
        "off-white": "#FAFBFD"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"]
      },
      maxWidth: {
        content: "1200px"
      },
      boxShadow: {
        "nav-scrolled": "0 1px 3px rgba(0,0,0,0.08)",
        "card-hover": "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)"
      }
    }
  },
  plugins: []
};

export default config;
