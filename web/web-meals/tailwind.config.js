/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d97706',
        secondary: {
          100: '##3f3f46', //marcos color oscuro ++
          500: '##71717a', //submenu color oscuro +
          900: '##a1a1aa', //minibox color
          400: '##d4d4d8', //text1 color
          200: '##f4f4f5', //fondo color
        },
      },
    },
  },
  plugins: [],
};
