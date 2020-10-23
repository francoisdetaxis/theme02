import Raphael from 'raphael/raphael'
global.Raphael = Raphael
import Vue from 'vue'
import App from './App.vue'
import Grid from 'gridjs-vue'
import { BTable } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.component('b-table', BTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
Vue.use(Grid)
