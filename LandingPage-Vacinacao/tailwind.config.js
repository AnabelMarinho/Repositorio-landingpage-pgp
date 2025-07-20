/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#00BBC8",
        secundario: "#69F5FF",
        claro: "#FFFFFF",
        escuro: "#121212",
        destaque: '#018297',
        alerta: '#D34245',
      },
    },
  },
  plugins: [],
};
