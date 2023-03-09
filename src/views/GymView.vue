<script setup>
import Gymgraph from '../components/Gym.vue'
</script>


<template>
    <main>
        <div>{{ myString }}</div>
        <gymgraph />
    </main>
</template>


<script>
    export default {
        props: {
            myString: {
                type: String,
                required: true
            }
        }
    }
</script>
