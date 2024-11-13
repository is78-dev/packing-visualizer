/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { colors: { black: "#222", white: "#eee", gray: "#333" } },
  },
  plugins: [],
};
