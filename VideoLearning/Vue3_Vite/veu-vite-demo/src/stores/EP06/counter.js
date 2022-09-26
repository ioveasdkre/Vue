import { defineStore, storeToRefs } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { useAboutStore } from "./about.js";

// Options API
// export const useCounterStore = defineStore({
//   id: "counter",
//   // 狀態
//   state: () => ({
//     counter: 0,
//   }),
//   // state狀態的計算值
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   // 方法. 可計算 state狀態值和 getters不同的地方在於可以使用非同步
//   actions: {
//     addCount() {
//       this.counter++;
//     },
//   },
// });

// Composition API
export const useCounterStore = defineStore("counter", () => {
  const aboutStore = useAboutStore();
  const { name } = storeToRefs(aboutStore); // 解構資料並重新包裝成 pinia

  const counter = ref(0);
  const cardList = ref([]);

  // computed 每次調用時暫存起來 原始資料改變時才會更新 預設 get 可加入 set屬性
  const doubleCount = computed(() => {
    return counter.value * 2 + name.value;
  });

  const addCount = () => {
    counter.value++;
  };

  const fetchApiData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      cardList.value = res.data;
    } catch (e) {
      //errorMessage.value = "API 發生錯誤";
    }
  };

  return { counter, cardList, doubleCount, addCount, fetchApiData };
});
