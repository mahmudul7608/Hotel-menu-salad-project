/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a2332',
        'primary-dark': '#0f1623',
        secondary: 'rgb(31, 243, 176)',
        accent: 'tomato',
        'navy-dark': '#0d1117',
        'navy-blue': '#1a2332',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(180deg, #1a2332 0%, #0d1623 50%, #0a0f1a 100%)',
        'colorful-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #1a1a2e 100%)',
        'vibrant-gradient': 'radial-gradient(circle at 20% 50%, rgba(83, 52, 131, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(15, 52, 96, 0.3) 0%, transparent 50%), linear-gradient(135deg, #0a0e27 0%, #16213e 25%, #1a1a40 50%, #2d1b4e 75%, #0a0e27 100%)',
      },
      fontFamily: {
        alkalami: ['Alkalami', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}
