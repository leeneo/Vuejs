<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";

export default {
  components: { TabBarItem },
  name: "TabBar",
};
</script>

<style>
@import url("../../assets/css/tabbar.css");
</style>