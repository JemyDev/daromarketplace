import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import item from './modules/item'
import shop from './modules/shop'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    item,
    shop
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
