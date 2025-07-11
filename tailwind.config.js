/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alpha': '#fff',
        // 'alpha': '#f2673d',
        
      },
    },
  },
  plugins: [require("daisyui")],
}

