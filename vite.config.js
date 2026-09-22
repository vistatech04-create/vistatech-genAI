import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * One repo, several separate pages. Each page is its own HTML file with its
 * own bundle, so an ad can point at one page without loading any of the
 * others, and each page can carry its own pixel later.
 *
 *   /                      the main course page
 *   /analytics-starter/    the 999 first-week page
 */
export default defineConfig({
  plugins: [react()],
  /* '@' always means the src folder, so a component three folders deep
     still imports a shared one by its real name. */
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: { port: 5178 },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        starter: 'analytics-starter/index.html',
      },
    },
  },
})
