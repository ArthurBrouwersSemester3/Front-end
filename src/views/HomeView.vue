<script setup lang="ts">
import TheWelcome from '../components/Homepage.vue'

import router from '@/router'

function SearchGym(){

    console.log("1")
    router.push({ name: 'gym' })
}
</script>


<template>
    <main>

        <TheWelcome />
        <div class="dropdown-menu">
            <select>
                <option disabled selected hidden>Please enter a gym</option>
                <option>Breda</option>
                <option>Eindhoven</option>
                <option>s-Hertogenbosch</option>
            </select>
               <button @click="SearchGym">Search</button>       
        </div>
    </main>
</template>
