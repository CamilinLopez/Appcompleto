import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        boton: "#FF5733",
        anuncio: "#21618C",
        fondo: "#EAF2F8", // FDFEFE
        flecha: "#D35400",
        enlace: "#D35400",
        header: "#1B4F72",
        gris: "#B2BABB",
      },
    },
    fontSize: {
      grande: ["2rem", { lineHeight: "1" }], // 32px
      mediano: ["1.5rem", { lineHeight: "1" }], // 24px
      pequeño: ["1.25rem", { lineHeight: "1" }], // 20px
      mpequeño: ["1rem", { lineHeight: "1" }], // 16px
    },
    fontWeight: {
      negrita: "700",
      mediana: "600",
      normal: "400",
    },
  },
  plugins: [],
};
export default config;
