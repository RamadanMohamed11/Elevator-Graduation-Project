/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-cyan': 'rgb(124, 232, 255)',
        'custom-cyan-dark': 'rgba(124, 232, 255, 0.8)',
        'custom-cyan-light': 'rgba(124, 232, 255, 0.3)',
      },
      animation: {
        'float3d': 'float3d 4s ease-in-out infinite',
        'rotate3d': 'rotate3d 20s linear infinite',
        'pulse3d': 'pulse3d 3s ease-in-out infinite',
        'slideIn3d': 'slideIn3d 0.8s ease-out forwards',
        'elevatorMove3d': 'elevatorMove3d 2s ease-in-out infinite',
        'glowPulse': 'glowPulse 2s ease-in-out infinite',
        'textGlow': 'textGlow 3s ease-in-out infinite',
        'particleFloat': 'particleFloat 15s linear infinite',
        'morphing': 'morphing 8s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 232, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(124, 232, 255, 0.4)',
        'glow-xl': '0 0 60px rgba(124, 232, 255, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(124, 232, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};