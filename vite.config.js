import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"
import { fileURLToPath } from 'url' 
import { dirname, resolve } from 'path'

// recriando __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [svgr({svgrOptions:{replaceAttrValues:{
    '#000': 'currentColor',
  '#000000': 'currentColor',
  'black': 'currentColor'
}}}),react(), tailwindcss(), ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})