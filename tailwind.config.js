/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0ea5e9",
        "text-primary": "#1f2937",
        "text-secondary": "#6b7280",
        "border-color": "#e5e7eb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.1)",
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        medium: "0 10px 25px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        "4k": "1980px",
      },
    },
  },
  plugins: [],
};
