module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    linearBorderGradients: {
      directions: {
        // defaults to these values
        t: "to top",
        tr: "to top right",
        r: "to right",
        br: "to bottom right",
        b: "to bottom",
        bl: "to bottom left",
        l: "to left",
        tl: "to top left",
      },
      colors: {
        // defaults to {}
        red: "#f00",
        "red-blue": ["#f00", "#00f"],
        "blue-green": ["#0000ff", "#00FF00"],
        "red-green-blue": ["#f00", "#0f0", "#00f"],
        "black-white-with-stops": ["#000", "#000 45%", "#fff 55%", "#fff"],
        "pink-red-yellow": ["#EC4899", "#EF4444", "#F59E0B"],
      },
      background: {
        "gray-50": "#F9FAFB",
        "gray-900": "#111827",
        "accent-gray": "#1F2937",
      },
      border: {
        // defaults to these values (optional)
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
      },
      borderRadius: {
        "20": "20px",
        "4": "4px",
        "8": "8px",
      },
    },
    extend: {
      borderWidth: {
        "1": "1px",
        "3": "1.89px",
      },
      height: {
        "28": "7rem",
      },
      spacing: {
        "54": " 13rem",
        "9": "2.3rem",
        "7xl": "75rem",
      },
      maxWidth: {
        "7xl": "96rem",
      },

      fontSize: {
        xxs: ".50rem",
        "9xl": "8rem",
        mxs: ".60rem",
      },
      boxShadow: {
        "offset-black": "2px 2px black",
        "shadow-yellow": "3px 3px #FFDE00",
        orange: "3px 3px #F9A03F",
        "large-shadow": "7px 8px 0px #2E2E2E",
        "small-shadow": "2px 2px 0px #000000",
      },
      colors: {
        "mint-cream": "#F1FFFA",
        charcoal: "#264653",
        turquoise: "#55DDE0",
        lime: "#25b859",
        "blaze-orange": "#FE5F00",
        saffron: "#F9A03F",
        sienna: "#230903",
        "blue-purple": "#BDADEA",
        "high-yellow": "#FFDE00",
        "dark-gray": "#111827",
        "accent-gray": "#1F2937",
        "light-gray": "#D1D5DB",
        "srishti-blue": "#5551FF",
        "srishti-dark-purple": "#A259FF",
        "srishti-light-purple": "#C7B9FF",
        "srishti-yellow": "#FFC700",
        "srishti-red": "#F24E1E",
      },
    },

    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Inter var", "system-ui", "sans-serif"],
      "ibm-mono": ['"IBM Plex Mono"'],
      "ibm-serif": ['"IBM Plex Serif"'],
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
    linearBorderGradients: ["responsive"],
    linearBorderGradients: ["responsive", "hover"], // defaults to ['responsive']
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-border-gradient-radius"),
    require('daisyui'),

  ],
}
