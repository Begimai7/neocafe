import daisyui from 'daisyui';

/ @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        // 'red' : '#FF5151'
      }
    },
  },
  plugins: [daisyui],
};
