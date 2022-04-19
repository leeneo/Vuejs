<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" :class="{ isStayTop }"
      v-show="isStayTop"></tab-control>

    <scroll class="wrapper" ref="scrollRef" :probe-type="3" :pull-up-load="true" @scroll="scrollPostion"
      @pullingUp="loadMore">
      <div class="content">
        <home-swiper :childBanners="banners" @swiperImageLoad="homeSwiperImageLoad" />
        <recommend-view :childRecommends="recommends" />
        <feature-view></feature-view>
        <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>
        <goods-list :childsGoods="showGoods"></goods-list>
      </div>
    </scroll>

    <back-top @click.native="btClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {
    requestHomeMultidata,
    requestHomeGoods,
    // HomeGoodsData,
    // getMoreHomeData
  } from "network/home";

  import { debounce } from "common/utils";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] },
        },
        currentType: "pop",
        taboffSetTop: 0,
        isShowBackTop: false,
        isStayTop: false,
        saveY: 0,
        errors: {},
      };
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      },
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
    mounted() {
      // better-scroll bug 解决方案1
      // better-scroll 有个 scrollHeight 属性是计算了页面的可滚动高度的，但是有时候图片加载还未完成，这个高度已经计算出来了，
      // 所以需要在整个页面加载完成后 refresh下。让这个scrollHeigth刷新。加载多页数据后，也需要refresh，
      // 也可以通过监听图片加载完成后refresh 的方式，img.onload() || @load;
      // 课件里讲的是通过$bus事件总线的方式，但是其实没必要，在这里我是用的mounted函数里面refresh解决的better-scroll的这个bug
      this.$refs.scrollRef.refresh();

      // better-scroll bug 解决方案2
      // 调用防抖函数
      const refreshFn = debounce(this.$refs.scrollRef.refresh, 500);
      // 监听事件总线中的图片加载完成事件
      this.$bus.$on("itemImageLoad", () => {
        // console.log('itemImageLoad');
        refreshFn();
      });
    },
    activated() {
      this.$refs.scrollRef.scrollTo(0, this.saveY, 0);
      this.$refs.scrollRef.refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scrollRef.getScrollY();
      // console.log(this.saveY);
    },
    methods: {
      /**
       * 事件监听相关
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = "new";
            break;
          case 2:
            this.currentType = "sell";
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      btClick() {
        // console.log('xxx');
        this.$refs.scrollRef.scrollTo(0, 0, 500);
      },
      scrollPostion(position) {
        // 判断backtop 是否显示
        // if ((-position.y) > 1000) this.isShowBackTop = true;
        // else this.isShowBackTop = false;
        // 一步搞定
        this.isShowBackTop = -position.y > 1000;

        // 判断tab-control 是否吸顶(fixed 定位)
        this.isStayTop = -position.y > this.taboffSetTop;
      },
      loadMore() {
        // 发送网络请求，请求更多的数据
        this.getHomeGoods(this.currentType);
        console.log(this.currentType);
        this.$refs.scrollRef.finishPullUp();
        this.$refs.scrollRef.refresh();
        console.log("加载更多已完成");
      },

      // 图片加载完成的事件监听，用于解决better-scroll 的显示bug
      // 建立防抖函数
      // timer 建立之后，延迟时间内如果没有后续调用过来就会执行主体函数，
      // 如果有后续调用会立即清除该次timer，然后建立新的timer,至终只有一次timer会被执行，这就是防抖
      // debounce(func, delay) {
      //   let timer = null;
      //   return function (...args) {
      //     if (timer) clearTimeout(timer);
      //     timer = setTimeout(() => {
      //       func.apply(this, args);
      //     }, delay);
      //   };
      // },

      homeSwiperImageLoad() {
        // tab-control 的吸顶效果实现
        // 所有的组件都有一个属性$el:用于获取组件中的元素
        this.taboffSetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      /**
       * 网络请求相关
       */
      getHomeMultidata() {
        // 请求数据
        requestHomeMultidata().then((res) => {
          // console.log('getHomeMultidata', res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        requestHomeGoods(type, page).then((res) => {
          // 接口可用时调用方法
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          // 由于接口已不可用，所以手动模拟数据
          // console.log(HomeGoodsData);
          // switch (type) {
          //   case "pop":
          //     this.goods[type].list.push(...HomeGoodsData.pop);
          //     break;
          //   case "new":
          //     this.goods[type].list.push(...HomeGoodsData.new);
          //     break;
          //   case "sell":
          //     this.goods[type].list.push(...HomeGoodsData.sell);
          //     break;
          // }
        });
      },
    },
  };
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  /* 吸顶效果 */
  .isStayTop {
    position: relative;
    z-index: 6;
  }

  /* 方案一 */
  /* .wrapper {
  height: calc(100% - 50px);
  overflow: hidden;
} */
  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>