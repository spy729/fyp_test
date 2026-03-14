/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
      colors: {
        github: {
          bg: '#0d1117',
          panel: '#161b22',
          border: '#21262d',
          text: '#ffffff',
          link: '#58a6ff',
          linkHover: '#79c0ff',
          inputBg: '#161b22',
          inputText: '#ffffff',
          inputPlaceholder: '#8b949e',
          buttonBg: '#238636',
          buttonHover: '#2ea043',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}