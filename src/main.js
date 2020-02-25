import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import './assets/scss/app.scss'

import Header from '@/components/Header'

import ActionButton from '@/components/ActionButton'
import MiniBag from '@/components/MiniBag'
import Pagination from '@/components/Pagination'
import Product from '@/components/Product'

Vue.component('Header', Header)
Vue.component('ActionButton', ActionButton)
Vue.component('MiniBag', MiniBag)
Vue.component('Pagination', Pagination)
Vue.component('Product', Product)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
