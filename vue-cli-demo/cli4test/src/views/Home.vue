<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <router-link to="/home/news" tag="button">新闻</router-link> |
    <router-link to="/home/views" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data(){
    return {
      path:'/home/news'
    }
  },
  components: {
    HelloWorld,
  },
  created() {
    console.log('home created');
  },  
  // 只有当使用keep-alive时，此函数才有效
  activated() {
    console.log('activated',this.path);
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave',this.$route.path);
    this.path = this.$route.path;
    next();
  },
  destroyed() {
    console.log('home destroyed');
  },
};
</script>
