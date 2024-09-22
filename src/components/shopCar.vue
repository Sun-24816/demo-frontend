<template>
  <div class="main">
    <div v-if="!itemList.length">购物车为空！</div>
    <div v-else class="shopCar">
      <button @click="handleSort('price', true)">价格升序</button>
      <button @click="handleSort('price', false)">价格降序</button>
      <button @click="handleSort('sale', true)">销量升序</button>
      <button @click="handleSort('sale', false)">销量降序</button>
      <div class="item" v-for="(item, index) in itemList" :key="item.name">
        <div class="delete" @click="handleDeleteItem(index)">删除</div>
        <div class="bg-image"></div>
        <div class="right-info">
          <div class="title">{{ item.title }}</div>
          <div class="info">
            <div class="price">￥{{ handleNum(item.price) }}</div>
            <div class="sale-num">已售{{ handleNum(item.sale) }}</div>
          </div>
        </div>
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
      itemList: this.$store.state.itemList,
    };
  },
  methods: {
    handleDeleteItem: function (index) {
      this.$store.commit("deleteItem", index);
    },
    handleSort(type, isUpSort) {
      this.$store.commit("sortItemList", { type, isUpSort });
    },
  },
  computed: {
    handleNum() {
      return handleNum;
    },
  },
};
</script>

<style scoped>
.delete {
  text-align: center;
}
.shopCar {
  background-color: #fff;
}

.item {
  background-color: #ccc;
  display: flex;
  height: 100px;
  margin-bottom: 10px;
}
.bg-image {
  height: 100%;
  width: 100px;
  background-color: pink;
}
.right-info {
  margin-left: 10px;
  width: calc(100% - 100px);
}
.info {
  display: flex;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
}
</style>
