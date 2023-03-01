<script setup>

</script>

<template>
    <h1>Yeah letsgo</h1>
    <p>hoi matta van clash</p>

    <select>
        <option disabled selected hidden>Please enter a gym</option>
        <option>basic fit (Breda)</option>
        <option>basic fit (Eindhoven)</option>
    </select>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>