/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'brand-primary': '#04a777', // => Cool Green
      'brand-secondary': '#192f44', // => Dark Gray
      'brand-tertiary': '#f0f2ef', // => Light Gray
      'button-color-primary': '#04a777', // => Cool Green
      'button-color-secondary': '#192f44', // => Dark Gray
      'button-color-tertiary': '#f0f2ef', // => Light Gray
    }
  },
  plugins: [],
}
