<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import Logo from "../assets/logo.svg";
import Add from "@/components/EP03/Add.vue";
import vImg from "@/components/EP03/vImg.vue";
import HelloWorId from "@/components/HelloWorld.vue";
import { ref } from "vue";
import { computed } from "@vue/reactivity";

const resIne = ref(0);
const isChange = ref(0);

console.log("組件 list");

const callBack = (res) => {
  resIne.value = res;
  console.log("callBack =>", res);
};

// computed 計算屬性
const Component = computed(() => {
  switch (isChange.value) {
    case 0:
      return vImg;
    case 1:
      return Add;
    case 2:
      return HelloWorId;
    default:
      return HelloWorId;
  }
});
const changeComponent = (idx) => {
  isChange.value = idx;
};
</script>
<template>
  <h1>
    <a
      href="https://www.youtube.com/watch?v=ureFPVghH30&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=3&ab_channel=MikeCheng"
      >components / props / emit</a
    >
  </h1>

  <h1 class="color">全域組件</h1>
  <HelloBenson />
  <div class="">
    <HelloWorId msg="You did it!" />
  </div>
  <br />

  <h1 class="color">defineProps 父組件傳遞資料給子組件</h1>
  <vImg alt="Vue logo" className="logo" :src="Logo" width="125" height="125" />
  <br />

  <h1 class="color">defineEmits 子組件傳遞資料給父組件</h1>
  <Add @AddInt="callBack" />
  {{ `我是 AddInt: ${resIne}` }}
  <br />

  <h1 class="color">component 標籤 :is 動態控制</h1>
  <component :is="Component" />
  <button @click="changeComponent(0)">components 1 {{ isChange }}</button>
  <button @click="changeComponent(1)">components 2 {{ isChange }}</button>
  <button @click="changeComponent(2)">components 3 {{ isChange }}</button>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped></style>
