import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          night: "#0D2A16",
          deep: "#081B0F",
          DEFAULT: "#0D2A16",
        },
        explorer: {
          green: "#3E6F39",
        },
        bark: {
          brown: "#8B5A2B",
          dark: "#5C3A1B",
        },
        river: {
          blue: "#365B89",
        },
        moonbeam: {
          DEFAULT: "#F2E8C9",
        },
        amber: {
          glow: "#C47B1F",
          light: "#E0A24A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        brand: "18px",
      },
      maxWidth: {
        container: "1180px",
      },
      keyframes: {
        firefly: {
          "0%, 100%": { opacity: "0", transform: "translate(0,0)" },
          "45%, 55%": { opacity: "1" },
          "50%": { transform: "translate(12px,-16px)" },
        },
        cueGrow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        firefly: "firefly 6s ease-in-out infinite",
        cueGrow: "cueGrow 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
