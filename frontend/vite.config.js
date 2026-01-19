import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Bu importun olduğundan emin ol

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Plugin listesinde mutlaka bulunmalı
  ],
})