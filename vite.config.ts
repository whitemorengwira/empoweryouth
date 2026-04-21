import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.ico'],
      manifest: {
        name: 'EmpowerYouth - SA Film Academy',
        short_name: 'EmpowerYouth',
        description: 'Cinematic presentation for the SA Film Academy EmpowerYouth summit.',
        theme_color: '#030303',
        background_color: '#030303',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-icon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
        maximumFileSizeToCacheInBytes: 60 * 1024 * 1024, /* 60MB to safely catch all cinematic images */
      }
    })
  ]
})
