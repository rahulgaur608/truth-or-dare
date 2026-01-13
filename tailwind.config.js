/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'ios-dark': '#000000',
        'vibrant-purple': '#6C2AEE',
        'vibrant-orange': '#FF7F00',
        'vibrant-green': '#4ade80',
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
      },
      borderRadius: {
        'ios': '32px',
        'chip': '28px',
      },
    },
  },
  plugins: [],
}
