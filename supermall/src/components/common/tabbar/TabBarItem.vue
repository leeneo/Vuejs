<template>
  <div class="tab_bar_item" @click="itemClick">
    <!-- <h2>{{ isActive }}</h2> -->
    <div v-if="!isActive">
      <slot name="item-icon">icon</slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text">text</slot>
    </div>
  </div>
</template>
<script>

export default {
  name: "TabBarItem",
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
  computed: {
    isActive() {
      return !this.$route.path.indexOf(this.path);
    },
  },
  props: {
    path: {
      type: String,
    },
  },
  components: {},
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>

.tab_bar_item {
  text-align: center;
  flex-grow: 1;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
.tab_bar_item .active {
  color: orange;
}
</style>
