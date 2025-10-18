module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f6ff",
          100: "#eeeffb",
          300: "#d6d8ff",
          500: "#6366f1",
          600: "#4f46e5",
          800: "#2e2b7b",
        },
        surface: "#0f1724",
        glass: "rgba(255,255,255,0.04)",
      },
      boxShadow: {
        "glow-md": "0 8px 30px rgba(79,70,229,0.12)",
        "card-lg": "0 12px 40px rgba(2,6,23,0.6)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 10% 10%, rgba(79,70,229,0.06), transparent 10%), radial-gradient(circle at 90% 90%, rgba(99,102,241,0.04), transparent 10%)",
      },
    },
  },
  plugins: [],
};
