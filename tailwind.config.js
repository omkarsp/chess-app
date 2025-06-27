/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        russ: ['"Russo One"', 'sans-serif'],
      },
      colors: {
        royalblue: '#4361ee',
      },
    },
  },
  plugins: [],
}

