/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon': {
          'green': '#39ff14',
          'cyan': '#00ffff', 
          'magenta': '#ff00ff',
          'blue': '#0080ff',
        }
      },
      boxShadow: {
        'neon': '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 40px #39ff14',
        'neon-magenta': '0 0 10px #ff00ff, 0 0 20px #ff00ff',
        'neon-cyan': '0 0 10px #00ffff, 0 0 20px #00ffff',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-start infinite',
      }
    },
  },
  plugins: [],
}