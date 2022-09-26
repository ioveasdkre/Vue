<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
// 父組件傳遞資料給子組件
// const props = defineProps("alt")
const props = defineProps({
    alt: {
        type: String,
        default: "IMG alt",
    },
    className: {
        type: String,
        default: "icon",
    },
    src: {
        type: String,
        default: "",
    },
    width: {
        type: String,
        default: "125",
    },
    height: {
        type: String,
        default: "125",
    },
    bool: {
        type: Boolean,
        default: false,
    },
    obj: {
        type: Object,
        default: () => ({}), // 非 fun
    },
    arr: {
        type: Array,
        default: [],
    },
    fun: {
        type: Function,
        default: () => {},
    },
});
</script>
<template>
    <!-- v-bind: 綁定 html屬性 縮寫 :-->
    <img
        :alt="props.alt"
        :class="props.className"
        :src="props.src"
        :width="props.width"
        :height="props.height"
    />
</template>

<style></style>
