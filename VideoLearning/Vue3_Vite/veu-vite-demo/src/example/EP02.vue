<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import { computed } from "@vue/reactivity";
import { ref, reactive, watch } from "vue"; // 導入 vue方法

const name = ref("mike"); // 響應式定義值
const idx = ref(0); // 響應式定義值
const people1 = ref({ name: "mike" }); // 響應式定義值
const people2 = reactive({
  name: "My reactive",
  age: 13,
  address: "台灣",
}); // 接受 {} []資料
const people3 = computed(() => {
  return {
    name: "mike",
    age: 10,
  };
});
const people4 = computed(() => {
  return `請叫我${name.value}`;
});
const people5 = computed(() => {
  return idx.value > 3 ? "idx 大於3" : "idx 小於等於3";
  // if (idx.value > 3) return "idx 大於3";
  // else return "idx 小於等於3";
});
const people6 = computed(() => {
  return `我是${people2.name}, 我今年${people2.age}歲`;
});
const people7 = computed({
  get: () => {
    return `這個數字是${idx.value}`;
  },
  set: (val) => {
    idx.value = val;
  },
});

console.log("1 =>", people7.value);
people7.value = 5;
console.log("2 =>", people7.value);
console.log("idx.value =>", idx.value);

console.log(people2);

setTimeout(() => {
  people1.value.name = "Benson";
}, 1000); // (要執行得邏輯ㄝ, 毫秒) 計時器
setTimeout(() => {
  people2.name = "jacky";
  people2.age = 25;
  people2.address = "美國";
}, 2000); // (要執行得邏輯ㄝ, 毫秒) 計時器
setTimeout(() => {
  name.value = "andy";
  idx.value = 8;
}, 3000); // (要執行得邏輯ㄝ, 毫秒) 計時器

// 監控 值是否被改變
watch(
  people1,
  () => {
    console.log("ref({ name: 'mike' }) 被改變了");
  }
  // ,{ deep: true } // 深度監控
);
// 監控 值是否被改變
watch(idx, () => {
  console.log("ref(0) 被改變了");
});
// 監控 值是否被改變
watch(people2, () => {
  console.log("reactive 被改變了");
});
</script>
<template>
  <h1>
    <a
      href="https://www.youtube.com/watch?v=gJF5Cf2fz1A&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=2&ab_channel=MikeCheng"
      >定義資料 ref、reactive、computed 深度探討</a
    >
  </h1>
  <div>
    <h1 class="color">ref</h1>
    <h1>
      {{ people1.name }}
    </h1>
  </div>
  <div>
    <h1 class="color">reactive</h1>
    <h1>
      {{ people2.name }}
    </h1>
    <h1>
      {{ people2.age }}
    </h1>
    <h1>
      {{ people2.address }}
    </h1>
  </div>
  <div>
    <h1 class="color">computed</h1>
    <h1>
      {{ people3.name }}
    </h1>
    <h1>
      {{ people3.age }}
    </h1>
    <h1>
      {{ people4 }}
    </h1>
    <h1>
      {{ people5 }}
    </h1>
  </div>
  <div>
    <h1 class="color">範例</h1>
    <h1>
      {{ people6 }}
    </h1>
  </div>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped></style>
