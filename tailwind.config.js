/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'neon': '0 0 10px rgba(58, 249, 255, 0.8), 0 0 20px rgba(58, 249, 255, 0.6), 0 0 30px rgba(58, 249, 255, 0.4)',
      },
      colors: {
        neon: '#F9E400',  // Neon color for border and shadow
      },
    },
    fontFamily: {
      orbitron:["orbitron" ],
      c1:["Concert One" ],
      gruppo:["gruppo"],
      eph:["ephesis"],
      sync:["syncopate"],
      amita:["amita"],
      corben:["corben"]
    },

  },
  plugins: [],
}

