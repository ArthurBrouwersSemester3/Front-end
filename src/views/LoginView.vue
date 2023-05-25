<template>
    <div>
        <button @click="login">Log in</button>
        <button @click="logout">Log out</button>
    </div>
    <div v-if="isLoading">Loading ...</div>
    <div v-else>
        <h2>User Profile</h2>
        <button @click="Login">Log in</button>
        <pre v-if="isAuthenticated">
        <code>{{ user }}</code>
      </pre>
    </div>
</template>
<script>
    // Composition API
    import { useAuth0 } from '@auth0/auth0-vue';

    export default {
        setup() {
            const auth0 = useAuth0();

            return {
                Login: () => auth0.loginWithRedirect(),
                user: auth0.user,
                isAuthenticated: auth0.isAuthenticated,
                isLoading: auth0.isLoading,
                login() {
                    auth0.loginWithRedirect();
                },
                logout() {
                    auth0.logout({ 
                    logoutParams: { 
                        returnTo: window.location.origin 
                    } 
                    });
                }
            };
        }
    };

  </script>