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
        target: 'https://localhost:7123', // A porta do seu backend .NET
        changeOrigin: true,
        secure: false,      // Necessário se o backend usa um certificado de desenvolvimento (HTTPS)
      }
    }
  }
})