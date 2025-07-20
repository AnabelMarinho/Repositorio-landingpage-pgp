/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#FF6B35",
        secundario: "#1E1E1E",
        fundo: "#FFFFFF",
        texto: "#121212",
        titulo: "#333333",
        destaque: "#FFD166",
      },
    },
  },
  plugins: [],
};
