import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    itemList: [],
  },
  mutations: {
    setItemList(state, item) {
      state.itemList.unshift(item);
    },
    deleteItem(state, index) {
      state.itemList.splice(index, 1);
    },
  },
  getters: {},
});

export default store;
