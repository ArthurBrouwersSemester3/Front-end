<script>
    import TheWelcome from '../components/Homepage.vue'
    import router from '@/router'

import router from '@/router'

</script>

    console.log("1")
    router.push({ name: 'gym' })
}
<script setup>
    let selectedOption = "";
    function SearchGym() {
        console.log(selectedOption)
        router.push({ name: 'contact' })
    }

</script>
<template>
    <main>

        <TheWelcome />
        <div class="dropdown-menu">
            <select  name="category" id="category" v-model="selectedOption">
                <option disabled selected hidden value="">Please enter a gym</option>
                <option>Breda</option>
                <option>Eindhoven</option>
                <option>s-Hertogenbosch</option>
            </select>
            <button @click="SearchGym">Search</button>
        </div>
    </main>
</template>
