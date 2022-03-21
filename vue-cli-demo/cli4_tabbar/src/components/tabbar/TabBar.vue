<!-- 此案例中 tabbar 并未用到，这个组件实际相当于一个壳子 <div class='tab_bar'> -->
<template>
  <div id="tab_bar">
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/home-a.png"
        alt=""
      />
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepskyblue">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category-a.png"
        alt=""
      />
      <span slot="item-text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="darkseagreen">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/cart-a.png"
        alt=""
      />
      <span slot="item-text">蓝子</span>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile-a.png"
        alt=""
      />
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: "TabBar",
  components: { TabBarItem },
};
</script>

<style>
#tab_bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  background-color: #f6f6f6;
  box-shadow: 0px 0px 1px 0px rgb(93 149 149);
}
</style>
