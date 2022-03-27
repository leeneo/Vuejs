<template>
  <div id="helloworld">
    <h1>这是 helloworld 组件</h1>
    {{ result }}
  </div>
</template>

<script>
// import axios from "axios";
import { request } from "../network/request";

export default {
  name: "HelloWorld",
  data() {
    return {
      result: "",
    };
  },
  components: {},
  created() {
    // axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
    //   console.log("helloworld vue--直接调用axios实例的请求，不推荐：", res);
    //   this.result = res;
    // });
    request({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
      console.log("helloworld vue--通过request 函数封装的请求：", res);
      this.result = res;
    });
  },
};
</script>
