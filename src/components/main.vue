<template>
  <div class="main">
    <div
      class="item"
      v-for="item in shopList"
      :key="item.title"
      @click="handleItemClick(item)"
    >
      <div class="bg-image"></div>
      <div class="title">{{ item.title }}</div>
      <div class="info">
        <div class="price">￥{{ handleNum(item.price) }}</div>
        <div class="sale-num">已售{{ handleNum(item.sale) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { handleNum } from "../utils";
export default {
  name: "demo",
  components: {},
  data() {
    return {
      shopList: [
        { price: 9999, title: "袜子", sale: 45000 },
        { price: 33000, title: "特步", sale: 256600 },
        { price: 45000, title: "衬衫", sale: 4240 },
        { price: 66000, title: "充电器", sale: 34560 },
        { price: 56700, title: "手机", sale: 34760 },
      ],
    };
  },
  methods: {
    handleItemClick: function (item) {
      this.$store.commit("setItemList", item);
      console.log(this.$store.state.itemList);
    },
  },
  computed: {
    handleNum() {
      return handleNum;
    },
    // handleNum() {
    //   const fn = function (price) {
    //     return price >= 10000 ? price / 10000 + "万" : price;
    //   };
    //   return fn;
    // },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff;
  height: calc(100% - 44px);
  overflow: scroll;
}
.item {
  width: 48%;
  background-color: #ccc;
  margin-bottom: 10px;
}
.bg-image {
  width: 100%;
  height: 200px;
  background-color: pink;
}
.title {
  margin-top: 10px;
}
.info {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
