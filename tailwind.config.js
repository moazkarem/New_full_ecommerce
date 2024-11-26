import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  
    extend: {  colors: {
      primary: "#FF7F33",
      header:"#F3F3F3",
      describtion:"#2C2828",
      btnbg:"#F28A1A"
    },},
  },
  plugins: [daisyui],
};
