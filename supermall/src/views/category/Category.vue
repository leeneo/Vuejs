<template>
  <div class="category">
    <h2>分类</h2>
    <div class="wrapper" ref="wrapperRef">
      <div content>
        该功能尚未添加！
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
      scrollPostion: null,
    };
  },
  methods: {
    divClick() {
      console.log("点击发生了");
    },
  },
  mounted() {
    // const wrapper = document.querySelector(".wrapper");
    const wrapper = this.$refs.wrapperRef;
    this.scroll = new BetterScroll(wrapper, {
      //   0-1：不打印滚动位置，2：打印位置，但不打印惯性滑动的滚动位置，3：打印手指离开后的惯性滚动位置
      probeType: 3,
      click: true,
      pullUpLoad: true,
      // pullUpLoad: {
      //     // 可以配置顶部下拉的距离（threshold）决定刷新时机
      //   threshold: -20,
      // },
    });
    this.scroll.on("scroll", (position) => {
      this.scrollPostion = position;
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      // 发送网络请求，请求更多的数据
      // await fetchData

      // 等数据请求完成，并且新的数据展示完成后，刷新pullup使下次pullup可以生效
      setTimeout(() => {
        this.scroll.finishPullUp(); // 该函数一调用就可以立即触发下一次，所以可以搞个延时setTimeout
      }, 1000);
    });
  },
};
</script>

<style scoped>
.wrapper {
  /* height: calc(100%-98px); */
  height: 400px;
  /* background-color: aquamarine; */
  overflow: hidden;
}
</style>
