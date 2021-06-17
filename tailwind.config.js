module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
     fontSize: {
       'xxs' : '.50rem',
     }
    },
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Inter var", "system-ui", "sans-serif"],
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
