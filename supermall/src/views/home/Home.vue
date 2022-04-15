<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :childBanners="banners" />
    <recommend-view :childRecommends="recommends" />
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :childsGoods="goods['pops'].list"></goods-list>



  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView';
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'


  import { requestHomeMultidata, requestHomeGoods } from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pops': { page: 0, list: [] },
          'news': { page: 0, list: [] },
          'sells': { page: 0, list: [] }
        }
      };
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pops');
      this.getHomeGoods('news');
      this.getHomeGoods('sells');
    },
    methods: {
      getHomeMultidata() {
        // 请求数据
        requestHomeMultidata().then((res) => {
          console.log('getHomeMultidata', res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        requestHomeGoods(type, page).then(res => {
          // 接口可用时调用方法
          // this.goods[type].list.push(...res.data.list);
          // this.goods[type].page += 1;

          // 由于接口已不可用，所以手动模拟数据          
          const goods = [
            {
              "title": "2022新春靓丽女装1",
              "link": "https://item.meilishuo.com/h5/detail/1m93p4u?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
              "show": { "h": 416, "w": 320, "img": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg" },
              "showLarge": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
              "price": "59.00",
              "orgPrice": "84.29",
              "cfav": "120"
            },
            {
              "title": "2022新春靓丽女装2",
              "link": "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
              "show": { "h": 416, "w": 320, "img": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg" },
              "showLarge": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
              "price": "49.00",
              "orgPrice": "94.99",
              "cfav": "100"
            },
            {
              "title": "2022新春靓丽女装3",
              "link": "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
              "show": { "h": 416, "w": 320, "img": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg" },
              "showLarge": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
              "price": "49.00",
              "orgPrice": "94.99",
              "cfav": "100"
            },
            {
              "title": "2022新春靓丽女装4",
              "link": "https://m.meilishuo.com/?acm=3.ms.0_4_1m93p4u.0.13386-69004.s026vr4qnwskg.t_-sd_117-lc_16",
              "show": { "h": 416, "w": 320, "img": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg" },
              "showLarge": "https://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_560x999.jpg",
              "price": "49.00",
              "orgPrice": "94.99",
              "cfav": "100"
            },
          ]
          this.goods[type].list.push(...goods);

          console.log(res);
        })
      }
    }
  };
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    z-index: 9;
  }

  .home-swiper {
    margin-top: 44px;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>