/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "!./node_modules/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        pop: {
          bg: '#020617',
          card: '#1e293b',
          text: '#ffffff',
          border: '#334155',
          cyan: '#1cb0f6',
          cyanDark: '#118ee8',
          purple: '#ce82ff',
          purpleDark: '#a665cc',
          yellow: '#ffc800',
          yellowDark: '#d6a800',
          green: '#58cc02',
          greenDark: '#46a302',
          red: '#ff4b4b',
          redDark: '#d62a2a',
        }
      },
      boxShadow: {
        '3d': '0 4px 0',
        '3d-lg': '0 6px 0',
        '3d-xl': '0 8px 0',
        'glow': '0 0 20px rgba(28, 176, 246, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shockwave': 'shockwave 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(28, 176, 246, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(28, 176, 246, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shockwave: {
          '0%': { transform: 'scale(1)', opacity: '1', borderWidth: '4px' },
          '100%': { transform: 'scale(2.5)', opacity: '0', borderWidth: '0px' },
        }
      }
    }
  },
  plugins: [],
}