import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import 'Assets/images/icons'
import 'Assets/css/base.less'

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: (h) => h(App)
}).$mount('#app')
