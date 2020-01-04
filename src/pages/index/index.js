import "normalize.css";
import Vue from "vue";
import App from "./Index.vue";
import { validateInitUrlParams } from "@/utils/validateInitParams.js";

if (validateInitUrlParams()) {
  //初始化完成 window.PAGE_PARAMS 和 window.PAGE_PATH 可用
  new Vue({
    render: h => h(App)
  }).$mount("#app");
}
