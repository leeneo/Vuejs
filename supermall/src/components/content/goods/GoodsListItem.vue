<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img :src="showImage" alt="" @load="imageLoad" /> -->
    <!-- 图片懒加载 -->
    <img v-lazy="showImage" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ childItem.title }}</p>
      <span class="price">{{ childItem.price }}</span><span class="collect">{{ childItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "GoodsListItem",
    props: {
      childItem: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    computed: {
      showImage() {
        if (this.childItem.show && this.childItem.show.img)
          return this.childItem.show.img
        else
          return this.childItem.image;
      }
    },
    methods: {
      imageLoad() {
        // console.log('imageLoad');
        //   向事件总线，传递一个img load 事件
        this.$bus.$emit("itemImageLoad");
      },
      itemClick() {
        // console.log('goes to 详情页');

        // 路由传参 params 方式，取参：$route.params.uid，形成的链接：/router/123
        this.$router.push("/detail/" + this.childItem.iid);
        // console.log('sss',this.childItem.iid);
        // 路由传参 query方式  取参：$route.query.id，形成的链接：/router?id=0001
        // this.$router.push({
        //   path:'/detail',
        //   query:{
        //     id:this.childItem.iid
        //   }
        // });
      },
    },
  };
</script>
<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>