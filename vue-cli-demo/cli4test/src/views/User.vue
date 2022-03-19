<template>
  <div class="user">
    <h2>这里是 {{ userId }} 的用户界面</h2>
    <h2>这里是 {{ $route.params.id }} 的用户界面</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
  created() {
    // console.log("user created");
  },
  destroyed() {
    // console.log("user destroyed");
  },
};
</script>
