export default {
  // 資料(函式)
  data() {
    return {
      text: "我是外部 元件4",
    };
  },
  // html模板語法
  template: `<div class="alert alert-primary" role="alert">
    {{ text }}
  </div>`,
};
