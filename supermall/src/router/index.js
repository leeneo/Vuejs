import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home.vue");
const Cart = () => import("../views/cart/Cart.vue");
const Category = () => import("../views/category/Category.vue");
const Profile = () => import("../views/profile/Profile.vue");
const Detail = () => import("../views/detail/Detail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  // {
  //   path: "/detail", //路由传参 params 方式，取参：$route.params.uid，形成的链接：/router/123
  //   name: "Detail",
  //   component: Detail,
  // },
  {
    path: "/detail/:iid", //路由传参 params 方式，取参：$route.params.uid，形成的链接：/router/123
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
