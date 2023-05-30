/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
    

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailgrids/plugin'),
    require("tw-elements/dist/plugin.cjs"),
    // require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    
  ],
};
