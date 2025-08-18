module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#f9a826',
        text: '#f0f0f0',
      },
      backgroundImage: {
        'glass': 'rgba(255, 255, 255, 0.08)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.18)',
      }
    },
  },
  plugins: [],
}