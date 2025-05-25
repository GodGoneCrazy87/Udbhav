/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iso: ["ISOCP3", "sans-serif"],
        fceb: ['FCEB'],
        castleton: ['Castleton', 'serif'],
        ransom: ['Ransom','sans-serif']
      },
    },
  },
  plugins: [],
};