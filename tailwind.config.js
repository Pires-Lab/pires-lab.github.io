/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ndsu-gold": "#FFC425",
        "lab-sage": "#A0BD78",
        "lab-field": "#C8DD9B",
        "lab-deep": "#041A12",
        "lab-muted": "#6F727B",
        "lab-soft": "#9D9795",
        "lab-gray": "#555960",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)"],
        serif: ["var(--font-lora)"],
        heading: ["var(--font-plus-jakarta)"],
        body: ["var(--font-lora)"],
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.10) rotate(0.3deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
      },
      animation: {
        kenburns: "kenburns 4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};