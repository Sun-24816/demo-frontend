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
    sortItemList(state, payload) {
      const { type, isUpSort } = payload;
      let sortRule = (a, b) => b[type] - a[type];
      if (isUpSort) {
        sortRule = (a, b) => a[type] - b[type];
      }
      state.itemList.sort(sortRule);
    },
  },
  getters: {},
});

export default store;
