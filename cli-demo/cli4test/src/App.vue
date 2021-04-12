<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/" tag="a" replace active-class="aactive">Home</router-link> |
      <router-link to="/about" replace active-class="aactive">About</router-link> -->
      <router-link to="/" tag="a" replace>Home</router-link> |
      <router-link to="/about" replace>About</router-link> |
      <router-link :to="'/user/' + id" replace>User</router-link> |
      <router-link
        :to="{
          path: '/profile',
          query: { name: 'leeneo', age: '28', id: '111' },
        }"
        replace
        >Profile</router-link
      >
      | <router-link to="/test" replace>Test</router-link> |

      <br /><br />
      <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button>
      <button @click="userClick">用户</button>
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

#nav a.router-link-exact-active {
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
      this.$router.push("/home");
      // this.$router.replace("/");
      console.log("homeClick");
    },
    aboutClick() {
      // this.$router.push("about");
      this.$router.replace("/about");
      console.log("aboutClick");
    },
    userClick() {
      this.$router.replace("/user/" + this.id + 1);
      console.log("userClick");
    },
    profileClick() {
      this.$router.replace({
        path: "/profile",
        query: {
          name: "leeneo",
          age: 28,
        },
      });
      console.log("profileClick");
    },
  },
};
</script>