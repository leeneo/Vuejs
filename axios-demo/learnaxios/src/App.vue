<template>
  <div id="app">
    this is app
    <hr />
    <hello-world></hello-world>
  </div>
</template>

<script>
import axios from "axios";
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
    axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
      console.log("appvue 内的请求：", res);
      this.result = res;
    });
  },
};
</script>

<style></style>
