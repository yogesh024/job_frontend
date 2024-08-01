import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/api': 'https://back-again-kedv.onrender.com',
        
     
     },
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000', // Adjust the target URL as needed
    //     changeOrigin: true,
    //     secure: false,
    //     timeout: 5000, // Increase timeout
  },
})
