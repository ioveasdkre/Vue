<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";

const router = useRouter();

// 三秒後轉換頁面
// setTimeout(() => {
//   // router.push("/about"); // 會紀錄上一頁，並切換頁面
//   // router.replace("/about"); // 不會紀錄上一頁，並切換頁面
//   // router.push({ path: "/about"});
//   router.push({ path: "/about", query: { username: "mike" } });
// }, 3000);
</script>

<template>
  <h1>
    <a
      href="https://www.youtube.com/watch?v=5YzSuKfwWv4&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=8&ab_channel=MikeCheng"
      >Vue-Router 基礎入門，SPA網頁輕鬆上手 !</a
    >
  </h1>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>|
      <RouterLink to="/about">About</RouterLink>|
      <RouterLink to="/address">address</RouterLink>
    </nav>
  </div>

  <!-- 預設 存 vue專案 -->
  <!-- <main>
    <TheWelcome />
  </main> -->
  <RouterView />
  <h1>
    參考資料：
    <br />
    <a href="https://router.vuejs.org/">Vue Router官網</a>
  </h1>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped></style>
