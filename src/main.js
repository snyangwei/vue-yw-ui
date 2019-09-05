import Vue from 'vue'
import App from './App.vue'

import VueYwUI from './index.js'
Vue.use(VueYwUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
