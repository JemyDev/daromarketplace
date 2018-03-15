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
  getShop({ commit }, data) {
    DaroApi.getShop(shop => {
      commit("getShop", shop);
    }, data.id);
  },
  getShopsByItem({ commit }, data) {
    DaroApi.getShopsByItems(shops => {
      commit("getShopsByItem", shops);
    }, data.searchTerm);
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
