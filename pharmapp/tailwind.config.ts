import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   fontFamily: {
    'open-sans': ["Open Sans", "sans-serif"],
   },
   fill: {
    green: "#07AF29",
   },
   colors: {
    custom: {
          gray: "#858589",
          green: "#0AB554",
          lightgreen: "#DDFFE7",
          backgray: "#F5F5FD",
    }
    
   }
  },
 },
 plugins: [],
};
export default config;
