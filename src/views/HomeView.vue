<template>
    <div>
        <main>
            <div class="dropdown-menu">
                <select name="category" id="category" v-model="myString">
                    <option disabled selected hidden value="">Please enter a gym</option>
                    <option v-for="message in messages" :key="message">{{ message }}</option>
                </select>
                <button @click="goToNextPage">Search</button>
            </div>
        </main>
    </div>
</template>

<script>
    import router from "@/router";
    import axios from "axios";
    import { ref, onMounted } from "vue";

    export default {
        name: "HelloWorld",
        setup() {
            const messages = ref([]);
            const myString = ref("");

            onMounted(() => {
                axios
                    .get("http://localhost:8080/gyms")
                    .then((response) => {
                        messages.value = response.data;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
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
