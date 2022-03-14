<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home-a.png"
          alt=""
        />
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor='silver'>
        <img
          slot="item-icon"
          src="~assets/img/tabbar/category.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category-a.png"
          alt=""
        />
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor='purple'>
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/cart-a.png"
          alt=""
        />
        <span slot="item-text">篮子</span>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='red'>
        <img
          slot="item-icon"
          src="./assets/img/tabbar/profile.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/profile-a.png"
          alt=""
        />
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
// 这里的 '@' & 'components' 是webpack config 中配置的路径别名
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  components: { TabBar, TabBarItem },
  name: "App",
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
