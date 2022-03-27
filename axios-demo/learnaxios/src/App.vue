<template>
  <div id="app">
    <h1>这是APP组件</h1>
    {{ result }}
    <hr />
    <hello-world></hello-world>
  </div>
</template>

<script>
// import axios from "axios";
import { request } from "./network/request";

import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      result: "",
    };
  },
  components: {
    HelloWorld,
  },
  created() {
    // 拦截器
    // axios.interceptors.request.use(
    //   (config) => {
    //     console.log("全局拦截器-组件内： ", config);
    //     return config;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    // axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
    //   console.log("appvue--直接调用axios实例的请求，不推荐：", res);
    //   this.result = res;
    // });
    request({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
      console.log("appvue--通过request 函数封装的请求：", res);
      this.result = res;
    });
  },
};
</script>

<style></style>
