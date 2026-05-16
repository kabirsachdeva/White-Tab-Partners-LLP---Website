import type { Config } from "tailwindcss";

// In Tailwind v4, theme values are defined via @theme in globals.css.
// This file is kept for any plugin needs but theme config lives in CSS.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
