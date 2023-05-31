<template>
    <div>
        <button @click="login">Log in</button>
    </div>
</template>
<script>
    //// Composition API
    import { useAuth0 } from '@auth0/auth0-vue';
    import router from "@/router";

    export default {
        setup() {
            const auth0 = useAuth0();
            if (auth0.user.value) {
                router.push({ name: "home" })
            }
            return {
                login() {
                    auth0.loginWithRedirect();
                }

            };
            
        }
    };

  </script>