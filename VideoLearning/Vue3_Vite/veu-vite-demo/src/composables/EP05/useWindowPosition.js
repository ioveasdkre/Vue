import { ref, onMounted, onUnmounted } from "vue";

export function useWindowPosition() {
    const pageX = ref(0);
    const pageY = ref(0);

    const movePosition = (e) => {
        pageX.value = e.pageX;
        pageY.value = e.pageY;
    };

    // 實體與掛載完成, 時執行, 註冊回調
    onMounted(() => {
        window.addEventListener("mousemove", movePosition); // 監聽 滑鼠移動事件
    });

    // 實體物件被銷毀完畢, 註冊一個在組件被卸載後調用的回調
    onUnmounted(() => {
        window.removeEventListener("mousemove", movePosition); // 摧毀 滑鼠移動事件
    });

    return {
        pageX,
        pageY,
    };
}
