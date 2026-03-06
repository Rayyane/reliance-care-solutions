/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          50: '#e6fffc',
          100: '#ccfffa',
          400: '#00998a',
          500: '#00766a', // Your exact color
          600: '#00665c',
          700: '#004d45',
        },
        'brand-yellow': {
          50: '#ffedcc',
          100: '#ffe4b3',
          400: '#ffb833',
          500: '#ffa600', // Your exact color
          600: '#e69500',
          700: '#cc8500',
        },
        'brand-pink': {
          50: '#ffe8e6',
          100: '#ffd2cc',
          400: '#ff8e80',
          500: '#ffa600', // Your exact color
          600: '#ff614d',
          700: '#ff4b33',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

