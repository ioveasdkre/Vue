<!-- setup簡化寫法 -->
<!-- Vite + Vue 3. 才可使用-->
<script setup>
import {
  NButton,
  NSpace,
  NCollapse,
  NCollapseItem,
  NCarousel,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutFooter,
  NMenu,
  NAutoComplete,
} from "naive-ui";

import { h, ref, computed } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: "且听风吟",
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: "鼠",
        key: "rat",
      },
    ],
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",
    disabled: true,
    icon: renderIcon(BookIcon),
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            label: "羊男",
            key: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];
const inverted = ref(false);

const valueRef = ref("");

const options = computed(() => {
  return ["@gmail.com", "@yahoo.com.tw", "@qq.com"].map((suffix) => {
    const prefix = valueRef.value.split("@")[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    };
  });
});
</script>

<template>
  <h1>
    <a
      href="https://www.youtube.com/watch?v=_lrzJkEc7s4&list=PLbOfcOk7bN42Kzp1wQsoLuU0vPUmFBe-X&index=7&ab_channel=MikeCheng"
      >Vue3 中最好的 UI 框架之一 ~ Naive UI</a
    >
  </h1>
  <h3 class="color">按鈕</h3>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info" :disabled="true"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
  </n-space>
  <br />

  <div>如果可選參數沒有可以更改 class的話可以直接使用 .標籤名稱更改 class</div>
  <n-collapse>
    <n-collapse-item title="青铜" name="1">
      <h1 class="ball">可以</h1>
    </n-collapse-item>
    <n-collapse-item title="白银" name="2">
      <h1>很好</h1>
    </n-collapse-item>
    <n-collapse-item title="黄金" name="3">
      <h1>真棒</h1>
    </n-collapse-item>
  </n-collapse>
  <br />

  <h3 class="color">輪播</h3>
  <n-layout :content-style="{ width: '500px', height: '300' }">
    <!-- <div class="banner-box"> -->
    <n-carousel :space-between="20" draggable>
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      />
    </n-carousel>
    <!-- </div> -->
  </n-layout>
  <br />

  <h3 class="color">Layout</h3>
  <n-space vertical>
    <n-layout>
      <n-layout-header :inverted="inverted" bordered class="grey-bg-1">
        Header Header Header
        <div class="logo-box">
          <img id="logo" src="../assets/logo.svg" alt="" />
          開發者面板
        </div>
      </n-layout-header>
      <n-layout has-sider>
        <!-- calc(100vh - 像素) 類似 RWD-->
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="height: calc(100vh - 53px)"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout class="grey-bg-2" style="max-height: 320px" />
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered class="grey-bg-3">
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-space>
  <br />

  <h3 class="color">自動填充</h3>
  <n-auto-complete
    v-model:value="valueRef"
    :input-props="{
      autocomplete: 'disabled',
    }"
    :options="options"
    placeholder="Email 信箱"
  />
  <h1>
    參考資料：
    <br />
    <a href="https://www.naiveui.com/zh-CN/os-theme">Naïve UI官方</a>
    <a href="https://www.xicons.org/#/">xicons(Naïve UI官方建議的文字圖片)</a>
  </h1>
</template>

<!-- 避免父元件影響子元件 -->
<style scoped>
.ball {
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 50px;
}
h1 {
  color: #fff;
}
.n-collapse-item {
  background-color: red;
}

.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.banner-box {
  width: 500px;
  height: 300px;
}

#logo {
  width: 30px;
  height: 30px;
}

/* 版面置中 */
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grey-bg-1 {
  background-color: rgb(230, 230, 230);
}
.grey-bg-2 {
  background-color: rgb(124, 124, 124);
}
.grey-bg-3 {
  background-color: rgb(80, 80, 80);
}
</style>
