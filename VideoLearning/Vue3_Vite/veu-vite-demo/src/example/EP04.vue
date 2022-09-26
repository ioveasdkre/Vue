<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import { ref, watch } from "vue";
import InputBar from "../components/EP04/InputBar.vue";
import TestBox from "../components/EP04/TestBox.vue";

const name = ref("Benson");
const num = ref(1);

const setName = (str) => {
    name.value = str;
};

watch(num, (newVal) => {
    console.log(newVal);
});
</script>

<template>
    <h1>
        <a
            href="https://www.youtube.com/watch?v=firPRbhoX7o&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=4&ab_channel=MikeCheng"
            >v-model 資料的雙向綁定 / 自訂義組件的資料綁定 / One-Way Data Flow
            單向資料流</a
        >
    </h1>

    <h1 class="color">v-model 雙向綁定</h1>
    <div>
        <!-- v-model 雙向綁定 -->
        <input type="text" v-model="name" />
        {{ name }}

        <!-- v-on 綁定事件 縮寫@ -->
        <button @click="setName('jacky')">click</button>
    </div>
    <br />

    <h1 class="color">修飾符</h1>
    <h3 class="color">
        .屬性 例如 v-model.number 檢查屬性為 numner 電話號碼不能使用此屬性
        因0開頭會被忽略 盡量使用 string
    </h3>
    <div>
        <!-- v-model 雙向綁定 -->
        <input type="text" v-model.number="num" />
        {{ num }}
    </div>
    <h3 class="color">
        .lazy chage事件 當內容被更改以後才會更新 移開聚焦時觸發
    </h3>
    <div>
        <!-- v-model 雙向綁定 -->
        <input type="text" v-model.lazy="name" />
        {{ name }}
    </div>
    <h3 class="color">trim 自動過濾用戶輸入的首尾空白字符</h3>
    <div>
        <!-- v-model 雙向綁定 -->
        <input type="text" v-model.trim="name" />
        {{ name }}
    </div>
    <br />

    <h1 class="color">區域元件</h1>
    <div>
        <InputBar v-model="name" />
        {{ name }}
    </div>
    <h3 class="color">子元件修改父元件</h3>
    <div>
        <b>
            點擊 TestBox.vue裡面的 Menu後發送一個 emit給上層的
            component透過上層接收到的 setName事件往上更改 name，然後同步資料
        </b>
        <TestBox :name="name" :index="0" @change-name="setName" />
        <b>
            直接傳遞 Function給 props拿來使用，去觸發父層的
            Function，這樣一來可以達到相同的效果
        </b>
        <TestBox :name="name" :index="1" :update-name="setName" />
    </div>

    <h1>
        參考資料：
        <br />
        <a href="https://vuejs.org/api/built-in-directives.html#v-model"
            >v-model</a
        >
        <br />
        <a
            href="https://vuejs.org/guide/components/events.html#usage-with-v-model"
            >Usage with v-model</a
        >
        <br />
        <a href="https://ithelp.ithome.com.tw/articles/10273655"
            >One-Way Data Flow 單向資料流</a
        >
    </h1>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped></style>
