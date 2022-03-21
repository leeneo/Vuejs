<template>
  <div id="app">
    <div id="tab_bar">
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="" />
        <img slot="item-icon-active" src="./assets/img/tabbar/home-a.png" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="" />
        <img slot="item-icon" src="./assets/img/tabbar/category-a.png" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="" />
        <img slot="item-icon" src="./assets/img/tabbar/cart-a.png" alt="" />
        <div slot="item-text">蓝子</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="" />
        <img slot="item-icon" src="./assets/img/tabbar/profile-a.png" alt="" />
        <div slot="item-text">我的</div>
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
