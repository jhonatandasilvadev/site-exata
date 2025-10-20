import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: true,
=======
    host: '0.0.0.0', // Permite acesso externo
>>>>>>> 35dd788bbb4800fc52e118478d74319844cc5f77
    port: 3000,
    open: true
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})
