/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title': ['Sansita', 'sans-serif'],
        'body': ['Lato', 'sans-serif']
      },
      colors:{
          'pri':'#081F4D',
          'sec':'#0083FF',
          'gen':'#3B4D71',
          'our-bg':'#D9E6FF'
      }
      
    },
  },
  plugins: [],
}

