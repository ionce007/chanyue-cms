<template>
  <div class="about">
    <h1>{{ store.title }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { ref, reactive } from "vue";
import { mainStore } from "@/stores/counter";
const store = mainStore();
console.log(store);
</script>
