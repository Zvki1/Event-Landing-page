/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.techrepublic.com/wp-content/uploads/2022/05/top-5-conferences-2022-tom.jpeg')",
      }
    },
  },
  plugins: [],
}

