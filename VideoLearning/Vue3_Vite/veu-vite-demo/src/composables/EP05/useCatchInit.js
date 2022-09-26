import axios from "axios";
import { ref } from "vue";

export function useCatchInit() {
  const data2 = ref([]);
  const errorMessage = ref("");

  const catchInit = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/");
      data2.value = res.data;
    } catch (e) {
      errorMessage.value = "API 發生錯誤";
    }
  };

  return { data2, errorMessage, catchInit };
}
