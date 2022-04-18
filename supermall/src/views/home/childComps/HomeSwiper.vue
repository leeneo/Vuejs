<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="item in childBanners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
// import Swiper from "components/common/swiper/Swiper";
// import SwiperItem from "components/common/swiper/SwiperItem";
// 添加index.js 的写法
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isImageLoad: false,
    };
  },
  props: {
    childBanners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      if (!this.isImageLoad) {
        this.$emit("swiperImageLoad");
        this.imageLoad = true;
      }
    },
  },
};
</script>

<style scoped></style>
