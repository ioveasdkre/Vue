<script setup>
import { watch } from "vue"; // 導入 vue方法
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/EP06/counter.js";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const store = useCounterStore();
const { counter, doubleCount } = storeToRefs(store); // state資料不能直接解構出來 可透過 storeToRefs來解構並重新包裝成 pinia物件

// 監控 值是否被改變
watch(doubleCount, (newVal, oldVal) => {
  console.log("newVal =>", newVal);
  console.log("oldVal =>", oldVal);
});

store.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
});
</script>

<template>
  <h1>{{ counter }}</h1>
  <h1>屬性計算</h1>
  <h1>{{ doubleCount }}</h1>
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
