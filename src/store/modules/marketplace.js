import DaroApi from "@/api/";
import { createActionHelpers } from 'vuex-loading'

const { startLoading, endLoading } = createActionHelpers({
  moduleName: 'loading'
});

const state = {
  shop: {},
  shopsByItem: {},
  allShops: {}
};

const getters = {
  shop: state => state.shop,
  shopsByItem: state => state.shopsByItem,
  allShops: state => state.allShops
};

const actions = {
  async getShop({ commit }, data) {
    commit("getShop", await DaroApi.getShop(data.id));
  },
  async getShopsByItem({ commit, dispatch }, data) {
    try {
      const response = await startLoading(dispatch, 'load items by shop', () => {
        return DaroApi.getShopsByItems(data.searchTerm)
      })

      commit("getShopsByItem", response);
    } catch (e) {
      endLoading(dispatch, 'load items by shop')
    }

    //commit("getShopsByItem", await DaroApi.getShopsByItems(data.searchTerm));

  },
  async allShops({ commit }) {
    commit("allShops", await DaroApi.allShops());
  }
};

const mutations = {
  getShop(state, shop) {
    state.shop = shop
  },
  getShopsByItem(state, shops) {
    state.shopsByItem = shops
  },
  allShops(state, shops) {
    state.allShops = shops
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
