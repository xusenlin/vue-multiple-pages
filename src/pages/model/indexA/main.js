import App from './App.vue'
import "@/assets/js/common"
import {createApp} from 'vue'
import {initPage} from "@/utils/checkUrlParams.js"

initPage().then((pageName, pageParams) => {
  window.$pageName = pageName;
  window.$pageParams = pageParams;
  createApp(App).mount('#app')
}).catch(e => {
  console.log(e);
});
