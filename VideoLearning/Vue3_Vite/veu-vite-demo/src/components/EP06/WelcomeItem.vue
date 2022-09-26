<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/EP06/counter.js";

const store = useCounterStore();
const { fetchApiData } = store;
const { cardList } = storeToRefs(store); // state資
</script>

<template>
  <button @click="store.fetchApiData">click fetch</button>
  <pre>{{ cardList }}</pre>
</template>

<style></style>
