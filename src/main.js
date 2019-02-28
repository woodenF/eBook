import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// 引入字体图标文件
import './assets/styles/icon.css'
import './assets/styles/global.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
