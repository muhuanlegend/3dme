import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    allowedHosts: ['5173-muhuanlegend-3dme-fhws3pnfpku.ws-eu118.gitpod.io']
  }
})