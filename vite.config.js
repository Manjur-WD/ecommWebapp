import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base:"/ecommWebapp/",
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',  // Automatically update the service worker
      devOptions: {
        enabled: true,  // Enable during development for easier testing
      },
      manifest: {
        name: 'EcommWebApp Lite',
        short_name: 'Ecommerce',
        description: 'Ecommerce Platform',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', // App behaves like a native app
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
