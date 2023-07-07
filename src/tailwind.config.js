/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '500': '500px',
        '530': '530px',
        '600': '600px',
      },

    width:{
      '300' : '250px',
      '320' : '320px',
    }
    },
  },
  plugins: [],
}
