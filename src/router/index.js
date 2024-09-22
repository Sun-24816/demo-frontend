import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/main.vue";
import shopCar from "../components/shopCar.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main",
    component: Main,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/shopCar",
    name: "shopCar",
    component: shopCar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (from.path != "/main" && to.path === "/shopCar") {
    next({ path: "/main" });
  }
  next();
});
export default router;
