const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        custom: ["Quicksand", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "dark-theme": "#131419",
        "light-theme": "#EBF2FA",
        main: "#03A9F4",
      },
      boxShadow: {
        "dark-theme":
          "-4px -4px 4px 0 rgba(58, 68, 93,.5), 4px 4px 4px 0 #060C18",
        "dark-inset":
          "-4px -4px 4px 0 rgba(58, 68, 93,.5) inset, 4px 4px 4px 0 #060C18 inset",
        "light-theme":
          "-4px -4px 16px 0 #fff, 4px 4px 10px 0 rgba(95, 157, 231,.48)",
        "light-inset":
          "-4px -4px 16px 0 #fff inset, 4px 4px 10px 0 rgba(95, 157, 231,.48) inset",
        
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark", "active", "hover"],
      textColor: ["active", "hover"],

    },
  },
  plugins: [],
};
