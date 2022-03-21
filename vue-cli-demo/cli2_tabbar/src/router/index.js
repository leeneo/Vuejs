import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const TabBar = () => import('../components/tabbar/TabBar.vue');
const Home = () => import('../views/home/Home.vue');
const Cart = () => import('../views/cart/Cart.vue');
const Category = () => import('../views/category/Category.vue');
const Profile = () => import('../views/profile/Profile.vue');

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/category',
    name: 'Category',
    component: Category
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
]


export default new Router({
  mode: 'history',
  routes,
})
