/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#ff6b6b',
        dark: '#0a0a0a',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif'], // User requested Space Grotesk for UI/Body (replacing previous mono usage)
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
