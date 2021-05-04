import Vue from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import VueRecord from '@codekraft-studio/vue-record'
import {rutas} from './rutas.js'

Vue.use(VueRecord)
Vue.use(VueRouter)
Vue.use(vuetify)
Vue.config.productionTip = false

const enrutador = new VueRouter({
  routes:rutas,
  props:true,
  mode: 'history'
})



new Vue({
  el: '#app',
  vuetify,
  router : enrutador,
  components: {App},
  render: h => h(App)
})
