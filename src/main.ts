import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createAuth0, useAuth0 } from '@auth0/auth0-vue';

import './assets/main.css'

const app = createApp(App)

app.use(
    createAuth0({
        domain: "dev-t2m2li4fw54sig6t.us.auth0.com",
        clientId: "2vcHKbLOKFkEaQvn826JE41KVXW7FV50",
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    })
);

app.use(createPinia())

app.config.globalProperties.beforeMount = async () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading.value) {
        await new Promise((resolve) => {
            isAuthenticated.value ? resolve(true) : setTimeout(resolve, 100);
        });
    }
};

app.use(router)

app.mount('#app')
