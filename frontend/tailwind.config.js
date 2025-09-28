module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        accent: '#3b82f6',
        text: '#1e293b',
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