/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Karanlık mod desteği için
  theme: {
    extend: {
      colors: {
        // Havalimanı teması için daha sofistike tonlar
        airport: {
          950: '#020617', // Ana arka plan
          900: '#0f172a', // Panel arka planı
          800: '#1e293b', // Kartlar / Hover durumları
          700: '#334155', // Border ve çizgiler
          blue: '#38bdf8', // Vurgu rengi (Uçuş detayları vs.)
          accent: '#6366f1', // AI veya kritik butonlar için
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}