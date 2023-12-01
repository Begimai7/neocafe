import daisyui from 'daisyui';

/ @type {import('tailwindcss').Config} */
export default {
  // content: ['./index.html', './src//*.{js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/components/Toastify.tsx",
    "./src/components/CreateNewBranch.tsx",
    "./src/components/UI/PhotoInput.tsx"

  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};

// import daisyui from 'daisyui';

// / @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src//*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
// };