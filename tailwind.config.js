/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Play', 'sans-serif'],
      serif:  ['Glegoo, "Rhodium Libre"', 'serif'],
      body: ['Lemonada', 'cursive'],
      mono: ['"JetBrains Mono"', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}

