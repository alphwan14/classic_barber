/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        silver: 'rgba(255, 255, 255, 0.7)',
        background: 'hsl(220 16% 8%)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #0d0f12 0%, #101215 100%)',
        'gold-gradient': 'linear-gradient(90deg, #b8942a 0%, #d4af37 50%, #f5e6a1 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
