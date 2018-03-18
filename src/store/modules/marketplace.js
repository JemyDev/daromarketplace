import DaroApi from "@/api/";

// initial state
const state = {
  shop: {},
  shopsByItem: {},
  allShops: {}
};

// getters
const getters = {
  shop: state => state.shop,
  shopsByItem: state => state.shopsByItem,
  allShops: state => state.allShops
};

// actions
const actions = {
  async getShop({ commit }, data) {
    commit("getShop", await DaroApi.getShop(data.id));
  },
  async getShopsByItem({ commit }, data) {
    commit("getShopsByItem", await DaroApi.getShopsByItems(data.searchTerm));
  },
  async allShops({ commit }) {
    commit("allShops");
  }
};

// mutations
const mutations = {
  getShop(state, shop) {
    state.shop = shop
  },
  getShopsByItem(state, shops) {
    state.shopsByItem = shops
  },
  allShops(state, shops) {
    state.shops = shops
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
