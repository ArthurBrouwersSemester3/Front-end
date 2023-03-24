<script>
    import router from '@/router'
    let myString = "";

    export default {
        methods: {
            goToNextPage() {
               router.push({ name: 'gym', params: { myString } })
               // router.push({ name: 'test' })
               // testing
               //
            }
        }
    }
</script>


<script setup>
    function SearchGym() {
        console.log(selectedOption)
        router.push({name:'gym'})
    }

</script>
<template>
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
</template>
