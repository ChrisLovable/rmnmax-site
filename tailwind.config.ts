import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#111E35",
          light: "#1B2D4D",
          dark: "#0A1322",
        },
        accent: {
          DEFAULT: "#2E7D32",
          light: "#43A047",
          dark: "#1B5E20",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(17, 30, 53, 0.08)",
        "card-hover": "0 12px 32px -4px rgba(17, 30, 53, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
