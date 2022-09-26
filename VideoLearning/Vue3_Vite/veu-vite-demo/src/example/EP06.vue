<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import HelloWorld from "@/components/EP06/HelloWorld.vue";
import TheWelcome from "@/components/EP06/TheWelcome.vue";
import { useCounterStore } from "@/stores/EP06/counter.js"; // 一般解構
import { useAboutStore } from "@/stores/EP06/about.js"; // 一般解構

const { addCount } = useCounterStore();
const { setName } = useAboutStore();

const clickAdd = () => {
  addCount();
};

const setUserName = (userName) => setName(userName);
</script>

<template>
  <h1>
    <a
      href="https://www.youtube.com/watch?v=_Vvi9EVtuW4&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=7&ab_channel=MikeCheng"
      >Pinia 的全域資料管理！</a
    >
  </h1>

  <!-- 詳細請參 counter.js -->
  <!-- Options API -->
  <!-- <h1>{{ store.$state.counter }}</h1> -->
  <!-- Composition API -->
  <HelloWorld msg="讀取 api" />
  <button @click="clickAdd">click</button>
  <button @click="setUserName('andy')">setUserName</button>
  <br /><br />
  <main>
    <TheWelcome />
  </main>
  <h1>
    參考資料：
    <br />
    <a href="https://pinia.vuejs.org/">Pinia官方</a>
  </h1>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
