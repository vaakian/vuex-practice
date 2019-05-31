// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入了本地文件App.vue
import App from './App'
import router from './router'

import store from './store'
// import axios from 'axios'
// import Vueaxios from 'vue-axios'

function MainHello() {
  console.log('MainHello');
}
// Vue.prototype.$axios = axios // 原型链绑定
Vue.config.productionTip = false
Vue.config.devtools = false
// 挂载到Vue对象原型链
Vue.prototype.MainHello = MainHello
// 挂载到全局
window.MainHello = MainHello
// /* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
