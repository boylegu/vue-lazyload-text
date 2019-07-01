import Vue from 'vue'
import App from './App.vue'
import router from './routers'

import VueLazyloadDemo from 'vue-lazyload-text-dev'

Vue.use(VueLazyloadDemo)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
