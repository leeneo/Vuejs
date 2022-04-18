<template>
  <div class="scroll" ref="wrapperRef">
    <slot></slot>
  </div>
</template>
<script>
import BetterScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // const wrapper = document.querySelector(".wrapper");
    const wrapper = this.$refs.wrapperRef;

    // 创建scroll对象
    this.scroll = new BetterScroll(wrapper, {
      // 0-1：不打印滚动位置，2：打印位置，但不打印惯性滑动的滚动位置，3：打印手指离开后的惯性滚动位置
      probeType: this.probeType,
      // 设置非 button 上的元素是否可以发生点击事件
      click: true,
      pullUpLoad: true,
      // pullUpLoad: {
      //     // 可以配置顶部下拉的距离（threshold）决定刷新时机
      //   threshold: -20,
      // },
    });

    // 监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3)
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });

    // 监听上拉事件
    if (this.pullUpLoad)
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
  },
  methods: {
    //   time=300 ES6语法，参数可以设置默认值
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      // 等数据请求完成，并且新的数据展示完成后，刷新pullup使下次pullup可以生效
      setTimeout(() => {
        this.scroll && this.scroll.finishPullUp(); // 该函数一调用就可以立即触发下一次，所以可以搞个延时setTimeout
      }, 1000);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>
<style scoped></style>
