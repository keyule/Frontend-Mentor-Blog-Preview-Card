import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Frontend-Mentor-Blog-Preview-Card/",
  plugins: [react()],
})
