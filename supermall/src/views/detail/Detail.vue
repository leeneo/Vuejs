<template lang="zh">
  <div class="detail">

    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="wrapper" ref="scrollRef">
      <div class="content">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :baseInfo="goods"></detail-base-info>
        <detail-shop-info :shopInfo="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo"></detail-param-info>
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

  import Scroll from 'components/common/scroll/Scroll';

  import { getDetail, Goods, Shop, GoodsParam } from "network/detail";

  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo
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
        goodsList: [],
        themeTops: [],
        currentIndex: 0
      };
    },
    created() {
      // 保存商品id
      this.iid = this.$route.params.iid;

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

        // 获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 获取商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      });
    },
    methods: {
      imageLoad() {
        this.$refs.scrollRef.refresh();
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

  /* 方案一 */
  .wrapper {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>