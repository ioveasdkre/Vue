<script setup>
// 在 Nuxt3裡不用再 import跟 vue有關的套件，因為全自動導入
// import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <h1>動態網址: {{ route.path }}</h1>
  </div>
</template>

<style></style>
