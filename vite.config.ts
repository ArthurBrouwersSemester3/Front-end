
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://backendcontainer:8080', // Replace 'backend-container' with the name of your backend container
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [vue()],
});


