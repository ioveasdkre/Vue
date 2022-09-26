<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
// 父組件傳遞資料給子組件
const props = defineProps(["modelValue"]);

// 子組件傳遞資料給父組件
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <div>
        <input
            type="text"
            :value="props.modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<style></style>
