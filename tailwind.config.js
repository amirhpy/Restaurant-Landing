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
        'curve': "url('./assets/img/svg/curve_line.svg')",
        'order1': "url('./assets/img/ourmenu/img_1.jpg')",
        'order2': "url('./assets/img/ourmenu/img_2.jpg')",
        'order3': "url('./assets/img/ourmenu/img_3.jpg')",
        'order4': "url('./assets/img/ourmenu/img_4.jpg')",
        'order5': "url('./assets/img/ourmenu/img_5.jpg')",
        'order6': "url('./assets/img/ourmenu/img_6.jpg')",
        'reservations': "url('./assets/img/reservations.jpg')",
      },
      fontFamily: {
        'PT-regular': ['PT-regular'],
        'PT-bold': ['PT-bold'],
        'Vazir-bold': ['Vazir-bold'],
        'Vazir-regular': ['Vazir-regular'],
        'Vazir-medium': ['Vazir-medium'],
        'Vazir-digit': ['Vazir-digit'],
        'Nastaliq': ['Nastaliq']
      }
    },
  },
  plugins: [],
}

