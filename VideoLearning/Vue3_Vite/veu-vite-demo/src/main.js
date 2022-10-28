import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
// import App from "./App.vue"; // router路由(專案初始化)
// import HelloBenson from "@/components/EP03/HelloBenson.vue";
// import vImg from "@/components/EP03/vImg.vue";
import App from "@/example/EP08.vue"; // 請更改範例檔名

import "@/assets/example.css";
// import "@/assets/EP07/example.css";

const app = createApp(App); // 創建一個 Vue的實例

// app.component("HelloBenson", HelloBenson); // 元件全域註冊
// app.component("vImg", vImg); // 元件全域註冊

app.use(createPinia()); // 註冊 Pinia服務
app.use(router); // 註冊 Router服務

app.mount("#app"); // 掛載 Vue的容器
