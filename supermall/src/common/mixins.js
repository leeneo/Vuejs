import { debounce } from "common/utils";

// 该部分代码，在Home,Detail组件 mounted 中都用到了，所以抽离出来到一个混入函数中
export const itemListenerMixin = {
  data() {
      return {
        itemImgListener: null,
        refreshFn:null
      }
  },
  mounted() {
    // better-scroll bug 解决方案2
    // 调用防抖函数
    this.refreshFn = debounce(this.$refs.scrollRef.refresh, 500);

    // 监听事件总线中的图片加载完成事件，对监听事件进行保存，这样在离开home视图时，可以取消这个监听事件
    this.itemImgListener = () => {
      this.refreshFn();
    };
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    // console.log('混入函数: Home,Detail 共用代码部分');
  },
};
