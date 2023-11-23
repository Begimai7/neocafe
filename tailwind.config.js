import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Toastify.tsx"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
