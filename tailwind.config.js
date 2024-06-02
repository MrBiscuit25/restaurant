/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(100px,1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px,1fr))",
        "auto-fill-180": "repeat(auto-fill, minmax(180px,1fr))",
        "auto-fit-180": "repeat(auto-fit, minmax(180px,1fr))",
        "auto-fill-150": "repeat(auto-fill, minmax(150px,1fr))",
        "auto-fit-150": "repeat(auto-fit, minmax(150px,1fr))",
        "auto-fill-200": "repeat(auto-fill, minmax(200px,1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(200px,1fr))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "#ea7c69 #1F1D2B",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1F1D2B",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ea7c69",
            borderRadius: "20px",
            border: "1px solid #1F1D2B",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
