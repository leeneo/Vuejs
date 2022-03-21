<template>
  <div id="app">
    <router-view></router-view>
    <div id="tab_bar">
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/home-a.png" alt="" />
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/category-a.png" alt="" />
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/cart-a.png" alt="" />
        <span slot="item-text">蓝子</span>
      </tab-bar-item>
      <tab-bar-item  path='/profile'>
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/profile-a.png" alt="" />
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </div>
  </div>
</template>

<script>
// import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBarItem,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
