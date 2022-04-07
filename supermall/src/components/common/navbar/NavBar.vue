<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
  box-shadow: 0px 0px 1px 0px rgb(93 149 149);
}
.left,
.right {
  width: 60px;
  /* background-color: aquamarine; */
}
.center {
  flex: 1;
  /* background-color: salmon; */
}
</style>
