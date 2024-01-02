/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BDEB00",
        secondary: {
          100: "#1E1F25", //marcos color oscuro ++
          500: "#222327", //submenu color oscuro +
          900: "#E0EFE2", //minibox color
          400: "#2A332B", //text1 color
          200: "#EFFCF1", //fondo color
        }
      },
    },
  },
  plugins: [],
}

