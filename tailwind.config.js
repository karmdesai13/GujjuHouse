/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food': "url('../public/images/Food2.png')",
        'hero':"url('../public/images/Food.png')",
        'starters':"url('../public/images/Starters.png')",
        'main':"url('../public/images/Main.png')",
        'dessert':"url('../public/images/D.png')",
        "beverage":"url('../public/images/B.png')",


      }
    },
  },
  plugins: [require("daisyui")],

}
