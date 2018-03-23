import DaroApi from "@/api/"

const state = {
  shop: {
    isLoading: false,
    data: null
  },
  allShops: {
    isLoading: false,
    list: []
  }
}

const getters = {
  shop: state => state.shop,
  allShops: state => state.allShops
}

const actions = {
  async getShop({ commit, dispatch }, id) {
    try {
      commit("setLoading", {type: 'shop'})

      const response = await DaroApi.getShopById(id)

      commit("setShop", response)
      commit("unsetLoading", {type: 'shop'})
    } catch (e) {
      commit("unsetLoading", {type: 'shop'})
    }
  },
  async getShopsByItem({ commit, dispatch }, query) {
    try {
      commit("setLoading", {type: 'allShops'})

      const response = await DaroApi.getShopsByItem(query)

      commit("setAllShops", response)
      commit("unsetLoading", {type: 'allShops'})
    } catch (e) {
      console.warn(e)
      commit("unsetLoading", {type: 'allShops'})
    }
  },
  async getAllShops({ commit, dispatch }) {
    try {
      commit("setLoading", {type: 'allShops'})
      const response = await DaroApi.getAllShops()

      commit("setAllShops", response)
      commit("unsetLoading", {type: 'allShops'})
    } catch (e) {
      commit("unsetLoading", {type: 'allShops'})
    }
  }
}

const mutations = {
  setShop(state, shop) {
    state.shop.data = shop
  },
  setAllShops(state, shops) {
    state.allShops.list = shops
  },
  setLoading(state, params) {
    state[params.type].isLoading  = true
  },
  unsetLoading(state, params) {
    state[params.type].isLoading  = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}