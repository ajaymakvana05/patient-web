/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand colors
        white: "#FFFFFF",
        liner: "#605BFF",
        blue: "#605BFF",
        liteBlue: "#718EBF",
        greyBlue: "#818194",

        // Grey colors
        greyDark: "#4F4F4F",
        grey: "#A7A7A7",
        greyLight: "#D3D3D3",
        greyLighter: "#F4F4F4",
        greyLightest: "#F6F8FB",
        black: "#141414",

        // Progress colors
        green: "#39973D",
        red: "#E74C3C",
        link: "#5678E9",
        alert: "#FFD351",
      },
      fontSize: {
        custom16: "16px",
      },
      placeholderColor: {},
      backgroundImage: {
        linerGradient:
          "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover", "focus", "active"],
      backgroundColor: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
