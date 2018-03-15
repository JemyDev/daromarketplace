import DaroApi from "@/api/";

// initial state
const state = {
  all: []
};

// getters
const getters = {
  allItems: state => state.all,
};

// actions
const actions = {
  getAllItems({ commit }, data) {
    DaroApi.getItems(Items => {
      commit("setItems", Items);
    }, data.searchTerm);
  }
};

// mutations
const mutations = {
  setItems(state, Items) {
    state.all = Items;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};