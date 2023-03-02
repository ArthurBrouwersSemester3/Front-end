<script setup lang="ts">
import TheWelcome from '../components/Homepage.vue'
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
            <button>Search</button>
        </div>
    </main>
</template>
