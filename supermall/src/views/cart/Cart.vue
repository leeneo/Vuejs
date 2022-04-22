<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <scroll class="wrapper">
      <div class="content">
        <cart-list></cart-list>
      </div>
    </scroll>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from './childComps/CartList'
  import Scroll from "components/common/scroll/Scroll";

  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      Scroll
    },
    computed: {
      // cartLength() {
      //   return this.$store.getters.cartLength;
      // }
      // getters 两种语法
      // ...mapGetters(['cartLength']),
      ...mapGetters({
        length: 'cartLength',
      })
    }
  };
</script>

<style scoped>
  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>