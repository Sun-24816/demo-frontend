<template>
  <div class="navBar">
    <div
      :class="['item', status === item.name ? 'active' : '']"
      @click="handleItemClick(item.name)"
      v-for="item in navBarArr"
      :key="item.name"
    >
      {{ item.text }}
    </div>
  </div>
</template>
<script>
import router from "../router";
export default {
  name: "navBar",
  components: {},
  data() {
    return {
      navBarArr: [
        { name: "main", text: "首页" },
        { name: "shopCar", text: "购物车" },
      ],
      status: "main",
    };
  },
  methods: {
    handleItemClick: function (name) {
      this.status = name;
      router.push("/" + name);
    },
  },
  computed: {
    handlePrice(price) {},
  },
};
</script>

<style scoped>
.active {
  color: pink;
  background-color: black;
}
.navBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #ccc;
  display: flex;
}
.item {
  width: 50%;
  text-align: center;
  line-height: 44px;
}
</style>
