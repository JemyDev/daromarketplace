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
  async getShop({ commit, dispatch }, data) {
    try {
      const response = await startLoading(dispatch, 'load shop by shops', () => {
        return DaroApi.getShop(data.id)
      })

      commit("getShop", response);
    } catch (e) {
      endLoading(dispatch, 'load shop by shops')
    }
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

  },
  async allShops({ commit, dispatch }) {
    try {
      const response = await startLoading(dispatch, 'load all by shops', () => {
        return DaroApi.allShops()
      })
      commit("allShops", response);
    } catch (e) {
      endLoading(dispatch, 'load all by shops')
    }
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
