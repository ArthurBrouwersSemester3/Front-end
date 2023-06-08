<template>
    <div>
        <main>
            <div class="dropdown-menu">
                <select ref="category" name="category" id="category" v-model="myString">
                    <option disabled selected hidden value="">Please enter a gym</option>
                    <option v-for="message in messages" :key="message">{{ message }}</option>
                </select>
                <button @click="goToNextPage">Search</button>
            </div>
        </main>
    </div>
</template>

<script>
    import router from "../router";
    import axios from "axios";
    import { ref, onMounted } from "vue";
    import { useAuth0 } from '@auth0/auth0-vue';

    export default {
        name: "HelloWorld",
        setup() {
            const messages = ref([]);
            const myString = ref("");
            const { getAccessTokenSilently } = useAuth0();

            onMounted(async () => {
              try {
                const token = await getAccessTokenSilently();

                const response = await axios.get("/api/gyms", {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    },
                });

                messages.value = response.data;
              } catch (error) {
                console.error(error);
              }
            });
            const goToNextPage = () => {
                router.push({ name: "gym", params: { myString: myString.value } });
            };

            return {

                messages,
                myString,
                goToNextPage,
              
                
            };
        },
    };
</script>
    