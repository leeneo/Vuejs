<template>
  <div class="category">
    <h2>分类</h2>
    <div class="wrapper" ref="wrapperRef">
      <div content>
        <ul>
          <li>
            列表1
            <div @click="divClick">sssss</div>
          </li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
          <li>列表5</li>
          <li>列表6</li>
          <li>列表7</li>
          <li>列表8</li>
          <li>列表9</li>
          <li>列表10</li>
          <li>列表11</li>
          <li>列表12</li>
          <li>列表13</li>
          <li>列表14</li>
          <li>列表15</li>
          <li>列表16</li>
          <li>列表17</li>
          <li>列表18</li>
          <li>列表19</li>
          <li>列表20</li>
          <li>列表21</li>
          <li>列表22</li>
          <li>列表23</li>
          <li>列表24</li>
          <li>列表25</li>
          <li>列表26</li>
          <li>列表27</li>
          <li>列表28</li>
          <li>列表29</li>
          <li>列表30</li>
          <li>列表31</li>
          <li>列表32</li>
          <li>列表33</li>
          <li>列表34</li>
          <li>列表35</li>
          <li>列表36</li>
          <li>列表37</li>
          <li>列表38</li>
          <li>列表39</li>
          <li>列表40</li>
          <li>列表41</li>
          <li>列表42</li>
          <li>列表43</li>
          <li>列表44</li>
          <li>列表45</li>
          <li>列表46</li>
          <li>列表47</li>
          <li>列表48</li>
          <li>列表49</li>
          <li>列表50</li>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
          <li>列表5</li>
          <li>列表6</li>
          <li>列表7</li>
          <li>列表8</li>
          <li>列表9</li>
          <li>列表10</li>
          <li>列表11</li>
          <li>列表12</li>
          <li>列表13</li>
          <li>列表14</li>
          <li>列表15</li>
          <li>列表16</li>
          <li>列表17</li>
          <li>列表18</li>
          <li>列表19</li>
          <li>列表20</li>
          <li>列表21</li>
          <li>列表22</li>
          <li>列表23</li>
          <li>列表24</li>
          <li>列表25</li>
          <li>列表26</li>
          <li>列表27</li>
          <li>列表28</li>
          <li>列表29</li>
          <li>列表30</li>
          <li>列表31</li>
          <li>列表32</li>
          <li>列表33</li>
          <li>列表34</li>
          <li>列表35</li>
          <li>列表36</li>
          <li>列表37</li>
          <li>列表38</li>
          <li>列表39</li>
          <li>列表40</li>
          <li>列表41</li>
          <li>列表42</li>
          <li>列表43</li>
          <li>列表44</li>
          <li>列表45</li>
          <li>列表46</li>
          <li>列表47</li>
          <li>列表48</li>
          <li>列表49</li>
          <li>列表50</li>
        </ul>
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
  background-color: aquamarine;
  overflow: hidden;
}
</style>
