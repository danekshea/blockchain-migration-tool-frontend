import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  plugins: [sveltekit()],
  resolve: {
    alias: {
      'web3': 'web3/dist/web3.min.js',
      '@': path.resolve(__dirname, 'src'),
      'src': path.resolve(__dirname, 'src'),
      'https': path.resolve(__dirname, 'node_modules/stream-http')
    }
}
})
