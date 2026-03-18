/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A574',
        secondary: '#F5E6D3',
        accent: '#E8B4B8',
        background: '#FDF8F4',
        foreground: '#3D3D3D',
        muted: '#8B7355',
        gold: '#D4AF37',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'float-slower': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'heart-beat': 'heart-beat 1.2s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.6)' },
        },
        'sparkle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.2)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'heart-beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
