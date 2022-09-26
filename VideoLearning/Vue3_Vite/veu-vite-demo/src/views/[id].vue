<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.path);
</script>

<template>
  <div><h1>任意參數都可進入此頁面</h1></div>
</template>

<style></style>
