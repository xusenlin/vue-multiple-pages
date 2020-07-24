module.exports = `import Vue from "vue";
import App from "./Index.vue";
import "@/pages/common.js";
import { validateInitPage } from "@/utils/validateInitPage.js";

validateInitPage()//这里还可以链式then做一些权限拦截
  .then((pageName, pageParams) => {
    Vue.prototype.$pageName = pageName;
    Vue.prototype.$pageParams = pageParams;
    new Vue({
      render: h => h(App)
    }).$mount("#app");
  })
  .catch(e => {
    console.log(e);
  });
`;
