<template>
    <div>
        <p>{{ message1 }}</p>
        <p>{{ message2 }}</p>
        <p>{{ message3 }}</p>

        <main>
            <div class="dropdown-menu">
                <select name="category" id="category" v-model="myString">
                    <option disabled selected hidden value="">Please enter a gym</option>
                    <option>Breda</option>
                    <option>Eindhoven</option>
                    <option>Denbosch</option>
                </select>
                <button @click="goToNextPage">Search</button>
            </div>
        </main>
    </div>
</template>

<script>
    import router from '@/router';
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    export default {
        name: 'HelloWorld',
        setup() {
            const message1 = ref('');
            const message2 = ref('');
            const message3 = ref('');
            const myString = ref('');

            onMounted(() => {
                axios.get('http://localhost:8080/hello')
                    .then(response => {
                        message1.value = response.data.message1;
                        message2.value = response.data.message2;
                        message3.value = response.data.message3;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            });

            const goToNextPage = () => {
                router.push({ name: 'gym', params: { myString: myString.value } });
            };

            return {
                message1,
                message2,
                message3,
                myString,
                goToNextPage,
            };
        },
    };
</script>