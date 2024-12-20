/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      spacing: {
        '12': '12px'
      }
    },
    colors: {
      blue: {
        light: '#D7DEF6',
        dark: '#131B3C'
      },
      light: {
        light: '',
        default: '#F9F9F9',
        dark: ''
      },
      white: {
        default: '#FFF'
      },
      yellow: {
        light: '',
        default: '#FFD700',
        dark: ''
      },
      grey: {
        light: '#616161',
        default: '#515151'
      }
    },
    extend: {},
  },
  plugins: [],
}

