<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import { onMounted } from "vue";
import HelloWorld from "../components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import { useWindowPosition } from "../composables/EP05/useWindowPosition.js";
import { useSetData } from "../composables/EP05/useSetData.js";
import { useCatchInit } from "../composables/EP05/useCatchInit.js";

const { pageX, pageY } = useWindowPosition();
const { data, setData } = useSetData(0);
const { data2, errorMessage, catchInit } = useCatchInit();

// 實體與掛載完成, 時執行, 註冊回調
onMounted(() => {
  catchInit();
});
</script>

<template>
  <h1 v-if="data2.length === 0">loading...</h1>
  <div v-else>
    <h1>
      <a
        href="https://www.youtube.com/watch?v=JrIF9LidZGo&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=6"
        >Composition API 共用邏輯 / Composables</a
      >
    </h1>
    <h3 class="color">滑鼠移動事件 抓取游標位置</h3>
    <h1>pageX: {{ pageX }}, pageY: {{ pageY }}</h1>

    <h3 class="color">點擊事件 傳入值</h3>
    <h1>{{ data }}</h1>
    <button @click="setData">setData</button>

    <h3 class="color">呼叫 Api</h3>
    <h6>{{ data2 }}</h6>
    <h1>
      參考資料：
      <br />
      <a href="https://vuejs.org/guide/reusability/composables.html"
        >Composables</a
      >
    </h1>
  </div>
  <div>
    <h1 v-if="errorMessage !== ''"></h1>
  </div>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped></style>
