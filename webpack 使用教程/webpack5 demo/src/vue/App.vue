<template>
  <div>
    <h2>this is from App.vue</h2>
    <h2 class="title">{{ message }}</h2>
    <cpn/>
  </div>
</template>

<script>

import Cpn from './Cpn';

export default {
  name: "App",
  data() {
    return {
      message: "webpack5 with vue2.6",
    };
  },
  components: {
    Cpn,
  },
};
</script>

<style scoped>
.title {
  color: rgb(242, 255, 127);
}
</style>