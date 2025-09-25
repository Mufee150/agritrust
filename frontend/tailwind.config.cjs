module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        primary: '#2b9348'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        agritrust: {
          "primary": "#2b9348",
          "secondary": "#74c27b",
          "accent": "#1f6f3a",
          "neutral": "#111827",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#059669",
          "warning": "#f97316",
          "error": "#b91c1c",
        }
      }
    ]
  }
}
