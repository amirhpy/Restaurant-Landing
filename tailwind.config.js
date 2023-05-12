/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': ['#FFFFFF'],
      'cream': ['#b49383'],
      'transparent': ['transparent'],
      'bg-header': ['rgb(0 0 0 / 85%)']
    },
    extend: {
      backgroundImage: {
        'home': "url('./assets/img/home.jpg')"
      },
      boxShadow: {
        'shadow': '0px 45px 70px rgba(0,0,0,0.24)'
      },
      fontFamily: {
        'PT-regular': ['PT-regular'],
        'PT-bold': ['PT-bold'],
        'Vazir-bold': ['Vazir-bold'],
        'Vazir-regular': ['Vazir-regular'],
        'Vazir-medium': ['Vazir-medium'],
        'Nastaliq': ['Nastaliq'],
      }
    },
  },
  plugins: [],
}

