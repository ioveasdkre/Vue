<script setup>
import Photoltem from "../components/Todo/Photoltem.vue";
// 在 Nuxt3裡不用再 import頁面 而是全自動導入
// import Card from "../components/Card.vue";

const point = ref(100);
// view js進來也是全自動
const { count } = useAddCount();

console.log(process.client); // ture Server端 false Client端
if (process.client) {
  console.log(window);
  console.log(localStorage); // 瀏覽器儲存資料在本地端
}

console.log(count);

// Server階段使用的
// const { data, pending, error, refresh } = await useAsyncData("mountains", () =>
//   $fetch("https://api.nuxtjs.dev/mountains") // ohmyfetch套件
// );

// Server階段使用的
const { data, pending, error, refresh } = await useFetch(
  "https://api.nuxtjs.dev/mountains"
);

onMounted(() => {
  setInterval(() => {
    point.value++;
  }, 1000); // 計時器
});
</script>

<template>
  <div>
    <h1>首頁</h1>
    <h2>{{ point }}</h2>
    <Card />
    <!-- Todo資料夾預設吃 index.vue -->
    <Todo />
    <!-- Todo資料夾底下的資料夾 -->
    <!-- 如果覺得名稱太長，可以使用原本的 import方式導入 -->
    <TodoPhotoltem />
    <ul>
      <li v-for="(item, i) in data" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<style></style>
