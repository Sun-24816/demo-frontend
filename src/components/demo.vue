<template>
  <div class="demo">{{ name }}</div>
  <button @click="handleClick">按钮</button>
  <div v-if="isShow">车</div>
  <div v-else>购物车互斥的元素</div>
  {{ handlePrice(15) }}
  {{ handlePrice(price) }}
  <div v-for="(item, index) in arr" :key="index">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "demo",
  components: {},
  data() {
    return {
      name: "cy",
      isShow: false,
      price: 10000,
      arr: [1, 2, 3],
    };
  },
  methods: {
    handleClick: function () {
      this.name = "abccc";
      this.isShow = !this.isShow;
      this.price = 1;
      this.arr.pop();
    },
  },
  computed: {
    handlePrice(price) {
      const fn = function (price) {
        return "$" + price;
      };
      return fn;
    },
  },
};
</script>

<style scoped>
.demo {
  color: red;
}
</style>
