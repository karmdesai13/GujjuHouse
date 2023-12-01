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
        'hero':"url('../public/images/Food.png')"

      }
    },
  },
  plugins: [require("daisyui")],

}
