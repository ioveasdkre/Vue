<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
// 子組件傳遞資料給父組件
//const emit = defineEmits(["AddInt"]);
const emit = defineEmits({
    AddInt: (payload) => {
        console.log("我在 defineEmits裡面:", payload);
        return payload === "mike" ? 1 : 99;
    },
});

const handleAddClick = () => {
    emit("AddInt", "我被父調用了");
};
</script>
<template>
    <div>
        <button @click="handleAddClick">click</button>
    </div>
</template>

<style></style>
