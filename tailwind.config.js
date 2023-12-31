// tailwind.config.js
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        'custom': 'var(--custom-spacing)',
      },
      colors: {
        'primaryTextColor': '#D764FF',
        'bColor': '#3D0053',
        'bHoverColor': '#ac48cf',
        'primary': '#041328',
        'secondary': '#020E1F',
        'mainTextColor': '#D6D6D6'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        '-sans-serif': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
