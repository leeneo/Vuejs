<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="wrapper"
      ref="scrollRef"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="scrollPostion"
      @pullingUp="loadMore"
    >
      <div class="content">
        <home-swiper :childBanners="banners" />
        <recommend-view :childRecommends="recommends" />
        <feature-view></feature-view>
        <tab-control
          class="tab-control"
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
        ></tab-control>
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
  HomeGoodsData,
  // getMoreHomeData
} from "network/home";

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
        pops: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sells: { page: 0, list: [] },
      },
      currentType: "pops",
      isShowBackTop: false,
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
    this.getHomeGoods("pops");
    this.getHomeGoods("news");
    this.getHomeGoods("sells");
  },
  mounted(){
    this.$refs.scrollRef.refresh();
  },
  methods: {
    /**
     * 事件监听相关
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pops";
          break;
        case 1:
          this.currentType = "news";
          break;
        case 2:
          this.currentType = "sells";
          break;
      }
    },
    btClick() {
      // console.log('xxx');
      this.$refs.scrollRef.scrollTo(0, 0, 500);
    },
    scrollPostion(position) {
      // if ((-position.y) > 1000) this.isShowBackTop = true;
      // else this.isShowBackTop = false;
      // 一步搞定
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      // 发送网络请求，请求更多的数据
      // this.getHomeGoods(this.currentType);
      this.$refs.scrollRef.finishPullUp();
      this.$refs.scrollRef.refresh();
      console.log("加载更多已完成");
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
        // this.goods[type].list.push(...res.data.list);
        // this.goods[type].page += 1;

        // 由于接口已不可用，所以手动模拟数据
        // console.log(HomeGoodsData);
        switch (type) {
          case "pops":
            this.goods[type].list.push(...HomeGoodsData.pops);
            break;
          case "news":
            this.goods[type].list.push(...HomeGoodsData.news);
            break;
          case "sells":
            this.goods[type].list.push(...HomeGoodsData.sells);
            break;
        }

        this.errors.jiekou = res;
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
  z-index: 9;
}

/* .home-swiper {
  margin-top: 44px;
} */

.tab-control {
  position: sticky;
  top: 44px;
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
