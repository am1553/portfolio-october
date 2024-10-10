/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Merriweather", "serif"],
      },
      colors: {
        "desaturated-white": "#E6E1E3",
        "deep-purple": "#553F5D",
        "desaturated-black": "#141314",
        purple: "#9F86FE",
        gray: "#1C1B1D",
        "light-gray": "#211F21",
        "bluish-gray": "#454559",
        "pale-silver": "#D2C7B7",
      },
      backgroundImage: {
        "home-intro": "url('/src/assets/home-intro.jpg')",
        "graphic-one": "url('/src/assets/graphic-one.svg')",
        "graphic-two": "url('/src/assets/graphic-two.svg')",
        "graphic-three": "url('/src/assets/graphic-three.svg')",
        "graphic-four": "url('/src/assets/graphic-four.svg')",
        "graphic-five": "url('/src/assets/graphic-five.svg')",
      },
    },
  },
  plugins: [],
};
