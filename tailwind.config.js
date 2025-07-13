/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {dropShadow: {
        glow: "0 0 10px rgba(255, 76, 76, 0.8)", // soft red glow
      },},
  },

  plugins: [],
}


