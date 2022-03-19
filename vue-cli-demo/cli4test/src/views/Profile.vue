<template>
  <div class="profile">
    <h2>这里是简介界面</h2>
    <div>
      <h4>{{ $route.query }}</h4>
      <ul>
        <li>{{ $route.query.name }}</li>
        <li>{{ $route.query.age }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("Profile created");
    // console.log(this.$route.query) 
  },
  destroyed() {
    // console.log("Profile destroyed");
  },
};
</script>
