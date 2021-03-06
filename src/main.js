import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import i18n from './lang/index'
// 引入字体图标文件
import './assets/styles/icon.css'
import './assets/styles/global.scss'
// import './mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
