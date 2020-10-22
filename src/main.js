import Vue from 'vue'
import App from './App.vue'
import Grid from 'gridjs-vue'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.use(Grid)
