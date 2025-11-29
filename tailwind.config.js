/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vk: {
          pink: '#ff7fa3', // Main brand pink
          dark: '#222222', // Dark header/footer
          gold: '#d4af37',
          silver: '#c0c0c0',
          bronze: '#cd7f32',
        }
      }
    },
  },
  plugins: [],
}

