import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This tells Vite exactly where to start
  root: process.cwd(), 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // Manually pointing to the entry point
    },
  },
})
