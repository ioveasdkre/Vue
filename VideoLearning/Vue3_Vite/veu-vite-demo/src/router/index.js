import { createRouter, createWebHashHistory } from "vue-router";
// import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import aboutHome from "../views/about/AboutHome.vue";

// 創建一個可以被 Vue 使用的 Router(路由) 實體
const router = createRouter({
  // history: createWebHashHistory(), // 它在内部传递的实际 URL 之前使用了一个哈希字符（#）
  history: createWebHistory(import.meta.env.BASE_URL), // createWebHistory 可以創建一個 HTML5 的 Web History 切換頁面 ( 需要有http的協議提供服務 )
  // 路由設定
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: AboutView,
      component: () => import("../views/AboutView.vue"), // 動態載入(進到頁面時才會載入內容)
      children: [
        {
          path: "aaa",
          component: () => import("../views/about/aaa.vue"), // 動態載入(進到頁面時才會載入內容)
        },
        {
          path: "bbb",
          component: () => import("../views/about/bbb.vue"), // 動態載入(進到頁面時才會載入內容)
        },
        {
          path: "ccc",
          component: () => import("../views/about/ccc.vue"), // 動態載入(進到頁面時才會載入內容)
        },
      ],
    },
    {
      path: "/address",
      name: "address",
      component: () => import("../views/AddressView.vue"), // 動態載入(進到頁面時才會載入內容)
    },
    // 任意參數 可使用正規表達式設定
    // {
    //   path: "/:id",
    //   name: "userdata",
    //   component: () => import("../Views/[id].vue"),
    // },
    // 將匹配所有內容並將其放在 `$route.params.pathMatch` 下
    // 404頁面建議放在最後面，避免影響動態頁面
    {
      path: "/:domain(.*)*",
      name: "domain",
      component: () => import("../views/404.vue"), // 動態載入(進到頁面時才會載入內容)
    },
    // 將匹配以 `/user-` 開頭的任何內容並將其放在 `$route.params.afterUser` 下
    //{ path: "/user-:afterUser(.*)", component: UserGeneric },
  ],
});

export default router; // 輸出
