<template>
    <button @click="logout">Log out</button>
    <div v-if="isLoading">Loading ...</div>
    <div v-else>
        <h2>User Profile</h2>
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