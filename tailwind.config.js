/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        // primary: '#710117',
        primary: '#7004bc',
        primary_lighter: '#c82848',
        secondary: '#5f3bae',
        white: '#FFFFFF',
        success: '#48bb78',
        warning: '#f56565',
        info: '#ed64a6',
        'd-primary': '#6419E6',
        'd-secondary': '#D926A9',
        'd-accent': '#1FB2A6',
        'd-neutral': '#191D24',
        'd-base-100': '#2A303C',
        'd-info': '#3ABFF8',
        'd-success': '#36D399',
        'd-warning': '#FBBD23',
        'd-error': '#F87272',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
