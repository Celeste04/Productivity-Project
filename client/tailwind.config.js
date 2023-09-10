/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100' : '28rem',

      },
      colors: {
        'green': '#D4E2D4',
        'cream': '#FAF3F0',
        'blue': '#CBE9F0',
        'pink':'#F8DADB',
        'light-pink':'#FAF3F0',
        'grey': '#585858',
        'light-grey': "#D9D9D9",
      },
    },
  },
  plugins: [],
}

