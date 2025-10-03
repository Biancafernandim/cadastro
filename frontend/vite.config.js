import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Define a porta do frontend para 3000
    proxy: {
      // Redireciona requisições de /api para o backend
      '/api': {
        target: 'http://localhost:5235', // A porta HTTP do backend
        changeOrigin: true,
      }
    }
  }
})