<template>
  <div id="app">
    <div id="nav">
      <!--active-class 用来做选中样式的切换-->
      <!-- <router-link to="/home" tag="a" replace active-class="active">Home</router-link> |
      <router-link to="/about" replace active-class="active">About</router-link> -->
      <router-link to="/home" tag="a" replace>Home</router-link> |
      <router-link to="/about" tag="a" replace>About</router-link> |
      <router-link :to="'/user/' + id" tag="a" replace>User</router-link> |
      <router-link
        :to="{
          path: '/profile',
          query: { name: 'leeneo', age: '28', id: '111' },
        }"
        tag="a"
        replace
        >Profile</router-link
      >
      |
      <router-link to="/test" tag="a" replace>Test</router-link>

      <br /><br />
      <button @click="homeClick">首页</button> |
      <button @click="aboutClick">关于</button> |
      <button @click="userClick">用户</button> |
      <button @click="profileClick">档案</button>
    </div>

    <!-- <router-view /> -->

    <keep-alive exclude="User,Profile">
      <router-view />
    </keep-alive>
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

#nav a.active {
  color: #42b983;
}

ul {
  list-style: none;
}
</style>

<script>
export default {
  name: "app",
  data() {
    return {
      id: "000",
    };
  },
  methods: {
    // 通过代码的方式修改路由
    homeClick() {
      // this.$router.push("/home");
      this.$router.replace("/home");
      // this.$router.replace("/");
    },
    aboutClick() {
      // this.$router.push("about");
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.replace("/user/" + this.id + 1);
    },
    profileClick() {
      this.$router.replace({
        path: "/profile",
        query: {
          name: "leeneo",
          age: 28,
        },
      });
    },
  },
};
</script>
