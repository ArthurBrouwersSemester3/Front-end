
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        host: true,
        port: 5174,
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // Replace 'backend-container' with the name of your backend container
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [vue()],
});

