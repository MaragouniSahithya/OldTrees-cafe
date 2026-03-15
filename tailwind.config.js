/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          light: '#3d6b3d',
          DEFAULT: '#2D4A2D',
          dark: '#1a2e1a',
        },
        wood: {
          light: '#7a4e2a',
          DEFAULT: '#5C3A1E',
          dark: '#3e2511',
        },
        cream: {
          light: '#ffffff',
          DEFAULT: '#F5EDD6',
          dark: '#e8d9ba',
        },
        gold: {
          light: '#e0a040',
          DEFAULT: '#C8872A',
          dark: '#a86f1e',
        },
        dark: {
          light: '#2a1a0f',
          DEFAULT: '#1A1008',
          dark: '#0d0804',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
