import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'pwa-192x192.svg', 'pwa-512x512.svg'],
      manifest: {
        name: 'Rommi Kaestria - Portfolio',
        short_name: 'Rommi CV',
        description: 'Professional Portfolio of Rommi Kaestria',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo_Rommi_192.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'logo_Rommi_512.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  base: '/cvrommikaestria/', // For GitHub Pages deployment
})
