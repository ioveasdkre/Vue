<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import { ref, onMounted } from "vue"; // 導入 vue方法

// 常數包裝 ref
const name = ref("Me ANT"); // 響應式定義值
let idx = 0; // 變數

const changeName = () => {
  name.value = "Jacky"; // 可以很清楚知道是 常數而非變數
  idx = 1; // 一看就知道是變數
};

// 註冊一個回調函數，在組件掛載完成後執行
onMounted(() => {
  console.log(name.value);
});
</script>

<!-- 一般寫法 -->
<!-- <script>
import { ref, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // 導入 HelloWorld.vue頁面

export default {
    components: {
        HelloWorld,
    },
    props: {
        data{
            type: Object,
            default: () => ({}),
        },
    },
    setup() {
        const count = ref(0);
        const increment = () => {
            count.value += 1;
        };
        onMounted(() => {
            console.log(count.value);
        });

        return { count, increment };
    },
};
</script> -->

<template>
  <h1>
    <a
      href="https://www.youtube.com/watch?v=rNQIA0Fe9KQ&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&ab_channel=MikeCheng"
    >
      初探 Vite 專案 / Vue3 初學者應該要先知道的東西 / 剛開始寫 Composition API
      會犯的錯誤 !</a
    >
  </h1>
  <div>
    <h1>{{ name }}</h1>
    <!-- v-on 綁定事件 縮寫@ -->
    <button @click="changeName">click</button>
  </div>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped></style>
