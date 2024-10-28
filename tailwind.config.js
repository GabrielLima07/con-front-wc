// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'pchome': "url('../../assets/Home/pchome.png')", 
      },
      width: {
        '70': '780px',
        '40': '400px',
      },
      colors:{
        '#83B791': '#83B791',
        '#379E53': '#379E53',
        '#5B5B5B': '#5B5B5B',
        'greene':'#245631',
        'greenh':'#379E53',
        'greenf':'#83B791',
        'begepalido':"#F9F6EE",
        'gray100':'#5B5B5B',
        '#1E1E1E': '#1E1E1E'
      },
      backgroundPosition: {
        'custom-pos': 'right 45%, top right 15%',
      },
      
    },
    
   
  
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
