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
        icons: [
          {
            src: '/sa-film-academy-logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/sa-film-academy-logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
        maximumFileSizeToCacheInBytes: 60 * 1024 * 1024, /* 60MB to safely catch all cinematic images */
      }
    })
  ]
})
