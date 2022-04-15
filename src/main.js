import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './plugins/router.js'


import './assets/css/reset.css'
Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
