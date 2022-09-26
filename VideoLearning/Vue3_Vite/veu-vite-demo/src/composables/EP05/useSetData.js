// readonly 唯讀
import { ref, readonly } from "vue";

export function useSetData(val) {
    const data = ref(val);

    const setData = () => {
        data.value++;
    };

    return {
        data,
        setData,
    };
}
