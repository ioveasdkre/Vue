import { defineStore } from "pinia";
import { ref } from "vue";

export const useAboutStore = defineStore("about", () => {
  const name = ref("Benson");

  const setName = (userName) => {
    name.value = userName;
  };

  return {
    name,
    setName,
  };
});
