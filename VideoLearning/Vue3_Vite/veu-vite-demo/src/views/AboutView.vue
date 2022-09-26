<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <nav>
    <RouterLink to="/about/aaa">aaa</RouterLink>|
    <RouterLink to="/about/bbb">bbb</RouterLink>|
    <RouterLink to="/about/ccc">ccc</RouterLink>
  </nav>

  <!-- 預設單純 vue專案 -->
  <!-- <main>
    <TheWelcome />
  </main> -->
  <RouterView />
</template>

<!-- 避免父元件影響子元件 -->
<style scoped>
nav > a {
  margin: 0 30px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
