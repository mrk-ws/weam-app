import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: "#06253f",
        darkTheme2: "#09385e",
        darkTheme3: "#082843",
        textColor: "#074e6a",
        primaryColor: "#3298d5",
        moveColor: "#916eaa",
        grenColor: "#4bbe7b",
        menuOverlay: "rgba(0, 0, 0, 0.436)",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
