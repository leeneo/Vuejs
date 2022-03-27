<template>
  <div id="helloworld">this is helloworld component</div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      result: "",
    };
  },
  components: {},
  created() {
    axios({ url: "http://123.207.32.32:8000/home/multidata" }).then((res) => {
      console.log("helloworld vue 内的请求：", res);
      this.result = res;
    });
  },
};
</script>
