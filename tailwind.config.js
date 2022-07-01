/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#F00109',
          blue: '#0205C7',
          light: '#FFFFFF',
          'light-grayish': '#E5E5E5',
          dark: '#000000',
          yellow: '#FFC635',
          green: '#00E676',
          purple: '#8297E0'
        },
      }
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
