import Vue from 'vue'
import { store } from '@/store'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
