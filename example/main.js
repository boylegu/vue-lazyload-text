import Vue from 'vue'
import App from './App.vue'

import VueLazyloadDemo from 'vue-lazyload-text-dev'

Vue.use(VueLazyloadDemo)


new Vue({
  el: '#app',
  render: h => h(App)
})
