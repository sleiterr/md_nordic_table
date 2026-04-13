export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-xs": { max: "427px" }, // <= 427px
        xs: "428px", // 26.75rem =>
        sm: "768px", // 48rem =>
        md: "1024px", // 64rem =>
        lg: "1280px", // 80rem =>
        xl: "1440px", // 90rem =>
        "2xl": "1920px", // 120rem =>
        "3xl": "2500px", // 156.25rem =>
      },
    },
  },
  plugins: [],
};
