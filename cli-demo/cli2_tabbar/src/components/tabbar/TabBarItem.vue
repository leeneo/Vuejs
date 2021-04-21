<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon">icon</slot>
    </div>
    <div v-else>
      <slot name="item-icon-active">active</slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text">text</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "#ff9900",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // console.log(this.path, this.isActive);
      this.$router.push(this.path);
    },
  },
};
</script>
