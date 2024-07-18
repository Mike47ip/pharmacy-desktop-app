import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   screens: {
    md1: "600px",
    md2: '770px',
    md3: '811px',
    md4: '908px',
    md5: '989px',
    lg1: '1168px',
    lg2: "1254px", //body breakpoint
   },
   backgroundImage: {
    "dark-black-background": "url('/dark-black-background.jpg')",
   },
   fontFamily: {
    "open-sans": ["Open Sans", "sans-serif"],
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
     dark: "#1E1E1E",
     background: "#F5F5FD",
    },
   },
   gradientColorStops: {
    "green-gradient": "#08B133", // Starting color
    "green-gradient-light": "#06A680", // Ending color
   },
   boxShadow: {
    upward: "0 -4px 6px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.06)",
   },
  },
 },
 plugins: [],
};
export default config;
