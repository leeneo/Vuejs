<template lang="zh">
  <div class="detail">

    <detail-nav-bar></detail-nav-bar>

    <detail-swiper :top-images="topImages"></detail-swiper>


    <div>{{iid}}</div>

  </div>
</template>
<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import { getDetail } from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
    },
    data() {
      return {
        iid: "",
        topImages: [],
        itemDetail: {}
      };
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        console.log("iid", res);
        this.topImages.push(...res.result.itemInfo.topImages);
      });
    },
  };
</script>
<style lang="css"></style>