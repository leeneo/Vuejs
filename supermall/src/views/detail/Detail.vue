<template lang="zh">
  <div class="detail">

    <detail-nav-bar class="detail-nav" @titleClick="navbarItemClick" ref="navbarRef"></detail-nav-bar>

    <scroll class="wrapper" ref="scrollRef" :probe-type="3" @scroll="scrollPosition">
      <div class="content">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :baseInfo="goodsInfo"></detail-base-info>
        <detail-shop-info :shopInfo="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :paramInfo="paramInfo" ref="paramsRef"></detail-param-info>
        <detail-comment-info :commentInfo="commentInfo" ref="commentsRef"></detail-comment-info>
        <goods-list :childsGoods="recommends" ref="recommendsRef" />
      </div>
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @click.native="addToCart"></detail-bottom-bar>
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
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from 'components/common/scroll/Scroll';
  import { getDetail, getRecommend, Goods, Shop, GoodsParam, CartGoodsInfo } from "network/detail";
  import { itemListenerMixin, backTopMixin } from "common/mixins";
  import { debounce } from "common/utils";
  import { mapActions } from 'vuex'

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
      DetailBottomBar,
      GoodsList,
    },
    data() {
      return {
        iid: "",
        topImages: [],
        goodsInfo: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        themeTopYs: [],
        getThemeTopY: null,
        recommends: [],
        currentIndex: 0,
        paramsOffsetTop: { 'index': 1 },
        commentssOffsetTop: { 'index': 2 },
        recommendsOffsetTop: { 'index': 3 },
      };
    },
    mixins: [itemListenerMixin, backTopMixin],
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
          this.goodsInfo = new Goods(
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

      // created 里 数据已加载，但是 dom 未及时更新（不同的线程，异步的），在这里想拿更新后的dom
      // this.$nextTick(() => {
      //   console.log('111');
      // });

      // 因为是图片的imageLoad触发的，所以添加防抖
      this.getThemeTopY = debounce(() => {
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.paramsRef.$el.offsetTop);
        this.themeTopYs.push(this.$refs.commentsRef.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommendsRef.$el.offsetTop);

        // 实现滑动与主题联动所需
        this.paramsOffsetTop.value = this.$refs.paramsRef.$el.offsetTop;
        this.commentssOffsetTop.value = this.$refs.commentsRef.$el.offsetTop;
        this.recommendsOffsetTop.value = this.$refs.recommendsRef.$el.offsetTop;

        // 老师课件里，实现滑动与主题联动所需
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 100);
    },
    mounted() {
      this.$refs.scrollRef.refresh();

      // mouted 表示dom已渲染，但不代表所有的子组件都已挂载，尤其是图片资源等可能未及时渲染，在这里用nextTick拿组件更新后的dom
      // this.$nextTick(() => {
      //   console.log('111');
      // });
    },
    methods: {
      ...mapActions(['addCartAction']),
      imageLoad() {
        // 其实这里的imageLoad 事件只会执行一次，因为之前在子组件（DetailGoodsInfo）内部已经做过防抖处理
        // 这里老师课件用了mixin的方式做了另一种防抖处理,mixin 防抖的方式适合会执行很多次imageLoad事件的场景
        this.refreshFn();

        // 点击标题滚动到详情对应的主题区域
        // 1.在detail中监听标题的点击，获取对应的index
        // 2.scrollTo 到主题对应的Y值（即对应主题的offsetTop）
        // 获取主题的offsetTop 不正确的方式:
        // 1,created 不行，dom还没有渲染，获取不到$el
        // 2,mounted 也不对，数据没有及时加载
        // 3,updated 也不行，会加载多次，而且第一次回调里的值也是不正确的，新加载图片的高度并没有计算在内
        // 4,$nextTick 也不行，新加载图片的高度也没有计算在内，造成进入另一个商品详情页时，滚动位置是不正确的
        // 正确的方式：
        // 在子组件的图片加载完成后的imgLoad事件中，获取的高度才是正确的
        this.getThemeTopY();
      },
      navbarItemClick(index) {
        // 因为ref引用元素的父级上层有个高为44px navbar，所以造成子元素offsetTop 值不太精确，所以要少滚动44px才对
        this.$refs.scrollRef.scrollTo(0, -this.themeTopYs[index] + 44, 100);
      },

      // 实现滑动和主题的联动效果
      // 非实时切换，只在滑动结束时作判断，用的是better scroll 的scrollEnd事件
      // scrollPosition(endPosition) {
      //   // let scrollY=this.$refs.scrollRef.getScrollY();
      //   // endPosition 包含滚动结束时的Y值。
      //   let scrollY = -endPosition.y;
      //   if (scrollY >= this.recommendsOffsetTop.value)
      //     this.$refs.navbarRef.curIndex = this.recommendsOffsetTop.index;
      //   else if (scrollY >= this.commentssOffsetTop.value && scrollY <= this.recommendsOffsetTop.value)
      //     this.$refs.navbarRef.curIndex = this.commentssOffsetTop.index;
      //   else if (scrollY >= this.paramsOffsetTop.value && scrollY <= this.commentssOffsetTop.value)
      //     this.$refs.navbarRef.curIndex = this.paramsOffsetTop.index;
      //   else
      //     this.$refs.navbarRef.curIndex = 0;
      // },
      // 实时切换 用的是better scroll 的scroll事件
      // 我是用3个对象分别记录了param,comments,recommends 的索引和offsetTop 值，而不是像老师那样循环一个数组
      scrollPosition(position) {
        let scrollY = -position.y;
        if (scrollY >= this.recommendsOffsetTop.value)
          this.$refs.navbarRef.curIndex = this.recommendsOffsetTop.index;
        else if (scrollY >= this.commentssOffsetTop.value && scrollY <= this.recommendsOffsetTop.value)
          this.$refs.navbarRef.curIndex = this.commentssOffsetTop.index;
        else if (scrollY >= this.paramsOffsetTop.value && scrollY <= this.commentssOffsetTop.value)
          this.$refs.navbarRef.curIndex = this.paramsOffsetTop.index;
        else
          this.$refs.navbarRef.curIndex = 0;

        this.isShowBackTop = -position.y > 1000;
      },
      // 老师课件里的方法
      // scrollPosition(position) {
      //   let scrollY = -position.y;
      //   let length = this.themeTopYs.length;
      //   for (let i = 0; i < length - 1; i++) {
      //     if (this.currentIndex !== i) {
      //       if (scrollY >= this.themeTopYs[i] && scrollY < this.themeTopYs[i + 1]) {
      //         this.currentIndex = i;
      //         this.$refs.navbarRef.curIndex = this.currentIndex;
      //       }
      //     }
      //   } 
      // }

      addToCart() {
        let prod = new CartGoodsInfo({
          'title': this.goodsInfo.title,
          'desc': this.goodsInfo.desc,
          'realPrice': this.goodsInfo.realPrice,
          'image': this.topImages[0],
          'iid': this.iid
        });
        // 将商品添加到购物车
        // 调用mutaions
        // this.$store.commit('addCart', prod);
        // 调用actions
        // this.$store.dispatch('addCart', prod).then(res => {
        //   console.log(res);
        // });
        // 使用 mapActions
        this.addCartAction(prod).then(res => {
          this.$toast.show(res);
          console.log(res);
        });
      }


    },
    destroyed() {
      // 取消全局事件的监听
      this.$bus.$off("itemImageLoad", this.itemImgListener);
    },
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
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>