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
