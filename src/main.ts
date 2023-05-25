import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';

import './assets/main.css'

const app = createApp(App)
app.use(
    createAuth0({
        domain: "dev-t2m2li4fw54sig6t.us.auth0.com",
        clientId: "NWpEokOlcFDXKEdj1fbEUgw8T4am2Zm4",
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    })
);
app.use(createPinia())
app.use(router)

app.mount('#app')
