import Vue from 'vue'
import 'es6-promise/auto'
import App from './App'
import router from './router'

import store from './store'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
