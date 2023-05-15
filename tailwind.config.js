/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': ['#FFFFFF'],
      'cream': ['#b49383'],
      'orange': ['#FDA403'],
      'darkorange': ['#cb8402'],
      'transparent': ['transparent'],
      'bg-header': ['rgb(0 0 0 / 85%)'],
      'bg-component': ['#f8f9fa'],
      'bg-orange': ['#FDA403'],
      'bg-darkorange': ['#cb8402'],
      'bg-lightyellow': ['#fdb44b'],
    },
    extend: {
      backgroundImage: {
        'home': "url('./assets/img/home.jpg')",
        'curve': "url('./assets/img/curve_line.svg')"
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

