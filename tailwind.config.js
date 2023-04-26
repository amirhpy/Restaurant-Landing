/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'cream': ['#F8D7A4'],
      'charleston': ['#232730'],
      'brown': ['#A55C30'],
      'navy': ['#19314B'],
      'lightbrown': ['#C7763E'],
    },
    extend: {
      fontFamily: {
        'lora': ['lora-regular'],
        'notoSemibold': ['noto-semibold'],
        'notoRegular': ['noto-regular']
      }
    },
  },
  plugins: [],
}

