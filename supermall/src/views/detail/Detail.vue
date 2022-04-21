<template lang="zh">
  <div class="detail">

    <detail-nav-bar class="detail-nav" @titleClick="navbarItemClick"></detail-nav-bar>

    <scroll class="wrapper" ref="scrollRef">
      <div class="content">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :baseInfo="goods"></detail-base-info>
        <detail-shop-info :shopInfo="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo"></detail-param-info>
        <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
        <goods-list :childsGoods="recommends"/>
      </div>
    </scroll>

  </div>
</template>
<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";

  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from 'components/common/scroll/Scroll';  
  import { getDetail, getRecommend, Goods, Shop, GoodsParam } from "network/detail";
  import { itemListenerMixin } from "common/mixins";

  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    data() {
      return {
        iid: "",
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        themeTops: [],
        recommends: [],
        currentIndex: 0
      };
    },
    mixins:[itemListenerMixin],
    created() {
      // 保存商品id
      this.iid = this.$route.params.iid;

      // 根据商品id获取商品详情相关数据
      getDetail(this.iid).then((res) => {
        let data = {};
        if (res && res.result) {
          data = res.result;
        }

        // 获取轮播图片
        if (data && data.itemInfo)
          this.topImages.push(...data.itemInfo.topImages);

        // 获取商品基本信息
        if (data && data.itemInfo) {
          this.goods = new Goods(
            data.itemInfo,
            data.columns,
            data.shopInfo.services
          );
        }

        // 获取店铺基本信息
        this.shop = new Shop(data.shopInfo);

        // 获取商品的详情数据
        this.detailInfo = data.detailInfo;

        // 获取商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        // 获取评论信息
        if (data.rate.cRate !== 0 && data.rate.list) {
          this.commentInfo = data.rate.list[0]
        }
      });

      // 获取推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      })
    },
    mounted(){
      this.$refs.scrollRef.refresh();
    },
    destroyed() {
      // 取消全局事件的监听
      this.$bus.$off("itemImageLoad", this.itemImgListener);
    },
    methods: {
      imageLoad() {
        // 其实这里的imageLoad 事件只会执行一次，因为之前在子组件（DetailGoodsInfo）内部已经做过防抖处理
        // 这里老师课件用了mixin的方式做了另一种防抖处理,mixin 防抖的方式适合会执行很多次imageLoad事件的场景
        this.refreshFn();
      },
      navbarItemClick(index){
        console.log(index);
      }
    }
  };
</script>
<style lang="css" scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .wrapper {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>