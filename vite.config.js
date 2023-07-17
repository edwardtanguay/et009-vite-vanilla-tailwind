import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    hmr: {
      overlay: false
    }
  }
})