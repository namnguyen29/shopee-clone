/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}', './components/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        'sp-orange-0': '#ee4d2d',
        'sp-gray-0': '#f5f5f5',
        'sp-black-alpha-65': 'rgba(0, 0, 0, 0.65)',
        'sp-black-alpha-54': 'rgba(0, 0, 0, 0.54)'
      },
      width: {
        '75-rem': '75rem'
      },
      fill: {
        'sp-orange-0': '#ee4d2d'
      },
      boxShadow: {
        'sp-alpha-20': '0 1px 1px rgba(0, 0, 0, 0.2)'
      }
    },

    screens: {
      '2xl': '1536px',
      xl: '1280px',
      lg: '992px',
      md: '768px',
      sm: '576px'
    }
  },
  plugins: []
};
