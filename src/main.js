import Vue from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import VueRecord from '@codekraft-studio/vue-record'


Vue.use(VueRecord)
Vue.use(VueRouter)
Vue.use(vuetify)
Vue.config.productionTip = false

const rutas = new VueRouter({
  routes: rutas,
  mode: 'history'
})



new Vue({
  el: '#app',
  vuetify,
  router : rutas,
  components: {App},
  render: h => h(App)
})
