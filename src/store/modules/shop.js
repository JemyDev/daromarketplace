import DaroApi from "@/api/";

// initial state
const state = {
  shop: {}
};

// getters
const getters = {
  shop: state => state.shop
};

// actions
const actions = {
  getShop({ commit }, data) {
    DaroApi.getShop(shop => {
      commit("getShop", shop);
    }, data.id)
  }
};

// mutations
const mutations = {
  getShop(state, shop) {
    state.shop = shop;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
