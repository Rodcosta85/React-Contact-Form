/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/FirstName.jsx",
    "./src/SecondName.jsx",
    "./src/Email.jsx",
    "./src/Radios.jsx",
    "./src/Message.jsx",
    "./src/Checkbox.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla']
      },
      colors: {
        'lightGreen': 'hsl(148, 38%, 91%)',
        'mediumGreen': 'hsl(169, 82%, 27%)',
        'hoverMedium': '#0a2c27',
        'personalizedRed': 'hsl(0, 66%, 54%)'
      }
    },
  },
  plugins: [],
  screens: {
    'mobile': '400px',
    'desktop': '480px'
  }
}

