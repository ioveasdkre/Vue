<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
// 父組件傳遞資料給子組件
// const props = defineProps(["modelValue"]);
const props = defineProps({
    index: {
        type: Number,
        default: 0,
    },
    name: {
        type: String,
        default: "",
    },
    updateName: {
        type: Function,
        default: () => {},
    },
});

const emit = defineEmits(["change-name"]);
const changeName = () => {
    emit("change-name", "My changeName");
};
</script>

<template>
    <div>
        <h1>{{ props.name }}</h1>
        <button v-if="props.index === 0" @click="changeName">
            change name
        </button>
        <button
            v-if="props.index === 1"
            @click="props.updateName('My updateName')"
        >
            update name
        </button>
    </div>
</template>

<style></style>
