module.exports = JsTemplate = `
import Vue from 'vue'
import App from './Index.vue'
import '@/pages/common.js'

new Vue({
  render: h => h(App)
}).$mount('#app');
`;
