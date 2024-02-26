import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://macacodes.github.io/todofinal/",
  plugins: [react()],
  base: '/vite-deploy-demo/'
})
