<script setup>
    import Gymgraph from '../components/Gym.vue'
</script>


<template>
    <main>
        <gymgraph :my-string="myString"></gymgraph>
    </main>
</template>


<script>
    export default {

        components: {
            Gymgraph
        },
        props: {
            myString: {
                type: String,
                required: true
            }
        }
    }

</script>
