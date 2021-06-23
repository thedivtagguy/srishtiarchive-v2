module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      spacing: {
        '54': ' 13rem',
      },
     fontSize: {
       'xxs' : '.50rem',
       '9xl': '8rem',
       'mxs': '.60rem'
     },
     boxShadow: {
      'offset-black': '2px 2px black',
      'shadow-yellow': '3px 3px #FFDE00',
      'orange':'3px 3px #F9A03F'
     },
     colors: {
       'mint-cream': '#F1FFFA',
       'charcoal': '#264653',
       'turquoise': '#55DDE0',
       'lime': '#CEFF1A',
       'blaze-orange': '#FE5F00',
       'saffron': '#F9A03F',
       'sienna': '#230903',
       'blue-purple': '#BDADEA',
       'high-yellow': '#FFDE00',
        'dark-gray': '#111827',
        'accent-gray':'#1F2937',
        'light-gray':'#D1D5DB',
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
    require('@tailwindcss/forms'),
  ],
}
