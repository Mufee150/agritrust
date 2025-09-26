import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/agritrust/', // GitHub Pages base path
  server: {
    port: 5173
  }
})
