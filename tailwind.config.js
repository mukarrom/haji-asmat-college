/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7004bc",
          secondary: "#5f3bae",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          success: '#48bb78',
          warning: '#f56565',
          info: '#ed64a6',
          // primary: '#710117',
          // primary: '#7004bc',
          primary_lighter: '#c82848',
          // secondary: '#5f3bae',
          white: '#FFFFFF',
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
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
