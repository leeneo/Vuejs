<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/" tag="a" replace active-class="aactive">Home</router-link> |
      <router-link to="/about" replace active-class="aactive">About</router-link> -->
      <router-link to="/" tag="a" replace >Home</router-link> |
      <router-link to="/about" replace >About</router-link>

      <!-- <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button> -->
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// export default {
//   name: "app",
//   methods: {
//     // 通过代码的方式修改路由
//     homeClick() {
//       // this.$router.push("/");
//       this.$router.replace("/");
//       console.log("homeClick");
//     },
//     aboutClick() {
//       // this.$router.push("about");
//       this.$router.replace("about");
//       console.log("aboutClick");
//     },
//   },
// };
</script>