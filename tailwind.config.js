const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "unset",
            blockquote: {
              borderLeftColor: "#4c4f54",
            },
            hr: {
              height: "1px",
              borderColor: "#b9babd",
            },
            "> ul > li > *:first-child": {
              marginTop: "0",
            },
            "> ul > li > *:last-child": {
              marginBottom: "0",
            },
            "> ol > li > *:first-child": {
              marginTop: "0",
            },
            "> ol > li > *:last-child": {
              marginBottom: "0",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
