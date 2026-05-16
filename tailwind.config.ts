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
        dark: {
          DEFAULT: "#0C0C10",
          secondary: "#141418",
          card: "#1A1A22",
        },
        gold: {
          DEFAULT: "#8B6914",
          light: "#B8943F",
          pale: "#D4AF6A",
          muted: "#6B5010",
        },
        cream: {
          DEFAULT: "#F5EDD8",
          light: "#FAF6ED",
          dark: "#E8D9B8",
        },
        neutral: {
          850: "#1E1E26",
          750: "#2A2A36",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.15" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "6rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
