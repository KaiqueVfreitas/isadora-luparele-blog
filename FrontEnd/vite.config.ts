import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'


export default defineConfig({
  base: '/Projeto_Programacao/isadora-luparele-blog/Public/dist/',
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
