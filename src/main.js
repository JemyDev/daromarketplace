// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import Vuex from "vuex"
import VueResource from "vue-resource"
import VueClipboard from "vue-clipboard2"
import VueLoading from 'vuex-loading'
import { sync } from 'vuex-router-sync'
import App from "./App"
import router from "./router"
import store from "./store"
import * as filters from "./helpers/filters"
import * as constants from "./helpers/constants"

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueResource)
Vue.use(VueClipboard)
Vue.use(Vuex)
Vue.use(VueLoading)

sync(store, router)

Vue.http.options.root = constants.rootApi

Vue.prototype.$appName = constants.appName

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  vueLoading: new VueLoading({useVuex: true}),
  filters: filters
})
