import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import routes from './routes'
import api from './api'
import Mock from './mock'
import store from './vuex/store'

import '../static/style.css'

import * as types from './vuex/types'

Vue.config.productionTip = false

Vue.use(Mint);
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.$api = api

Mock.bootstrap();

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  store.commit(types.CUR_PAGE, to.name);
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')