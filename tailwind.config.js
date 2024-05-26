/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto-fill-100': 'repeat(auto-fill, minmax(100px,1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px,1fr))',
        'auto-fill-180': 'repeat(auto-fill, minmax(180px,1fr))',
        'auto-fit-180': 'repeat(auto-fit, minmax(180px,1fr))',
        'auto-fill-150': 'repeat(auto-fill, minmax(150px,1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px,1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(200px,1fr))',
        'auto-fit-200': 'repeat(auto-fit, minmax(200px,1fr))',
      }
    },
  },
  plugins: [],
};
