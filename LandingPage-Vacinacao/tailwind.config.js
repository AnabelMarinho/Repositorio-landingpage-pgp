/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#0b7dd2",
        secundario: "#69F5FF",
        claro: "#FFFFFF",
        escuro: "#121212",
        destaque: '#018297',
        alerta: '#D34245',
      },
      keyframes: {
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-slide': 'fade-slide 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
