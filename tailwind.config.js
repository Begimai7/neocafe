import daisyui from 'daisyui';

/ @type {import('tailwindcss').Config} */;
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundImage: {
        "adminImg": "url('./assets/adminSignIn/admin.png')",
      },
    },
  },
  plugins: [daisyui],
};