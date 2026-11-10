/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a192f',
          800: '#0f2744',
          700: '#1b3a60',
          600: '#264e7c',
        },
        brand: {
          blue: '#1E40AF',
          sky: '#38BDF8',
          gold: '#F59E0B',
          amber: '#D97706',
          green: '#10B981',
          rose: '#F43F5E',
          cream: '#FFFDF9',
          paper: '#FBF8F1',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'book': '0 20px 40px -15px rgba(0,0,0,0.4), 0 0 25px rgba(0,0,0,0.15)',
        'page': 'inset -5px 0 15px rgba(0,0,0,0.08), 5px 0 15px rgba(0,0,0,0.05)',
        'page-left': 'inset 5px 0 15px rgba(0,0,0,0.08), -5px 0 15px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}

