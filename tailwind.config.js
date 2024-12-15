/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // ### Primary
        "Strong-Cyan": "hsl(171, 66%, 44%)",
        "Light-Blue": "hsl(233, 100%, 69%)",

        // ### Neutral
        "Dark-Grayish-Blue": "hsl(210, 10%, 33%)",
        "Grayish-Blue": "hsl(201, 11%, 66%)",

        current: 'currentColor'
      },
      backgroundImage:{
        "bg-desktop":"url('src/assets/images/backgrounds/bg-header-desktop.png')",
        "bg-mobile":"url('src/assets/images/backgrounds/bg-header-mobile.png')"
      }
    },
  },
  plugins: [],
}