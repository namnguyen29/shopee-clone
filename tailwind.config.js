/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}', './components/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        'sp-orange-0': '#ee4d2d',
        'sp-gray-0': '#f5f5f5',
        'sp-gray-1': '#dbdbdb',
        'sp-gray-2': '#cccccc',
        'sp-black-1': '#222222',
        'sp-black-alpha-65': 'rgba(0, 0, 0, 0.65)',
        'sp-black-alpha-54': 'rgba(0, 0, 0, 0.54)',
        'sp-black-alpha-14': 'rgba(0, 0, 0, 0.14)',
        'sp-red-0': '#ff424f',
        'sp-pink-0': '#fff6f7'
      },
      width: {
        '75-rem': '75rem'
      },
      fill: {
        'sp-orange-0': '#ee4d2d'
      },
      boxShadow: {
        'sp-alpha-20': '0 1px 1px rgba(0, 0, 0, 0.2)',
        'sp-alpha-14': '0 3px 10px 0 rgba(0, 0, 0, 0.14)'
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
