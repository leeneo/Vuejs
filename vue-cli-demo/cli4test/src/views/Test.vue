<template>
  <div class="test">
    <h2>这里是TEST界面</h2>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      message: "123",
    };
  },
  created() {
    Window.prototype.vue = this;
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    this.message='';
    console.log('message: ',this.message);
    console.log('beforeDestroyed');
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
