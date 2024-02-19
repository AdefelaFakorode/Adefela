// tailwind.config.js
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        'custom': 'var(--custom-spacing)',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        'primaryTextColor': '#D764FF',
        'bColor': '#3D0053',
        'bHoverColor': '#ac48cf',
        'primary': '#041328',
        'secondary': '#020E1F',
        'mainTextColor': '#8892b0'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        '-sans-serif': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
