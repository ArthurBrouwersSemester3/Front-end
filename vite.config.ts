import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://172.17.0.2:8080', // Update the IP address here
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [vue()],
});


