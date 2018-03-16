import DaroApi from "@/api/";

// initial state
const state = {
  shop: {},
  shopsByItem: {}
};

// getters
const getters = {
  shop: state => state.shop,
  shopsByItem: state => state.shopsByItem
};

// actions
const actions = {
  async getShop({ commit }, data) {
    commit("getShop", await DaroApi.getShop(data.id));
  },
  async getShopsByItem({ commit }, data) {
    commit("getShopsByItem", await DaroApi.getShopsByItems(data.searchTerm));
  }
};

// mutations
const mutations = {
  getShop(state, shop) {
    state.shop = shop;
  },
  getShopsByItem(state, shops) {
    state.shopsByItem = shops;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
