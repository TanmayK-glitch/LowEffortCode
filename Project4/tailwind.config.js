/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#f1e9e1',
        'brand-brown': '#4b2e26',
        'brand-orange': '#f36f36',
        'brand-green': '#92a36f',
        'brand-light': '#f7efe8',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
