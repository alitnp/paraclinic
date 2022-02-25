module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        "p-text": "var(--p-text)",
        "p-body-text": "var(--p-body-text)",
        "p-faded-text": "var(--p-fadep-text)",
        "p-gray": "var(--p-gray)",
        "p-border-gray": "var(--p-border-gray)",
        "p-primary": "var(--p-primary)",
        "p-secondary": "var(--p-secondary)",
        "p-bg-color": "var(--p-bg-color)",
        "p-input-color": "var(--p-input-Color)",
        "p-success": "var(--p-success)",
      },
    },
  },
  plugins: [],
};
